import { Injectable } from '@angular/core';

import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private readonly modelUrl = '/assets/models/resnet50js/model.json';

  constructor() {}

  async train(base64s: string[]) {
    const model = await this.loadModel();
    const tensors = await Promise.all(
      base64s.map(async (value) => {
        const img = await this.loadImage(value);
        const tensor = tf.browser.fromPixels(img);
        return tensor;
        // return tf.expandDims(tensor);
      })
    );
    const labels = tf.tensor(0, [tensors.length, 1]);

    model.compile({
      optimizer: 'adam',
      loss: 'sparseCategoricalCrossentropy',
      metrics: ['accuracy'],
    });
    return await model.fit(tf.stack(tensors, 0),labels, {
      epochs: 5,
    });
  }

  async predict(base64: string) {
    const model = await this.loadModel();
    const img = await this.loadImage(base64);
    const tensor = tf.browser.fromPixels(img);
    const expand = tf.expandDims(tensor);
    const predict = model.predict(expand) as tf.Tensor<tf.Rank>;
    const data = await predict.argMax(1).data();
    return +data.toString();
  }

  async loadModel() {
    return (await tf.loadLayersModel(this.modelUrl)) as tf.Sequential;
  }

  private loadImage(base64: string): Promise<HTMLImageElement> {
    return new Promise((resolve, _reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = base64;
      img.width = 256;
      img.height = 256;
      img.onload = () => {
        resolve(img);
      };
      return img;
    });
  }
}
