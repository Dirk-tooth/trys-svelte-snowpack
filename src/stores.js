import { writable } from "svelte/store";

export const players = writable([
  {
    name: "Player",
    life: 20,
    id: 1
  },
  {
    name: "Player",
    life: 20,
    id: 2
  }
]);
