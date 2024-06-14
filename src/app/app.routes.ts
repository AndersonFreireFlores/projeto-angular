import { Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PostsComponent } from './components/pages/posts-page/posts-page.component';
import { CommentsComponent } from './components/pages/comments-page/comments-page.component';
import { TodosComponent } from './components/pages/todos-page/todos-page.component';
import { UsersComponent } from './components/pages/users-page/users-page.component';

export const routes: Routes = [
    {path: "home", component: HomePageComponent},
    {path: "posts", component: PostsComponent},
    {path: "comments", component: CommentsComponent},
    {path: "todos", component: TodosComponent},
    {path: "users", component: UsersComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];
