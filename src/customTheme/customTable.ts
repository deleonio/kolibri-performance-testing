export const customTable = {
  'KOL-TABLE-STATEFUL': `

:host,
.kol-table-stateless-wc {
font-family: var(--font-family);
font-size: var(--font-size);
font-weight: 200;
}

:host *,
.kol-table-stateless-wc * {
hyphens: var(--kolibri-hyphens);
font-family: var(--kolibri-font-family);
line-height: var(--kolibri-line-height);
word-break: break-word;
}

:host * {
  hyphens: var(--hyphens);
  font-family: var(--font-family);
  line-height: var(--line-height);
  word-break: break-word;
}

:host > div {
  overflow-x: auto;
  overflow-y: hidden;
}

caption {
  font-weight: 400;
  padding-bottom: var(--abst-2);
  padding-top:var(--abst-4);
  text-align:center;
}

th {
  font-weight: normal;
  color: var(--color-primary);
  text-align: left;
}

:host table thead tr:first-child th,
:host table thead tr:first-child td {
  border-width: 0;
  border-bottom-width: calc(var(--border-width) * 2);
  border-style: solid;
  border-color: var(--blue-secondary);
}

table {
  width: 100%;
  border-spacing: 0;
}

.table:has(caption:focus) {
  outline-color: var(--color-primary-variant);
  outline-offset: 2px;
  outline-style: solid;
  outline-width: 3px;
  transition: outline-offset 0.2s linear;
}

table,
:host table thead tr:last-child th,
:host table thead tr:last-child td {
  border-width: 0;
  border-bottom-width: 2px;
  border-style: solid;
  border-color: var(--blue-secondary);;
}

th {
  background-color: var(--color-light);
}

thead {
  height:4.4rem;

  & > tr > th {
   color: var(--primary);
  }
}

th div {
  width: 100%;
  display: flex;
  gap: 0.5rem;
  grid-template-columns: 1fr auto;
  align-items: center;
}

tr{
  &:nth-child(even) {
    background-color: var(--grey-light);
  }
}

table tbody tr td {
  font-weight:300;
}

th, td {
  padding: 0.5rem;
}

th[aria-sort='ascending'],
  th[aria-sort='descending'] {
  font-weight: 700;
}

@media (min-width: 1024px) {
  div.pagination kol-pagination {
    display: flex;
    align-items: center;
  }
}`
};
