"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleChosenOption = void 0;
const locales_1 = require("./locales");
const promptUser_1 = require("./promptUser");
const handleChosenOption = (language) => {
    const chosenOption = (0, promptUser_1.promptUser)(locales_1.LanguageLocales.typeOption[language]).trim().replace('\n', '');
    if (!['1', '2'].includes(chosenOption)) {
        throw new Error(locales_1.LanguageLocales.typeValidOption[language]);
    }
    return chosenOption;
};
exports.handleChosenOption = handleChosenOption;
