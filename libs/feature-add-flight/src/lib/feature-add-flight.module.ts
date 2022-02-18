import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewFlightComponent } from './add-new-flight/add-new-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiButtonModule } from 'ariqt-button'
import { UiPopupModule } from 'ariqt-popup'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, UiButtonModule, UiPopupModule],
  declarations: [
    AddNewFlightComponent
  ],
  exports: [
    AddNewFlightComponent
  ],
})
export class FeatureAddFlightModule {}
