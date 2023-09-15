import { loadFeature, defineFeature } from 'jest-cucumber';
import { renderPresentation } from '../../src/renderPresentation';
import { LanguageEnum } from '../../src/types';

const feature = loadFeature('./cucumber/features/Presentation.feature');

defineFeature(feature, (test) => {
  test('Receber mensagens no idioma definido em português', ({ given, when, then }) => {
    let chosenLanguage: LanguageEnum;
    let message: string;

    given(/^sou o usuário "Lucas" que escolheu o idioma "pt"$/, () => {
      chosenLanguage = LanguageEnum.PtBr;
    });

    when(/^o sistema exibe o texto de introdução$/, () => {
      message = renderPresentation(chosenLanguage);
    });

    then(/^ver a mensagem começando com "(.*)"$/, (messageExpected) => {
      expect(message).toContain(messageExpected);
    });
  });

  test('Receber mensagens no idioma definido em inglês', ({ given, when, then }) => {
    let chosenLanguage: LanguageEnum;
    let message: string;

    given(/^sou o usuário "Susan" que escolheu o idioma "en"$/, () => {
      chosenLanguage = LanguageEnum.EnUs;
    });

    when(/^o sistema exibe o texto de introdução$/, () => {
      message = renderPresentation(chosenLanguage);
    });

    then(/^ver a mensagem começando com "(.*)"$/, (messageExpected) => {
      expect(message).toContain(messageExpected);
    });
  });
});
