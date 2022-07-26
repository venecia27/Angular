import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
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
}
