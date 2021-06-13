

const newLine = "\n";

export const role ={
    TRADER : 'merchant',
    CLIENT : 'client',
    PENDING_TRADER : 'pendingMerchant'
}

export const txt ={
    ACCOUNT_CREATED : `Votre Compte a bien etait crée.${newLine}Nous avons besoin de quelques informations complémentaire afin de commencer à bien votre opération.${newLine}Appuyez sur le bouton ci-dessous pour commencer`,
    SELECT_CATEGORY : 'Sélectionner les Catégories de produits que votre commerce offre.',
    SMS_VERIFICATION_CODE: `Nous avons besoin de verifier votre numero de telephone ${newLine} vous allez recevoir un code de verification par SMS.${newLine}Veuillez entrer ce code dans le champs ci-dessous.${newLine}Pour renvoyer le code, cliquez ici`,
    SIGNUP_FINAL_STEP : 'Nous avons toutes les informations nécessaires pour la création de votre compte. En appuyant sur le bouton "Envoyer", vos informations seront envoyées pour la vérification. Une fois la vérification passée, vous recevrez un SMS contenant les information de connexion.'
} 


export const TEXT_ERROR = {
      empty_inputs_signIn: "Veuillez saisir votre nom d'utilisateur et le mot de passe pour se connecter",
      empty_input_username: "Veuillez saisir votre nom d'utilisateur pour se connecter",
      empty_input_password: "Veuillez saisir votre mot de passe pour se connecter"
}