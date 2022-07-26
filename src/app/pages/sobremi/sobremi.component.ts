import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  stateForm = false;
  openForm(type: string) {
    if (type == "editar") {
      document.getElementById("form-edit")?.classList.add("show")
    } else {
      document.getElementById("form-delete")?.classList.add("show")
    }
    this.stateForm = true;
  };
  closeForm(type: string) {
    if (type == "editar") {
      document.getElementById("form-edit")?.classList.remove("show")
    } else {
      document.getElementById("form-delete")?.classList.remove("show")
    }
    this.stateForm = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
