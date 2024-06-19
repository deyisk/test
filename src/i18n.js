import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {

    videoCall: {
      headerTitle: 'Call Reception',
      startChatButton: 'Start Chat with Arvia',
      thankYouMessage: 'Thank you for signing. ',
      connectingMessage:'We are now connecting you to our reception',
      backButton:'Back',
    },
    message: {
      signIn: 'Sign In',
      back: 'Back',
      forward: 'Next',
      scanPrompt: 'Scan your QR code or enter the code from the invitation email.',
      inputLabel: 'Code/Name/Email Address',
      inputPlaceholder: 'Enter your code here',
      errorMessage: 'Unauthorized - please report to reception',
      headerTitle: 'Instructions',
      welcome: 'We warmly welcome you.',
      instructionsIntro: 'To ensure your stay with us is pleasant and accident-free, please observe the following points:',
      points: [
        'Please wear your visitor badge visibly on your clothing.',
        'Do not deviate from the designated visitor paths.',
        'Move only with your contact person/escort.',
        'Access to restricted areas is prohibited.',
        'Electronic devices must not be connected to the company network.',
        'Entrance doors must always be kept closed and must not be unlocked.'
      ],
      importantNotes: 'Important Notes:',
      instructionsEnd: 'Please sign here, Mr. Martin Gruber',
      resetSignature: 'Reset Signature',
      firstLine: 'Mr. Martin Gruber,',
      secondLine: 'Please read the instructions and sign afterwards.',
      noiseArea: 'Noise areas are particularly marked. Hearing protection must be worn when machines are running.',
      safetyVest: 'Wearing a safety vest is mandatory on the premises.',
      safetyShoes: 'Wearing safety shoes is mandatory on the premises.',
      videoSurveillance: 'The premises are secured with video cameras.',
      signsInWorkArea: 'Meaning of signs in the workplace',
      emergencyExit: 'Emergency Exit',
      assemblyPoint: 'Assembly point after a possible evacuation of the building',
      firstAidKitLocation: 'Location of first aid kit',
      noSmoking: 'Smoking ban throughout the house',
      noPhotography: 'Photographing and filming is prohibited throughout the operation',
      noEntry: 'Access for unauthorized persons is prohibited',
      speedLimit: 'Maximum speed on the premises',
      fireExtinguisherLocation: 'Location of fire extinguisher',
      electricalHazard: 'Warning of dangerous electrical voltage',
      forkliftTraffic: 'Forklift traffic throughout the premises. Pedestrians are only allowed to use the designated paths.'
    }
  },
  de: {

    videoCall: {
      headerTitle: 'Empfang anrufen',
      startChatButton: 'Chat starten mit Arvia',
      thankYouMessage: 'Vielen Dank für Ihre Unterschrift. ',
      connectingMessage:'Wir verbinden Sie nun mit unserem Empfang',
      backButton:'Zurück',
    },
    message: {
      signIn: 'Anmelden',
      back: 'Zurück',
      forward: 'Weiter',
      scanPrompt: 'Scannen Sie Ihren QR-Code oder geben Sie den Code aus der Einladungsmail ein.',
      inputLabel: 'Code/Name/Email-Adresse',
      inputPlaceholder: 'Geben Sie hier Ihren Code ein',
      errorMessage: 'Nicht berechtigt - bitte am Empfang melden',
      headerTitle: 'Unterweisung',
      welcome: 'Wir heißen Sie herzlich willkommen.',
      instructionsIntro: 'Damit Ihr Aufenthalt bei uns angenehm und vor allem unfallfrei abläuft, bitten wir Sie, folgende Punkte zu beachten:',
      points: [
        'Bitte tragen Sie Ihren Besucherausweis sichtbar an Ihrer Kleidung.',
        'Weichen Sie nicht von den vorgesehenen Besucherwegen ab.',
        'Bewegen Sie sich nur mit Ihrem Ansprechpartner/Ihrer Begleitperson.',
        'Der Zugang zu gesperrten Bereichen ist untersagt.',
        'Elektronische Geräte dürfen nicht am Firmennetzwerk angeschlossen werden.',
        'Eingangstüren sind immer geschlossen zu halten und dürfen nicht entsperrt werden.'
      ],
      importantNotes: 'Wichtige Hinweise:',
      instructionsEnd: 'Bitte unterschreiben Sie hier, Herr Martin Gruber',
      resetSignature: 'Unterschrift zurücksetzen',
      firstLine: 'Herr Martin Gruber,',
      secondLine: 'Bitte lesen Sie die Unterweisungen und unterschreiben diese danach.',
      noiseArea: 'Lärmbereiche sind besonders gekennzeichnet. Hier ist bei laufenden Maschinen Gehörschutz zu tragen.',
      safetyVest: 'Auf dem Gelände ist das Tragen einer Warnweste verpflichtend.',
      safetyShoes: 'Auf dem Gelände ist das Tragen von Sicherheitsschuhen verpflichtend.',
      videoSurveillance: 'Das Gelände wird mit Videokameras gesichert.',
      signsInWorkArea: 'Bedeutung von Schildern im Arbeitsbereich',
      emergencyExit: 'Notausgang',
      assemblyPoint: 'Sammelplatz nach einer möglichen Evakuierung des Gebäudes',
      firstAidKitLocation: 'Standort Verbandkasten',
      noSmoking: 'Rauchverbot im gesamten Haus',
      noPhotography: 'Fotografieren und Filmen ist im gesamten Betrieb verboten',
      noEntry: 'Zutritt für Unbefugte ist verboten',
      speedLimit: 'Höchstgeschwindigkeit auf dem Gelände',
      fireExtinguisherLocation: 'Standort Feuerlöscher',
      electricalHazard: 'Warnung vor gefährlicher elektrischer Spannung',
      forkliftTraffic: 'Staplerverkehr auf dem gesamten Gelände. Fußgänger haben ausschließlich die gekennzeichneten Wege zu benutzen.'
    }
  },
  fr: {
    videoCall: {
      headerTitle: 'Réception  d\'appel ',
      startChatButton: 'Démarrer la discussion',
      thankYouMessage: 'Merci pour votre signature.',
      connectingMessage:'Nous vous connectons maintenant à notre réception',
      backButton:'Retour',
    },
    message: {
      signIn: 'Se connecter',
      back: 'Retour',
      forward: 'Suivant',
      scanPrompt: 'Scannez votre code QR ou entrez le code de l\'email d\'invitation.',
      inputLabel: 'Code/Nom/Adresse e-mail',
      inputPlaceholder: 'Entrez votre code ici',
      errorMessage: 'Non autorisé - veuillez vous présenter à la réception',
      headerTitle: 'Instructions',
      welcome: 'Nous vous souhaitons la bienvenue.',
      instructionsIntro: 'Pour que votre séjour chez nous soit agréable et sans accident, veuillez respecter les points suivants:',
      points: [
        'Veuillez porter votre badge de visiteur visiblement sur vos vêtements.',
        'Ne déviez pas des chemins désignés pour les visiteurs.',
        'Déplacez-vous uniquement avec votre personne de contact/escort.',
        'L\'accès aux zones restreintes est interdit.',
        'Les appareils électroniques ne doivent pas être connectés au réseau de l\'entreprise.',
        'Les portes d\'entrée doivent toujours être fermées et ne doivent pas être déverrouillées.'
      ],
      importantNotes: 'Notes Importantes:',
      instructionsEnd: 'Veuillez signer ici, M. Martin Gruber',
      resetSignature: 'Réinitialiser la signature',
      firstLine: 'M. Martin Gruber,',
      secondLine: 'Veuillez lire les instructions et signer ensuite.',
      noiseArea: 'Les zones de bruit sont particulièrement signalées. Une protection auditive doit être portée lorsque les machines fonctionnent.',
      safetyVest: 'Le port d\'un gilet de sécurité est obligatoire sur le site.',
      safetyShoes: 'Le port de chaussures de sécurité est obligatoire sur le site.',
      videoSurveillance: 'Le site est sécurisé par des caméras vidéo.',
      signsInWorkArea: 'Bedeutung von Schildern im Arbeitsbereich',
      emergencyExit: 'Sortie de secours',
      assemblyPoint: 'Point de rassemblement après une évacuation éventuelle du bâtiment',
      firstAidKitLocation: 'Emplacement de la trousse de premiers soins',
      noSmoking: 'Interdiction de fumer dans toute la maison',
      noPhotography: 'La photographie et la prise de vue sont interdites dans toute l\'opération',
      noEntry: 'Accès interdit aux personnes non autorisées',
      speedLimit: 'Limite de vitesse sur les lieux',
      fireExtinguisherLocation: 'Emplacement de l\'extincteur',
      electricalHazard: 'Avertissement de tension électrique dangereuse',
      forkliftTraffic: 'Trafic de chariots élévateurs sur tout le site. Les piétons ne sont autorisés à utiliser que les voies désignées.'
    }
  }
};

const i18n = new VueI18n({
  locale: localStorage.getItem('selectedLanguage') || 'de',
  fallbackLocale: 'de',
  messages
});

export default i18n;
