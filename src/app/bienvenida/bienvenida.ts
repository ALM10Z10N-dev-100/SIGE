import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [RouterModule,TranslateModule],
  templateUrl: './bienvenida.html',
  styleUrls: ['./bienvenida.scss'],
})
export class Bienvenida {

}