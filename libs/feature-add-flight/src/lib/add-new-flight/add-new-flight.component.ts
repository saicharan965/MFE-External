import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { ButtonConfig } from 'ariqt-button';
import { PopUpConfig } from 'ariqt-popup';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ariqt-external-add-new-flight',
  templateUrl: './add-new-flight.component.html',
  styleUrls: ['./add-new-flight.component.scss'],
})
export class AddNewFlightComponent implements OnInit {
  addFlightsData!: FormGroup;
  showPopup: boolean = false;
  message: string | undefined;
  popUpTitle: string | undefined;
  buttonConfig: ButtonConfig | undefined;
  popUpConfig: PopUpConfig | undefined;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addFlightsData = this.fb.group({
      id: new FormControl('', [Validators.required]),
      from: new FormControl('', [Validators.required]),
      to: new FormControl('', [Validators.required]),
      departure: new FormControl('', [Validators.required]),
    });

    this.SetButtonConfig();
    this.SetPopUPConfig();
    this.CheckIfFormValid();
  }

  SetButtonConfig() {
    this.buttonConfig = new ButtonConfig({
      label: 'Submit',
      click: () => this.Submit(),
      isDisabled: true,
      type: 'btn btn-primary',
    });
  }

  SetPopUPConfig() {
    this.popUpConfig = new PopUpConfig({
      popUpTitle: 'AddFlights !',
      message:
        'Are you sure to add this flight' +
        ' ' +
        this.addFlightsData.get('id')?.value,
      showNoButton: true,
      showYesButton: true,
      close: () => this.ClosePopUp(),
      confirmClick: () => this.Submit(),
    });
  }

  CheckIfFormValid() {
    this.addFlightsData.valueChanges.subscribe(() => {
      if (this.addFlightsData.valid) {
        this.buttonConfig = new ButtonConfig({
          label: 'Submit',
          click: () => this.OpenPopUP(),
          isDisabled: false,
          type: 'btn btn-danger',
        });
        this.SetPopUPConfig();
      } else {
        this.buttonConfig = new ButtonConfig({
          label: 'Submit',
          click: () => this.OpenPopUP(),
          isDisabled: true,
          type: 'btn btn-danger',
        });
      }
    });
  }

  OpenPopUP() {
    debugger;
    this.showPopup = true;
  }

  ClosePopUp() {
    this.showPopup = false;
  }

  Submit() {
    this.showPopup = false;
    // window.alert("Flight has been added successfully")
    this._router
      .navigate(['/viewFlights'], {
        relativeTo: this._activatedRoute,
      })
      .then((data) => {
        console.log('Route exists, redirection is done');
      })
      .catch((e) => {
        console.log(
          'Route not found, redirection stopped with no error raised'
        );
      });

    this.addFlightsData.reset();
  }
}
