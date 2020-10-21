class HomePage {
  get spinner() {
    return $(".spinner__icon");
  }

  get toolbarUsuario() {
    return $("span.toolbar__user-arrow");
  }

  get btnEntrar() {
    return $("div.toolbar__container button.login-button");
  }

  get containerAreaDoUsuario() {
    return $(".user-area");
  }

  get emailUsuarioLogado() {
    return this.containerAreaDoUsuario.$(".menu-header__email");
  }

  get nomeUsuarioLogado() {
    return this.containerAreaDoUsuario.$(".menu-header__name");
  }

  acessarGloboPlay() {
    browser.url("/");
    this.spinner.waitForDisplayed({
      reverse: true,
      timeout: 2000,
      timeoutMsg: "Sistema permaneceu carregando após 20 segundos.",
    });
  }

  acessarMenuSuspensoUsuario() {
    this.toolbarUsuario.waitForClickable();
    this.toolbarUsuario.click();
  }

  acessarTelaDeLogin() {
    this.acessarMenuSuspensoUsuario();
    this.btnEntrar.click();
  }
}

module.exports = new HomePage();
