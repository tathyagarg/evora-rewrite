<script lang="ts">
  let { form } = $props();
</script>

{#if form?.success}
  <p>Form submitted successfully!</p>
{:else if form?.error}
  <p>Error submitting form: {form.error}</p>
{/if}

<form method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <button type="submit">Submit</button>
</form>
