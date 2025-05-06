import { NgForOf } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NUMBER_OF_CHECKBOX, NUMBER_OF_INPUT_TEXT } from '../../shares/constants';

class CustomInputText extends HTMLElement {
  constructor() {
    super();

    // Shadow Root erstellen
    const shadow = this.attachShadow({ mode: 'open' });

    // Label erstellen
    const label = document.createElement('label');
    label.setAttribute('for', 'custom-input');
    label.textContent = `Custom Input`;

    // Input erstellen
    const input = document.createElement('input');
    input.setAttribute('id', 'custom-input');
    input.setAttribute('type', 'text');

    // Event Listener für Input
    input.addEventListener('input', (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      console.log('Custom input value:', value);
    });

    // Inhalte in den Shadow DOM einfügen
    shadow.appendChild(label);
    shadow.appendChild(input);
  }
}
customElements.define('custom-input-text', CustomInputText);

class CustomCheckbox extends HTMLElement {
  constructor() {
    super();

    // Shadow Root erstellen
    const shadow = this.attachShadow({ mode: 'open' });

    // Label erstellen
    const label = document.createElement('label');
    label.setAttribute('for', 'custom-checkbox');
    label.textContent = `Custom Checkbox`;

    // Checkbox erstellen
    const checkbox = document.createElement('input');
    checkbox.setAttribute('id', 'custom-checkbox');
    checkbox.setAttribute('type', 'checkbox');

    // Event Listener für Checkbox
    checkbox.addEventListener('change', (event: Event) => {
      const checked = (event.target as HTMLInputElement).checked;
      console.log('Custom checkbox checked:', checked);
    });

    // Inhalte in den Shadow DOM einfügen
    shadow.appendChild(label);
    shadow.appendChild(checkbox);
  }
}
customElements.define('custom-checkbox', CustomCheckbox);

@Component({
  selector: 'app-custom-element-view',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './custom-element-view.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomElementViewComponent {
  textInputNumber = NUMBER_OF_INPUT_TEXT;
  checkboxesNumber = NUMBER_OF_CHECKBOX;

  readonly onValueChange = {
    onChange: (event: Event, value: any): void => {
      console.log(value);
    }
  };
}
