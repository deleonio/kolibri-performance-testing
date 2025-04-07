import { KoliBriDevHelper } from '@public-ui/components';
import {
  customButton,
  customCheckbox,
  customDetails,
  customGlobal,
  customInputDate,
  customInputEmail,
  customInputNumber,
  customInputText,
  customLink,
  customModal,
  customRadio,
  customSelect,
  customTable,
} from '.';

export const setKolibriTheme = () => {
  KoliBriDevHelper.patchTheme('default', customGlobal);
  KoliBriDevHelper.patchTheme('default', customButton);
  KoliBriDevHelper.patchTheme('default', customCheckbox);
  KoliBriDevHelper.patchTheme('default', customDetails);
  KoliBriDevHelper.patchTheme('default', customInputDate);
  KoliBriDevHelper.patchTheme('default', customInputEmail);
  KoliBriDevHelper.patchTheme('default', customInputNumber);
  KoliBriDevHelper.patchTheme('default', customInputText);
  KoliBriDevHelper.patchTheme('default', customLink);
  KoliBriDevHelper.patchTheme('default', customRadio);
  KoliBriDevHelper.patchTheme('default', customSelect);
  KoliBriDevHelper.patchTheme('default', customTable);
  KoliBriDevHelper.patchTheme('default', customModal);
};
