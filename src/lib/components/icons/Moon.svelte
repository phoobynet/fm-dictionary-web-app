<script lang="ts">
  import { theme } from '$lib/theme'
</script>


<svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  viewBox="0 0 22 22"
  class="icon-moon"
  class:dark={$theme === 'dark'}
>
  <path
    fill="none"
    stroke="#838383"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
  />
</svg>

<style lang="scss">
  .icon-moon {
    transition: color 0.2s ease-in-out;
    &.dark {
      path {
        stroke: var(--color-purple);
      }
    }
  }
</style>
