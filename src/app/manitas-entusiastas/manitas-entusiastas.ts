import { Location } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-manitas-entusiastas',
  imports: [RouterModule,TranslateModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  standalone:true,
  templateUrl: './manitas-entusiastas.html',
  styleUrls: ['./manitas-entusiastas.scss']
})
export class ManitasEntusiastas {
constructor(private location: Location) {}

volver(): void {
  this.location.back();
 }
}
