import {
  Component, EventEmitter,
  Input, OnInit, Output
} from '@angular/core';

import {Persona} from '../../models/persona.interface';
import {FormControlInterface} from '../../../models/form-control.interface';
import {FormControlSelectInterface} from '../../../models/form-control-select.interface';
import {FormFieldsWithTypes} from '../../../models/form-fields-with-types.interface';
import {StaticDataService} from '../../../services/static-data.service';

@Component({
  selector: 'app-form-personale',
  styleUrls: ['./form-personale.component.scss'],
  template: `
    <!-- FORM -->
    <form #form="ngForm"
          [ngStyle]="style"
          *ngFor="let persona of persone"
          (ngSubmit)="onSubmit({formData: form.value, isFormValid: form.valid})">

      <!-- INPUTS -->
      <div [ngClass]="{'form-group--first': f}"
           [class]="formGroupClass"
           *ngFor="let formControl of formControls; let f = first">

        <input [ngModel]="persona[formControl.control.name]"
               [class]="formControl.control.class"
               [type]="formControl.control.type"
               [id]="formControl.control.id + persona.id"
               [name]="formControl.control.name"
               [placeholder]="formControl.control.placeholder | titlecase"/>

        <label [for]="formControl.control.id + persona.id">{{ formControl.label.text | titlecase }}</label>
      </div>

      <!-- SELECTS -->
      <div [ngClass]="{'form-group--last': l}"
           [class]="formGroupClass"
           *ngFor="let control of formSelects.selects; let l = last">

        <select [ngModel]="persona[control.select.name]"
                [class]="control.select.class"
                [id]="control.select.id + persona.id"
                [name]="control.select.name">
          <option [value]="null">{{ formSelects.defaultOption | titlecase }}</option>
          <option *ngFor="let sesso of (staticDataService.sesso$ | async) as staticSesso" [ngValue]="sesso.id">
            {{ sesso.descrizione | titlecase }}
          </option>
        </select>

        <label [for]="control.select.id + persona.id">{{ control.labelText | titlecase }}</label>
      </div>

      <!-- SUBMIT BUTTON -->
      <button
        [class]="submitButton.class"
        [type]="submitButton.type">{{ submitButton.text }}</button>
    </form>
  `
})
export class FormPersonaleComponent implements OnInit {
  @Input() persone: Persona[];
  @Output() savePersona: EventEmitter<Persona> = new EventEmitter();

  formControls: FormControlInterface[] = [];
  formFields: FormFieldsWithTypes[];
  formSelects: FormControlSelectInterface;
  formGroupClass = 'form-group';

  submitButton = {
    type: 'submit',
    class: 'btn btn-primary',
    text: 'Salva'
  };

  style = {
    'margin-top': '8.5rem'
  };

  constructor(public staticDataService: StaticDataService) {
  }

  ngOnInit(): void {
    this.formFields = [{
      controlType: 'number',
      fieldName: 'id'
    }, {
      controlType: 'text',
      fieldName: 'nome'
    }, {
      controlType: 'text',
      fieldName: 'cognome'
    }, {
      controlType: 'number',
      fieldName: 'eta'
    }];

    for (const f of this.formFields) {
      this.formControls.push({
        control: {
          id: `personale__${f.fieldName}`,
          name: f.fieldName,
          type: f.controlType,
          class: 'form-control',
          placeholder: f.fieldName,
        },
        label: {
          text: f.fieldName
        }
      });
    }

    this.formSelects = {
      defaultOption: 'scegli...',
      selects: [{
        select: {
          id: 'personale__sesso',
          name: 'sesso',
          class: 'form-control',
        },
        labelText: 'sesso'
      }]
    };
  }

  onSubmit({formData, isFormValid}) {
    if (isFormValid) {
      this.savePersona.emit(formData);
    }
  }
}
