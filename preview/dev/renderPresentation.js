"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPresentation = void 0;
const locales_1 = require("./locales");
const renderPresentation = (language) => {
    const message = locales_1.LanguageLocales.textPresentation[language];
    console.log(message);
    return message;
};
exports.renderPresentation = renderPresentation;
