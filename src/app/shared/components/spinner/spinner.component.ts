import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="spinner m-0 p-0 row col-12 justify-content-center align-items-center">
    <div class="lds-dual-ring"></div>
  </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
}
