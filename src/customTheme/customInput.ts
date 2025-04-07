export const kolInputCss = `
			gap: var(--abst-1);
			margin-top: var(--abst-3);
		`;

export const kolLabelCss = `
			order: 2;
			font-size:var(--font-size-span);
			font-weight: 300;
`;

export const inputReadOnlyCss = `
			&.read-only.touched {
	  			div {
	  				&.input {
	  					opacity: 1;
	  					border-color: #f2f3f4;
	  					background-color: #f2f3f4;
	  				}
	  				input {
	  					background-color: #f2f3f4;
						  font-weight: 400;
	  				}
	  			}
	  		}
`;

export const inputErrorCss = `
      div.error {
        color: var(--color-red);
        font-size: var(--font-size-span);
        font-weight: 400;
      }
`;

export const customInputText = {
  'KOL-INPUT-TEXT': `
		:host {
			font-family: var(--font-family);
		}
		kol-input {
      ${kolInputCss}
	    ${inputReadOnlyCss}
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
      ${kolLabelCss}
		}
		kol-input .input {
			order: 3;
			font-weight: 300;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
			font-weight: 300;
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
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
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
		input:disabled {
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

    .kol-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      margin-right: 0.5rem;
    }

    .kol-alert-wc .heading {
      display: flex;
      gap: 0.5rem;
    }

    ${inputErrorCss}

    .error .heading-icon::part(icon)::before {
      content: '\\f057';
    }

    :is(.error, .info, .success, .warning) .heading-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      display:flex;
      align-items:center;
    }

		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-smoke);
			opacity: 1;
		}
	`
};

export const customInputNumber = {
  'KOL-INPUT-NUMBER': `
		:host {
			font-family: var(--font-family);
		}
		kol-input {
      ${kolInputCss}
		  ${inputReadOnlyCss}
		}
		kol-input .error {
			order: 1;
		}
		kol-input .input {
			order: 3;
		}
		kol-input label {
			${kolLabelCss}
		}
		kol-input .hint {
			order: 4;
			font-size: 0.875em;
			font-style: italic;
		}
		input {
			border: none;
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
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
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
		input:disabled {
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

		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-smoke);
			opacity: 1;
		}

    .kol-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      margin-right: 0.5rem;
    }

    .kol-alert-wc .heading {
      display: flex;
      gap: 0.5rem;
    }

    ${inputErrorCss}

    .error .heading-icon::part(icon)::before {
      content: '\\f057';
    }

    :is(.error, .info, .success, .warning) .heading-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      display:flex;
      align-items:center;
    }
	`
};

export const customInputEmail = {
  'KOL-INPUT-EMAIL': `
		:host {
			font-family: var(--font-family);
		}
		kol-input {
        ${kolInputCss}
		${inputReadOnlyCss}
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
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
		input {
			border: none;
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
			padding: 0 0.5em;
		}
		.input > kol-icon {
			width: 1em;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1em;
			padding-right: 1em;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5em;
			padding-right: 0.5em;
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
		input:disabled {
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
		kol-input.error kol-alert.error {
			color: var(--color-red);
		}

		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-smoke);
			opacity: 1;
		}

    .kol-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      margin-right: 0.5rem;
    }

    .kol-alert-wc .heading {
      display: flex;
      gap: 0.5rem;
    }

    ${inputErrorCss}

    .error .heading-icon::part(icon)::before {
      content: '\\f057';
    }

    :is(.error, .info, .success, .warning) .heading-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      display:flex;
      align-items:center;
    }
	`
};

export const customInputDate = {
  'KOL-INPUT-DATE': `

	:host {
			font-family: var(--font-family);
	}

  kol-input {
		gap: 0.25em;
		${inputReadOnlyCss}
	}

	kol-input .error {
		order: 1;
	}

	kol-input label {
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

	input {
		border: none;
		font-weight: 300;
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
		padding: 0 0.5em;
	}

	.input > kol-icon {
		width: 1em;
	}

	.input:is(.icon-left, .icon-right) {
		padding-left: 1em;
		padding-right: 1em;
	}

	.input:is(.icon-left, .icon-right) input {
		padding-left: 0.5em;
		padding-right: 0.5em;
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

	input:disabled {
		cursor: not-allowed;
	}

	.required label > span::after {
		content: "*";
		padding-left: 0.125em;
	}

	kol-input.error {
		border-left: 3px solid var(--color-red);
		padding-left: 1em;
	}

	kol-input.error kol-alert.error {
		color: var(--color-red);
	}

			kol-input.error .input {
			border-color: var(--color-red);
			border-width: 3px;
		}

		kol-input.disabled :is(input, .input) {
			background-color: var(--color-smoke);
			border-color: var(--color-smoke);
			opacity: 1;
		}

    .kol-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      margin-right: 0.5rem;
    }

    .kol-alert-wc .heading {
      display: flex;
      gap: 0.5rem;
    }

    ${inputErrorCss}

    .error .heading-icon::part(icon)::before {
      content: '\\f057';
    }
	`
};
