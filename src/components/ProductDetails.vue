<template>
  <div v-if="product" class="product-details">
    <h2 class="product-title">{{ product.product_name }}</h2>
    <p class="product-description">{{ product.product_desc }}</p>
    <p class="product-price">Price: IDR {{ product.product_price }}</p>
    <p class="product-price">{{ product.product_category }}</p>
    <p class="product-price">{{ product.product_image }}</p>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      product: null,
    };
  },
  async mounted() {
    const productId = this.$route.params.id;
    try {
      const response = await axios.get(`/products/${productId}`);
      this.product = response.data;
    } catch (error) {
      console.error("An error occurred while fetching the product:", error);
    }
  },
};
</script>

<style scoped>
.product-details {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.product-title {
  margin-bottom: 20px;
  font-size: 2em;
}

.product-description {
  font-size: 1.2em;
}

.product-price {
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: bold;
}
</style>
