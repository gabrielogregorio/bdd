Feature: Choose Conversão

    Escolher uma conversão

    Scenario: Usuário escolhe uma conversão
        Given Lucas escolheu a linguagem "pt"
        And lucas escolhe uma das opções de conversão
        When ele digita 1
        Then então deve-se retornar a opção escolhida

    Scenario: Usuário escolhe uma conversão inválida
        Given Lucas escolheu a linguagem "pt"
        And lucas escolhe uma das opções de conversão
        When ele digita 99
        Then então deve-se retornar erro com o texto "essa opção é inválida"
