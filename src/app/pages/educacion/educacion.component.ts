import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
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
