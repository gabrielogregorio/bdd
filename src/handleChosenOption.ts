import prompt from 'prompt-sync';
import { LanguageEnum, OptionEnum } from './types';
import { LanguageLocales } from './locales';

export const handleChosenOption = (language: LanguageEnum): OptionEnum => {
  let chosenOption = OptionEnum.UsdBrl;
  let optionIsValid = false;

  while (!optionIsValid) {
    chosenOption = prompt()(LanguageLocales.typeOption[language]).trim().replace('\n', '');

    if (['1', '2'].includes(chosenOption)) {
      optionIsValid = true;
    } else {
      console.log(LanguageLocales.typeValidOption[language]);
    }
  }

  return chosenOption;
};
