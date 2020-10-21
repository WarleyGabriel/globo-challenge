# globo-challenge

Este é um projeto de testes de integração (end-to-end).
Os testes foram desenvolvidos utilizando JavaScript com [WebdriverIO](https://webdriver.io/) e [Mocha](https://mochajs.org/).

## Requisitos

- chrome - [como instalar Chrome](https://www.google.com/chrome)  
  Obs: Os testes executaram em sua máquina, localmente, porém essa estrutura permite ser executada no modelo cross browser.
- node >= 12.18.x - [como instalar Node](https://nodejs.org/en/download/)
- npm >= 6.14.x - [como instalar NPM](https://www.npmjs.com/get-npm)

## Inicializando ambiente

Instalando as depedências:

```bash
npm install
```

## Executando testes

Executando os testes e2e:

```bash
npm run test
```

Resultados no console:

```bash
 "spec" Reporter:
------------------------------------------------------------------
[chrome 86.0.4240.111 mac os x #0-0] Spec: /Users/warley/Workspace/personal/globo-challenge/test/specs/login.js
[chrome 86.0.4240.111 mac os x #0-0] Running: chrome (v86.0.4240.111) on mac os x
[chrome 86.0.4240.111 mac os x #0-0] Session ID: ce62152921330c1c02eb4abb4c6c4109
[chrome 86.0.4240.111 mac os x #0-0]
[chrome 86.0.4240.111 mac os x #0-0] Funcionalidade de login
[chrome 86.0.4240.111 mac os x #0-0]    ✓ Exibe usuário logado com sucesso, quando acesso feito com credenciais válidas.
[chrome 86.0.4240.111 mac os x #0-0]
[chrome 86.0.4240.111 mac os x #0-0] 1 passing (17.5s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:19
```
