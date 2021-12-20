<template>
  <div class="modal">
    <div class="modal-content">
      <p>Are you sure to unregister from LIFELINE?</p>
      <div class="buttons">
        <button @click="closeModal">
          NO
        </button>
        <button @click="closeModal">
          Yes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",

  methods:{
    closeModal(){
      this.$emit("close-modal")
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);

  .modal-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;

    .buttons {
      max-width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p{
      text-align: center;
    }
    button{
      align-self: center;
    }
  }
}
</style>

