import PageGestionCompte from "../pages/PageGestionCompte";

const pageGestionCompte = new PageGestionCompte();

class StepGestionCompte {
  ActiveCompte(data) {
    pageGestionCompte.accesConfig(); // Accède à la configuration
    pageGestionCompte.accesUsers(); // Accède à la liste des utilisateurs
    pageGestionCompte.accesUsersList(); // Accède à la liste des utilisateurs
    pageGestionCompte.activationAccount(data); // Active le compte avec les données fournies
  }
}

export default StepGestionCompte;
