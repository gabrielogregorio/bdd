import { renderPresentation } from './renderPresentation';
import { handleChosenOption } from './handleChosenOption';
import { handleGetMonetaryConversion } from './handleGetMonetaryConversion';
import { handleResultConversion } from './handleResultConversion';
import { handleChosenLanguage } from './handleChosenLanguage';

const main = () => {
  const language = handleChosenLanguage();

  renderPresentation(language);

  const chosenOption = handleChosenOption(language);
  const valorConversor = handleGetMonetaryConversion(chosenOption, language);

  handleResultConversion(chosenOption, valorConversor, language);
};

main();
