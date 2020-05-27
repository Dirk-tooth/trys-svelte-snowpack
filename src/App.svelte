<script>

  import PlayerCard from './player.svelte'
  import { players } from './stores'

  function addPlayer() {
    players.update(n => [...n, {
      id: n[n.length - 1].id + 1
    }])
  }

</script>

<style>
  :global(body) {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #aabbcc;
  }
  .header {
    margin: 0;
    background: white;
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.75);
    display: flex;
    justify-content: space-between;
  }
  .App {
    text-align: center;
  }
  .player-area {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  button {
    border: none;
    padding: 0.5rem 0.75rem;
    font-size: 1.5rem;
    background: transparent;
  }
  .by-line {
    font-size: .75rem;
    color: #999;
  }
  .by-line a {
    color: #3c7ecb;
    text-decoration: underline;
  }
</style>

<div class="App">
  <div class="header">
    <div>{"<magicJS>"}</div>
    <div class="by-line">by <a href="https://github.com/dirk-tooth">dirk-tooth</a></div>
  </div>
  <button on:click={addPlayer}>+ Add Player</button>
  <div class="player-area">
  {#each $players as player (player.id)}
    <PlayerCard
      name={player.name}
      life={player.life}
      id={player.id}
    />
  {/each}
  </div>
</div>
