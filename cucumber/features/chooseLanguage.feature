Feature: Choose Language

    Escolha de uma linguagem

    Scenario: Usuário escolhe linguagem pt-br
        Given O usuário escolhe uma linguagem
        When Ele digita "pt"
        Then então deve-se retornar a linguagem "pt"

    Scenario: Usuário escolhe uma linguagem inválida
        Given O usuário escolhe uma linguagem
        When Ele digita "fr"
        Then O sistema retorna um erro "this language are available"
