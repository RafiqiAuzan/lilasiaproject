<template>
  <div class="edit-product">
    <form
      @submit.prevent="submitForm"
      enctype="multipart/form-data"
      class="edit-product-form"
    >
      <input
        class="input-field"
        v-model="product.name"
        placeholder="Product Name"
      />
      <p v-if="errors.name" class="error">{{ errors.name }}</p>

      <input
        class="input-field"
        v-model="product.description"
        placeholder="Product Description"
      />
      <p v-if="errors.description" class="error">{{ errors.description }}</p>

      <input
        class="input-field"
        v-model="product.price"
        placeholder="Product Price"
      />
      <p v-if="errors.price" class="error">{{ errors.price }}</p>

      <input
        class="input-field"
        v-model="product.category"
        placeholder="Product Category"
      />
      <p v-if="errors.category" class="error">{{ errors.category }}</p>

      <input type="file" @change="handleImageChange" />
      <p v-if="errors.image" class="error">{{ errors.image }}</p>

      <button type="submit" class="submit-button">Update Product</button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "@/axios";

export default {
  setup() {
    const product = ref({
      id: null,
      name: "",
      description: "",
      price: 0,
      category: "",
      image: "",
    });
    const errors = ref({});

    const route = useRoute();
    product.value.id = route.params.id;

    const router = useRouter();

    const validateInput = () => {
      const errorMessages = {};
      if (!product.value.name) errorMessages.name = "Name is required";
      if (!product.value.description)
        errorMessages.description = "Description is required";
      if (!product.value.price || isNaN(product.value.price))
        errorMessages.price = "Price is required and must be a number";
      if (!product.value.category)
        errorMessages.category = "Category is required";
      if (!product.value.image) errorMessages.image = "Image is required";
      return errorMessages;
    };

    const submitForm = async () => {
      const errorMessages = validateInput();
      if (Object.keys(errorMessages).length > 0) {
        errors.value = errorMessages;
        return;
      }

      try {
        await axios.put(`/products/${product.value.id}`, {
          product_name: product.value.name,
          product_desc: product.value.description,
          product_price: product.value.price,
          product_category: product.value.category,
          product_image: product.value.image,
        });
        router.push("/");
      } catch (error) {
        console.error("An error occurred while updating the product:", error);
        if (error.response && error.response.status === 422) {
          errors.value = error.response.data.errors;
        }
      }
    };

    onMounted(async () => {
      try {
        const response = await axios.get(`/products/${product.value.id}`);
        product.value.name = response.data.product_name;
        product.value.description = response.data.product_desc;
        product.value.price = response.data.product_price;
        product.value.category = response.data.product_category;
        product.value.image = response.data.product_image;
      } catch (error) {
        console.error("An error occurred while fetching the product:", error);
      }
    });

    return { product, submitForm, errors };
  },
};
</script>

<style scoped>
.error {
  color: red;
}
.edit-product {
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
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #e68a00;
}
</style>
