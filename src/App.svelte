<script>

  import PlayerCard from './player.svelte'
  import { players } from './stores'

  function addPlayer() {
    players.update(n => [...n, {
      name: "Player",
      life: 20,
      id: n.length + 1
    }])
    console.log(players);
  }

</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  .App {
    text-align: center;
  }
</style>

<div class="App">
  <h1>magicJS</h1>
  <button on:click={addPlayer}>+ Add Player</button>
  {#each $players as player (player.id)}
    <PlayerCard
      name={player.name}
      life={player.life}
      id={player.id}
    />
  {/each}
</div>
