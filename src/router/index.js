import { createRouter, createWebHistory } from "vue-router";
// Define Route Component by Importing
import ProductPage from "../views/ProductPage.vue";
import LoginPage from "@/components/LoginPage.vue";
import AddProductPage from "@/components/AddProductPage.vue";
import SingleProduct from "@/components/SingleProduct.vue";
import OrdersPage from "../views/OrdersPage.vue";
// Define Routes, Each route should map to a component
const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/ProductPage",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/AddProduct",
    name: "AddProductPage",
    component: AddProductPage,
  },
  {
    path: "/SingleProduct/:id",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/orders",
    name: "OrdersPage",
    component: OrdersPage,
  },
];
// Create the router instance and pass the `routes` option
const router = createRouter({
  // Provide the history implementation to use
  history: createWebHistory(),
  routes: routes,
});

export default router;
