import { Component } from '@angular/core';
import {KoliBriModule} from "@public-ui/angular-v17";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-default-view',
  standalone: true,
  imports: [
    KoliBriModule,
    NgForOf
  ],
  templateUrl: './default-view.component.html',
})
export class DefaultViewComponent {
  textInputNumber = new Array(1000).fill(0).map((_, i) => i + 1);
  checkboxesNumber = new Array(2000).fill(0).map((_, i) => i + 1);

  onValueChange(event: Event): void {
    console.log('Value changed:', event);
  }
}
