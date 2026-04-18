<script lang="ts">
  let { start_date, end_date } = $props();

  const absolute_start_date = new Date(start_date ?? 0);
  const absolute_end_date = new Date(end_date ?? 0);

  const start_year = absolute_start_date.getFullYear();
  const start_month = absolute_start_date.toLocaleString("default", {
    month: "short",
  });
  const start_day = absolute_start_date.getDate();
  const start_hour = absolute_start_date.getHours();

  const end_year = absolute_end_date.getFullYear();
  const end_month = absolute_end_date.toLocaleString("default", {
    month: "short",
  });
  const end_day = absolute_end_date.getDate();
  const end_hour = absolute_end_date.getHours();
</script>

{#if start_year == end_year && start_month == end_month && start_day == end_day}
  <span>
    {start_month}
    {start_day}, {start_year}
    {#if start_hour != end_hour}
      {start_hour % 12 || 12}:{absolute_start_date
        .getMinutes()
        .toString()
        .padStart(2, "0")}
      {start_hour >= 12 ? "PM" : "AM"} - {end_hour % 12 ||
        12}:{absolute_end_date.getMinutes().toString().padStart(2, "0")}
      {end_hour >= 12 ? "PM" : "AM"}
    {/if}
  </span>
{:else if start_year == end_year && start_month == end_month}
  <span>
    {start_month}
    {start_day}, {start_year}
    {#if start_hour != end_hour}
      {start_hour % 12 || 12}:{absolute_start_date
        .getMinutes()
        .toString()
        .padStart(2, "0")}
      {start_hour >= 12 ? "PM" : "AM"} - {end_day}, {end_hour % 12 ||
        12}:{absolute_end_date.getMinutes().toString().padStart(2, "0")}
      {end_hour >= 12 ? "PM" : "AM"}
    {/if}
  </span>
{:else if start_year == end_year}
  <span>
    {start_month}
    {start_day}, {start_year}
    {#if start_hour != end_hour}
      {start_hour % 12 || 12}:{absolute_start_date
        .getMinutes()
        .toString()
        .padStart(2, "0")}
      {start_hour >= 12 ? "PM" : "AM"} - {end_month}
      {end_day}, {end_year}
      {end_hour % 12 || 12}:{absolute_end_date
        .getMinutes()
        .toString()
        .padStart(2, "0")}
      {end_hour >= 12 ? "PM" : "AM"}
    {/if}
  </span>
{:else}
  <span>
    {start_month}
    {start_day}, {start_year}
    {#if start_hour != end_hour}
      {start_hour % 12 || 12}:{absolute_start_date
        .getMinutes()
        .toString()
        .padStart(2, "0")}
      {start_hour >= 12 ? "PM" : "AM"} - {end_month}
      {end_day}, {end_year}
      {end_hour % 12 || 12}:{absolute_end_date
        .getMinutes()
        .toString()
        .padStart(2, "0")}
      {end_hour >= 12 ? "PM" : "AM"}
    {/if}
  </span>
{/if}
