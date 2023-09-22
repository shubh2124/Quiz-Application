import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentQuizApplicationComponentComponent } from './parent-quiz-application-component/parent-quiz-application-component.component';

const routes: Routes = [
  {path:'',redirectTo:'/quiz',pathMatch:'full'},
  {path:'quiz',component:ParentQuizApplicationComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
