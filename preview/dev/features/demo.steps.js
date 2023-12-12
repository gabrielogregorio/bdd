"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_cucumber_1 = require("jest-cucumber");
const feature = (0, jest_cucumber_1.loadFeature)('./src/features/demo.feature');
(0, jest_cucumber_1.defineFeature)(feature, (test) => {
    test('Testando tabelas', ({ given, when, then }) => {
        given('Aceito alguns valores do usuário', (table) => {
            table.forEach((row) => {
                console.log(`Item : ${row.Item} - Category : ${row.Category}`);
            });
        });
        when('Eu adiciono outro conjunto de dados', (table) => {
            table.forEach((row) => {
                console.log(`List 1 : ${row.List1}\nList 2 : ${row.List2}\nList 3 : ${row.List3}`);
            });
        });
        then('Eu adiciono dados às tabelas', (table) => {
            table.forEach((row) => {
                console.log(`Holiday : ${row.Holiday} - Date : ${row.Date}`);
            });
        });
    });
});
