<script lang="ts">
  import iconArrowDown from '$lib/assets/images/icon-arrow-down.svg'
  import SearchField from '$lib/components/SearchField.svelte'
</script>

<img
  src="{iconArrowDown}"
  alt=""
>

<SearchField error="{'Hello'}" />

<p class="example1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur est eum illo in incidunt inventore iste iure libero magnam maiores molestiae, necessitatibus officia praesentium tempora, voluptatibus voluptatum? Mollitia, sit!</p>
<p class="example2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam debitis exercitationem ipsum nesciunt quisquam temporibus vitae voluptatem. Ad aspernatur doloremque eligendi exercitationem modi repudiandae unde vitae. Alias nulla quis totam!</p>
<p class="example3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet est fuga ipsam odit pariatur provident quae quas temporibus velit! Debitis earum modi praesentium quas quos saepe similique ut voluptatem.</p>

<style lang="scss">
  .example1 {
    font-family: var(--font-serif);
  }


  .example2 {
    font-family: var(--font-sans-serif);
  }

  .example3 {
    font-family: var(--font-mono);
  }
</style>
