<script lang="ts">
  let { name, color } = $props();

  const DEFAULT_BG = "107, 114, 128";
</script>

<span
  class="inline-block rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2"
  style={`line-height: 1; background-color: rgba(${data.color || DEFAULT_BG}, 0.75); color: ${color ? "#fff" : "#374151"};`}
>
  #{name}
</span>
