import { Component,  Input } from '@angular/core';
@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {
  @Input() errorMessage!: string;
  @Input() type!: string;

  staticAlertClosed = false;

  message!: string
  constructor() { }
}
export enum AlertType {
  danger = "danger",
  warning = "warning",
  success = "success"
}
