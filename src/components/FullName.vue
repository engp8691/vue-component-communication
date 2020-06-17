<template>
  <div>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" :value="firstName" @input="nameChanged(true, $event)" />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" :value="lastName" @input="nameChanged(false, $event)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["fullname"],
  data: function(){
      return {
          fullnameData: this.fullname,
      }
  },
  methods: {
    nameChanged(isFirst, event) {
      let name = "";
      if (isFirst) {
        name = event.target.value + " " + this.lastName;
      } else {
        name = this.firstName + " " + event.target.value;
      }
      this.fullnameData = name;
      console.log(name);
      this.$emit("input", this.fullnameData);
    }
  },
  computed: {
    firstName() {
      return this.fullnameData.split(" ")[0];
    },
    lastName() {
      return this.fullnameData.split(" ")[1];
    }
  }
};
</script>