<script lang="ts">
  import { searchResult, audioUrl } from '$lib/stores/searchResult'
  import IconPlay from '$lib/components/IconPlay.svelte'

  const onPlay = () => {
    if ($audioUrl) {
      const audio = new Audio($audioUrl)
      audio.play()
    }
  }
</script>

<div class="search-result">
  <header>
    <h1 class="word">{$searchResult.word}</h1>
    <h2 class="phonetic">{$searchResult.phonetic}</h2>
    <div class="play">
      <IconPlay on:click={onPlay} />
    </div>
  </header>
</div>
<style lang="scss">
  .search-result {
    color: var(--color-text-primary);

    header {
      display: grid;
      grid-template-rows: repeat(2, 3rem);
      grid-template-areas:
        "word play"
        "phonetic play";

      .word {
        grid-area: word;
        font-size: 2rem;
        font-weight: 700;
        align-self: center;
      }

      .phonetic {
        grid-area: phonetic;
        color: var(--color-purple);
        font-weight: 400;
        align-self: center;
      }

      .play {
        grid-area: play;
        align-self: center;
        justify-self: end;
      }
    }
  }
</style>

