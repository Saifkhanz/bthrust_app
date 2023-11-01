<template>
	<!-- <v-row align="center" justify="center"> -->
	<v-card class="mx-auto my-16" max-width="450" title="User Login">
		<v-container>
			<!-- <v-text-field
				v-model="first"
				color="primary"
				label="First name"
				variant="underlined"
			></v-text-field> -->

			<!-- <v-text-field
				v-model="last"
				color="primary"
				label="Last name"
				variant="underlined"
			></v-text-field> -->

			<v-text-field
				v-model="email"
				color="primary"
				label="Email"
				variant="underlined"
			></v-text-field>

			<v-text-field
				v-model="password"
				color="primary"
				label="Password"
				placeholder="Enter your password"
				variant="underlined"
				type="password"
			></v-text-field>
		</v-container>

		<v-divider></v-divider>

		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn
				:loading="loading"
				:disabled="loading"
				color="blue-grey"
				prepend-icon="mdi-login"
				@click="Login()"
			>
				Login
			</v-btn>
		</v-card-actions>
	</v-card>
	<!-- </v-row> -->
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { useStore } from "vuex";
import axios from "axios"; // Import Axios
// const store = useStore();
const email = ref("");
const password = ref("");
const loading = ref(false);
const router = useRouter();
// function Login() {
// 	loading.value = true;
// 	// Make an API call using the store's action
// 	store.dispatch("fetchData").then(() => {
// 		loading.value = false;
// 		console.log("Hello ", first.value, last.value, email.value, password.value);
// 	});
// }
async function Login() {
	loading.value = true;
	try {
		// Make an Axios request
		const response = await axios.post("https://reqres.in/api/register", {
			email: email.value,
			password: password.value,
		});
		console.log("Response Data: ", response.data);
		// Save the token to local storage
		localStorage.setItem("authToken", response.data.token);
		// Use router.push to navigate to a different route
		router.push("/ProductPage");
	} catch (error) {
		// Handle errors
		console.error("API Error: ", error);
		prompt("ERROR", error.message);
	} finally {
		loading.value = false;
	}
}
</script>
<!-- 
  <template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <ul>
      <li v-for="item in data" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const data = computed(() => store.getters.getData);

    const fetchData = () => {
      store.dispatch('fetchData');
    };

    return { data, fetchData };
  },
});
</script>

 -->