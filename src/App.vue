<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <servers  @showDetailsEventRelay="details=$event"></servers>
      <app-server-details :details="details"></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Footer from "./components/Shared/Footer.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

export default {
  data: function() {
    return {
      details: {}
    };
  },
  methods: {
    responseShowEvent: function(event) {
    }
  },
  components: {
    appHeader: Header,
    Servers,
    "app-server-details": ServerDetails,
    "app-footer": Footer
  }
};
</script>

<style>
</style>
