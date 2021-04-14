<template>
  <decorated-input
    v-bind="$attrs"
    :format="$options.percentageFormatter"
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
    percentageFormatter: value => {
      return Number(value).toFixed(1).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,") + "%"
    }
  }
</script>
