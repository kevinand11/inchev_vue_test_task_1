<template>
  <div id="app">
    <delete-button :isEnabled="isEnabled" :feedId="feedId"/>
  </div>
</template>

<script>
import DeleteButton from './components/DeleteButton.vue'

export default {
  name: 'App',
  data: () => ({
    isEnabled: false,
    feedId: 0
  }),
  components: {
    'delete-button': DeleteButton
  },
  methods:{
    async fetchFeedId() {
      window.axios.get("/api/feed/get-base-info")
        .then((response) => {
          this.feedId = response.data.id
          this.isEnabled = true
        })
        .catch(() => new window.toast({ icon: 'error', title: 'Error fetching feed id' }))
    }
  },
  mounted(){
    this.fetchFeedId()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 15px;
}
button{
  display: inline-block;
  font-weight: 400;
  border: 1px solid transparent;
  padding: 0.75rem 3rem;
  border-radius: 10rem;
}
button:focus{
  outline: 0;
}
button:disabled {
  opacity: 0.65;
}
</style>
