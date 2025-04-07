import { Component } from '@angular/core';
import {KoliBriModule} from "@public-ui/angular-v17";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-kolibri-view',
  standalone: true,
  imports: [
    KoliBriModule,
    NgForOf,
  ],
  templateUrl: './kolibri-view.component.html',
})
export class KolibriViewComponent {
  textInputNumber = new Array(500).fill(0).map((_, i) => i + 1);
  checkboxesNumber = new Array(500).fill(0).map((_, i) => i + 1);


  readonly onValueChange = {
    onChange: (event: Event, value: any): void => {
     console.log(value);
    }
  };
}
