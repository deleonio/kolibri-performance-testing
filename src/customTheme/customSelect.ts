import { inputErrorCss, kolInputCss, kolLabelCss } from './customInput';

export const customSelect = {
  'KOL-SELECT': `
		:host {
			font-family: var(--font-family);
		}
		kol-input {
			${kolInputCss}
		}
		kol-input .error {
			order: 1;
		}
		kol-input label,
		 kol-input select,
		 kol-input select option {
			 ${kolLabelCss}
		}

		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}

    select {
      border: none;
		  padding: 1rem;
    }

		input::placeholder {
			color: var(--color-grey);
		}

		.input {
			background-color: var(--color-white);
			border-color: var(--color-grey);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;

		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input.icon-left kol-icon:first-child {
			margin-right: 0.5em;
		}
		.input.icon-right kol-icon:last-child {
			margin-left: 0.5em;
		}
		.input > input:first-child {
			padding-left: 0.375em;
		}
		.input > input:last-child {
			padding-right: 0.375em;
		}
		.input:hover {
			border-color: var(--color-midnight);
		}
		select:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}
		kol-input.error:not(.hidden-error) {
			border-left: 3px solid var(--color-red);
			padding-left: 1em;
		}

		${inputErrorCss}

		.heading {
      display: flex;
      align-items: center;
      gap: 1rem;
}		}

		.heading-icon {
		margin-right: 1rem;
    top: 0.3rem;
    position: relative;
    }

  .kol-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
    font-weight: 900;
  }
		.error .heading-icon::part(icon)::before {
			content: '\\f057';
		}

    :is(.error, .info, .success, .warning) .heading-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      display:flex;
      align-items:center;
    }

		select[multiple] {
			overflow: auto;
		}
		select option {
			margin: 1px 0;
			border-radius: var(--border-radius,0.25em);
			cursor: pointer;
		}
		select:not([multiple]) option {
			padding: 0.5em;
		}
		select option:disabled {
			cursor: not-allowed;
		}
		option:active:not(:disabled),
		option:checked:not(:disabled),
		option:focus:not(:disabled),
		option:hover:not(:disabled) {
			background: var(--color-ocean);
			color: white;
		}
	`
};
