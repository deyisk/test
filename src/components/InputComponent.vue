<template>
    <div class="input-component" ref="inputComponent">
      <label :for="config.id" :style="getLabelStyle()">{{ config.label }}</label>
      <input
        :id="config.id"
        :type="config.type"
        :value="value"
        :placeholder="config.placeholder"
        @input="handleInput"
        @focus="showKeyboard"
        :style="getInputStyle()"
      />
      <SimpleKeyboard v-if="isKeyboardVisible" 
      @onChange="onKeyboardChange" 
      @onKeyPress="onKeyboardKeyPress" 
      :input="value"
      :layout="keyboardLayout"
      />
      <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
    </div>
  </template>
  
  <script>
  import SimpleKeyboard from '@/components/SimpleKeyboard.vue';
  
  export default {
    name: "InputComponent",
    props: {
      config: Object
    },
    components: {
      SimpleKeyboard
    },
    data() {
      return {
        value: this.config.defaultValue,
        errorMessage: '',
        isKeyboardVisible: false
      };
    },
    methods: {
      handleInput(event) {
        const value = event.target.value;
        this.value = value;
        if (this.config.validate) {
          this.errorMessage = this.config.validate(value) ? '' : (this.config.errorMessage || 'This field is invalid!');
        }
        this.$emit("input", value);
      },
      getInputStyle() {
        if (this.config.style) {
          let style = "";
          for (const [key, value] of Object.entries(this.config.style)) {
            style += `${key}: ${value};`;
          }
          return style;
        }
        return '';
      },
      getLabelStyle() {
        if (this.config.labelStyle) {
          let style = "";
          for (const [key, value] of Object.entries(this.config.labelStyle)) {
            style += `${key}: ${value};`;
          }
          return style;
        }
        return '';
      },
      onKeyboardChange(input) {
        this.value = input;
        if (this.config.validate) {
          this.errorMessage = this.config.validate(input) ? '' : (this.config.errorMessage || 'This field is invalid!');
        }
        this.$emit("input", input);
      },
      onKeyboardKeyPress(button) {
        console.log("Button pressed:", button);
      },
      showKeyboard() {
        this.isKeyboardVisible = true;
      },
      hideKeyboard(event) {
        if (!this.$refs.inputComponent.contains(event.target)) {
          this.isKeyboardVisible = false;
        }
      }
    },
    mounted() {
      document.addEventListener("click", this.hideKeyboard);
    },
    destroyed() {
      document.removeEventListener("click", this.hideKeyboard);
    }
  };
  </script>
  
  <style scoped>
  .input-component {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    margin-top: 100px;
  }
  
  label {
    font-size: 40px; 
    margin-bottom: 20px;
  }
  
  input {
    width: 75%;
    height: 120px;
    font-size: 36px;
    padding: 10px;
    border: 1px solid #000000;
    border-radius: 15px;
    padding-left: 20px;
  }
  
  .error-message {
    color: red;
    margin-top: 25px;
    margin-left: 8%;
    font-size: 32px;
  }
  </style>
  