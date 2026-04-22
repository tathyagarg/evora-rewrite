<script lang="ts">
  import bcrypt from "bcryptjs";
  import { onMount } from "svelte";

  let { form } = $props();

  onMount(async () => {
    let pass = bcrypt.hashSync("password", 10);
    console.log(
      "Hashed password:",
      pass,
      bcrypt.compareSync("password", pass), // true
    );
  });
</script>

<div class="relative top-[calc(var(--spacing)*16+1.5em+2px)] z-0">
  {#if form?.success}
    <p>Login successful!</p>
  {:else if form?.error}
    <p style="color: red;">{form.error}</p>
  {/if}

  <form method="POST" action="?/login">
    <div class="grid grid-cols-3 gap-4 w-1/3 mx-auto py-8">
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        required
        class="col-span-2"
      />

      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        class="col-span-2"
      />

      <button type="submit" class="col-span-3 w-1/2 mx-auto cursor-pointer"
        >Login</button
      >
    </div>
  </form>
</div>

<style>
  input,
  button {
    background-color: var(--color-secondary);
    color: var(--color-primary);

    padding: 4px;
  }
</style>
