<template>
  <div class="">
    <h3>2. Customer Details</h3>

    <span>First Name</span>
    <input type="text" placeholder="Enter First Name" v-model="fname" />
    <span>Last Name</span>
    <input type="text" placeholder="Enter Last Name" v-model="lname" />
    <span>Address</span>
    <input type="text" placeholder="Enter Address" v-model="addr" />
    <button v-on:click="showdata" v-bind:style="styleobj">Add</button>
    <br />
    <br />
    <customercomponent
      v-for="(item, index) in custdet"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:itr="item"
      v-bind:key="item.fname"
      v-on:removeelement="custdet.splice(index, 1)"
    >
    </customercomponent>
  </div>
</template>

<script>
import customercomponent from "./customercomponent.vue";
export default {
  name: "Example2",
  components: {
    customercomponent,
  },
  data: () => {
    return {
      fname: "",
      lname: "",
      addr: "",
      custdet: [],
      styleobj: {
        backgroundColor: "#2196F3!important",
        cursor: "pointer",
        padding: "8px 16px",
        verticalAlign: "middle",
      },
    };
  },
  methods: {
    showdata: function () {
      this.custdet.push({
        fname: this.fname,
        lname: this.lname,
        addr: this.addr,
      });
      this.fname = "";
      this.lname = "";
      this.addr = "";
    },
  },
};
</script>
