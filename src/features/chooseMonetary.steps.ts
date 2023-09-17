import { loadFeature, defineFeature } from 'jest-cucumber';
import * as promptUser from '../promptUser';
import { handleChosenOption } from '../handleChosenOption';
import { LanguageEnum } from '../types';

const feature = loadFeature('./cucumber/features/chooseMonetary.feature');

defineFeature(feature, (test) => {
  test('Usuário escolhe uma conversão', ({ given, when, then, and }) => {
    let lastLanguageChoice: string | undefined;
    let errorCaught: Error | null = null;

    let language: LanguageEnum = null;
    given(/^Lucas escolheu a linguagem "(.*)"$/, (languageSelected) => {
      language = languageSelected;
    });

    and(/^lucas escolhe uma das opções de conversão$/, () => {
      //
    });

    when(/^ele digita (.*)$/, (option) => {
      const spyUseAuth = jest.spyOn(promptUser, 'promptUser');
      spyUseAuth.mockImplementation(() => option);

      try {
        lastLanguageChoice = handleChosenOption(language);
      } catch (error) {
        errorCaught = error;
      }
    });

    then(/^então deve-se retornar a opção "(.*)"$/, (optionChoice) => {
      expect(errorCaught).toBeNull();
      expect(lastLanguageChoice).toContain(optionChoice);
    });
  });

  test('Usuário escolhe uma conversão inválida', ({ given, when, then, and }) => {
    let language: LanguageEnum = null;
    let lastLanguageChoice: string | undefined;
    let errorCaught: Error | null = null;

    given(/^Lucas escolheu a linguagem "(.*)"$/, (languageSelected) => {
      language = languageSelected;
    });

    and(/^lucas escolhe uma das opções inválidas de conversão$/, () => {
      //
    });

    when(/^ele digita (.*)$/, (option) => {
      const spyUseAuth = jest.spyOn(promptUser, 'promptUser');
      spyUseAuth.mockImplementation(() => option);

      try {
        lastLanguageChoice = handleChosenOption(language);
      } catch (error) {
        errorCaught = error;
      }
    });

    then(/^então deve-se retornar erro "(.*)"$/, (errorMessage) => {
      expect(lastLanguageChoice).toBeUndefined();
      expect(errorCaught.message).toContain(errorMessage);
    });
  });
});
