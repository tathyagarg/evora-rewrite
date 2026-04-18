<script lang="ts">
  let { data, form } = $props();
  let { postKinds } = data;
</script>

{#if form?.success}
  <p>Post published successfully!</p>
{/if}

<form method="POST" action="?/publish">
  <label for="title">Title:</label>
  <input type="text" id="title" name="title" required />

  <label for="quote">Quote:</label>
  <textarea id="quote" name="quote"></textarea>

  <label for="content">Content:</label>
  <textarea id="content" name="content"></textarea>

  <label for="kind">Kind:</label>
  <select id="kind" name="kind" required>
    {#each postKinds as kind}
      <option value={kind.id}>{kind.name}</option>
    {/each}
  </select>

  <button type="submit">Submit</button>
</form>
