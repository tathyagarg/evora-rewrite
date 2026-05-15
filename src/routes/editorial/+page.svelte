<script lang="ts">
  import type { PostFilter } from "$lib";
  import Footer from "$lib/components/Footer.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import PostPreview from "$lib/components/PostPreview.svelte";

  const { data } = $props();
  const { postKinds, posts, url, pageCount } = $derived(data);

  let pageNum = $derived(Number(url.searchParams.get("page") ?? "1"));
  let requestedKind = $derived(
    (url.searchParams.get("kind") as string) || "all",
  );

  function setAll(params: Record<string, string>) {
    const url = new URL(window.location.href);
    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, value);
    }
    window.location.href = url.toString();
  }

  function set(key: string, value: string) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.location.href = url.toString();
  }
</script>

<div class="relative top-[calc(var(--spacing)*16+1.5em+2px)] z-0">
  <Heading text="The Editorial" />

  <div class="flex items-center gap-4 px-12 py-8 w-full *:flex-1">
    <div class="flex items-center gap-2">
      Post kind:
      <select
        class="bg-secondary text-primary px-2 py-1 rounded-full w-fit"
        value={requestedKind}
        onchange={(e) => {
          const value = (e.target as HTMLSelectElement).value;
          if (value === "all") {
            setAll({ kind: "", page: "1" });
          } else {
            setAll({ kind: value, page: "1" });
          }
        }}
      >
        <option value="all">All</option>
        {#each postKinds as kind}
          <option value={kind.name}>{kind.name}</option>
        {/each}
      </select>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 px-12 pb-12">
    {#if posts.length === 0}
      <p class="text-center col-span-3 text-lg">
        No posts found for the selected filters.
      </p>
    {:else}
      {#each posts as post}
        <PostPreview data={post} />
      {/each}
    {/if}
  </div>

  <div class="flex justify-center items-center col-span-3 gap-1 mb-12">
    <button
      class="bg-secondary text-primary px-4 py-2 rounded-l-2xl rounded-r-sm transition-opacity cursor-pointer"
      class:opacity-40={pageNum <= 1}
      class:pointer-events-none={pageNum <= 1}
      disabled={pageNum <= 1}
      onclick={() => {
        set("page", "1");
      }}
    >
      « First
    </button>

    <button
      class="bg-secondary text-primary px-4 py-2 rounded-sm transition-opacity cursor-pointer"
      class:opacity-40={pageNum <= 1}
      class:pointer-events-none={pageNum <= 1}
      disabled={pageNum <= 1}
      onclick={() => {
        set("page", (pageNum - 1).toString());
      }}
    >
      ‹ {pageNum > 1 ? pageNum - 1 : ""}
    </button>

    <span
      class="text-primary bg-secondary text-center py-2 px-4 rounded-sm font-semibold min-w-[7rem]"
    >
      {pageNum} / {pageCount}
    </span>

    <button
      class="bg-secondary text-primary px-4 py-2 rounded-sm transition-opacity cursor-pointer"
      class:opacity-40={pageNum >= pageCount}
      class:pointer-events-none={pageNum >= pageCount}
      disabled={pageNum >= pageCount}
      onclick={() => {
        set("page", (pageNum + 1).toString());
      }}
    >
      {pageNum < pageCount ? pageNum + 1 : ""} ›
    </button>

    <button
      class="bg-secondary text-primary px-4 py-2 rounded-l-sm rounded-r-2xl transition-opacity cursor-pointer"
      class:opacity-40={pageNum >= pageCount}
      class:pointer-events-none={pageNum >= pageCount}
      disabled={pageNum >= pageCount}
      onclick={() => {
        set("page", pageCount.toString());
      }}
    >
      Last »
    </button>
  </div>

  <Footer top="" />
</div>
