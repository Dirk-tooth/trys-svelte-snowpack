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
</style>

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
