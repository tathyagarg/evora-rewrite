<script lang="ts">
  import type { Author, ProvisionalAuthor } from "@prisma/client";
  import Button from "./Button.svelte";
  import Date from "./Date.svelte";
  import Tag from "./Tag.svelte";

  let { data } = $props();
  let {
    author,
    provisionalAuthor,
  }: { author: Author; porvisionalAuthor: ProvisionalAuthor } = data;

  function titlecase(str: string): string {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
</script>

<Button align_top={true}>
  <button
    class="w-full h-full flex flex-col gap-4 cursor-pointer text-left"
    onclick={() => (window.location.href = `/editorial/${data.slug}`)}
    aria-label={`Read more about ${data.title}`}
  >
    <!-- kind -->
    <div
      class="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full w-fit"
    >
      {titlecase(data.postKind.name.toString())}
    </div>
    <img
      src={data.imgUrl}
      alt={data.title}
      class="w-full h-60 object-cover rounded-lg"
    />
    <div class="flex flex-col gap-4">
      <h2 class="text-2xl sm:text-4xl">{data.title}</h2>
      <div class="flex gap-4 text-sm text-primary/50">
        <span>By {author?.name ?? provisionalAuthor.name}</span>
        <Date date={data.created_at} />
      </div>
      <div class="flex gap-2">
        {#each data.tags as tag}
          {#if tag.name}
            <Tag data={tag} />
          {/if}
        {/each}
      </div>
      {#if data.quote}
        <p class="text-lg">{data.quote}</p>
      {/if}
      <a href="/blog/{data.slug}" class="text-secondary">Read more</a>
    </div>
  </button>
</Button>
