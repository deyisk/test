<template>
  <div>
    <div class="header" :style="headerStyle">
      <h1 :style="headerTitleStyle">{{ $t('videoCall.headerTitle') }}</h1>
      <i class="fa fa-phone" :style="iconStyle" aria-hidden="true"></i>
    </div>

    <div v-if="showMessage" :style="showMessageStyle">
      <h1 :style="messageTitleStyle">{{ $t('videoCall.thankYouMessage') }}</h1>
      <p :style="messageParagraphStyle">{{ $t('videoCall.connectingMessage') }}</p>
    </div>
    <div v-else>
      <!-- Arvia Chat için gerekli HTML -->
      <div>
        <button ref="startButton" @click="startArviaChat" style="width: 200px; height: 100px; font-size: 30px;">
          {{ $t('videoCall.startChatButton') }}
        </button>
        <div ref="arviaChatContainer"></div>
      </div>
    </div>

  
  </div>
</template>

<script>
const ArviaChat = window.ArviaChat;

export default {
  name: 'VideoCall',
  data() {
    return {
      showMessage: true,
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
        marginTop: '400px',
        fontSize: '45px',
        color: 'black'
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

    const startButton = this.$refs.startButton;
    const arviaChatContainer = this.$refs.arviaChatContainer;

    if (startButton && arviaChatContainer) {
      startButton.addEventListener('click', () => {
        const arviaChat = new ArviaChat();
        arviaChat.setTestUser(true);
        arviaChat.setRoomName("test-room-1");
        arviaChat.init(arviaChatContainer);
        arviaChat.connect();
      });
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'UnterweisungComponent' });
    },
    startArviaChat() {
      const arviaChat = new ArviaChat();
      arviaChat.setTestUser(true);
      arviaChat.setRoomName("test-room-1");
      arviaChat.init(this.$refs.arviaChatContainer);
      arviaChat.connect();




      // from .._videocall_schattdecor
      // arviaChat = new ArviaChat('63039242ed94592a17a39ec1');
      //   arviaChat.init("arvia.chat");
      //   arviaChat.setRoomName("schattdecor");
      //   arviaChat.setDynamicRoomName("Empfang");
      //   arviaChat.setLocalMediaButtonsVisibility(false);
      //   arviaChat.setUserName('Besucher');
      //   arviaChat.setDefaultNotificationsEnabled(false);
      //   arviaChat.connect();







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