<template>
  <input
    type="range"
    @input="$emit('input', $event.target.value)"
  >
</template>

<style lang="sass" scoped>
    @import '../../sass/colors.sass'

    /* Reset Range */
    input[type=range]
        margin-top: 5px
        -webkit-appearance: none
        background: transparent
        width: 100%

    input[type=range]::-webkit-slider-thumb
        -webkit-appearance: none

    input[type=range]:focus
        outline: none

    input[type=range]::-ms-track
        width: 100%
        cursor: pointer
        background: transparent
        border-color: transparent
        color: transparent

    /* Thumb */
    input[type=range]::-webkit-slider-thumb
        margin-top: -3px
        width: 15px
        height: 15px
        background: $primary-color
        border: 1px solid transparent
        border-radius: 50%
        -webkit-appearance: none
        cursor: pointer

    input[type=range]::-moz-range-thumb
        width: 15px
        height: 15px
        background: $primary-color
        border: 1px solid transparent
        border-radius: 50%
        cursor: pointer

    input[type=range]::-ms-thumb
        width: 15px
        height: 15px
        background: $primary-color
        border: 1px solid transparent
        border-radius: 50%
        cursor: pointer

    /* Track */
    input[type=range]::-webkit-slider-runnable-track
        width: 100%
        height: 8.4px
        cursor: pointer
        background: $secondary-color
        border-radius: 10px

    input[type=range]:focus::-webkit-slider-runnable-track
        background: $secondary-color

    input[type=range]::-moz-range-track
        width: 100%
        height: 8.4px
        cursor: pointer
        background: $secondary-color
        border-radius: 10px

    input[type=range]::-ms-track
        width: 100%
        height: 8.4px
        cursor: pointer
        background: transparent
        border-color: transparent
        border-width: 16px 0
        color: transparent

    input[type=range]::-ms-fill-lower
        background: $secondary-color
        border-radius: 10px

    input[type=range]:focus::-ms-fill-lower
        background: $secondary-color

    input[type=range]::-ms-fill-upper
        background: $bkg-color-light
        border-radius: 10px

    input[type=range]:focus::-ms-fill-upper
        background: $bkg-color-light
</style>

<script>
  export default {
    //
  }
</script>
