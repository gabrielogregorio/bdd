import { LanguageLocales } from './locales';
import { LanguageEnum } from './types';

export const renderPresentation = (language: LanguageEnum) => {
  const message = LanguageLocales.textPresentation[language];
  console.log(message);
  return message;
};
