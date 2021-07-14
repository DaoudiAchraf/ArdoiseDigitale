const newLine = "\n";

export const role = {
  MERCHANT: "merchant",
  CLIENT: "client",
  PENDING_MERCHANT: "pendingMerchant",
};

export const txt = {
  ACCOUNT_CREATED: `Votre Compte a bien été créé.${newLine}Nous avons besoin de quelques informations complémentaires afin de commencer à bien votre opération.${newLine}Appuyez sur le bouton ci-dessous pour commencer`,
  SELECT_CATEGORY:
    "Sélectionner les Catégories de produits que votre commerce offre.",
  SMS_VERIFICATION_CODE: `Nous avons besoin de verifier votre numéro de téléphone vous allez reçevoir un code de verification par SMS.${newLine}Veuillez entrer ce code dans le champs ci-dessous.`,
  SIGNUP_FINAL_STEP:
    'Nous avons toutes les informations nécessaires pour la création de votre compte. En appuyant sur le bouton "Envoyer", vos informations seront envoyées pour la vérification. Une fois la vérification passée, vous reçevrez un SMS contenant les information de connexion.',
};

export const TEXT_ERROR = {
  empty_inputs_signIn:
    "Veuillez saisir votre nom d'utilisateur et le mot de passe pour se connecter",
  empty_input_username:
    "Veuillez saisir votre nom d'utilisateur pour se connecter",
  empty_input_password: "Veuillez saisir votre mot de passe pour se connecter",
};
