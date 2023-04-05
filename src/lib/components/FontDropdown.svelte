<script lang="ts">
  import { FontFamily, fontFamily } from '$lib/stores/fontFamily'
  import IconArrowDown from '$lib/components/IconArrowDown.svelte'
  import { clickOutside } from '$lib/actions/clickOutside'
  import { slide } from 'svelte/transition'

  let open = false

  const desc = (ff?: FontFamily): string => {
    switch (ff) {
      case FontFamily.SansSerif:
        return 'Sans Serif'
      case FontFamily.Serif:
        return 'Serif'
      case FontFamily.Mono:
        return 'Mono'
      default:
        return 'Sans Serif'
    }
  }

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

<div
  class="font-dropdown"
  on:click={onOpenMenu}
  use:clickOutside={() => {
    open = false
  }}
>
  <div class="selected">
    <div class="current">
      {desc($fontFamily)}
    </div>
    <div>
      <IconArrowDown />
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
            {desc(option)}
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style lang="scss">
  .font-dropdown {
    min-height: 2rem;
    position: relative;
    display: flex;
    justify-content: end;
    cursor: pointer;
    background-color: var(--color-bg-primary);
    //background-color: pink;

    .selected {
      font-size: 14px;
      font-weight: bold;
      line-height: 14px;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: var(--color-text-primary);

      .current {
        letter-spacing: 0.1rem;
      }
    }

    .dropdown {
      -webkit-appearance: none;
      position: absolute;
      z-index: 999;
      top: 2rem;
      width: 183px;
      height: 152px;
      padding: 0 1rem;
      border-radius: 1rem;
      background-color: var(--color-bg-primary);
      box-shadow: 0 5px 30px var(--color-box-shadow);

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
          color: var(--color-text-primary);

          &:hover {
            color: var(--color-purple);
          }
        }

        li.sans-serif {
          font-family: var(--font-sans-serif);
        }

        li.serif {
          font-family: var(--font-serif);
        }

        li.mono {
          font-family: var(--font-mono);
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
