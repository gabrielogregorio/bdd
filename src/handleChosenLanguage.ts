import prompt from 'prompt-sync';
import { LanguageEnum } from './types';

export const promptUser = () => prompt('Your language | Seu idioma (pt or en): ');

export const handleChosenLanguage = (): LanguageEnum => {
  let chosenOption = LanguageEnum.PtBr;
  let optionIsValid = false;

  while (!optionIsValid) {
    chosenOption = promptUser().trim().replace('\n', '');

    if (['pt', 'en'].includes(chosenOption)) {
      optionIsValid = true;
    } else {
      //
    }
  }

  return chosenOption;
};
