<template>
  <div class="container border-b py-12 mx-auto">
    <div class="breadcrumb-wrapper">
      <h1 v-text="title" />
      <div class="breadcrumb-actions-wrapper">
        <div class="calc-button">
          <img
            class=""
            src="../../../resources/icons/CalculatorBackground.svg"
            alt=""
          >
          <img
            class="calc-icon"
            src="../../../resources/icons/CalculatorButton.svg"
            alt=""
          >
        </div>
        <div>
          <img
            src="../../../resources/icons/ProfileImage.svg"
            alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.breadcrumb-wrapper{
    height: 100px;
    display: flex;
    justify-content: space-between;
}

.breadcrumb-actions-wrapper{
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.breadcrumb-actions-wrapper div{
  margin: 0.75rem;
}

.calc-button{
  position: relative;
}
.calc-icon{
  position: absolute;
  top: 18%;
  left: 22%;
}
</style>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      }
    }
  }
</script>
