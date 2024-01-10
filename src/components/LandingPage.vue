<template>
  <div class="container mx-auto mt-16">
    <form>
      <label
        for="default-search"
        class="text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
          v-model="searchQuery"
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>

    <button
      id="dropdownCheckboxButton"
      data-dropdown-toggle="dropdownDefaultCheckbox"
      class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Category
      <svg
        class="w-2.5 h-6 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      id="dropdownDefaultCheckbox"
      class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownCheckboxButton"
      >
        <li>
          <div
            v-for="product in filteredProductsDropDown"
            :key="product.id"
            class="flex items-center"
          >
            <input
            :id="'checkbox-item-' + product.id"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
            :for="'checkbox-item-' + product.id"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{ product.product_category }}</label
            >
          </div>
        </li>
      </ul>
    </div>

    <button
      id="dropdownCheckboxButton2"
      data-dropdown-toggle="dropdownDefaultCheckbox2"
      class="mt-5 ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Price
      <svg
        class="w-2.5 h-6 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <div
      id="dropdownDefaultCheckbox2"
      class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <ul
        class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownCheckboxButton2"
      >
        <li>
          <div class="mb-2 flex items-center">
            <input
              id="checkbox-item-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-1"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >IDR 0 - IDR 100.000</label
            >
          </div>
        </li>
        <li>
          <div class="mb-2 flex items-center">
            <input
              id="checkbox-item-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-1"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >IDR 100.000 - IDR 500.000</label
            >
          </div>
        </li>
        <li>
          <div class="mb-2 flex items-center">
            <input
              id="checkbox-item-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="checkbox-item-1"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >up to IDR 500.000</label
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="grid grid-cols-4 mt-6 gap-10">
      <div
        v-for="product in filteredProducts "
        :key="product.id"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5"
      >
        <a href="#">
          <img
            class="rounded-t-lg"
            :src="'data:image/jpeg;base64,' + product.product_image"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#" :href="product.link">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ product.product_name }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ product.product_desc }}
          </p>
          <router-link
            :to="{ name: 'ProductDetails', params: { id: product.id } }"
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  data() {
    return {
      products: [],
      searchQuery: "",
        selectedCategories: [],
        selectedPrices: [],
    };
  },
  methods: {
  handleCategoryChange(category) {
    const index = this.selectedCategories.indexOf(category);
    if (index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }
  },
},
  computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.product_name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      );
    },
    filteredProductsDropDown() {
    return this.products.filter((product) =>
      this.selectedCategories.length === 0 ||
      this.selectedCategories.includes(product.product_category)
    );
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
