<script>
  import { players } from './stores';

  export let life;
  export let name;
  export let id

  function increment(id) {
    life += 1;
  }

  function decrement(id) {
    life -= 1;
  }

  function reset(id, newLife) {
    life = newLife;
  }

  function removePlayer(id) {
    players.set($players.reduce((acc, player) => {
      console.log("player", player, "acc", acc);
      if (player.id !== id) {
        return [...acc, player];
      }
      return acc;
    },[]))
  }

</script>

<style>

</style>

<div>
  <input
    placeholder={name + " " + id}
    value={name === "Player" ? null : name}
  >
  <button on:click={() => removePlayer(id)}>X</button>
  <h3>{life}</h3>
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button>
  <button on:click={() => reset(20)}>reset to 20</button>
</div>
