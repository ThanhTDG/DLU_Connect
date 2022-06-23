import { Injectable } from '@angular/core';

import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private readonly modelUrl = '/assets/models/resnet50js/model.json';

  constructor() {}

  async train() {
    const model = await this.loadModel();
  }

  async predict(pixels: any) {
    const model = await this.loadModel();
    const tensor = tf.browser.fromPixels(pixels);
    return model.predict(tensor);
  }

  async loadModel() {
    return await tf.loadLayersModel(this.modelUrl);
  }
}
