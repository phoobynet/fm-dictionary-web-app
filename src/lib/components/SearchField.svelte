<script lang='ts'>
  import Search from '$lib/components/icons/Search.svelte'
  import { searchQuery, searchError } from '$lib/search'
  import { fade } from 'svelte/transition'

  let isFocused = false

  $:error = $searchError && $searchQuery === ''
</script>

<div class='search-input'>
  <div
    class='input-content'
    class:error={error}
    class:focused={isFocused}
  >
    <input
      class='input'
      on:blur={() => isFocused = false}
      on:focus={() => isFocused = true}
      bind:value={$searchQuery}
      placeholder='Search for any word...'
      type='text'
    >
    <Search />
  </div>
  {#if error}
    <div class='error-message' transition:fade>
      Whoops, can't be empty
    </div>
  {/if}
</div>

<style lang='scss'>
  .search-input {
    .input-content {
      display: grid;
      align-items: center;
      padding: 0 1.5rem;
      border: 1px solid transparent;
      border-radius: 1rem;
      background-color: var(--color-input-bg);
      grid-template-columns: 1fr auto;
      grid-template-areas: "input icon";

      &.focused {
        border: 1px solid var(--color-purple);
      }

      &.error {
        border: 1px solid var(--color-red);
      }

      .input {
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.25rem;
        height: 3rem;
        color: var(--color-input-text);
        border: none;
        outline: none;
        background-color: transparent;
        grid-area: input;
        font-family: inherit;

        &::placeholder {
          font-size: 20px;
          font-weight: bold;
          opacity: 0.25;
          color: var(--color-input-placeholder);
        }
      }

      .img {
        grid-area: icon;
      }
    }

    .error-message {
      font-size: 20px;
      margin-top: 0.5rem;
      color: var(--color-red);
    }
  }

  @media (min-width: 768px) {
    .search-input {
      .input-content {
        .input {
          font-size: 1.25rem;
        }
      }
    }
  }
</style>
