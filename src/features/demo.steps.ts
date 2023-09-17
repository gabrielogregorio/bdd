/* eslint-disable new-cap */
/* eslint-disable no-array-constructor */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./cucumber/features/demo.feature');

defineFeature(feature, (test) => {
  test('Testando tabelas', ({ given, when, then }) => {
    given('Aceito alguns valores do usuário', (table: any[]) => {
      table.forEach((row: any) => {
        console.log(`Item : ${row.Item} - Category : ${row.Category}`);
      });
    });

    when('Eu adiciono outro conjunto de dados', (table: any[]) => {
      table.forEach((row: any) => {
        console.log(`List 1 : ${row.List1}\nList 2 : ${row.List2}\nList 3 : ${row.List3}`);
      });
    });

    then('Eu adiciono dados às tabelas', (table: any[]) => {
      table.forEach((row: any) => {
        console.log(`Holiday : ${row.Holiday} - Date : ${row.Date}`);
      });
    });
  });
});
