import axios from "axios";
import { Order } from "./types";

const API_URL = 'https://vinicius-camargo-sds2.herokuapp.com';

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}

export function confirmDelivery(orderId: number) {
  return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}