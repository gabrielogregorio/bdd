"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatString = void 0;
const formatString = (template, ...args) => {
    let formattedString = template;
    args.forEach((arg) => {
        formattedString = formattedString.replace('{}', arg.toString());
    });
    return formattedString;
};
exports.formatString = formatString;
