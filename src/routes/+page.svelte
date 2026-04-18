<script lang="ts">
  import Icon from "@iconify/svelte";

  import Button from "$lib/components/Button.svelte";
  import Stat from "$lib/components/Stat.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import EventPreview from "$lib/components/EventPreview.svelte";

  let { data } = $props();

  // console.log(latest_posts);

  const stats = [
    { title: "Women and Children helped", value: "600+" },
    { title: "Events conducted", value: "20+" },
    { title: "Families supported", value: "50+" },
    { title: "Dogs fed", value: "100+" },
  ];
</script>

<main
  class="h-[100vh] w-screen fixed top-[calc(var(--spacing)*16+1.5em+2px)] z-0"
>
  <div
    class="h-full w-full bg-primary flex items-center justify-center relative"
  >
    <div
      class="flex h-full w-full flex-col items-center justify-center gap-4 relative z-1"
    >
      <h1 class="text-4xl lg:text-6xl">Pink Legal Club</h1>
      <img src="/assets/logo.png" alt="logo" class="w-[34%] object-contain" />
      <Button>
        <button
          onclick={() => (window.location.href = "/work")}
          class="flex items-center gap-2 cursor-pointer"
        >
          <span>Our work</span>
          <Icon icon="mdi:arrow-right" class="text-2xl" />
        </button>
      </Button>
    </div>
  </div>
</main>

<!--
<img
  src="/assets/waves.svg"
  alt="waves"
  width="100%"
  class="aspect-[16/9] relative top-[calc(var(--spacing)*16+2em+4px)] z-1"
/>
-->

<div
  class="min-h-[100vh] relative top-[100vh] z-1 bg-(--lighter-primary) text-lg border-y-2 border-secondary box-content"
>
  <div
    class="flex flex-col lg:flex-row min-h-[100vh] w-full items-center justify-between lg:justify-center gap-12 p-4 lg:p-12"
  >
    <div class="flex-1 box-border">
      <h1 class="text-7xl">Who we are</h1>
      <hr />
      <p class="mt-4 text-sm sm:text-lg">
        PLC Evora is a club under Pink Legal Clubs, an initiative of Pink
        Legal—India’s largest and only platform dedicated to women’s legal
        rights. Our focus lies in creating social impact and spreading legal
        awareness, especially among women and marginalized communities. Through
        impactful initiatives, PLC Evora has helped over 250 underprivileged
        children, supported 50+ families through relief and donation drives, fed
        100+ stray dogs, and conducted education and awareness programs for 200+
        women. We also run our own editorial platform that publishes articles on
        law, society, and gender justice.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-12 flex-1 lg:flex-inital">
      {#each stats as stat}
        <Stat title={stat.title} value={stat.value} />
      {/each}
    </div>
  </div>
</div>

<!-- class="h-[calc(var(--spacing)*-16-1.5em-2px+100vh)] relative top-[calc(var(--spacing)*16+1.5em+2px)] z-1 bg-(--lighter-primary) py-20 px-12 box-border flex items-center justify-center gap-12 text-lg" -->
<div
  class="min-h-[100vh] relative top-[100vh] z-1 bg-primary py-20 p-4 lg:px-12 box-border text-lg"
>
  <h1 class="text-7xl">Our latest work</h1>
  <hr />
  <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-12">
    <!--
    {#each events as event}
      <EventPreview data={event} />
    {/each}
-->
  </div>
</div>

<!--
<div class="relative top-[100vh] h-screen bg-red-500"></div>
-->
<Footer top="100vh"></Footer>
