<template>
  <div>
    <h2>Planned Purchase Details</h2>

    <div class="mb-6">
      <label class="flex justify-between">
        <span>Property Price</span>
        <currency-input v-model="options.property_price" />
      </label>
      <range-input
        v-model="options.property_price"
        v-bind="limits.property_price"
      />
    </div>

    <div class="mb-6">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-4">
          <label for="downPaymentInput">Down Payment</label>
        </div>
        <percentage-input
          id="downPaymentInput"
          v-model="downPaymentPercent"
          class="col-span-3"
        />
        <currency-input
          v-model="options.down_payment"
          class="col-span-5"
        />
      </div>
      <range-input
        v-model="options.down_payment"
        v-bind="limits.down_payment"
      />
    </div>

    <div class="mb-6">
      <label class="flex justify-between">
        <span>Interest Rate</span>
        <percentage-input v-model="options.interest_rate" />
      </label>
      <range-input
        v-model="options.interest_rate"
        v-bind="limits.interest_rate"
      />
    </div>

    <div class="mb-6">
      <label class="flex justify-between">
        <span>Interest Rate</span>
        <currency-input v-model="options.annual_insurance" />
      </label>
      <range-input
        v-model="options.annual_insurance"
        v-bind="limits.annual_insurance"
      />
    </div>
  </div>
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
        type: Object,
        required: true
      }
    },

    /**
     * Component reactive data.
     *
     * @return {Object}
     */
    data() {
      return {
        options: this.value,
      }
    },

    /**
     * Computed properties.
     *
     * @type {Object}
     */
    computed: {
      downPaymentPercent: {
        /**
         * Set down payment by percentage.
         *
         * @param {Number} percent
         */
        set(percent) {
          this.options.down_payment = this.options.property_price * percent / 100
        },

        /**
         * Get down payment in percentage.
         *
         * @type {Object}
         */
        get() {
          return Number(
            (this.options.down_payment / this.options.property_price * 100).toFixed(1)
          )
        }
      },

      /**
       * Get limits
       *
       * @return {Object}
       */
      limits() {
        return {
          property_price: {
            min: 0,
            max: 1000000,
            step: 1000,
          },
          down_payment: {
            min: 8750,
            max: this.options.property_price,
            step: this.options.property_price / 200,
          },
          interest_rate: {
            min: 1,
            max: 50,
            step: 0.1,
          },
          annual_insurance: {
            min: 0,
            max: 1000,
            step: 10,
          }
        }
      }
    },

    /**
     * Component watchers.
     *
     * @type {Object}
     */
    watch: {
      /**
       * Emit an input event when options changes.
       *
       * @param  {Object} options
       * @return {void}
       */
      options(options) {
        this.$emit('input', { ...this.value, ...options })
      }
    }
  }
</script>
