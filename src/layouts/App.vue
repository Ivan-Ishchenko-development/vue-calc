<template>
  <div>
    <app-header :title="$route.meta.title" />

    <router-view />

    <app-footer />
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import AppFooter from './components/AppFooter'

  export default {
    /**
     * Local components.
     *
     * @type {Object}
     */
    components: {
      AppHeader, AppFooter
    }
  }
</script>
