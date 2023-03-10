import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <div class=" overlay" *ngIf="isLoading | async">
  <div class="lds-hourglass"></div>
  </div>`,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  constructor(private spiner: SpinnerService) { }
isLoading = this.spiner.isLoading;


}
