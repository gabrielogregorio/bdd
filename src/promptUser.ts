import prompt from 'prompt-sync';

export const promptUser = (message: string) => prompt()(message);
