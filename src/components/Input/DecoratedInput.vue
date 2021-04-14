<template>
  <input
    :type="type"
    :value="display"
    @input="$emit('input', $event.target.value)"
    @focus="decorating = false"
    @blur="decorating = true"
  >
</template>

<script>
  export default {
    /**
     * Component properties.
     *
     * @type {Object}
     */
    props: {
      value: {
        type: [String, Number],
        required: true
      },
      type: {
        type: String,
        default: 'text',
      },
      format: {
        type: Function,
        default: () => value => value,
      }
    },

    /**
     * Component reactive data.
     *
     * @return {Object}
     */
    data() {
      return {
        decorating: true,
      }
    },

    /**
     * Computed properties.
     *
     * @type {Object}
     */
    computed: {
      /**
       * Generate a decorated value.
       *
       * @return {[type]}
       */
      display() {
        if (this.decorating) {
          return this.format(this.value)
        }

        return this.value
      }
    }
  }
</script>
