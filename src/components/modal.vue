<template>
  <div id="background">
    <div @click.prevent="closeModal" id="outside"></div>
    <div id="modal">
      <div id="top">
        <div></div>
        <div id="top-text">You have unfollowed <span id="power-text">Power of Positivity</span> completely. {<a id="undo-text">undo</a>}</div>
        <div id="close" @click.prevent="closeModal">&times;</div>
      </div>
      <div id="body">
        <p id="bodyHeader">Please let the publisher know the reason!</p>
        <div id="row">
          <div class="check">
            <input type="radio" v-model="reason" name="reason" value=0>
            <label>Too many messages</label>
          </div>
          <div class="check">
            <input type="radio" v-model="reason" name="reason" value=1>
            <label>Message quality too low</label>
          </div>
          <div class="check">
            <input type="radio" v-model="reason" name="reason" value=2>
            <label>Messages not relevant for me</label>
          </div>
          <div class="check">
            <input type="radio" v-model="reason" name="reason" value=3>
            <label>This is spam</label>
          </div>
          <div class="check">
            <input type="radio" v-model="reason" name="reason" value=4>
            <label>Other</label>
          </div>
        </div>
        <textarea id="otherMessage" v-if="hasOtherReason" v-model="message"></textarea>
        <div id="buttonsGroup">
          <button id="button" @click="deleteFeed" :disabled="!hasChosenOption">Delete</button>
          <p @click="closeModal">Cancel</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  data () {
    return {
      reason: null,
      message: null
    }
  },
  methods:{
    closeModal(){
      window.Fire.$emit("closeModal")
    },
    deleteFeed(){
      var data = {
        feed_id: this.feedId,
        option: this.reason,
        message: this.message
      }
      window.axios.post("/api/feed/delete-feed", data)
        .then(response => this.closeModal())
        .catch(() => new window.toast({ icon: "error", title:"Error deleting feed" }))
    }
  },
  props:{
    "feedId": Number
  },
  computed:{
    hasOtherReason(){return this.reason == 4},
    hasChosenOption(){return this.reason != null}
  }
}
</script>

<style scoped>
  #background{
    position: fixed;
		background: #00000022;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
  }
  #outside{
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  #modal{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 884px;
    box-shadow: 0 5px 25px rgba(34, 60, 47, 0.15);
    border-radius: 6px;
    background-color: #ffffff;
    background-image: url("../assets/Combined_Shape.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 2;
  }
  #top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px 6px 0 0;
    background-color: #f5a623;
    padding: 16px;
  }
  #top-text{
    color: #231f20;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
  }
  #power-text{
    font-family: "Montserrat Medium";
    font-weight: 500;
  }
  #undo-text{
    text-decoration: underline;
  }
  #close{
    border-radius: 50%;
    border: #595959 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    color: #595959;
    font-size: 16px;
  }
  #body{
    padding: 40px 100px;
  }
  #bodyHeader{
    color: #231f20;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 40px;
  }
  #row{
    display: flex;
    flex-wrap: wrap;
  }
  .check{
    display: flex;
    flex: 0 0 50%;
    align-items: center;
    margin-bottom: 20px;
  }
  .check input{
    width: 35px;
    height: 35px;
    margin-right: 20px;
  }
  .check label{
    color: #231f20;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
  }
  #otherMessage{
    width: 100%;
    height: 70px;
    border-radius: 6px;
    border: 2px solid #e9e8e8;
    background-color: #ffffff;
    margin-bottom: 40px;
  }
  #buttonsGroup{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #button{
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }
  @media screen and (max-width: 992px) {
    #modal{
      width: 724px
    }
    #body{
      padding: 20px 40px;
    }
    #bodyHeader{
      margin-bottom: 20px;
    }
    .check input{
      width: 30px;
      height: 30px;
      margin-right: 16px;
    }
    #otherMessage{
      height: 50px;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    #modal{
      width: 484px
    }
    #body{
      padding: 20px 50px;
    }
    #bodyHeader{
      margin-bottom: 10px;
    }
    .check{
      flex: 0 0 100%;
    }
    .check input{
      width: 25px;
      height: 25px;
      margin-right: 12px;
    }
    #otherMessage{
      height: 50px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 576px) {
    #modal{
      width: 300px
    }
    #close{
      border: none;
      font-size: 20px;
    }
    #body{
      padding: 10px 25px;
    }
    .check{
      margin-bottom: 10px;
    }
    .check input{
      width: 15px;
      height: 15px;
      margin-right: 8px;
    }
    #otherMessage{
      height: 50px;
      margin-bottom: 10px;
    }
  }
</style>