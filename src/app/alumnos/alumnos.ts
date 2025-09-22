import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './alumnos.html',
  styleUrls: ['./alumnos.css']
})
export class Alumnos implements OnInit {
  alumnos: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }
}