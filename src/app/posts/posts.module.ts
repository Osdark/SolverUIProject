import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {NzSpinModule} from "ng-zorro-antd";

import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts.component';
import * as fromPosts from './store/posts/posts.reducer';
import {PostsEffects} from './store/posts/posts.effects';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature(fromPosts.postsFeatureKey, fromPosts.reducer),
    EffectsModule.forFeature([PostsEffects]),
    NzSpinModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule {
}
