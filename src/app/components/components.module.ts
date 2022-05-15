/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';
import {SearchBarComponent} from './home/search-bar/search-bar.component';

import {ShortViewObjectComponent} from './home/short-view-object/short-view-object.component';
import {ToCreatePostComponent} from './to-create-post/to-create-post.component';
import {ShortPostComponent} from './short-post/short-post.component';
import {FullPostComponent} from './full-post/full-post.component';

@NgModule({
    imports: [
        CommonModule,
      ],
    declarations: [NavigationBarComponent,SearchBarComponent, ShortViewObjectComponent, ToCreatePostComponent, ShortPostComponent, FullPostComponent],
    exports: [NavigationBarComponent,SearchBarComponent, ShortViewObjectComponent, ToCreatePostComponent, ShortPostComponent, FullPostComponent]
})
export class ComponentsModule{}
