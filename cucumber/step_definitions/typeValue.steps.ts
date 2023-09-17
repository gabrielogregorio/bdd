import { loadFeature, defineFeature } from 'jest-cucumber';
import * as promptUser from '../../src/promptUser';
import { handleGetMonetaryConversion } from '../../src/handleGetMonetaryConversion';
import { LanguageEnum, OptionEnum } from '../../src/types';

const feature = loadFeature('./cucumber/features/typeValue.feature');

defineFeature(feature, (test) => {
  test('Usuário digita um valor linguagem', ({ given, when, then, and }) => {
    let chosenOption: OptionEnum = null;
    let lastLanguageChoice: number | undefined;
    let errorCaught: Error | null = null;
    let language: LanguageEnum = null;

    given(/^usuário escolhe uma linguagem (.*)$/, (languageSelected) => {
      language = languageSelected;
    });

    and(/^usuário escolhe uma conversão (.*)$/, (option) => {
      chosenOption = option;
    });

    when(/^Ele digita (.*)$/, (value) => {
      const spyUseAuth = jest.spyOn(promptUser, 'promptUser');
      spyUseAuth.mockImplementation(() => value);

      try {
        lastLanguageChoice = handleGetMonetaryConversion(chosenOption, language);
      } catch (error) {
        errorCaught = error;
      }
    });

    then(/^então deve-se retornar a linguagem (.*)$/, (languageExpected) => {
      expect(errorCaught).toBeNull();
      expect(lastLanguageChoice).toEqual(Number(languageExpected));
    });
  });
});
