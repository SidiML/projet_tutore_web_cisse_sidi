import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage();

class LoginStep {
  setLogin(username, password) {
    loginPage.setUsername(username); // Saisit le nom d'utilisateur dans le champ correspondant
    loginPage.setPassword(password); // Saisit le mot de passe dans le champ correspondant
    loginPage.signIn(); // Clique sur le bouton de connexion
  }

  checkMessage(message) {
    loginPage.checkConnection(message); // Vérifie que le message de connexion est affiché correctement
  }
  
  CheckFailMessage(message) {
    loginPage.checkErrorMessage(message); // Vérifie que le message d'erreur est affiché correctement
  }

  Logout() {
    loginPage.logOff(); // Clique sur le bouton du menu de déconnexion
    loginPage.logOff1(); // Clique sur le bouton de déconnexion
  }
}

export default LoginStep;