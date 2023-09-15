import { monetaryValues } from './constants';
import { LanguageEnum, OptionEnum } from './types';
import { LanguageLocales } from './locales';
import { formatString } from './formatString';

export const handleResultConversion = (
  chosenOption: OptionEnum,
  valorConversor: number,
  language: LanguageEnum,
): void => {
  if (chosenOption === OptionEnum.UsdBrl) {
    console.log(
      formatString(
        LanguageLocales.convertResultUsdToBrl[language],
        valorConversor,
        valorConversor * (monetaryValues.usd / monetaryValues.brl),
      ),
    );
  } else if (chosenOption === '2') {
    console.log(
      formatString(
        LanguageLocales.covertResultBrlToUsd[language],
        valorConversor,
        valorConversor * (monetaryValues.brl / monetaryValues.usd),
      ),
    );
  }
};
