<template>
  <section class="lg:grid">
    <div class="pt-[84px] lg:pt-0 lg:order-last">
      <div class="container mx-auto py-8 lg:py-0 lg:pt-16">
        <router-link
          class="block mx-auto w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          to="/add-product" v-if="isLoggedIn">Add Product</router-link>
        <div class="">
          <div class="mx-auto mt-10 w-[750px] relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                  </th>
                </tr>
              </thead>
              <tbody v-for="product in products" :key="product.id">
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ product.product_name }}
                  </th>
                  <td class="px-6 py-4">
                    {{ product.product_category }}
                  </td>
                  <td class="px-6 py-4">
                    IDR {{ product.product_price }}
                  </td>
                  <td class="px-6 py-4">
                    <router-link class="edit-link font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      :to="{ name: 'editproduct', params: { id: product.id } }">Edit</router-link>
                    <router-link class="details-link" :to="{ name: 'productdetails', params: { id: product.id } }">View
                      Details</router-link>
                    <button class="delete-button" @click="deleteProduct(product.id)">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>  




<script>
import axios from "@/axios";
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },

  data() {
    return {
      products: [],
    };
  },
  methods: {
    async deleteProduct(id) {
      try {
        await axios.delete(`/products/${id}`);

        this.products = this.products.filter((product) => product.id !== id);
      } catch (error) {
        console.error("An error occurred while deleting the product:", error);
      }
    },
  },
  async created() {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      this.products = response.data;
    } catch (error) {
      console.error("An error occurred while fetching the products:", error);
    }
  },
};
</script>

