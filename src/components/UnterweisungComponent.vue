<template>
  <div>
    <div class="header" :style="headerStyle">
      <h1 :style="headerTitleStyle">{{ headerTitle }}</h1>
      <i class="fa fa-pencil" :style="iconStyle" aria-hidden="true"></i>
    </div>
    
    <div class="text" :style="textConfig.style">
      <p :style="firstLineStyle">{{ textConfig.firstLine }}</p>
      <p :style="secondLineStyle">{{ textConfig.secondLine }}</p>
    </div>
    
    <div class="scrollable-content" :style="scrollableContentStyle">
      <div class="inner-content" :style="innerContentStyle">
        <h2>Sicherheitshinweise</h2>
        <p><b>Wir heißen Sie herzlich willkommen.</b></p>
        <p>Damit Ihr Aufenthalt bei uns angenehm und vor allem unfallfrei abläuft, bitten wir Sie, folgende Punkte zu beachten:</p>
        <ul>
          <li>Bitte tragen Sie Ihren Besucherausweis sichtbar an Ihrer Kleidung.</li>
          <li>Weichen Sie nicht von den vorgesehenen Besucherwegen ab.</li>
          <li>Bewegen Sie sich nur mit Ihrem Ansprechpartner/Ihrer Begleitperson.</li>
          <li>Der Zugang zu gesperrten Bereichen ist untersagt.</li>
          <li>Elektronische Geräte dürfen nicht am Firmennetzwerk angeschlossen werden.</li>
          <li>Eingangstüren sind immer geschlossen zu halten und dürfen nicht entsperrt werden.</li>
        </ul>
        <h3>Wichtige Hinweise:</h3>
        <table border="0">
          <tbody>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Laermbereich.png" style="width: 50px; height: 50px;"></td>
              <td style="padding-left: 40px;">Lärmbereiche sind besonders gekennzeichnet. Hier ist bei laufenden Maschinen Gehörschutz zu tragen.</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Sicherheitsweste.png" style="width: 50px; height: 50px;"></td>
              <td style="padding-left: 40px;">Auf dem Gelände ist das Tragen einer Warnweste verpflichtend.</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Sicherheitsschuhe.png" style="width: 50px; height: 50px;"></td>
              <td style="padding-left: 40px;">Auf dem Gelände ist das Tragen von Sicherheitsschuhen verpflichtend.</td>
            </tr>
            <tr>
              <td><img alt src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Video.png" style="width: 55px; height: 50px;"></td>
              <td style="padding-left: 40px;">Das Gelände wird mit Videokameras gesichert.</td>
            </tr>
          </tbody>
        </table>
        <br>
        <span><b>Bedeutung von Schildern im Arbeitsbereich</b></span>
        <br>
        <table border="0">
          <tbody>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Notausgang.png" style="width: 100px; height: 50px;"></td>
              <td>Notausgang</td>
            </tr>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Sammelplatz.png" style="width: 50px; height: 50px;"></td>
              <td>Sammelplatz nach einer möglichen Evakuierung des Gebäudes</td>
            </tr>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Verbandkasten.png" style="width: 50px; height: 50px;"></td>
              <td>Standort Verbandkasten</td>
            </tr>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Rauchverbot.png" style="width: 50px; height: 50px;"></td>
              <td>Rauchverbot im gesamten Haus</td>
            </tr>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Fotoverbot.png" style="width: 50px; height: 50px;"></td>
              <td>Fotografieren und Filmen ist im gesamten Betrieb verboten</td>
            </tr>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Zutritt-verboten.png" style="width: 50px; height: 50px;"></td>
              <td>Zutritt für Unbefugte ist verboten</td>
            </tr>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Hoechstgeschwindigkeit.png" style="width: 50px; height: 50px;"></td>
              <td>Höchstgeschwindigkeit auf dem Gelände</td>
            </tr>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Feuerloescher.png" style="width: 50px; height: 50px;"></td>
              <td>Standort Feuerlöscher</td>
            </tr>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//ElektrischeSpannung.png" style="width: 57px; height: 50px;"></td>
              <td>Warnung vor gefährlicher elektrischer Spannung</td>
            </tr>
            <tr>
              <td><img alt="" src="https://portal.welcomeyou.de/data/CKEditorFiles/kunde001132//Gabelstapler.png" style="width: 57px; height: 50px;"></td>
              <td>Staplerverkehr auf dem gesamten Gelände. Fußgänger haben ausschließlich die gekennzeichneten Wege zu benutzen.</td>
            </tr>
          </tbody>
        </table>
        <br>
        <br>
        <p>Bitte unterschreiben Sie hier, Herr Martin Gruber</p>
        <canvas ref="signaturePad" :style="signatureBoxStyle"></canvas>
        <button @click="clearSignature" :style="unterschriftZurucksetzen">
          <i class="fa-solid fa-angles-left"></i> Unterschrift zurücksetzen
        </button>
      </div>
    </div>
    <button @click="goForward" style="margin-right: 80px; float: inline-end; margin-top: 20px; padding: 10px 20px; font-size: 24px; background-color: #f0f0f0; border: 2px solid #ccc; border-radius: 5px; cursor: pointer;">
      Weiter
    </button>
  </div>
</template>

<script>
import SignaturePad from 'signature_pad';

export default {
  name: 'UnterweisungComponent',
  data() {
    return {
      headerTitle: 'Unterweisung',
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
        firstLine: 'Herr Martin Gruber,',
        secondLine: 'Bitte lesen Sie die Unterweisungen und unterschreiben diese danach.',
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
    this.signaturePad = new SignaturePad(this.$refs.signaturePad);
  },
  methods: {
    clearSignature() {
      this.signaturePad.clear();
    },
    goForward() {
      this.$router.push({ name: 'VideoCall' });
    }
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
