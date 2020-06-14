<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="server in servers" :key="server.id">
        <app-server :details="server" @showDetailsEvent="responseShowEvent"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Server from './Server.vue';

export default {
  data: function() {
    return {
      clickServer: {},
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" }
      ]
    };
  },
  components: {
    "app-server": Server,
  },
  methods: {
    responseShowEvent: function(event){
      this.$emit("showDetailsEventRelay", event);
    }
  }
};
</script>
<style>
</style>
