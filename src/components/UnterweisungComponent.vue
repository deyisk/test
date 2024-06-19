<template>
  <div>
    <div class="header" :style="headerStyle">
      <h1 :style="headerTitleStyle">{{ $t('message.headerTitle') }}</h1>
      <i class="fa fa-pencil" :style="iconStyle" aria-hidden="true"></i>
    </div>
    
    <div class="text" :style="textConfig.style">
      <p :style="firstLineStyle">{{ $t('message.firstLine') }}</p>
      <p :style="secondLineStyle">{{ $t('message.secondLine') }}</p>
    </div>
    
    <div class="scrollable-content" :style="scrollableContentStyle">
      <div class="inner-content" :style="innerContentStyle">
        <h2>{{ $t('message.importantNotes') }}</h2>
        <p><b>{{ $t('message.welcome') }}</b></p>
        <p>{{ $t('message.instructionsIntro') }}</p>
        <ul>
          <li v-for="(point, index) in $t('message.points')" :key="index">{{ point }}</li>
        </ul>
        <h3>{{ $t('message.importantNotes') }}</h3>
        <table border="0">
          <tbody>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Laermbereich.png" style="width: 50px; height: 50px;"></td>
              <td style="padding-left: 40px;">{{ $t('message.noiseArea') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Sicherheitsweste.png" style="width: 50px; height: 50px;"></td>
              <td style="padding-left: 40px;">{{ $t('message.safetyVest') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Sicherheitsschuhe.png" style="width: 50px; height: 50px;"></td>
              <td style="padding-left: 40px;">{{ $t('message.safetyShoes') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Video.png" style="width: 50px; height: 50px;"></td>
              <td style="padding-left: 40px;">{{ $t('message.videoSurveillance') }}</td>
            </tr>
          </tbody>
        </table>
        <br>
        <h3>{{ $t('message.signsInWorkArea') }}</h3>
        <table border="0">
          <tbody>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Notausgang.png" style="width: 50px; height: 50px;"></td>
              <td>{{ $t('message.emergencyExit') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Sammelplatz.png" style="width: 50px; height: 50px;"></td>
              <td>{{ $t('message.assemblyPoint') }}</td>
            </tr>
            <!-- <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//ErsteHilfe.png" style="width: 50px; height: 50px;"></td>
              <td>{{ $t('message.firstAidKitLocation') }}</td>
            </tr> -->
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Rauchverbot.png" style="width: 50px; height: 50px;"></td>
              <td>{{ $t('message.noSmoking') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Fotoverbot.png" style="width: 50px; height: 50px;"></td>
              <td>{{ $t('message.noPhotography') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Zutritt-verboten.png" style="width: 50px; height: 50px;"></td>
              <td>{{ $t('message.noEntry') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Hoechstgeschwindigkeit.png" style="width: 50px; height: 50px;"></td>
              <td>{{ $t('message.speedLimit') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Feuerloescher.png" style="width: 50px; height: 50px;"></td>
              <td>{{ $t('message.fireExtinguisherLocation') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//ElektrischeSpannung.png" style="width: 57px; height: 50px;"></td>
              <td>{{ $t('message.electricalHazard') }}</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Gabelstapler.png" style="width: 57px; height: 50px;"></td>
              <td>{{ $t('message.forkliftTraffic') }}</td>
            </tr>
          </tbody>
        </table>
        <br>
        <br>
        <p>{{ $t('message.instructionsEnd') }}</p>
        <canvas ref="signaturePad" :style="signatureBoxStyle"></canvas>
        <button @click="clearSignature" :style="unterschriftZurucksetzen">
          <i class="fa-solid fa-angles-left"></i> {{ $t('message.resetSignature') }}
        </button>
      </div>
    </div>

    <button @click="goBack" style="margin-left: 80px; float: inline-start; margin-top: 20px; padding: 10px 20px; font-size: 24px; background-color: #f0f0f0; border: 2px solid #ccc; border-radius: 5px; cursor: pointer;">
      {{ $t('message.back') }}
    </button>
    <button @click="goForward" style="margin-right: 80px; float: inline-end; margin-top: 20px; padding: 10px 20px; font-size: 24px; background-color: #f0f0f0; border: 2px solid #ccc; border-radius: 5px; cursor: pointer;">
      {{ $t('message.forward') }}
    </button>
  </div>
</template>

<script>
import SignaturePad from 'signature_pad';

export default {
  name: 'UnterweisungComponent',
  data() {
    return {
      headerTitle: this.$t('message.headerTitle'),
      headerStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px'
      },
      headerTitleStyle: {
        color: '#159ba7',
        fontSize: '60px',
        marginRight: '10px'
      },
      iconStyle: {
        fontSize: '48px',
        cursor: 'pointer',
        marginLeft: '10px',
        color: '#159ba7'
      },
      textConfig: {
        firstLine: this.$t('message.firstLine'),
        secondLine: this.$t('message.secondLine'),
        style: {
          color: 'black',
          fontSize: '24px',
          margin: '20px 0',
          textAlign: 'left'
        }
      },
      firstLineStyle: {
        fontWeight: 'bold',
        fontSize: '36px',
        margin: '10px',
        marginLeft: '85px'
      },
      secondLineStyle: {
        fontSize: '28px',
        margin: '10px',
        marginLeft: '85px'
      },
      scrollableContentStyle: {
        border: '1px solid #159ba7',
        height: '1200px',
        overflowY: 'scroll',
        padding: '20px',
        margin: 'auto',
        width: '80%',
      },
      innerContentStyle: {
        fontSize: '20px',
        lineHeight: '1.5',
        textAlign: 'start',
      },
      signatureBoxStyle: {
        width: '100%',
        height: '250px',
        border: '1px solid grey',
        marginTop: '20px',
        backgroundColor: 'lightgrey'
      },
      unterschriftZurucksetzen: {
        color: '#a8a7ab',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px'
      },
    };
  },
  mounted() { 
    
  const canvas = this.$refs.signaturePad;
  canvas.width = canvas.offsetWidth; 
  canvas.height = 250;
  this.signaturePad = new SignaturePad(canvas);
  },




  methods: {
    clearSignature() {
      this.signaturePad.clear();
    },
    goForward() {
      this.$router.push({ name: 'VideoCall' });
    },
    goBack() {
      this.$router.push({ name: 'CheckIn' });
    },
  }
};
</script>

<style scoped>
.scrollable-content {
  margin-top: 20px;
}
.inner-content {
  font-family: Arial, sans-serif;
}
</style>
