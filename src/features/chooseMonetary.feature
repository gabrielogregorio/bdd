Feature: Choose Conversão

    Escolher uma conversão

    Scenario Outline: Usuário escolhe uma conversão
        Given Lucas escolheu a linguagem "<language>"
        And lucas escolhe uma das opções de conversão
        When ele digita <option>
        Then então deve-se retornar a opção "<result>"
        Examples:
          | language | option | result |
          | pt       | 1      |  1     |
          | en       | 1      |  1     |
          | pt       | 2      |  2     |
          | en       | 2      |  2     |


    Scenario Outline: Usuário escolhe uma conversão inválida
        Given Lucas escolheu a linguagem "<language>"
        And lucas escolhe uma das opções inválidas de conversão
        When ele digita <option>
        Then então deve-se retornar erro "<errorMessage>"
        Examples:
          | language | option | errorMessage                      |
          | pt       | 10     |  Digite uma operação válida:      |
          | pt       | -1     |  Digite uma operação válida:      |
          | en       | 9      |  Please enter a valid operation:  |
          | en       | 0      |  Please enter a valid operation:  |
