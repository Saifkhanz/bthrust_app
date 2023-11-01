<template>
	<div>
		<v-card class="mx-auto my-16" max-width="450" title="Add Product">
			<v-container>
				<v-text-field
					v-model="title"
					color="primary"
					label="title"
					variant="underlined"
				></v-text-field>

				<v-text-field
					type="number"
					v-model="price"
					color="primary"
					label="price"
					variant="underlined"
				></v-text-field>

				<v-text-field
					v-model="description"
					color="primary"
					label="description"
					variant="underlined"
				></v-text-field>

				<v-text-field
					v-model="category"
					color="primary"
					label="category"
					placeholder="Enter Category"
					variant="underlined"
				></v-text-field>
			</v-container>
			<v-divider></v-divider>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="blue-grey" prepend-icon="mdi-login" @click="Add()">
					Add
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>
<script setup>
// import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const title = ref("");
const description = ref("");
const category = ref("");
const price = ref();
const loading = ref(false);
async function Add() {
	loading.value = true;
	fetch("https://fakestoreapi.com/products", {
		method: "POST",
		body: JSON.stringify({
			title: title.value,
			price: price.value,
			description: description.value,
			// image: "https://i.pravatar.cc",
			category: category.value,
		}),
	})
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			router.push("/ProductPage");
		});
}
</script>