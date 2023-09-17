Feature: Choose Language

  Escolha de uma linguagem

  Scenario Outline: Usuário escolhe linguagem
      Given O usuário escolhe uma linguagem
      When Ele digita <language>
      Then então deve-se retornar a linguagem <result>
      Examples:
          | language  | result |
          | pt        | pt     |
          | en        | en     |

  Scenario: Usuário escolhe uma linguagem inválida
      Given O usuário escolhe uma linguagem
      When Ele digita "fr"
      Then O sistema retorna um erro "this language are available"
