<script>

  import LoginForm from './loginForm.svelte';
  import RoomIdentifier from './roomIdentifier.svelte';
  import Scores from './score.svelte';
  import Video from './video.svelte';

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
  <LoginForm/>
  <RoomIdentifier/>
  <Scores/>
  <Video/>

</div>
