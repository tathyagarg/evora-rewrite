<script lang="ts">
  let { form } = $props();
</script>

{#if form?.success}
  <p>Form submitted successfully!</p>
{:else if form?.error}
  <p>Error submitting form: {form.error}</p>
{/if}

<div class="relative top-[calc(var(--spacing)*16+1.5em+2px)] z-0">
  <form method="POST" class="flex flex-col gap-4 p-8">
    <div class="flex gap-1 items-center">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        class="border border-gray-300 rounded px-3 py-2"
      />
    </div>

    <button
      type="submit"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-1/4 mx-auto"
    >
      Submit</button
    >
  </form>
</div>
