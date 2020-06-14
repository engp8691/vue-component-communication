<template>
  <div>
    <div>
      <div class="itemDetails">{{details.id}}: {{details.status}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object
    }
  }
};
</script>
<style>
</style>
