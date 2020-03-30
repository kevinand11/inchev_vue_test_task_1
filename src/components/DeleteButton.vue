<template>
  <div>
    <button id="button" :disabled="!isEnabled" @click="openModal">Delete this feed</button>
    <modal :feedId="feedId" v-if="showModal"/>
  </div>
</template>

<script>
import Modal from "./modal"

export default {
  name: 'DeleteButton',
  data () {
    return {
      showModal: false
    }
  },
  props: {
    'isEnabled': Boolean,
    'feedId': Number
  },
  components: {
    "modal": Modal
  },
  methods:{
    openModal(){
      this.showModal = true
    },
    closeModalIfOpen(){
      if(this.showModal) this.showModal = false
    }
  },
  mounted(){
    window.Fire.$on("closeModal", this.closeModalIfOpen)
  }
}
</script>

<style scoped>
  #button{
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
</style>
