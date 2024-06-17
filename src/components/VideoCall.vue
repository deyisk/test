<template>
    <div>
      <div class="header" :style="headerStyle">
        <h1 :style="headerTitleStyle">{{ headerTitle }}</h1>
        <i class="fa fa-phone" :style="iconStyle" aria-hidden="true"></i>
      </div>
      
      <div v-if="showMessage" :style="showMessageStyle">
        <h1 :style="messageTitleStyle">Vielen Dank für Ihre Unterschrift.</h1>
        <p :style="messageParagraphStyle">Wir verbinden Sie nun mit unserem Empfang.</p>
      </div>
      <div v-else>
        <h1>arvia</h1>
        <!-- Arvia Kodu -->
      </div>

      <button @click="goBack" style="margin:auto; margin-top: 20px; padding: 10px 20px; font-size: 24px; background-color: #f0f0f0; border: 2px solid #ccc; border-radius: 5px; cursor: pointer;">
        Zurück
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoCall',
    data() {
      return {
        showMessage: true,
        headerTitle: 'Empfang Anrufen',
        headerStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '-150px'
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
        showMessageStyle: {
          fontSize: '45px',
         
        },


        messageTitleStyle: {
            marginTop:'400px',
          fontSize: '45px',
          color:'black'
         
        },
        messageParagraphStyle: {
          fontSize: '45px',
          
        }
      };
    },
    mounted() {
      setTimeout(() => {
        this.showMessage = false;
      }, 2000);
    },
    methods:{
        goBack() {
  this.$router.push({ name: 'UnterweisungComponent' });
},
    },



  };
  </script>
  
  <style scoped>
  div {
    text-align: center;
    margin-top: 20%;
  }
  h1 {
    font-size: 24px;
    color: #159ba7;
  }
  p {
    font-size: 18px;
    color: #666;
  }
  </style>
  