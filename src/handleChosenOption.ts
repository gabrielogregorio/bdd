import prompt from 'prompt-sync';
import { LanguageEnum, OptionEnum } from './types';
import { LanguageLocales } from './locales';

export const handleChosenOption = (language: LanguageEnum): OptionEnum => {
  const chosenOption = prompt()(LanguageLocales.typeOption[language]).trim().replace('\n', '');

  if (!['1', '2'].includes(chosenOption)) {
    throw new Error(LanguageLocales.typeValidOption[language]);
  }

  return chosenOption;
};
