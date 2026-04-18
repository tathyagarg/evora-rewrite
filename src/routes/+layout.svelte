<script lang="ts">
  import { onMount } from "svelte";
  import "./layout.css";
  import Navbar from "$lib/components/Navbar.svelte";

  onMount(() => {
    const canvas = document.createElement("canvas");
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const imageData = ctx?.createImageData(size, size);
    const data = imageData?.data;

    for (let i = 0; i < (data?.length ?? 0); i += 4) {
      const shade_range = Math.random();
      const shade = (shade_range > 0.5 ? 255 : 0) * Math.random() * 0.75;

      if (data) {
        data[i] = shade;
        data[i + 1] = shade;
        data[i + 2] = shade;
        data[i + 3] = 20;
      }
    }

    ctx?.putImageData(imageData ?? new ImageData(0, 0), 0, 0);
    document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;
  });

  const { children } = $props();
</script>

<svelte:head>
  <title>Pink Legal Club - Evora</title>
  <link rel="icon" href="/assets/favicon.png" />
</svelte:head>

<Navbar />

{@render children()}
