<template>
  <div class="login-page">
    <div class="center">
      <router-link to="/check-in" role="button">
        <button class="long-button">{{ $t('message.signIn') }}</button>
      </router-link>
    </div>

    <div class="footer">
      <img class="language-icon" @click="toggleLanguageMenu">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16" @click="toggleLanguageMenu">
        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
      </svg><span @click="toggleLanguageMenu">{{ currentLanguage }}</span>
  
      <div v-if="showLanguageMenu" class="overlay" @click="toggleLanguageMenu">
        <div class="popup" @click.stop>
          <div class="language-option" @click="changeLanguage('de')">
            <img src="../assets/germany.png"  />DE
          </div>
          <div class="language-option" @click="changeLanguage('en')">
            <img src="../assets/united-kingdom.png" > EN
          </div>
          <div class="language-option" @click="changeLanguage('fr')">
            <img src="../assets/france.png" > FR
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      showLanguageMenu: false,
      currentLanguage: 'DE' // Varsayılan dil metni
    };
  },
  methods: {
    toggleLanguageMenu() {
      this.showLanguageMenu = !this.showLanguageMenu;
    },
    changeLanguage(lang) {
      // Dil değiştirme işlemleri
      this.$i18n.locale = lang;
      localStorage.setItem('selectedLanguage', lang); // Dil seçimini yerel depolamada sakla
      this.showLanguageMenu = false;

      // Güncel dil metnini ayarla
      switch (lang) {
        case 'de':
          this.currentLanguage = 'DE';
          break;
        case 'en':
          this.currentLanguage = 'EN';
          break;
        case 'fr':
          this.currentLanguage = 'FR';
          break;
        default:
          this.currentLanguage = 'DE';
      }
    }
  }
}
</script>

<style scoped>
html {
  background-color: #159ba7 !important;
}

.login-page {
  text-align: center;
}

.center {
  margin-top: 50% !important;
}

.long-button {
  width: 60%;
  height: 90px;
  font-size: 20px;
  background-color: #159ba7;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 32px;
}

.language-icon {
  width: 40px;
  height: auto;
  margin-right: 5px;
}

.footer {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center; /* Yatayda merkezleme */
  bottom: 15.3%;
  right: 70px;
}

.footer svg {
  width: 46px;
  height: 46px;
}

.footer span {
  font-size: 28px;
  margin-left: 20px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(121, 114, 114, 0.5);
  display: flex;
  justify-content: center; /* Yatayda merkezleme */
  align-items: center; /* Dikeyde merkezleme */
}

.popup {
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 8%;
  right: 200px;
  width: 18%;
  height: 240px;
  font-size: 38px;
  font-weight: 600;
  color:#56575c;
  margin-bottom: 25px;
  padding-bottom: 50px;
}

.popup::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -20px; /* Üçgenin sağa uzaklığı */
  width: 0;
  height: 0;

  border-style: solid;
  border-width: 15px 0 15px 20px; /* Üçgenin boyutu */
  border-color: transparent transparent transparent #fff; /* Üçgenin rengi ve transparent kenarlar */
}
  
.popup .language-option {
  display: flex;
  align-items: center;
  justify-content: center; /* Yatayda ve dikeyde merkezleme */
  margin: 10px 0;
  cursor: pointer;
}

.popup .language-option img {
  width: 70px;
  height: auto;
  margin-right: 10px;
}
</style>
