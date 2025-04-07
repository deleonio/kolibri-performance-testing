export const customGlobal = {
  GLOBAL: `
:host {
 --border-radius: 0;
 --color-midnight: var(--primary);
 --color-ocean: var(--blue-secondary);
 --color-sky: #99c9e2;
 --color-ice: #cce4f0;
 --color-crystal: #f0f7fb;
 --color-crimson: #780f2d;
 --color-red: var(--error);
 --color-pink: #f2ccd8;
 --color-blossom: #fbf0f3;
 --color-olive: #004d38;
 --color-green: #005c45;
 --color-jungle: #00854a;
 --color-lime: #c1ca31;
 --color-mint: #ccdeda;
 --color-haze: #f0f5f4;
 --color-fire: #7a2e1f;
 --color-orange: #c44931;
 --color-coral: #f5dcd7;
 --color-peach: #fdf6f5;
 --color-bronze: #6a4a06;
 --color-yellow: #f9e03a;
 --color-ivory: #fdf3b0;
 --color-wine: #3f1d4a;
 --color-purple: #6b4479;
 --color-lavender: #dfd6de;
 --color-black: #202020;
 --color-metal: #454d4f;
 --color-grey: var(--grey-dark);
 --color-granite: var(--grey-dark);
 --color-silver: #e5e8e9;
 --color-smoke: #f2f3f4;
 --color-cloud: #f6f7f7;
 --color-white: #ffffff;
 --font-family: Frutiger, sans-serif;
 --font-size: 16px;
 --spacing: 0.25em;
 --a11y-min-size: 44px;
 }

 :host {
    background-color: transparent; /* Reset global background-color defined by components */
    font-size: var(--font-size-span);
    font-family: var(--font-family);
 }

 * {
    box-sizing: border-box;
 }

 h1, h2, h3, h4, h5, h6 {
   font-family: var(--font-family);
 }

 *[tabindex]:focus,
 kol-input:not(.checkbox, .radio) .input:focus-within,
 kol-input:is(.checkbox, .radio) input:focus,
 summary:focus {
   cursor: pointer;
   outline-color: var(--color-ocean);
   outline-offset: 2px;
   outline-style: solid;
   outline-width: 3px;
   transition: outline-offset 0.2s linear;
 }

 input[type="color"],
 input[type="date"],
 input[type="datetime-local"],
 input[type="email"],
 input[type="file"],
 input[type="month"],
 input[type="number"],
 input[type="password"],
 input[type="search"],
 input[type="tel"],
 input[type="text"],
 input[type="time"],
 input[type="url"],
 input[type="week"],
 select, select[multiple] option, textarea {
    font-size: var(--font-size-span);
    font-weight: 200;
 }

 @keyframes spin {
   0% {
    transform: rotate(0deg);
   }
   100% {
    transform: rotate(360deg);
   }
 }

 kol-heading-wc {
  font-weight: 700;
  & h3 {
    font-size:var(--font-size-h3);
    line-height:var(--line-height-h3);
  }
 }

 kol-tooltip-wc .tooltip-floating {
   border: 1px solid var(--color-metal);
   border-radius: var(--border-radius);
 }

 kol-tooltip-wc .tooltip-arrow {
   border: 1px solid var(--color-metal);
 }

 kol-tooltip-wc .tooltip-area {
  background-color: var(--color-white);
  color: var(--color-black);
 }

 kol-tooltip-wc .tooltip-content {
   border-radius: var(--border-radius);
   line-height: 1.5em;
   padding: 0.5rem 0.75rem;
 }

 kol-span-wc,
 kol-span-wc > span {
 gap: 0.5em;
  font-family: Frutiger, sans-serif;
 }

 kol-alert {
  font-family: Frutiger, sans-serif;
  font-size: var(--font-size-span);
  font-weight: 400;
 }

  kol-input.error kol-alert.error {
    font-weight: 400;
  }

  kol-indented-text {
    font-size: var(--font-size-span);
  }

  .access-key-hint {
    display: none;
  }

  .disabled label {
    opacity: 1
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`
};
