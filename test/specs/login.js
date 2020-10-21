const HomePage = require("../pages/home.page");
const LoginPage = require("../pages/login.page");

describe("Funcionalidade de login", () => {
  it("Exibe usuário logado com sucesso, quando acesso feito com credenciais válidas.", () => {
    const usuario = {
      nome: "Automação testes",
      email: "automacao@mail.com",
      senha: "123456789",
    };

    HomePage.acessarGloboPlay();
    HomePage.acessarTelaDeLogin();

    LoginPage.login(usuario);

    HomePage.acessarMenuSuspensoUsuario();

    expect(HomePage.nomeUsuarioLogado).toHaveText(usuario.nome);
    expect(HomePage.emailUsuarioLogado).toHaveText(usuario.email);

    // Esse sleep é desnecessário, está aqui somente para que possamos ver o resultado :)
    browser.pause(3000);
  });
});
