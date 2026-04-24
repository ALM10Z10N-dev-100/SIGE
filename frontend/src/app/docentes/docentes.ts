import { Location } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-docentes',
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule,TranslateModule],
  templateUrl: './docentes.html',
  styleUrls: ['./docentes.scss']
})
export class Docentes {
constructor(private location: Location) {}

volver(): void {
  this.location.back();
 }
}
