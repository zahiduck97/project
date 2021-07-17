import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulos',
  template: `
    <mat-drawer-container class="example-container" autosize>
      <mat-drawer [opened]="sidenav" disableClose="true" class="example-sidenav" mode="over">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis cumque deleniti, dignissimos distinctio dolore ea eveniet fugit, impedit itaque molestias nobis omnis quos rem rerum sit tempora tenetur voluptatum.
      </mat-drawer>
      <app-toolbar (abrirMenu)="sidenav = true"></app-toolbar>
      <router-outlet></router-outlet>
    </mat-drawer-container>
  `,
  styleUrls: ['./modulos.component.css'],
})
export class ModulosComponent implements OnInit {

  sidenav:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
