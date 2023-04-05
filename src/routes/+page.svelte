<script lang="ts">
  import SearchField from '$lib/components/SearchField.svelte'
  import IconLogo from '$lib/components/IconLogo.svelte'
  import FontDropdown from '$lib/components/FontDropdown.svelte'
  import ToggleTheme from '$lib/components/ToggleTheme.svelte'
</script>

<div class="root">
  <div class="heading">
    <div>
      <IconLogo />
    </div>
    <div class="rhs">
      <FontDropdown />
      <ToggleTheme />
    </div>
  </div>
  <SearchField />
</div>


<style lang="scss">
  .root {
    .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .rhs {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
