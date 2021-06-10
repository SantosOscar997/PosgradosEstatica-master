import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-planes-de-estudio',
  templateUrl: './planes-de-estudio.component.html',
  styleUrls: ['./planes-de-estudio.component.css']
})
export class PlanesDeEstudioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  descargar(){
    var doc = new jsPDF();
    doc.save('documento.pdf');
  }

}


