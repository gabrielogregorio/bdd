"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResultConversion = void 0;
const constants_1 = require("./constants");
const types_1 = require("./types");
const locales_1 = require("./locales");
const formatString_1 = require("./formatString");
const handleResultConversion = (chosenOption, valorConversor, language) => {
    if (chosenOption === types_1.OptionEnum.UsdBrl) {
        console.log((0, formatString_1.formatString)(locales_1.LanguageLocales.convertResultUsdToBrl[language], valorConversor, valorConversor * (constants_1.monetaryValues.usd / constants_1.monetaryValues.brl)));
    }
    else if (chosenOption === '2') {
        console.log((0, formatString_1.formatString)(locales_1.LanguageLocales.covertResultBrlToUsd[language], valorConversor, valorConversor * (constants_1.monetaryValues.brl / constants_1.monetaryValues.usd)));
    }
};
exports.handleResultConversion = handleResultConversion;
