import { Location } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-una-comunidad-que-inspira',
  standalone:true,
  imports: [RouterModule,TranslateModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './una-comunidad-que-inspira.html',
  styleUrls: ['./una-comunidad-que-inspira.scss']
})
export class UnaComunidadQueInspira {

  constructor(private location: Location ){}
volver(): void {
  this.location.back();
 }
}
