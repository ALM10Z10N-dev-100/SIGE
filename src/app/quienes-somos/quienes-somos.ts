import { Location } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [TranslateModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './quienes-somos.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomos {
constructor(private location: Location) {}

volver(): void {
  this.location.back();
 }
}
