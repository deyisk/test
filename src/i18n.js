import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      signIn: 'Sign in'
    }
  },
  de: {
    message: {
      signIn: 'Anmelden'
    }
  },
  fr: {
    message: {
      signIn: "S'inscrire"
    }
  }
};

const i18n = new VueI18n({
  locale: 'de', 
  messages,
});

export default i18n;
