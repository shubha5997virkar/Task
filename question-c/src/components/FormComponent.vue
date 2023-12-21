<template>
  
  <form @submit.prevent="handleSubmit" class="form-container">
    <h1>Dynamic Form</h1>
    <div v-for="(block, index) in blocks" :key="index">
            <b>{{ block.props.title }}</b>
      
        <input
          :type="block.type"
          :placeholder="block.props.placeholder"
          :required="typeof(block.props.required)!='boolean'?data[block.props.required]:block.props.required"
          :id="block.token"
          v-model="data[block.token]"
        />

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
            required:'IS_PERSON_MINOR',
            placeholder: "eg. 01/01/2002",
          },
          
        }
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
      (typeof(block.props.required) != 'boolean'? this.data[block.props.required]:block.props.required) &&
          !this.data[block.token]
        ) {
          return false; 
        }
      }
      return true; 
    },
  },
};
</script>

<style scoped>

.form-container {
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  text-align: center;
  margin-top:100px;

}

b{
  margin:8px;
}
input[type="text"],
input[type="date"] {
  width: 50%;
  padding:8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

input[type="checkbox"] {
  width: auto;
  margin-right: 5px;
  padding:8px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

</style>