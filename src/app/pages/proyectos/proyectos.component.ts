import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  stateForm = false;
  openForm(id: number, type: string) {
    if (type == "editar") {
      document.getElementsByClassName("form-edit")[id]?.classList.add("show")
    } else {
      document.getElementsByClassName("form-delete")[id]?.classList.add("show")
    }
    this.stateForm = true;
  };
  closeForm(id: number, type: string) {
    if (type == "editar") {
      document.getElementsByClassName("form-edit")[id]?.classList.remove("show")
    } else {
      document.getElementsByClassName("form-delete")[id]?.classList.remove("show")
    }
    this.stateForm = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
