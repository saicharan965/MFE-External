import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewFlightComponent } from '@ariqt-external/feature-add-flight'


const ROUTES: Routes = [
  { path:'', component: AddNewFlightComponent}
]

@NgModule({
  declarations: [],
  imports: [

    CommonModule, RouterModule.forChild(ROUTES),
    FormsModule,ReactiveFormsModule
  ]
})
export class NewFlightModule { }
