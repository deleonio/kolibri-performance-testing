export const customCheckbox = {
  'KOL-INPUT-CHECKBOX': `
	:host {
		font-family: var(--font-family);
		font-weight:300;
	}

  :host kol-input {
    display: grid;
    align-items: center;
    justify-items: left;
    width: 100%;
    min-height: 44px;
    gap: 0.4em;
  }

  :host kol-input.default {
    grid-template-columns: 1.5rem auto;
  }

  :host kol-input.switch {
    grid-template-columns: 3.5rem auto;
  }

  :host kol-input > div.input {
    background-color: inherit;
    display: inherit;
    min-height: 44px;
    order: 2;
  }

  :host kol-input > div.input input {
    margin: 0px;
  }

  :host kol-input:not(.disabled) :is(.input, label) {
    cursor: pointer;
  }

  kol-input.disabled.checkbox {
      opacity: 1
  }

  :host kol-input.disabled :is(.input, label) {
    cursor: not-allowed;
    opacity: 1
  }

  :host kol-input > label {
    order: 3;
  }

  :host kol-input.error input:focus,
    kol-input.error select:focus,
    kol-input.error textarea:focus {
    outline-color: var(--color-red) !important;
  }

  :host kol-input.error kol-alert.error {
    color: var(--color-red);
  }

  :host input {
    order: 1;
    width: 100%;
    border-color: var(--color-grey);
    border-width: 2px;
    border-style: solid;
    border-radius: 5px; /* padding: 10px 14px; */
    line-height: 24px;
    font-size: var(--font-size-span);
  }

  :host input:hover {
    border-color: var(--color-midnight);
    box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
  }

  :host input:focus:hover {
    box-shadow: none;
  }

  :host input:active {
    box-shadow: none;
  }

  /* CHECKBOX */
  :host kol-input label span {
    margin-top: 0.125rem;
    margin-left: 0.5rem;
    display:block;
  }

  :host .required label > span::after {
    content: "*";
    padding-left: 0.125em;
  }

  :host kol-input input[type="checkbox"] {
    appearance: none;
    background-color: white;
    transition: 0.5s;
  }

  :host kol-input input[type="checkbox"]:before {
    content: "";
  }

  :host kol-input.checkbox:not(.switch) kol-icon {
    display: none
  }

  :host kol-input input[type="checkbox"]:checked {
    background-color: var(--color-midnight);
    border-color: var(--color-midnight);
  }

  :host kol-input.default input[type="checkbox"] {
    border-radius: var(--border-radius);
    height: calc(6 * var(--spacing));
    min-width: calc(6 * var(--spacing));
    width: calc(6 * var(--spacing));
  }

  :host kol-input.default input[type="checkbox"]:before {
    border-radius: 1.5em;
    background-color: transparent;
    display: block;
    height: calc(6 * var(--spacing));
    position: relative;
    width: calc(6 * var(--spacing));
  }

   :host kol-input.default input[type="checkbox"]:disabled:not(:checked) {
    background-color: var(--color-smoke);
    border-radius: var(--border-radius);
    height: calc(6 * var(--spacing)-1);
    min-width: calc(6 * var(--spacing)-1);
    width: calc(6 * var(--spacing)-1);
  }

  :host kol-input.default input[type="checkbox"]:checked:before {
    border-right-width: 3px;
    border-bottom-width: 3px;
    left: 0.5rem;
    top: 1rem;
    transform: rotate(40deg) translate(-50%, -50%);
    background-color: transparent;
    border-width: 0px 3px 3px 0px;
    border-color: white;
    border-radius: 1px;
    border-style: solid;
    height: calc(3 * var(--spacing));
    width: calc(1.5 * var(--spacing));
  }

  :host kol-input.default input[type="checkbox"]:indeterminate {
    --tw-bg-opacity: 1;
    background-color: var(--color-midnight);
  }

  :host kol-input.default input[type="checkbox"]:indeterminate:before {
    background-color: var(--color-white);
    height: 0.125rem;
    top: 0.6rem;
    left: 0.25rem;
    width: calc(3 * var(--spacing));
    transform: inherit;
  }

  :host kol-input.default input[type="checkbox"]:checked:indeterminate:before {
    border-width: 0px 1px 1px 0px;
  }

  :host kol-input.switch label span {
      margin-left: 1rem;
  }

  :host kol-input.switch input[type="checkbox"] {
    min-width: 3.5em;
    width: 5.6rem;
    background-color: var(--color-grey);
    border-width: 0;
    height: 2.4rem;
    border-radius: 1.25em;
    display: relative;
  }

  :host kol-input.switch [slot="input"]{
    & :first-child{
      padding:0;
      margin:0;
      margin-left:-1.5px;
    }
  }

  .switch:not(input:checked) .icon {
    top: 1.9rem;
  }

  .switch:has(input:checked) .icon {
    transform: translate(3.3rem, -1rem);
  }

  :host kol-input.switch input[type="checkbox"]:before {
    -webkit-transition: 0.5s;
    -moz-transition: 0.5s;
    -ms-transition: 0.5s;
    transition: 0.5;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background-color: white;
  }

  :host kol-input.switch input[type="checkbox"]:checked {
    background-color: var(--color-midnight);
  }

  :host kol-input.switch input[type="checkbox"]:checked:before {
    -webkit-transform: translateX(3.2rem);
    -moz-transform: translateX(3.2rem);
    -ms-transform: translateX(3.2rem);
    transform: translateX(3.2rem);
    --tw-bg-opacity: 1;
  }

  :host kol-input.switch input[type="checkbox"]:indeterminate {
    --tw-bg-opacity: 1;
  }

  :host kol-input.switch input[type="checkbox"]:indeterminate:before {
    -webkit-transform: translateX(1em);
    -moz-transform: translateX(1em);
    -ms-transform: translateX(1em);
    transform: translateX(1rem);
  }

  .checkbox-container {
    justify-content: start;
  }

  :host .disabled {
    opacity: 0.33;
  }

  .card {
    border-width: 2px;
    border-style: solid;
    filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));
    flex-direction: column;
  }

  .card > .heading {
    padding: 0.5rem 1rem;
  }

  .card.hasCloser > .heading {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
  }

  .card > .heading > div {
    width: 100%;
    min-height: 1.25rem;
  }

  .card > .heading .heading-icon {
    justify-self: right;
    margin-top: -4px;
  }

  .card > .heading .kol-heading-wc {
    width: 100%;
    color: white;
    display: flex;
    font-size: 1.25rem;
    line-height: 1.25rem;
  }

  .card > .heading .kol-heading-wc > * {
    margin: auto 0;
  }

  .card > .heading .kol-button-wc button:focus {
    outline-color: var(--color-white);
    outline-offset: -3px;
    outline-style: solid;
    outline-width: 3px;
    transition: outline 0.1s linear;
  }

  .card > .heading .kol-button-wc button:hover {
    background-color: rgba(32, 32, 32, 0.2);
  }

  .card > .heading .kol-button-wc button:active {
    background-color: rgba(32, 32, 32, 0.4);
  }

  .card > .heading .kol-button-wc button:hover:focus {
    background-color: rgba(32, 32, 32, 0.1);
  }

  .card > .content {
    padding: 1rem;
    max-height: 9.5rem;
    overflow-y: auto;
  }

  .card.default > .heading {
    background-color: var(--color-grey);
    border-bottom: 2px solid var(--color-grey);
  }

  .card.error > .heading {
    background-color: var(--color-red);
    border-bottom: 2px solid var(--color-red);
  }

  .card.info > .heading {
    background-color: var(--color-midnight);
    border-bottom: 2px solid var(--color-midnight);
  }

  .card.success > .heading {
    background-color: var(--color-green);
    border-bottom: 2px solid var(--color-green);
  }

  .card.warning > .heading {
    background-color: var(--color-orange);
    border-bottom: 2px solid var(--color-orange);
  }

  :is(.error, .info, .success, .warning) .heading-icon::part(icon) {
    font-family: 'Font Awesome 6 Free', serif;
    font-weight: 900;
    font-variation-settings: 'FILL' 1;
    height: 1.25rem;
    width: 1.25rem;
  }

  :is(.error, .info, .success, .warning) .heading-icon {
    font-size: 1.25rem !important;
  }

  .error .heading-icon::part(icon)::before {
    content: 'error';
  }

  .info .heading-icon::part(icon)::before {
    content: 'info';
  }

  .success .heading-icon::part(icon)::before {
    content: 'check_circle';
  }

  .warning .heading-icon::part(icon)::before {
    content: 'warning';
  }

  .card > div > .content {
    grid-row: 2;
    grid-column: 1 / span 2;
  }

  .card.default .close {
    background-color: var(--color-grey);
  }

  .card.error .close {
    background-color: var(--color-red);
  }

  .card.info .close {
    background-color: var(--color-midnight);
  }

  .card.success .close {
    background-color: var(--color-green);
  }

  .card.warning .close {
    background-color: var(--color-orange);
  }

  .close > button {
    min-width: 44px;
    color: var(--color-white);
    min-height: 44px;
    display: grid;
    gap: 0.25em;
    line-height: 1.5rem;
    font-family: var(--font-family);
    cursor: pointer;
    border-radius: 1.5em;
    border-style: solid;
    border-width: 2px;
    font-size: 1rem;
    align-items: center;
    padding: 8px 14px;
    font-style: normal;
    text-align: center;
    width: inherit;
    transition-duration: 0.5s;
    transition-property: background-color, color, border-color;
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
  }

  .close > button {
    padding: 8px;
  }

  .close > button .kol-icon {
    display: flex;
    width: 1em;
    height: 1em;
    font-size: 1rem;
  }

  .close > button .kol-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
    font-weight: 900;
  }

  .close > button .kol-icon::part(icon)::before {
    content: 'close';
  }

  .close > button:active {
    box-shadow: none;
    outline: none;
  }

	:host kol-input > kol-alert.error {
			order: 1;
			padding-top: 0.25em;
			grid-column: span 2 / auto;
			display:none;
		}

	`
};
