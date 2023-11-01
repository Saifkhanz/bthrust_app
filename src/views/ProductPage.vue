<template>
	<v-container>
		<div class="d-flex">
			<v-col cols="auto">
				<v-btn @click="router.push('/AddProduct')">Add Product</v-btn>
			</v-col>
			<v-col cols="auto">
				<v-btn @click="router.push('/orders')">your's Orders</v-btn>
			</v-col>
			<v-col cols="auto">
				<v-btn @click="logout()">Logout</v-btn>
			</v-col>
		</div>
		<v-row>
			<v-col v-for="product in displayedProducts" :key="product.id" cols="4">
				<v-card>
					<v-card-title>{{ product.name }}</v-card-title>
					<img
						:src="product.image"
						style="width: -webkit-fill-available; height: 250px"
					/>
					<v-card-text> Price: ${{ product.price }} </v-card-text>
					<v-card-actions>
						<v-btn @click="addToCart(product)" color="primary"
							>Add to Cart</v-btn
						>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
		<v-pagination
			v-model="currentPage"
			:length="totalPages"
			@input="loadPageData"
		></v-pagination>
	</v-container>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const itemsPerPage = ref(5); // Number of items per page
const currentPage = ref(1);
const displayedProducts = computed(() => {
	// Calculate the range of products to display on the current page
	const start = (currentPage.value - 1) * itemsPerPage.value;
	const end = start + itemsPerPage.value;
	return store.state.products.slice(start, end);
});
const totalPages = computed(() => {
	// Calculate the total number of pages based on the itemsPerPage and total products
	return Math.ceil(store.state.products.length / itemsPerPage.value);
});
const loadPageData = async () => {
	//  Vuex action named 'fetchProduct' that retrieves the product data from an API
	try {
		await store.dispatch("fetchProduct", currentPage.value);
	} catch (error) {
		console.error("Error", error);
	}
};
onMounted(() => {
	store.dispatch("fetchProduct");
	console.log("check");
});
function addToCart(product) {
	console.log("PRODUCT", product);
	router.push({ name: "SingleProduct", params: { id: product.id } });
}
function logout() {
	// Remove the authToken from localStorage
	localStorage.removeItem("authToken");
	router.push("/");
}
</script>

<style>
</style>