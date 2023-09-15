import prompt from 'prompt-sync';
import { LanguageEnum, OptionEnum } from './types';
import { LanguageLocales } from './locales';
import { formatString } from './formatString';

export const handleGetMonetaryConversion = (chosenOption: OptionEnum, language: LanguageEnum): number => {
  const from = chosenOption === OptionEnum.UsdBrl ? 'USD' : 'BRL';
  const localValue = prompt()(formatString(LanguageLocales.typeValueInCurrency[language], from))
    .trim()
    .replace('\n', '');
  const valorConversor = parseFloat(localValue);

  if (typeof valorConversor !== 'number') {
    console.log(LanguageLocales.typeAValidOption[language]);
  }

  return valorConversor;
};
