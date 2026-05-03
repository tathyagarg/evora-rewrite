<script lang="ts">
  import Icon from "@iconify/svelte";

  import Footer from "$lib/components/Footer.svelte";
  import EventPreview from "$lib/components/EventPreview.svelte";

  let { data } = $props();
  let { events } = $derived(data);

  const stats = [
    { title: "Women and Children helped", value: "600+" },
    { title: "Events conducted", value: "20+" },
    { title: "Families supported", value: "50+" },
    { title: "Dogs fed", value: "100+" },
  ];
</script>

<main class="h-[100vh] w-screen z-0 relative bg-black/5">
  <div
    class="h-full w-full bg-[rgab(from_var(--color-primary)_r_g_b/0.75)] flex items-center justify-center relative"
  >
    <div
      class="flex h-full w-full flex-col items-center justify-center gap-4 relative z-1"
    >
      <h1 class="text-4xl lg:text-6xl">Pink Legal Club</h1>
      <img src="/assets/logo.png" alt="logo" class="w-1/3 object-contain" />
    </div>
  </div>

  <img
    src="/assets/waves.svg"
    alt="waves"
    class="absolute bottom-0 right-0 left-0 min-w-screen"
  />
</main>

<div
  class="h-screen relative z-1 bg-secondary text-primary text-lg border-y-2 border-secondary box-content"
>
  <div
    class="flex flex-col sm:flex-row h-full w-full items-center justify-center gap-12"
  >
    <div
      class="flex-1 flex flex-col h-screen w-full items-center justify-center gap-12 p-4 lg:p-12"
    >
      <div class="lg:w-3/4 mx-auto">
        <h1 class="text-7xl">Who we are</h1>
        <hr />
        <p class="mt-4 text-sm sm:text-base text-black">
          PLC Evora is a club under Pink Legal Clubs, an initiative of Pink
          Legal—India’s largest and only platform dedicated to women’s legal
          rights. Our focus lies in creating social impact and spreading legal
          awareness, especially among women and marginalized communities.
          Through impactful initiatives, PLC Evora has helped over 250
          underprivileged children, supported 50+ families through relief and
          donation drives, fed 100+ stray dogs, and conducted education and
          awareness programs for 200+ women. We also run our own editorial
          platform that publishes articles on law, society, and gender justice.
        </p>

        <div class="mt-4 grid grid-cols-2 rounded overflow-hidden w-full">
          {#each stats as stat, i}
            <div
              class="flex flex-col items-center justify-center gap-2 border-t-1 border-l-1 border-primary p-4"
              class:border-r-1={i === 1 || i === 3}
              class:border-b-1={i === 2 || i === 3}
              class:rounded-tl={i === 0}
              class:rounded-tr={i === 1}
              class:rounded-bl={i === 2}
              class:rounded-br={i === 3}
            >
              <h2 class="text-4xl lg:text-5xl font-bold">{stat.value}</h2>
              <p class="text-sm text-center">{stat.title}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <img
      src="https://res.cloudinary.com/dt1rojbiv/image/upload/v1776528228/what-went-wrong_knszco.png"
      alt="what went wrong"
      class="flex-1 h-full! w-1/2 object-cover object-right"
    />
  </div>
</div>

<!-- class="h-[calc(var(--spacing)*-16-1.5em-2px+100vh)] relative top-[calc(var(--spacing)*16+1.5em+2px)] z-1 bg-(--lighter-primary) py-20 px-12 box-border flex items-center justify-center gap-12 text-lg" -->
<div
  class="min-h-[100vh] relative z-1 bg-primary py-20 p-4 lg:px-12 box-border text-lg"
>
  <h1 class="text-7xl">Our latest work</h1>
  <hr />
  <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-12">
    {#each events as event}
      <EventPreview data={event} />
    {/each}
  </div>
</div>

<!--
<div class="relative top-[100vh] h-screen bg-red-500"></div>
-->
<Footer top=""></Footer>
