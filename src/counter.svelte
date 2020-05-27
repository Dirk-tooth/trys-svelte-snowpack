<script>
  import { createEventDispatcher } from 'svelte';
  export let id;
  let name = "Counter", val = 0;

  const dispatch = createEventDispatcher();

  function incrrement() {
    val += 1;
  }

  function decrrement() {
    val -= 1;
  }

  function removeCounter() {
    dispatch('remove', {
      id: id
    });
  }

</script>

<style>
  .counter {
    width: 70%;
    justify-content: center;
    margin-left: 15%;
  }
  .top {
    display: flex;
  }
  button {
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background: transparent;
  }
  input {
    border: none;
    border-bottom: 1px solid black;
    font-size: 1rem;
    border-radius: none;
    width: 80%;
  }
  .value {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }
</style>

<div class="counter">
  <div class="top">
    <input
      placeholder={name + " " + id}
      value={name === "Counter" ? null : name}
    >
    <button on:click={removeCounter}>X</button>
  </div>
  <div class="value">
    <button on:click={decrrement}>-</button>
    <p>{val}</p>
    <button on:click={incrrement}>+</button>
  </div>
</div>
