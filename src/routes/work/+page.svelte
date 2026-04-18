<script lang="ts">
  import EventPreview from "$lib/components/EventPreview.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Heading from "$lib/components/Heading.svelte";

  let { data } = $props();

  const events = data.events;
</script>

<div class="relative top-[calc(var(--spacing)*16+1.5em+2px)] z-0">
  <Heading text="Our Work" />

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 px-12 pb-8">
    {#each events as event}
      <EventPreview data={event} />
    {/each}
  </div>

  <Footer top={""} />
</div>
