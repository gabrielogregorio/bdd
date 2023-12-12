"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptUser = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const promptUser = (message) => (0, prompt_sync_1.default)()(message);
exports.promptUser = promptUser;
