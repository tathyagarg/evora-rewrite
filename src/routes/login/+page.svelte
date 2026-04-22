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
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required />

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required />

    <button type="submit">Login</button>
  </form>
</div>
