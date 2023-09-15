import { LanguageEnum, OptionEnum } from './types';
import { LanguageLocales } from './locales';
import { promptUser } from './promptUser';

export const handleChosenOption = (language: LanguageEnum): OptionEnum => {
  const chosenOption = promptUser(LanguageLocales.typeOption[language]).trim().replace('\n', '');

  if (!['1', '2'].includes(chosenOption)) {
    throw new Error(LanguageLocales.typeValidOption[language]);
  }

  return chosenOption;
};
