class LoginPage {
  get iframeLogin() {
    return $("div.login-modal iframe");
  }

  get inputEmail() {
    return $("#login");
  }

  get inputSenha() {
    return $("#password");
  }

  get btnAcessar() {
    return $("button=Entrar");
  }

  login({ email, senha }) {
    browser.switchToFrame(this.iframeLogin);

    this.inputEmail.setValue(email);
    this.inputSenha.setValue(senha);
    this.btnAcessar.click();
  }
}

module.exports = new LoginPage();
