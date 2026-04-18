<script lang="ts">
  let { data } = $props();
  let { user } = data;
</script>

{#if user}
  <p>Welcome, {user.name}!</p>
{:else}
  <p>Please log in to see your information.</p>
{/if}
