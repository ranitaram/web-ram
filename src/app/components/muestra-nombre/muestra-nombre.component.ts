import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styleUrls: ['./muestra-nombre.component.css']
})
export class MuestraNombreComponent implements OnInit {

  @Input() nombre!: string;
  onstructor() { }

  ngOnInit(): void {
  }

}
