import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormListComponent } from './form-list/form-list.component';

const routes: Routes = [
  {path:'' , redirectTo:'list' ,pathMatch:'full'},
  { path: 'list', component: FormListComponent},
  { path: 'formbuilder', component: FormBuilderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
