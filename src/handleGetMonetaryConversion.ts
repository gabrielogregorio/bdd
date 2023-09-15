import prompt from 'prompt-sync';
import { LanguageEnum, OptionEnum } from './types';
import { LanguageLocales } from './locales';
import { formatString } from './formatString';

export const handleGetMonetaryConversion = (chosenOption: OptionEnum, language: LanguageEnum): number => {
  let monetaryIsValid = false;
  let valorConversor = 0;
  const from = chosenOption === OptionEnum.UsdBrl ? 'USD' : 'BRL';

  while (!monetaryIsValid) {
    const localValue = prompt()(formatString(LanguageLocales.typeValueInCurrency[language], from))
      .trim()
      .replace('\n', '');
    valorConversor = parseFloat(localValue);

    if (typeof valorConversor === 'number') {
      monetaryIsValid = true;
    } else {
      console.log(LanguageLocales.typeAValidOption[language]);
    }
  }

  console.log(chosenOption, valorConversor);
  return valorConversor;
};
