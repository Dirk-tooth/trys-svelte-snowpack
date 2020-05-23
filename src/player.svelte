<script>
  export let life;
  export let name;
  export let id;

  function increment() {
    life += 1;
  }

  function decrement() {
    life -= 1;
  }

  function reset(newLife) {
    life = newLife;
  }
</script>

<style>

</style>

<div>
  <input
    placeholder={name + " " + id}
    value={name === "Player" ? null : name}
  >
  <h3>{life}</h3>
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button>
  <button on:click={() => reset(20)}>reset to 20</button>
</div>
