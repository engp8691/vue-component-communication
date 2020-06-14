<template>
  <div>
    <div>
      <div class="itemDetails">{{details.id}}: {{details.status}}</div>
      <div class="itemButton">
        <button @click="showDetails">Show details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  methods: {
    showDetails: function(event) {
      this.$emit("showDetailsEvent", this.details);
    }
  }
};
</script>

<style scoped>
.itemDetails {
  display: inline-block;
  width: 200px;
  border: solid 1px gray;
}
.itemButton {
  display: inline-block;
  width: 100px;
}
</style>