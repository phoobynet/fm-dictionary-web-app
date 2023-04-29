<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="75"
  height="75"
  viewBox="0 0 75 75"
  class="svg"
  on:click={() => dispatch('click')}
>
  <g
    fill="#A445ED"
    fill-rule="evenodd"
  >
    <circle
      cx="37.5"
      cy="37.5"
      r="37.5"
      opacity=".25"
    />
    <path d="M29 27v21l21-10.5z" />
  </g>
</svg>

<style lang="scss">
  .svg {
    width: 3rem;
    height: 3rem;
    cursor: pointer;

    &:hover {
      g {
        circle {
          transition: all 0.2s ease;
          opacity: 1;
        }

        path {
          transition: all 0.2s ease;
          fill: #fff;
        }
      }
    }

    &:active {
      transition: all 0.2s ease;
      transform: scale(0.95);
    }
  }
</style>
