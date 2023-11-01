<template>
	<div>
		<v-col cols="auto">
			<v-btn @click="router.push('/ProductPage')">Products</v-btn>
		</v-col>
		<v-row>
			<v-col v-for="order in orders" :key="order.id" cols="4">
				<v-card>
					<v-card-title>{{ order.name }}</v-card-title>
					<img
						:src="order.image"
						style="width: -webkit-fill-available; height: 250px"
					/>
					<v-card-text> Price: ${{ order.price }} </v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const orders = ref();
const router = useRouter();
onBeforeMount(() => {
	orders.value = JSON.parse(localStorage.getItem("orders"));
	console.log("checking...", orders.value);
});
</script>

<style>
</style>