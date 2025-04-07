export const customDetails = {
  'KOL-DETAILS': `
  details {

    > summary {
      min-height: 2.75rem;
      display: flex;
      border-radius: var(--border-radius);
      font-family: var(--font-family);
      font-size:var(--font-size-span);

      color: var(--color-midnight);
      gap: 0.25rem;

      > span {
        border: none;
        font-size: var(--font-size-span);
      }
    }
  }

  .kol-indented-text-wc {
    margin: 0.25em 0 0 0.65em;
  }

  .kol-icon {
    font-size: 1rem;

    &::part(icon) {
      font-family: 'Font Awesome 6 Free';
      font-weight: 400;
      color: var(--color-midnight);

      &:before {
        content: 'chevron_right';
      }
     }
   }
  }
  `
};
