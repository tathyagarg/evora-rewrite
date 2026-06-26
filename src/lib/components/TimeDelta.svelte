<script lang="ts">
  let { start_date } = $props();

  const absolute_start_date = $derived(new Date(start_date ?? 0));

  const start_year = $derived(absolute_start_date.getFullYear());
  const start_month = $derived(
    absolute_start_date.toLocaleString("default", {
      month: "short",
    }),
  );
  const start_day = $derived(absolute_start_date.getDate());
</script>

<span class="text-sm text-primary/50">
  {start_month}
  {start_day}, {start_year}
</span>
