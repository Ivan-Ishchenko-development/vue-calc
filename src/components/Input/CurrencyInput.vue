<template>
  <decorated-input
    v-bind="$attrs"
    :format="$options.currencyFormatter"
    v-on="$listeners"
  />
</template>

<script>
  export default {
    /**
     * Currency formatter.
     *
     * @return {String}
     */
    currencyFormatter: value => {
      return "$ " + Number(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
    }
  }
</script>
