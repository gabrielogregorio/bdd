Feature: any Feature

    Para verificar se Jest pepino funciona com texto digitado

    Scenario Outline: Testando tabelas
        Given Aceito alguns valores do usuário
            | Item   | Category   |
            | Laptop | Device     |
            | Mobile | Phone      |
            | Pen    | Stationary |
        When Eu adiciono outro conjunto de dados
            | List1 | List2   | List3    |
            | Mouse | Glasses | Bottle   |
            | Phone | Monitor | Laptop   |
            | Apps  | git     | Keyboard |

        Then Eu adiciono dados às tabelas
            | Holiday   | Date   |
            | <holiday> | <date> |
        Examples:
            | holiday   | date        |
            | New Years | 01 Jan 2019 |
