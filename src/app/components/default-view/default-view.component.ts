import { NgForOf } from "@angular/common";
import { Component } from '@angular/core';
import { KoliBriModule } from "@public-ui/angular-v17";
import { NUMBER_OF_CHECKBOX, NUMBER_OF_INPUT_TEXT } from '../../shares/constants';

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
  textInputNumber = NUMBER_OF_INPUT_TEXT;
  checkboxesNumber = NUMBER_OF_CHECKBOX;

  onValueChange(event: Event): void {
    console.log('Value changed:', event);
  }
}
