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
      
      <div class="content">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Unterweisungen',
    data() {
      return {
        headerTitle: 'Unterweisung',
        headerStyle: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', 
          marginBottom:'70px'
        },
      
  headerTitleStyle: {
    color: '#159ba7',
    fontSize: '60px',
    marginRight: '100px'
  },
        iconStyle: {
          fontSize: '48px',
          cursor: 'pointer',
          marginLeft: '10px',
          color:'#159ba7'
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
          marginLeft:'85px' 
        },
        secondLineStyle: {
          fontSize: '30px', 
          margin: '10px',
          marginLeft:'85px' 
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .text p {
    margin: 0;
  }
  .content {
    margin-top: 20px;
  }
  </style>
  
