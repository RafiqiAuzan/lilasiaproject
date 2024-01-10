<template>
    <!-- Form for adding a product -->
    <form @submit.prevent="submitForm" class="add-product-form">
        <!-- Input for the product name -->
        <input class="input-field" v-model="name" placeholder="Product Name" />
        <!-- Error message for the product name -->
        <p v-if="errors.name" class="error">{{ errors.name }}</p>


        <!-- Input for the product description -->
        <input class="input-field" v-model="description" placeholder="Product Description" />
        <!-- Error message for the product description -->
        <p v-if="errors.description" class="error">{{ errors.description }}</p>


        <!-- Input for the product price -->
        <input class="input-field" v-model="price" placeholder="Product Price" />
        <!-- Error message for the product price -->
        <p v-if="errors.price" class="error">{{ errors.price }}</p>

        <!-- Input for the product Category -->
        <input class="input-field" v-model="category" placeholder="Product Category" />
        <!-- Error message for the product price -->
        <p v-if="errors.category" class="error">{{ errors.category }}</p>

        <!-- Input for the product price -->
        <input class="input-field" v-model="image" placeholder="Product Image" />
        <!-- Error message for the product price -->
        <p v-if="errors.image" class="error">{{ errors.image }}</p>


        <!-- Button for submitting the form -->
        <button type="submit" class="submit-button">Add Product</button>
    </form>
</template>


<script>
import axios from '@/axios'; // Import the axios instance


export default {
// Component data
data() {
return {
// Product details
name: '',
description: '',
price: '',
category: '',
image: '',
// Validation errors
errors: {}
};
},
methods: {
// Validate the input fields
validateInput() {
// Errors object
const errors = {};
// Validate the product name
if (!this.name) errors.name = 'Name is required';
// Validate the product description
if (!this.description) errors.description = 'Description is required';
// Validate the product price
if (!this.price || isNaN(this.price)) errors.price = 'Price is required and must be a number';
// Validate the product category
if (!this.category) errors.category = 'Category is required';
// Validate the product image
if (!this.image) errors.image = 'Image is required';
return errors;
},
// Handle form submission
async submitForm() {
// Validate the input fields
const errors = this.validateInput();
// If there are validation errors, update the 'errors' data property and stop execution
if (Object.keys(errors).length > 0) {
this.errors = errors;
return;
}


try {
// Send a POST request to the API to add the product
await axios.post('/products', {
product_name: this.name,
  product_desc: this.description,
  product_price: this.price,
  product_category: this.category,
  product_image: this.image
});
// If the request is successful, redirect to the product list
this.$router.push('/');
} catch (error) {
// If an error occurs, log it to the console
console.error("An error occurred while adding the product:", error);
}
}
}
};
</script>






<style scoped>
.error {
color: red;
}
.add-product-form {
max-width: 400px;
margin: 20px auto;
padding: 20px;
background-color: #f9f9f9;
border-radius: 8px;
}


.input-field {
display: block;
width: 100%;
margin: 10px 0;
padding: 10px;
font-size: 1em;
}


.submit-button {
padding: 10px 20px;
background-color: #4CAF50;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
}


.submit-button:hover {
background-color: #45a049;
}
</style>