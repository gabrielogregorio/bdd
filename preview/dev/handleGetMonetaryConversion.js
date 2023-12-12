"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetMonetaryConversion = void 0;
const promptUser_1 = require("./promptUser");
const types_1 = require("./types");
const locales_1 = require("./locales");
const formatString_1 = require("./formatString");
const handleGetMonetaryConversion = (chosenOption, language) => {
    const from = chosenOption === types_1.OptionEnum.UsdBrl ? 'USD' : 'BRL';
    const localValue = (0, promptUser_1.promptUser)((0, formatString_1.formatString)(locales_1.LanguageLocales.typeValueInCurrency[language], from))
        .trim()
        .replace('\n', '');
    const valorConversor = parseFloat(localValue);
    if (typeof valorConversor !== 'number') {
        console.log(locales_1.LanguageLocales.typeAValidOption[language]);
    }
    return valorConversor;
};
exports.handleGetMonetaryConversion = handleGetMonetaryConversion;
