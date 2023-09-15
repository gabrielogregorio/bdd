import { promptUser } from './promptUser';
import { LanguageEnum } from './types';

export const handleChosenLanguage = (): LanguageEnum => {
  const chosenOption = promptUser('Your language | Seu idioma (pt or en): ').trim().replace('\n', '');

  if (!['pt', 'en'].includes(chosenOption)) {
    throw new Error('this language are available');
  }

  return chosenOption;
};
