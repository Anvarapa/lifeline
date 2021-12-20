<template>
  <div class="modal">
    <div class="modal-content">
      <p>Who do you want to share with?</p>
      <input type="text" placeholder="user name">
      <div class="buttons">
        <button @click="closeShare">
          cancel
        </button>
        <button @click="closeShare">
          share
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  methods: {
    closeShare() {
      this.$emit("closeShare")
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
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
  background-color: rgba(0, 0, 0, 0.7);

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;

    input {
  height: 35px;
      width: 100%;
      outline: none;
      margin-top: 10px;
      border-radius: 5px;
      border: 0.1px solid;
      padding-left: 5px;
    }

    .buttons {
      max-width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    p {
      text-align: center;
    }

    button {
      align-self: center;
    }
  }
}
</style>


