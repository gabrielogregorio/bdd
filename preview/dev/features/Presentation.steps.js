"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_cucumber_1 = require("jest-cucumber");
const renderPresentation_1 = require("../renderPresentation");
const types_1 = require("../types");
const feature = (0, jest_cucumber_1.loadFeature)('./src/features/Presentation.feature');
(0, jest_cucumber_1.defineFeature)(feature, (test) => {
    test('Receber mensagens no idioma definido em português', ({ given, when, then }) => {
        let chosenLanguage;
        let message;
        given(/^sou o usuário "Lucas" que escolheu o idioma "pt"$/, () => {
            chosenLanguage = types_1.LanguageEnum.PtBr;
        });
        when(/^o sistema exibe o texto de introdução$/, () => {
            message = (0, renderPresentation_1.renderPresentation)(chosenLanguage);
        });
        then(/^ver a mensagem começando com "(.*)"$/, (messageExpected) => {
            expect(message).toContain(messageExpected);
        });
    });
    test('Receber mensagens no idioma definido em inglês', ({ given, when, then }) => {
        let chosenLanguage;
        let message;
        given(/^sou o usuário "Susan" que escolheu o idioma "en"$/, () => {
            chosenLanguage = types_1.LanguageEnum.EnUs;
        });
        when(/^o sistema exibe o texto de introdução$/, () => {
            message = (0, renderPresentation_1.renderPresentation)(chosenLanguage);
        });
        then(/^ver a mensagem começando com "(.*)"$/, (messageExpected) => {
            expect(message).toContain(messageExpected);
        });
    });
});
