import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-evaluaciones',
  standalone:true,
  imports: [CommonModule, RouterModule],
  templateUrl: './evaluaciones.html',
  styleUrl: './evaluaciones.scss'
})
export class Evaluaciones {

}
