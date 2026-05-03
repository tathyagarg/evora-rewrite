<script lang="ts">
  import Icon from "@iconify/svelte";
  import TimeDelta from "./TimeDelta.svelte";

  let { data } = $props();

  const start_date = new Date(data.start);
  const end_date = data.end ? new Date(data.end) : undefined;
</script>

<div class="bg-secondary text-primary rounded overflow-hidden" id="card">
  <button class="w-full h-full flex flex-col gap-4 text-left" disabled>
    <img
      src={data.imgUrl}
      alt={data.name}
      class="w-full aspect-[5/4] object-cover content-center transition-transform duration-300 ease-in-out"
    />
    <div class="flex flex-col gap-4 px-6 py-2">
      <h2 class="text-2xl">{data.name}</h2>
      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center text-sm text-primary/50">
          <Icon icon="mdi:calendar" class="w-5 h-5" />
          <TimeDelta {start_date} {end_date} />
        </div>
        <div class="flex gap-2 items-center text-sm text-primary/50">
          <Icon icon="mdi:map-marker" class="w-5 h-5" />
          <span>{data.location}</span>
        </div>
      </div>
      <p class="text-sm text-justify">{data.description}</p>
    </div>
  </button>
</div>

<style>
  #card {
    transition:
      border-color 0.35s ease,
      transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.4s ease;
  }

  #card:hover {
    border-color: rgba(200, 99, 122, 0.55);
    transform: translateY(-6px);
    box-shadow:
      0 24px 60px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(200, 99, 122, 0.22);

    & img {
      transform: scale(1.05);
      transition: transform 0.4s ease;
    }
  }
</style>
