<template>
  <div class="simple-keyboard"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "SimpleKeyboard",
  data() {
    return {
      keyboardLayout: {},
      layouts: {
        en: {
          default: [
            "` 1 2 3 4 5 6 7 8 9 0 - =",
            "Tab q w e r t y u i o p {bksp}",
            "{capslock} a s d f g h j k l {enter}",
            "{shift} {ctrl} z x c v b n m , . {shift}",
            "{space} {delete}"
          ],
          shift: [
            "~ ! @ # $ % ^ & * ( ) _ +",
            "Tab Q W E R T Y U I O P {bksp}",
            "{capslock} A S D F G H J K L {enter}",
            "{shift} {ctrl} Z X C V B N M < > {shift}",
            "{space} {delete}"
          ]
        },
        fr: {
          default: [
            "² & é \" ' ( § è ! ç à ) - {bksp}",
            "Tab a z e r t y u i o p ^ $",
            "{capslock} q s d f g h j k l m ù {enter}",
            "{shift} {ctrl} < w x c v b n , ; : = {shift}",
            "{space} {delete}"
          ],
          shift: [
            " 1 2 3 4 5 6 7 8 9 0 ° _ {bksp}",
            "Tab A Z E R T Y U I O P ¨ *",
            "{capslock} Q S D F G H J K L M % µ {enter}",
            "{shift} {ctrl} > W X C V B N ? . / + {shift}",
            "{space} {delete}"
          ]
        },
        de: {
          default: [
            "° 1 2 3 4 5 6 7 8 9 0 ß ´ {delete}",
            "Tab q w e r t z u i o p ü +",
            "{capslock} a s d f g h j k l ö ä # {enter}",
            "{shift} {ctrl} < y x c v b n m , . - {shift}",
            "{space}"
          ],
          shift: [
            "° ! \" § $ % & / ( ) = ? `",
            "Tab Q W E R T Z U I O P Ü *",
            "{capslock} A S D F G H J K L Ö Ä ' {enter}",
            "{shift} {ctrl} > Y X C V B N M ; : _ {shift}",
            "{space}"
          ]
        }
      },
      ctrlPressed: false,
      keyboard: null 
    };
  },
  props: {
    input: String
  },
  mounted() {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.setKeyboardLayout(selectedLanguage);

    this.keyboard = new Keyboard({
      layout: this.keyboardLayout,
      onChange: input => this.handleInput(input),
      onKeyPress: button => this.onKeyPress(button),
      input: this.input
    });
  },
  watch: {
    input(newInput) {
      this.keyboard.setInput(newInput);
    },
    '$i18n.locale': function (newLang) {
      this.setKeyboardLayout(newLang);
      this.keyboard.setOptions({ layout: this.keyboardLayout });
    }
  },
  methods: {
    handleInput(value) {
      this.$emit("onChange", value);
    },
    onKeyPress(button) {
      if (button === "{ctrl}") {
        this.ctrlPressed = true;
      } else if (button.toLowerCase() === "d" && this.ctrlPressed) {
        this.toggleFullscreen();
      } else {
        this.ctrlPressed = false; 
      }

      switch (button) {
        case "{bksp}":
          this.$emit("onChange", this.input.slice(0, -1));
          break;
        case "{delete}":
          this.$emit("onChange", ""); // Deletes the entire input
          break;
        case "{enter}":
          this.$emit("onEnter");
          break;
        case "{shift}":
        case "{capslock}":
          this.toggleShift();
          break;
        default:
          if (!(button.startsWith("{") && button.endsWith("}")) && !(button === "{ctrl}" && this.ctrlPressed)) {
            this.$emit("onChange", this.input + button);
          }
          break;
      }
    },
    toggleShift() {
      const layoutName = this.keyboard.options.layoutName === "default" ? "shift" : "default";
      this.keyboard.setOptions({ layoutName });
    },
    setKeyboardLayout(lang) {
      if (this.layouts[lang]) {
        this.keyboardLayout = this.layouts[lang];
      } else {
        this.keyboardLayout = this.layouts['en']; 
      }
    },
    toggleFullscreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.error(err));
      } else {
        document.documentElement.requestFullscreen().catch(err => console.error(err));
      }
    }
  },
  destroyed() {
    if (this.keyboard) {
      this.keyboard.destroy();
    }
  }
};
</script>

<style scoped>
.simple-keyboard {
  position: fixed;
  bottom: 10%;
  left: 0;
  width: 90%;
  font-size: 26px;
  margin-left: 5%;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
}
</style>
