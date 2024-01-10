<template>
  <form
    @submit.prevent="submitForm"
    enctype="multipart/form-data"
    class="add-product-form"
  >
    <input class="input-field" v-model="name" placeholder="Product Name" />
    <p v-if="errors.name" class="error">{{ errors.name }}</p>

    <input
      class="input-field"
      v-model="description"
      placeholder="Product Description"
    />
    <p v-if="errors.description" class="error">{{ errors.description }}</p>

    <input class="input-field" v-model="price" placeholder="Product Price" />
    <p v-if="errors.price" class="error">{{ errors.price }}</p>

    <input
      class="input-field"
      v-model="category"
      placeholder="Product Category"
    />
    <p v-if="errors.category" class="error">{{ errors.category }}</p>

    <input type="file" @change="handleImageChange" />
    <p v-if="errors.image" class="error">{{ errors.image }}</p>

    <button type="submit" class="submit-button">Add Product</button>
  </form>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      selectedImage: null,
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
      errors: {},
    };
  },
  methods: {
    validateInput() {
      const errors = {};
      if (!this.name) errors.name = "Name is required";
      if (!this.description) errors.description = "Description is required";
      if (!this.price || isNaN(this.price))
        errors.price = "Price is required and must be a number";
      if (!this.category) errors.category = "Category is required";
      if (!this.selectedImage) errors.image = "Image is required";
      return errors;
    },
    async submitForm() {
      const errors = this.validateInput();
      if (Object.keys(errors).length > 0) {
        this.errors = errors;
        return;
      }

      try {
        const formData = new FormData();
        formData.append("product_name", this.name);
        formData.append("product_desc", this.description);
        formData.append("product_price", this.price);
        formData.append("product_category", this.category);
        formData.append("product_image", this.selectedImage);
        await axios.post("/products", formData);
        this.$router.push("/");
      } catch (error) {
        console.error("An error occurred while adding the product:", error);
      }
    },
    handleImageChange(event) {
      this.selectedImage = event.target.files[0];
    },
  },
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
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
