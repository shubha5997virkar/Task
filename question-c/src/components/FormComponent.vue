<template>
  <form @submit.prevent="handleSubmit">
    <div v-for="(block, index) in blocks" :key="index">
      <template v-if="block.type === 'text'">
        <label :for="block.token">{{ block.props.title }}</label>
        <input
          :type="block.type"
          :placeholder="block.props.placeholder"
          :required="block.props.required"
          :id="block.token"
          v-model="data[block.token]"
        />
      </template>
      <template v-else-if="block.type === 'checkbox'">
        <input
          :type="block.type"
          :id="block.token"
          v-model="data[block.token]"
        />
        <label :for="block.token">{{ block.props.title }}</label>
      </template>
      <template v-else-if="block.type === 'date'">
        <label :for="block.token">{{ block.props.title }}</label>
        <input
          :type="block.type"
          :placeholder="block.props.placeholder"
          :required="block.props.required && data['IS_PERSON_MINOR']"
          :id="block.token"
          v-model="data[block.token]"
        />
      </template>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      data: {}, 
      blocks: [
        {
          token: "PERSON_NAME",
          type: "text",
          props: {
            title: "Enter your name",
            required: true,
            placeholder: "eg. John Doe",
          },
        },
        {
          token: "IS_PERSON_MINOR",
          type: "checkbox",
          props: {
            title: "Is the current person minor?",
            default: false,
          },
        },
        {
          token: "PERSON_DOB",
          type: "date",
          props: {
            title: "Enter your DOB",
            required: true,
            placeholder: "eg. 01/01/2002",
          },
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
     
      let isValid = this.validate();
      if (isValid) {
        
        console.log(this.data);
      } else {
        console.log("invalid");
      }
    },
    validate() {
      
      for (const block of this.blocks) {
        if (
          block.props.required &&
          (!this.data[block.token] ||
            (block.type === "checkbox" && this.data[block.token] === false))
        ) {
          return false; 
        }
      }
      return true; 
    },
  },
};
</script>

<style>
</style>