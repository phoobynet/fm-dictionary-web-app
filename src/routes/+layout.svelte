<script lang='ts'>
  import '../app.scss'

  // DO NOT REMOVE THIS IMPORT - required for loading the body tags class
  import '$lib/theme'
  import { onMount } from 'svelte'
  import { fontFamily } from '$lib/font'
  import { AppConfig } from '$lib/config/AppConfig'

  onMount(() => {
    $fontFamily = AppConfig.getInstance().fontFamily
  })

</script>

<div class='layout'>
  <main>
    <slot></slot>
  </main>
</div>

<style lang='scss'>
  .layout {
    display: flex;
    justify-content: center;

    main {
      width: 327px;

      @media (min-width: 768px) {
        width: 689px;
      }

      @media (min-width: 1440px) {
        width: 737px;
      }
    }
  }
</style>

