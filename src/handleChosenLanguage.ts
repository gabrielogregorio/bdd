import prompt from 'prompt-sync';
import { LanguageEnum } from './types';

export const handleChosenLanguage = (): LanguageEnum => {
  let chosenOption = LanguageEnum.PtBr;
  let optionIsValid = false;

  while (!optionIsValid) {
    chosenOption = prompt()('Your language | Seu idioma (pt or en): ').trim().replace('\n','');

    if (['pt', 'en'].includes(chosenOption)) {
      optionIsValid = true;
    } else {
      //
    }
  }

  return chosenOption;
};
