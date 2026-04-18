<script lang="ts">
  const { data } = $props();
  const { posts, user } = data;
</script>

{#if user}
  <p>Welcome, {user.name}!</p>
{/if}

<h1>Posts</h1>
<ul>
  {#each posts as post}
    <li>{post.title}</li>
  {/each}
</ul>
