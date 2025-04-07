export const customRadio = {
  'KOL-INPUT-RADIO': `
    :host {
      font-family: var(--font-family);
      font-weight: 300;
    }

    :host kol-input > div.input {
    background-color: inherit;
    display: inherit;
    min-height: 44px;
    order: 2;
  }

    /* INPUT */
    kol-input {
      display: grid;
      gap: 0.4em;
    }

    label {
      cursor: pointer;
      display: grid;
      line-height: 20px;
      gap: 8px;
      width: 100%;
      font-family: var(--font-family);
      font-size: var(--font-size-span);
      margin-left: var(--abst-2);
    }

    input {
      cursor: pointer;
      width: 100%;
      border-color: var(--color-grey);
      border-width: 2px;
      border-style: solid;
      border-radius: 5px; /* padding: 10px 14px; */
      line-height: 24px;
      font-size: var(--font-size-span);
    }

    input:hover {
      border-color: var(--color-midnight);
      box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
    }

    input:focus:hover {
      box-shadow: none;
    }

    input:hover {
      border-color: var(--color-midnight);
    }

    kol-alert {
      display: block;
      width: 100%;
    }

    .required legend > span::after {
      content: '*';
      padding-left: 0.125em;
    }

    /* RADIO */

    fieldset {
      border: 0px;
      margin: 0px;
      padding: 0px;
      display: grid;
      gap: 0.25em;
    }

    .radio-input-wrapper {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      min-height: 44px;
      margin: 0;

    }

    .radio-input-wrapper label {
      cursor: pointer;
      display: flex;
      padding-left: 0.25em;
      width: 100%;
    }

    .radio-input-wrapper label span {
      margin-top: 0.125em;
      text-wrap: nowrap;
    }

    .radio-input-wrapper input[type='radio'] {
      appearance: none;
      transition: 0.5s;
      border-radius: 100%;
      height: 2.4rem;
      width: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .radio-input-wrapper input[type='radio']:before {
      content: '';
      cursor: pointer;
      border-radius: 100%;
      display: block;
    }

    .radio-input-wrapper input[type='radio']:checked:before {
      background-color: var(--color-midnight);
    }

    .radio-input-wrapper input[type='radio']:disabled {
      cursor: not-allowed;
      border-color: var(--border-default);
      background-color: var(--color-smoke);
      border-width: thin;
    }

    kol-alert.error {
      order: 1;
    }

    fieldset legend {
      order: 2;
      display: contents;

      & span {
        font-size: var(--font-size-span);
      }
    }

    fieldset kol-input {
      order: 3;
    }

    fieldset.error {
      border-left: 3px solid var(--color-red);
      padding-left: 1em;
    }

    fieldset.error input:focus,
    fieldset.error select:focus,
    fieldset.error textarea:focus {
      outline-color: var(--color-red) !important;
    }

    fieldset.error kol-alert.error {
      margin-left: -0.25em;
      color: var(--color-red);
      font-weight: 700;
    }

    fieldset.horizontal {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1rem;

      &.error {
        .kol-alert-wc {
          position: absolute;
          color: var(--color-red);
          font-size: var(--font-size-span);
          font-weight: 400;
        }

        kol-input {
          padding-top: 1.5rem;
        }
      }
    }

    fieldset.horizontal legend {
      display: inline-block;
      margin-bottom: 0.25em;
    }

    fieldset .input-slot {
      gap: 0.5rem;
    }

    .radio-input-wrapper label {
      padding-left: 0;
    }

    .kol-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      margin-right: 0.5rem;
    }

    .kol-alert-wc .heading {
      display: flex;
      gap: 0.5rem;
      color: var(--color-red);
      font-size: var(--font-size-span);
      font-weight: 400;
      order: -1;
    }

    .error .heading-icon::part(icon)::before {
      content: '\\f057';
    }
	`
};
