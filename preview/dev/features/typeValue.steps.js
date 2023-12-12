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
const handleGetMonetaryConversion_1 = require("../handleGetMonetaryConversion");
const feature = (0, jest_cucumber_1.loadFeature)('./src/features/typeValue.feature');
(0, jest_cucumber_1.defineFeature)(feature, (test) => {
    test('Usuário digita um valor linguagem', ({ given, when, then, and }) => {
        let chosenOption = null;
        let lastLanguageChoice;
        let errorCaught = null;
        let language = null;
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
                lastLanguageChoice = (0, handleGetMonetaryConversion_1.handleGetMonetaryConversion)(chosenOption, language);
            }
            catch (error) {
                errorCaught = error;
            }
        });
        then(/^então deve-se retornar a linguagem (.*)$/, (languageExpected) => {
            expect(errorCaught).toBeNull();
            expect(lastLanguageChoice).toEqual(Number(languageExpected));
        });
    });
});
