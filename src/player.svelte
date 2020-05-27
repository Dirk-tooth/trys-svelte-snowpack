<script>
  import { onMount } from 'svelte';
  import CounterCard from './counter.svelte';
  import { players } from './stores'

  export let id;

  let life, name, counters = [];

  onMount(() => {
    life = 20
    name = "Player"
  })

  function incrrement() {
    life += 1;
  }

  function decrrement() {
    life -= 1;
  }

  function reset(newLife) {
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

  function removeCounter(event) {
    counters = counters.reduce((acc, counter) => {
      console.log("counter", counter, "acc", acc);
      if (counter.id !== event.detail.id) {
        return [...acc, counter];
      }
      return acc;
    },[])
  }

  function addCounter() {
    counters = [...counters, {
      id: counters.length == 0 ? 1 : counters[counters.length - 1].id + 1
    }]
  }

</script>

<style>
  .player-card {
    border-radius: 12px;
    background: white;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.75);
  }
  input {
    border: none;
    border-bottom: 1px solid black;
    font-size: 1rem;
    border-radius: none;
  }
  button {
    border: none;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    background: transparent;
  }
  .life {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
  .life p {
    padding: 0 1rem 0 1rem;
  }
  .life button {
    font-size: 2rem;
  }
</style>

<div class="player-card">
  <input
    placeholder={name + " " + id}
    value={name === "Player" ? null : name}
  >
  <button on:click={() => removePlayer(id)}>X</button>
  <div class="life">
    <button on:click={decrrement}>-</button>
    <p>{life}</p>
    <button on:click={incrrement}>+</button>
  </div>
  <button on:click={() => addCounter()}>+ counters</button>
  <button on:click={() => reset(20)}>reset to 20</button>
  {#each counters as counter (counter.id)}
    <CounterCard
      on:remove={removeCounter}
      id={counter.id}
    />
  {/each}
</div>
