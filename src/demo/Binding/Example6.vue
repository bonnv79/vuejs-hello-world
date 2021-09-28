<template>
  <div class="root">
    <h3>6. Form Input Bindings</h3>

    <h4>TEXTBOX</h4>
    <input v-model="name" placeholder="Enter Name" />
    <h4>Name entered is : {{ name }}</h4>
    <hr />
    <h4>Textarea</h4>
    <textarea v-model="textmessage" placeholder="Add Details"></textarea>
    <h1>
      <p>{{ textmessage }}</p>
    </h1>
    <hr />
    <h4>Checkbox</h4>
    <input type="checkbox" id="checkbox" v-model="checked" /> {{ checked }}

    <h4>Radio</h4>
    <input type="radio" id="black" value="Black" v-model="picked" />
    <label for="black">Black</label>
    <input type="radio" id="white" value="White" v-model="picked" />
    <label for="white">White</label>
    <h4>Radio element clicked : {{ picked }}</h4>
    <hr />
    <h4>Select</h4>
    <select v-model="languages">
      <option disabled value="">Please select one</option>
      <option>Java</option>
      <option>Javascript</option>
      <option>Php</option>
      <option>C</option>
      <option>C++</option>
    </select>
    <h4>Languages Selected is : {{ languages }}</h4>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Example6",
  data: () => {
    return {
      name: "",
      textmessage: "",
      checked: false,
      picked: "White",
      languages: "Java",
    };
  },
};
</script>
