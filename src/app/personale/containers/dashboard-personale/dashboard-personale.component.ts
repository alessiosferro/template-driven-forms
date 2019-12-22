import {Component, OnInit} from '@angular/core';
import {Persona} from '../../models/persona.interface';
import {PersonaleService} from '../../personale.service';
import {first} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-dashboard-personale',
  styleUrls: ['./dashboard-personale.component.scss'],
  template: `
    <div class="dashboard">
      <h1 class="dashboard-heading">{{ title }}</h1>
      <app-form-personale (savePersona)="onUpdatePersona($event)" [persone]="persone"></app-form-personale>
    </div>
  `
})
export class DashboardPersonaleComponent implements OnInit {
  title = 'Dashboard Personale';
  persone: Persona[];

  constructor(
    private personaleService: PersonaleService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.personaleService.getPersonale().pipe(
      first()
    ).subscribe(persone => this.persone = persone);
  }

  onUpdatePersona(event: Persona) {
    this.personaleService.updatePersonale(event).subscribe(() => {
      this.persone = this.persone.map(persona => {
        if (event.id === persona.id) {
          return {
            ...persona,
            ...event
          };
        }

        return persona;
      });

      this.toastr.success('Persona aggiornata!');
    });
  }
}
