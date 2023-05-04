<script lang="ts">
  import { page } from '$app/stores'
</script>

<div>
  <h2>{$page.status}: ${$page.error?.message}</h2>
</div>
