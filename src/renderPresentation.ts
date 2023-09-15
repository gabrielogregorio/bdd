import { LanguageLocales } from './locales';
import { LanguageEnum } from './types';

export const renderPresentation = (language: LanguageEnum) => {
  console.log(LanguageLocales.textPresentation[language]);
};
