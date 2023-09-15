Feature: Presentation Feature

    Para verificar se o usuário recebe a mensagem no idioma definido

    Scenario: Receber mensagens no idioma definido em português
        Given sou o usuário "Lucas" que escolheu o idioma "pt"
        When o sistema exibe o texto de introdução
        Then ver a mensagem começando com "Bem vindo ao seu conversor favorito de moedas!"

    Scenario: Receber mensagens no idioma definido em inglês
        Given sou o usuário "Susan" que escolheu o idioma "en"
        When o sistema exibe o texto de introdução
        Then ver a mensagem começando com "Welcome to your favorite currency converter!"

