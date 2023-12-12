"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renderPresentation_1 = require("./renderPresentation");
const handleChosenOption_1 = require("./handleChosenOption");
const handleGetMonetaryConversion_1 = require("./handleGetMonetaryConversion");
const handleResultConversion_1 = require("./handleResultConversion");
const handleChosenLanguage_1 = require("./handleChosenLanguage");
const main = () => {
    const language = (0, handleChosenLanguage_1.handleChosenLanguage)();
    (0, renderPresentation_1.renderPresentation)(language);
    const chosenOption = (0, handleChosenOption_1.handleChosenOption)(language);
    const valorConversor = (0, handleGetMonetaryConversion_1.handleGetMonetaryConversion)(chosenOption, language);
    (0, handleResultConversion_1.handleResultConversion)(chosenOption, valorConversor, language);
};
main();
