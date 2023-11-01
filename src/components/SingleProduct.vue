<template>
	<div>
		<v-container v-if="product">
			<v-row>
				<v-col>
					<v-card>
						<v-card-title>{{ product.title }}</v-card-title>
						<img :src="product.image" style="height: 250px" />
						<v-card-text> Price: ${{ product.price }} </v-card-text>
						<v-card-text> Description: ${{ product.description }} </v-card-text>
						<v-card-text> Category: ${{ product.category }} </v-card-text>
						<v-card-actions>
							<v-btn @click="PlaceOrder(product)" color="primary"
								>Place Order</v-btn
							>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<div class="text-center ma-2">
			<!-- <v-btn @click="snackbar = true"> Open Snackbar </v-btn> -->
			<v-snackbar v-model="snackbar">
				{{ text }}

				<template v-slot:actions>
					<v-btn color="pink" variant="text" @click="snackbar = false">
						Close
					</v-btn>
				</template>
			</v-snackbar>
		</div>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount, ref } from "vue";
const router = useRouter();
const route = useRoute();
const product = ref();
const snackbar = ref(false);
const text = ref(`Successfully order is placed`);
function PlaceOrder(product) {
	const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
	// Add the new order to the array of orders
	existingOrders.push(product);
	// Store the updated orders array in local storage
	localStorage.setItem("orders", JSON.stringify(existingOrders));
	snackbar.value = true;
	setTimeout(() => {
		snackbar.value = true;
		router.push("/ProductPage");
	}, 2000);
	console.log(existingOrders);
}

onBeforeMount(() => {
	console.log("router and route", router, route);
	fetch(`https://fakestoreapi.com/products/${route.params.id}`)
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			product.value = json;
			console.log("Check", product.value);
		});
});
</script>
<style>
</style>