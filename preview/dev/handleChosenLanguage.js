"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleChosenLanguage = void 0;
const promptUser_1 = require("./promptUser");
const handleChosenLanguage = () => {
    const chosenOption = (0, promptUser_1.promptUser)('Your language | Seu idioma (pt or en): ').trim().replace('\n', '');
    if (!['pt', 'en'].includes(chosenOption)) {
        throw new Error('this language are available');
    }
    return chosenOption;
};
exports.handleChosenLanguage = handleChosenLanguage;
