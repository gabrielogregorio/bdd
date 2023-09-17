Feature: Type value

  Preenche um valor

  Scenario Outline: Usuário digita um valor linguagem
      Given usuário escolhe uma linguagem <language>
      And usuário escolhe uma conversão <conversion>
      When Ele digita <value>
      Then então deve-se retornar a linguagem <expected>
      Examples:
          | language  | conversion | value  | expected |
          | pt        |  1         |    5   | 5     |
          | pt        |  2         |    10  | 10    |
          | en        |  2         |    -10 | -10   |
          | en        |  1         |    0   | 0     |
