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
    <SimpleKeyboard
      v-if="isKeyboardVisible && activeInput === config.id"
      @onChange="onKeyboardChange"
      @onKeyPress="onKeyboardKeyPress"
      :input="value"
      :layout="keyboardLayout"
    />
    <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script>
import SimpleKeyboard from "@/components/SimpleKeyboard.vue";

export default {
  name: "InputComponent",
  props: {
    config: Object,
    keyboardLayout: Array
  },
  components: {
    SimpleKeyboard
  },
  data() {
    return {
      value: this.config.defaultValue,
      errorMessage: '',
      isKeyboardVisible: false,
      activeInput: ''
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
      this.activeInput = this.config.id; // İlgili input alanının id'sini activeInput'e atayın
    },
    hideKeyboard(event) {
      // Klavye açıkken dışarı tıklanırsa kapatın
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
  margin-top: 20px;
}

label {
  font-size: 18px;
  margin-bottom: 8px;
}

input {
  width: 75%;
  height: 40px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 12px;
}

.error-message {
  color: red;
  margin-top: 8px;
  font-size: 28px;
  margin-left:100px;
}
</style>
