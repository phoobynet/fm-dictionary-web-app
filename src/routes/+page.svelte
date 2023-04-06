<script lang="ts">
  import SearchField from '$lib/components/SearchField.svelte'
  import IconLogo from '$lib/components/IconLogo.svelte'
  import FontFamilyDropdown from '$lib/components/FontFamilyDropdown.svelte'
  import ToggleTheme from '$lib/components/ToggleTheme.svelte'
  import { searchResult, search } from '$lib/stores/searchResult'
  import { debounce } from 'lodash-es'
  import SearchResult from '$lib/components/SearchResult.svelte'
  import { fade } from 'svelte/transition'

  let query = ''
  let loading = false

  const onSubmit = debounce(async () => {
    try {
      await search(query)
    } finally {
      loading = false
    }
  }, 500)
</script>

<div class="root">
  <div class="heading">
    <div class="icon-logo-container">
      <IconLogo />
    </div>
    <div class="font-dropdown-container">
      <FontFamilyDropdown />
    </div>
    <div class="vertical-divider"></div>
    <div class="toggle-theme-container">
      <ToggleTheme />
    </div>
  </div>
  <form
    class="search-field"
    on:submit|preventDefault={onSubmit}
  >
    <SearchField bind:query />
  </form>
  <main class="search-result">
    {#if loading}
      <p>TODO: Add spinner loading...</p>
    {/if}
    {#if $searchResult && !loading}
      <div transition:fade>
        <SearchResult />
      </div>
    {/if}
  </main>
</div>


<style lang="scss">
  .root {
    display: grid;
    row-gap: 1rem;
    grid-template-rows: 1fr 1fr;

    grid-template-areas:
      'heading'
      'search-field';

    .heading {
      grid-area: heading;
      display: grid;
      align-items: center;
      grid-template-columns: 2rem 1fr 1rem 6rem;
      grid-template-areas: "icon-logo font-dropdown veritcal-divider toggle-theme";
      justify-items: end;
      height: 2rem;

      .icon-logo-container {
        grid-area: icon-logo;
        justify-self: start;
      }

      .font-dropdown-container {
        grid-area: font-dropdown;
      }


      .vertical-divider {
        grid-area: veritcal-divider;
        width: 1px;
        height: 2rem;
        background-color: var(--color-light-gray);
      }

      .toggle-theme-container {
        grid-area: toggle-theme;
      }
    }

    .search-field {
      grid-area: search-field;
    }
  }
</style>
