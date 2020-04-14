import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts.component';
import {StoreModule} from '@ngrx/store';
import * as fromPosts from './store/posts/posts.reducer';
import {EffectsModule} from '@ngrx/effects';
import {PostsEffects} from './store/posts/posts.effects';
import {NzSpinModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
    NzSpinModule
  ]
})
export class PostsModule {
}
