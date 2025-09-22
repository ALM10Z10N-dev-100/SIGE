import { Location } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-conectando-el-aprendizaje',
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule,TranslateModule],
  templateUrl: './conectando-el-aprendizaje.html',
  styleUrls: ['./conectando-el-aprendizaje.scss']
})
export class ConectandoElAprendizaje {
constructor(private location: Location) {}

volver(): void {
  this.location.back();
 }
}
