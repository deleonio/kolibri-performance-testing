export const customLink = {
  'KOL-LINK': `

    :host kol-link-wc,
    :host kol-link-wc a kol-icon{
      display:inline;
      align-self:flex-start
    }

    :host kol-link-wc a kol-span-wc{
      color:var(--primary);
      gap:var(--semantic-space-2xs);
      flex-wrap:wrap;
      line-height:
      var(--semantic-font-line-height-md);
      text-decoration-color:var(--primary);
      text-decoration-line:underline;
      transition:all .05s ease-in-out
      }

    :host kol-link-wc a:has(kol-icon){
      text-decoration:none
    }

    :host kol-link-wc a kol-span-wc span kol-icon{
        margin-right:1rem;
     }

    :host kol-link-wc a:hover kol-span-wc{
      color:var(--primary);
      text-decoration-color:var(--primary);
      text-decoration-thickness: 2px;
    }

    :host kol-link-wc a:hover:has(kol-icon){
      text-decoration:underline
    }

    :host kol-link-wc a:active{
      color:var(--semantic-fg-action-base-active);
      text-decoration-color:var(--semantic-fg-action-base-active);
      text-decoration-thickness:inherit
    }

    :host kol-link-wc a:focus{
      text-decoration-thickness:inherit;
      border-radius:var(--semantic-borderradius-3xs, 0.125rem);
      box-shadow:0 0 0 2px var(--semantic-stroke-static-base-inverse),0 0 0 4px var(--semantic-stroke-static-accent),0 0 0 6px rgba(36,120,197,.4)
    }

    :host kol-link-wc a:focus:focus-visible{
      outline:var(--outline-focus-vis);
    }

    :host kol-link-wc a:focus:not(:focus-visible){
      outline:0;
      box-shadow:none
    }

    :host kol-link-wc a:visited{
      color:var(--core-color-accent-2)
    }

    :host kol-link-wc a:visited kol-icon{
      color:var(--core-color-accent-2)
    }

    :host kol-link-wc a:visited:hover{
      color:var(--semantic-fg-action-base-hovered);
      text-decoration-color:var(--semantic-fg-action-base-hovered);
      text-decoration-thickness:inherit
    }

    :host kol-link-wc a:visited:hover kol-icon{
      color:var(--semantic-fg-action-base-hovered)
    }

    :host kol-link-wc a:visited:active{
        color:var(--semantic-fg-action-base-active);
        text-decoration-color:var(--semantic-fg-action-base-active);
        text-decoration-thickness:inherit
    }

    :host kol-link-wc a:visited:active kol-icon{
        color:var(--semantic-fg-action-base-active)

    }

    :host kol-link-wc a kol-span-wc>span{
        gap:var(--semantic-space-2xs);
        font-size:var(--font-size-link)
    }

    :host kol-link-wc a>span{
        order:2
    }

    :host kol-link-wc .hidden{
        display:none;
        visibility:hidden
    }
      `
};
