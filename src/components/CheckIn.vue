<template>
    <div>
      <TextComponent :config="textConfig" />
      <InputComponent :config="inputConfig" @input="handleInputChange" />
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
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  