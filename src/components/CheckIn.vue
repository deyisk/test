<template>
    <div>
      <TextComponent :config="textConfig" />
      <InputComponent :config="inputConfig" @input="handleInputChange" />
  
      <button @click="goBack" style="margin-left: -45%; margin-top: 20px; padding: 10px 20px; font-size: 24px; background-color: #f0f0f0; border: 2px solid #ccc; border-radius: 5px; cursor: pointer;">
        Zurück
      </button>
      
      <button @click="goForward" style="margin-right: 150px; float: inline-end; margin-top: 20px; padding: 10px 20px; font-size: 24px; background-color: #f0f0f0; border: 2px solid #ccc; border-radius: 5px; cursor: pointer;">
        Weiter
      </button>
    </div>
  </template>
  
  <script>
  import TextComponent from '@/components/TextComponent.vue';
  import InputComponent from '@/components/InputComponent.vue';
  
  export default {
    name: 'CheckIn',
    components: {
      TextComponent,
      InputComponent
    },
    data() {
      return {
        textConfig: {
          type: 'Text',
          id: 'text1',
          content: 'Scannen Sie Ihren QR-Code oder geben Sie den Code aus der Einladungsmail ein.',
          style: {
            color: 'black',
            fontSize: '44px',
            marginLeft: '10%'
          }
        },
        inputConfig: {
          id: 'input1',
          type: 'text',
          label: 'Code/Name/Email-Adresse',
          defaultValue: '',
          placeholder: 'Geben Sie hier Ihren Code ein',
          style: {
            width: '75%', 
            height: '120px', 
            padding: '10px',
            fontSize: '36px',
            borderRadius: '15px',
            marginLeft: '8%', 
            paddingLeft: '20px'
          },
          labelStyle: {
            marginLeft: '8%', 
            fontSize: '40px',
            color: 'black',
            marginBottom: '20px'
          },
          validate: value => !!value, 
          errorMessage: 'Dieses Feld darf nicht leer sein!',
          keyboardConfig: {
            layout: 'qwerty',
            alwaysOpen: false,
            useKbEvents: true
          }
        }
      };
    },
    methods: {
      handleInputChange(value) {
        console.log("Input value changed:", value);
      },
      goBack() {
        this.$router.go(-1); 
      },
      goForward() {
        this.$router.push({ name: 'UnterweisungComponent' });
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  