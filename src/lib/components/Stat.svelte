<script lang="ts">
  let { title, value } = $props();

  import Button from "./Button.svelte";
</script>

<Button>
  <div class="h-full flex flex-col items-start justify-start gap-2">
    <strong class="text-4xl">{value}</strong>
    <span class="text-sm sm:text-lg">
      {title}
    </span>
  </div>
</Button>
