<template>
  <div class="login-page">
    <div class="center">
      <router-link to="/check-in" role="button">
        <button class="long-button">{{ $t('message.signIn') }}</button>
      </router-link>
    </div>
    <LanguageComponent :config="languageConfig" />
  </div>
</template>

<script>
import LanguageComponent from '@/components/LanguageComponent.vue';

export default {
  name: 'HelloWorld',
  components: {
    LanguageComponent
  },
  data() {
    return {
      languageConfig: {
    
        languageOptions: [
          { code: 'de', label: 'DE', flagSrc: '../assets/germany.png' },
          { code: 'en', label: 'EN', flagSrc: '../assets/united-kingdom.png' },
          { code: 'fr', label: 'FR', flagSrc: '../assets/france.png' }
        ],
        footerClass: 'footer',
        footerStyle: {
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bottom: '15.3%',
          right: '70px'
        },
        languageIconClass: 'language-icon',
        globeIconStyle: {
          width: '46px',
          height: '46px'
        },
        currentLanguageStyle: {
          fontSize: '28px',
          marginLeft: '20px'
        },
 
      }
    };
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
</style>
