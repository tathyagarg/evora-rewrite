<script lang="ts">
  import type { Author, ProvisionalAuthor } from "@prisma/client";
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

<div
  class="bg-secondary text-primary rounded overflow-hidden h-full
  border-2 border-secondary
  "
  id="card"
>
  <button
    class="w-full h-full flex flex-col gap-4 cursor-pointer text-left"
    onclick={() => (window.location.href = `/editorial/${data.slug}`)}
    aria-label={`Read more about ${data.title}`}
  >
    <!-- kind -->
    <img
      src={data.imgUrl}
      alt={data.title}
      class="w-full h-72 object-cover transition-transform duration-300 ease-in-out
      "
    />
    <div class="p-6">
      <div class="flex flex-col gap-4">
        <h2 class="text-2xl sm:text-4xl">{data.title}</h2>
        <div
          class="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full w-fit"
        >
          {titlecase(data.postKind.name.toString())}
        </div>
        <div class="flex justify-between text-sm text-primary/75">
          <span>By {author?.name ?? provisionalAuthor.name}</span>
          <Date date={data.createdAt} />
        </div>
        <div class="flex gap-2">
          {#each data.tags as tag}
            {#if tag.name}
              <Tag data={tag} />
            {/if}
          {/each}
        </div>
        {#if data.quote}
          <p class="text-lg text-justify">{data.quote}</p>
        {/if}
        <a href="/blog/{data.slug}" class="text-secondary">Read more</a>
      </div>
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
