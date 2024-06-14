import { HomePageComponent } from './app/components/pages/home-page/home-page.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './app/components/pages/posts-page/posts-page.component';
import { CommentsComponent } from './app/components/pages/comments-page/comments-page.component';
import { TodosComponent } from './app/components/pages/todos-page/todos-page.component';
import { UsersComponent } from './app/components/pages/users-page/users-page.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './app/components/header/header.component';

const routes: Routes= [
  {path: "home", component: HomePageComponent},
  {path: "posts", component: PostsComponent},
  {path: "comments", component: CommentsComponent},
  {path: "todos", component: TodosComponent},
  {path: "users", component: UsersComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [

    PostsComponent,
    CommentsComponent,
    TodosComponent,
    UsersComponent,
  ],
  providers: [],
  bootstrap: [],

  exports: [RouterModule],

})

export class AppRouterModule {}



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


