<script lang="ts">
  let { form } = $props();
</script>

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
