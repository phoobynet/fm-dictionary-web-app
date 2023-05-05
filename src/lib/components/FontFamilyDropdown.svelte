<script lang="ts">
  import { fontFamily, fontFamilyPrettyName } from '$lib/stores/fontFamily'
  import ArrowDown from '$lib/components/icons/ArrowDown.svelte'
  import { clickOutside } from '$lib/actions/clickOutside'
  import { slide } from 'svelte/transition'
  import { FontFamily, toPrettyFontFamilyName } from '$lib/types/FontFamily'

  let open = false

  const options = [FontFamily.SansSerif, FontFamily.Serif, FontFamily.Mono]

  const onOpenMenu = () => {
    open = !open
  }

  const onFontSelect = (ff: FontFamily) => {
    $fontFamily = ff
    open = false
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      open = false
    }
  }

</script>

<svelte:document on:keyup={handleEscape}></svelte:document>

<nav
  aria-label="Main"
  class="font-family-dropdown"
  on:click={onOpenMenu}
  use:clickOutside={() => {
    open = false
  }}
>
  <div class="currently-selected-font">
    <div
      class={`name-container ${$fontFamily}`}
    >
      {$fontFamilyPrettyName}
    </div>
    <div class="arrow-container">
      <ArrowDown />
    </div>
  </div>
  {#if open}
    <div
      class="dropdown"
      transition:slide
    >
      <ul>
        {#each options as option}
          <li
            class={option}
            on:click|stopPropagation={() => onFontSelect(option)}
          >
            {toPrettyFontFamilyName(option)}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>

<style lang="scss">
  .font-family-dropdown {
    position: relative;
    display: flex;
    justify-content: end;
    height: 2rem;
    cursor: pointer;
    background-color: var(--color-bg-primary);

    .currently-selected-font {
      font-size: 14px;
      font-weight: bold;
      display: grid;
      align-items: center;
      color: var(--color-text-primary);
      gap: 1rem;
      grid-template-columns: [name] 7rem [arrow] 1rem;

      .name-container {
        text-transform: capitalize;
        justify-self: end;
      }

      .arrow-container {
        justify-self: center;
      }
    }

    .dropdown {
      position: absolute;
      z-index: 999;
      top: 2rem;
      width: 183px;
      height: 152px;
      padding: 0 1rem;
      border-radius: 1rem;
      background-color: var(--color-bg-primary);
      box-shadow: 0 5px 30px var(--color-box-shadow);
      -webkit-appearance: none;

      ul {
        display: flex;
        flex-direction: column;
        height: 120px;
        padding: 0.5rem 0;
        list-style: none;
        gap: 1.2rem;

        li {
          font-size: 18px;
          font-weight: bold;
          transition: all 0.2s ease-in-out;
          text-transform: capitalize;
          color: var(--color-text-primary);

          &:hover {
            color: var(--color-purple);
          }
        }
      }
    }

    @media (min-width: 768px) {
      .selected {
        font-size: 18px;
      }
      .dropdown {
        top: 3rem;
      }
    }
  }
</style>
