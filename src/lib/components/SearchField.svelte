<script lang="ts">
  import iconSearch from '$lib/assets/images/icon-search.svg'

  export let error = ''

  let isFocused = false
</script>

<div>
  <div
    class="search-input"
    class:focused={isFocused}
    class:error={!!error}
  >
    <input
      type="text"
      placeholder="Search for any word..."
      on:focus={() => isFocused = true}
      on:blur={() => isFocused = false}
    >
    <img
      src={iconSearch}
      alt=""
    >
  </div>
  {#if error}
    <div class="error-message">
      {error}
    </div>
  {/if}
</div>

<style lang="scss">
  .search-input {
    display: grid;
    border: 1px solid transparent;
    background-color: var(--color-light-gray);
    border-radius: 1rem;

    grid-template-columns: 1fr auto;
    grid-template-areas: "input icon";
    align-items: center;
    padding: 0 1.5rem;

    input {
      height: 4rem;
      grid-area: input;
      background-color: transparent;
      border: none;
      outline: none;
      font-weight: bold;
      font-size: 20px;
      color: var(--color-very-dark-gray);

      &::placeholder {
        font-weight: bold;
        font-size: 20px;
        color: var(--color-very-dark-gray);
        opacity: 0.25;
      }
    }

    img {
      grid-area: icon;
    }

    &.focused {
      border: 1px solid var(--color-purple);
    }

    &.error {
      border: 1px solid var(--color-red);
    }
  }

  .error-message {
    color: var(--color-red);
    font-family: var(--font-sans-serif);
    font-size: 20px;
    margin-top: 0.5rem;
  }
</style>
