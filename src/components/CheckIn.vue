<template>
  <div>
    <TextComponent :config="textConfig" />
    <br>
    <br>
    <InputComponent
      :config="inputConfig"
      @input="handleInputChange"
      v-on:focus-input="focusInput"
    />
  

    <button @click="goBack" style="margin-left: -45%; margin-top: 20px; padding: 10px 20px; font-size: 24px; background-color: #f0f0f0; border: 2px solid #ccc; border-radius: 5px; cursor: pointer;">
      {{ $t('message.back') }}
    </button>
    
    <button @click="goForward" style="margin-right: 150px; float: inline-end; margin-top: 20px; padding: 10px 20px; font-size: 24px; background-color: #f0f0f0; border: 2px solid #ccc; border-radius: 5px; cursor: pointer;">
      {{ $t('message.forward') }}
    </button>

    <SimpleKeyboard
      v-if="isKeyboardVisible"
      :input="inputConfig.defaultValue"
      @onChange="onKeyboardChange"
      @onKeyPress="onKeyboardKeyPress"
      :layout="keyboardLayout"
    />
  </div>
</template>

<script>
import TextComponent from '@/components/TextComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import SimpleKeyboard from '@/components/SimpleKeyboard.vue';

export default {
  name: 'CheckIn',
  components: {
    TextComponent,
    InputComponent,
    SimpleKeyboard
  },
  data() {
    return {
      textConfig: {
        type: 'Text',
        id: 'text1',
        content: this.$t('message.scanPrompt'),
        style: {
          color: 'black',
          fontSize: '44px',
          

          marginLeft: this.$i18n.locale === 'fr' || this.$i18n.locale === 'en' ? '2%' : '10%'  
        }
      },
      inputConfig: {
        id: 'input1',
        type: 'text',
        label: this.$t('message.inputLabel'),
        defaultValue: '',
        placeholder: this.$t('message.inputPlaceholder'),
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
        errorMessage: this.$t('message.errorMessage')
      },
      keyboardLayout: [
        "esc 1 2 3 4 5 6 7 8 9 0",
        "Q W E R T Y U I O P",
        "A S D F G H J K L",
        "{shift} Z X C V B N M {bksp}",
        "{space} {delete} {enter}"
      ],
      isKeyboardVisible: false,
      activeInput: '',
      ctrlPressed: false
    };
  },
  methods: {
    handleInputChange(value) {
      console.log("Input value changed:", value);
      this.inputConfig.defaultValue = value;
    },
    focusInput(inputId) {
      this.isKeyboardVisible = true;
      console.log(inputId);
    },
    onKeyboardChange(input) {
      this.inputConfig.defaultValue = input;
    },
    onKeyboardKeyPress(button) {
      console.log("Button :", button);
    if (button === "esc") {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      this.isKeyboardVisible = false; 
    } else if (button === "{bksp}") {
      this.inputConfig.defaultValue = this.inputConfig.defaultValue.slice(0, -1);
    } else if (button === "{delete}") {
      this.inputConfig.defaultValue = '';
    } else if (button === "{enter}") {
      console.log("test");
    } else {
      this.inputConfig.defaultValue += button;
    }
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
