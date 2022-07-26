import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SocialsComponent } from './socials/socials.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SocialsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SocialsComponent
  ]
})
export class ComponentsModule { }
