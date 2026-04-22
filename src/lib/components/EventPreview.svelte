<script lang="ts">
  import Icon from "@iconify/svelte";
  import Button from "./Button.svelte";
  import TimeDelta from "./TimeDelta.svelte";

  let { data } = $props();

  const start_date = new Date(data.start);
  const end_date = data.end ? new Date(data.end) : undefined;
</script>

<Button align_top={true}>
  <button class="w-full h-full flex flex-col gap-4 text-left" disabled>
    <img
      src={data.imgUrl}
      alt={data.name}
      class="w-full aspect-[5/4] object-cover rounded-lg content-center"
    />
    <div class="flex flex-col gap-4">
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
      <p class="text-lg">{data.description}</p>
    </div>
  </button>
</Button>
