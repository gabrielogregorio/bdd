import { loadFeature, defineFeature } from 'jest-cucumber';
import { handleChosenLanguage } from '../../src/handleChosenLanguage';
import * as promptUser from '../../src/promptUser';

const feature = loadFeature('./cucumber/features/chooseLanguage.feature');

let lastLanguageChoice: string | undefined;
let errorCaught: Error | null = null;

defineFeature(feature, (test) => {
  beforeEach(() => {
    errorCaught = null;
  });

  test('Usuário escolhe linguagem', ({ given, when, then }) => {
    given(/^O usuário escolhe uma linguagem$/, () => {
      //
    });

    when(/^Ele digita "(.*)"$/, (language) => {
      const spyUseAuth = jest.spyOn(promptUser, 'promptUser');
      spyUseAuth.mockImplementation(() => language);

      try {
        lastLanguageChoice = handleChosenLanguage();
      } catch (error) {
        errorCaught = error;
      }
    });

    then(/^então deve-se retornar a linguagem "(.*)"$/, (languageExpected) => {
      expect(errorCaught).toBeNull();
      expect(lastLanguageChoice).toContain(languageExpected);
    });
  });

  test('Usuário escolhe uma linguagem inválida', ({ given, when, then }) => {
    given(/^O usuário escolhe uma linguagem$/, () => {
      //
    });

    when(/^Ele digita "(.*)"$/, (language) => {
      const spyUseAuth = jest.spyOn(promptUser, 'promptUser');
      spyUseAuth.mockImplementation(() => language);

      try {
        lastLanguageChoice = handleChosenLanguage();
      } catch (error) {
        errorCaught = error;
      }
    });

    then(/^O sistema retorna um erro "(.*)"$/, (messageExpected) => {
      expect(errorCaught.message).toBe(messageExpected);
    });
  });
});
