<script lang="ts">
  let { name, img, description, role } = $props();
</script>

<div class="bg-secondary text-primary rounded overflow-hidden h-full">
  <div class="flex flex-col sm:flex-row gap-4 h-full">
    <img
      src={img}
      alt={name}
      class="w-full sm:w-1/2 object-cover content-center"
    />
    <div class="flex-1 py-6 pr-6">
      <h2 class="text-2xl font-semibold mb-2">{name}</h2>
      <h3 class="text-lg text-primary font-semibold">{role}</h3>
      <hr class="my-4" />
      <p class="text-sm">{description}</p>
    </div>
  </div>
</div>
