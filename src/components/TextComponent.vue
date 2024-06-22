<template>
    <div class="text-component col-component" :style="getStyle()">
      <span class="text-line" v-for="(line, index) in formattedText" :key="index">
        {{ line }}
      </span>
    </div>
  </template>
  
  
  
  <script>
  export default {
    name: "TextComponent",
    props: {
      config: Object
    },
    computed: {
      formattedText() {
        return this.config.content.split('geben').join('geben\n').split('\n');
      }
    },

    methods: {
      getStyle() {
        if (this.config.style) {
          let style = "";
          for (const [key, value] of Object.entries(this.config.style)) {
            style += `${key}: ${value};`;
          }
          return style;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .text-component {
    margin-top: 70%;
    text-align: center;
  }

  .second-line {
    display: block;
    margin-top: 10px;
    text-align: left;
  }

  .text-line {
  display: flex;
  align-items:flex-start;
  }

  </style>
  


  