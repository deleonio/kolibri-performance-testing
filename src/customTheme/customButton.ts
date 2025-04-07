export const customButton = {
  'KOL-BUTTON': `
    :host {
      font-family: var(--font-family);
      font-weight: 400;
    }
    :is(a, button) {
      font-size: var(--font-size-button);
    }
    :is(a, button):focus {
      outline: none;
    }
    :is(a, button):focus kol-span-wc {
      outline-color: var(--color-ocean);
      outline-offset: 2px;
      outline-style: solid;
      outline-width: 3px;
      transition: outline-offset 0.2s linear;
    }
    :is(a, button) > kol-span-wc {
      border-style: solid;
			border-width: 2px;
      min-height: var(--a11y-min-size);
      min-width: var(--a11y-min-size);
      padding: 8px 14px;
      text-align: center;
      transition-duration: 0.5s;
      transition-property: background-color, color, border-color;
    }
    .primary :is(a, button) > kol-span-wc,
    .primary :is(a, button):disabled:hover > kol-span-wc {
      border-color: transparent;
      background-color: var(--color-midnight);
      color: var(--color-white);
    }
    .secondary :is(a, button) > kol-span-wc,
    .secondary :is(a, button):disabled:hover > kol-span-wc,
    .normal :is(a, button) > kol-span-wc,
    .normal :is(a, button):disabled:hover > kol-span-wc {
      background-color: var(--color-white);
      border-color: var(--color-ocean);
      color: var(--color-midnight);
    }
    .danger :is(a, button) > kol-span-wc,
    .danger :is(a, button):disabled:hover > kol-span-wc {
      border:none;
      background-color: var(--color-white);
      color: var(--color-red);
    }
    .success :is(a, button) > kol-span-wc,
    .success :is(a, button):disabled:hover > kol-span-wc {
      background-color: var(--color-green);
      color: var(--color-white);
    }
    .ghost :is(a, button) > kol-span-wc,
    .ghost :is(a, button):disabled:hover > kol-span-wc {
      border: none;
      background-color: transparent;
      box-shadow: none;
      color: var(--color-midnight);
    }

    .ghost-danger :is(a, button) > kol-span-wc,
    .ghost-danger :is(a, button):disabled:hover > kol-span-wc {
      border: none;
      background-color: transparent;
      box-shadow: none;
      color: red;
    }

    .primary :is(a, button):active > kol-span-wc,
    .primary :is(a, button):hover > kol-span-wc,
    .secondary :is(a, button):active > kol-span-wc,
    .secondary :is(a, button):hover > kol-span-wc,
    .normal :is(a, button):active > kol-span-wc,
    .normal :is(a, button):hover > kol-span-wc,
    .danger :is(a, button):active > kol-span-wc,
    .danger :is(a, button):hover > kol-span-wc,
    .success :is(a, button):active > kol-span-wc,
    .success :is(a, button):hover > kol-span-wc,
    .ghost :is(a, button):active > kol-span-wc,
    .ghost :is(a, button):hover > kol-span-wc {
      background-color: var(--color-ocean);
      box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
      color: var(--color-white);
    }

    .ghost-danger :is(a, button):active > kol-span-wc,
    .ghost-danger :is(a, button):hover > kol-span-wc {
      background-color: var(--error);
      box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
      color: var(--color-white);
    }

    .danger :is(a, button):active > kol-span-wc,
    .danger :is(a, button):hover > kol-span-wc,
    .ghost-danger :is(a, button):active > kol-span-wc,
    .ghost-danger :is(a, button):hover > kol-span-wc {
      background-color: var(--error);
    }
    :is(a, button):disabled:hover > kol-span-wc,
    :is(a, button):focus:hover > kol-span-wc {
      box-shadow: none;
    }
    .primary :is(a, button):active > kol-span-wc,
    .secondary :is(a, button):active > kol-span-wc,
    .normal :is(a, button):active > kol-span-wc,
    .danger :is(a, button):active > kol-span-wc,
    .success :is(a, button):active > kol-span-wc,
    .ghost :is(a, button):active > kol-span-wc,
    .ghost-danger :is(a, button):active > kol-span-wc
    {
      box-shadow: none;
      outline: none;
    }
    :is(a, button).hide-label > kol-span-wc {
      padding: 8px;
      width: unset;
      span {
        gap: 0;
      }
    }
    :is(a, button).hide-label > kol-span-wc > span > span {
      display: none;
    }
    :is(a, button).loading > kol-span-wc kol-icon {
      animation: spin 5s infinite linear;
    }
    /** button with inline focus */
    :is(a, button).focus-inline:focus > kol-span-wc {
      outline-offset: -2px;
    }
    /** :is(a,button) with transparent background */
    :is(a, button).transparent > kol-span-wc > span,
    .ghost :is(a, button).transparent > kol-span-wc > span,
    :is(a, button).transparent > kol-span-wc {
      background-color: transparent;
      border-color: transparent;
    }
    /** CUSTOM_CLASS */
    :is(a, button).hide-label > kol-span-wc {
      padding: 8px;
      width: unset;
    }
    :is(a, button).hide-label > kol-span-wc > span > span {
      display: block;
    }
  `
};
