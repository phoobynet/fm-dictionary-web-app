<script lang="ts">
  import { theme } from '$lib/stores/theme'
  import Moon from '$lib/components/icons/Moon.svelte'

  const onClick = () => {
    theme.update(curr => curr === 'dark'
      ? 'light'
      : 'dark')
  }
</script>

<div class="container">
  <div
    class="toggle-theme"
    on:click={onClick}
    class:on={$theme === 'dark'}
  >
    <div
      class="slider"
    ></div>
  </div>
  <Moon />
</div>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .toggle-theme {
      position: relative;
      display: flex;
      align-items: center;
      width: 40px;
      height: 20px;
      cursor: pointer;
      border-radius: 10px;
      background-color: var(--color-gray);


      &.on {
        .slider {
          transform: translateX(20px);
        }

        background-color: var(--color-purple);
      }

      .slider {
        transition: all 0.2s ease-in-out;
        width: 14px;
        height: 14px;
        margin: 0 0.2rem;
        border-radius: 1rem;
        background-color: var(--color-white);
      }
    }
  }
</style>

