"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jest_cucumber_1 = require("jest-cucumber");
const promptUser = __importStar(require("../promptUser"));
const handleChosenOption_1 = require("../handleChosenOption");
const feature = (0, jest_cucumber_1.loadFeature)('./src/features/chooseMonetary.feature');
(0, jest_cucumber_1.defineFeature)(feature, (test) => {
    test('Usuário escolhe uma conversão', ({ given, when, then, and }) => {
        let lastLanguageChoice;
        let errorCaught = null;
        let language = null;
        given(/^Lucas escolheu a linguagem "(.*)"$/, (languageSelected) => {
            language = languageSelected;
        });
        and(/^lucas escolhe uma das opções de conversão$/, () => {
        });
        when(/^ele digita (.*)$/, (option) => {
            const spyUseAuth = jest.spyOn(promptUser, 'promptUser');
            spyUseAuth.mockImplementation(() => option);
            try {
                lastLanguageChoice = (0, handleChosenOption_1.handleChosenOption)(language);
            }
            catch (error) {
                errorCaught = error;
            }
        });
        then(/^então deve-se retornar a opção "(.*)"$/, (optionChoice) => {
            expect(errorCaught).toBeNull();
            expect(lastLanguageChoice).toContain(optionChoice);
        });
    });
    test('Usuário escolhe uma conversão inválida', ({ given, when, then, and }) => {
        let language = null;
        let lastLanguageChoice;
        let errorCaught = null;
        given(/^Lucas escolheu a linguagem "(.*)"$/, (languageSelected) => {
            language = languageSelected;
        });
        and(/^lucas escolhe uma das opções inválidas de conversão$/, () => {
        });
        when(/^ele digita (.*)$/, (option) => {
            const spyUseAuth = jest.spyOn(promptUser, 'promptUser');
            spyUseAuth.mockImplementation(() => option);
            try {
                lastLanguageChoice = (0, handleChosenOption_1.handleChosenOption)(language);
            }
            catch (error) {
                errorCaught = error;
            }
        });
        then(/^então deve-se retornar erro "(.*)"$/, (errorMessage) => {
            expect(lastLanguageChoice).toBeUndefined();
            expect(errorCaught.message).toContain(errorMessage);
        });
    });
});
