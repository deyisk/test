<template>
    <div>
  
  
      <div class="container">
        <input v-model="input1" class="input" placeholder="Input 1" @focus="focusInput('input1')" />
        <input v-model="input2" class="input" placeholder="Input 2" @focus="focusInput('input2')" />
        <input v-model="input3" class="input" placeholder="Input 3" @focus="focusInput('input3')" />

                  <!-- Zurück Button -->
      <button @click="goBack" class="navigation-button">
        zurück
      </button>
  
      <!-- Forward Button -->
      <button @click="goForward" class="navigation-button">
        weiter
      </button>
      </div>

            
  
      
      <SimpleKeyboard
        v-if="isKeyboardVisible"
        @onChange="onKeyboardChange"
        :layout="keyboardLayout"
      />
    </div>

    
  </template>
  
  <script>
  import SimpleKeyboard from "@/components/SimpleKeyboard.vue";
  import "simple-keyboard/build/css/index.css";
  
  export default {
    name: "CheckIn2",
    components: {
      SimpleKeyboard
    },
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        keyboardLayout: [
          "1 2 3 4 5 6 7 8 9 0",
          "Q W E R T Y U I O P",
          "A S D F G H J K L",
          "{shift} Z X C V B N M {backspace}",
          "{space} {enter}"
        ],
        isKeyboardVisible: false,
        activeInput: null
      };
    },
    methods: {
      focusInput(inputId) {
        this.activeInput = inputId;
        this.isKeyboardVisible = true;
      },
      onKeyboardChange(input) {
        if (this.activeInput === 'input1') {
          this.input1 = input;
        } else if (this.activeInput === 'input2') {
          this.input2 = input;
        } else if (this.activeInput === 'input3') {
          this.input3 = input;
        }
      },
      goBack() {
        this.$router.go(-1); 
      },
      goForward() {
        this.$router.push({ name: 'UnterweisungComponent' });
      },
  
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .input {
    margin: 10px;
    padding: 15px;
    font-size: 24px;
    width: 60%;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .navigation-button {
    margin-top: 20px;
    margin-right: 10px; /* Adjust as necessary */
    padding: 10px 20px;
    font-size: 24px;
    background-color: #f0f0f0;
    border: 2px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    float: right; /* Aligns the button to the right */
  }
  </style>
  