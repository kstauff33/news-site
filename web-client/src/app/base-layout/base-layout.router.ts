import { Routes } from '@angular/router';
import { PostsOverviewComponent } from './posts-overview/posts-overview.component';
import { LayoutType } from '../services/layout-type.enum';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'news', component: PostsOverviewComponent, data: { layoutType: LayoutType.News } },
  { path: 'opinion', component: PostsOverviewComponent, data: { layoutType: LayoutType.Opinion } },
  { path: 'features', component: PostsOverviewComponent, data: { layoutType: LayoutType.Features } },
  { path: 'listen', component: PostsOverviewComponent, data: { layoutType: LayoutType.Listen } },
  { path: 'watch', component: PostsOverviewComponent, data: { layoutType: LayoutType.Watch } },
  { path: 'analytics', component: PostsOverviewComponent, data: { layoutType: LayoutType.Analytics } },

  { path: 'news/:id', component: PostDetailsComponent, data: { layoutType: LayoutType.News } },
  { path: 'opinion/:id', component: PostDetailsComponent, data: { layoutType: LayoutType.Opinion } },
  { path: 'features/:id', component: PostDetailsComponent, data: { layoutType: LayoutType.Features } },
  { path: 'listen/:id', component: PostDetailsComponent, data: { layoutType: LayoutType.Listen } },
  { path: 'watch/:id', component: PostDetailsComponent, data: { layoutType: LayoutType.Watch } },
  { path: 'analytics/:id', component: PostDetailsComponent, data: { layoutType: LayoutType.Analytics } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseLayoutRoutingModule { }

