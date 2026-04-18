<script lang="ts">
  import type { PostFilter } from "$lib";
  import Footer from "$lib/components/Footer.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import PostPreview from "$lib/components/PostPreview.svelte";

  const { data } = $props();
  const { posts, user } = data;

  var current_filters: PostFilter[] = $state([]);
  let current_posts = $derived.by(() => {
    if (current_filters.length === 0) {
      return posts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    }

    let required_kind = current_filters.find(
      (filter) => filter.kind !== undefined,
    );

    return posts
      .filter((post) =>
        required_kind ? post.postKind.name === required_kind.kind : true,
      )
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  });
</script>

<div class="relative top-[calc(var(--spacing)*16+1.5em+2px)] z-0">
  <Heading text="The Editorial" />

  <div class="flex items-center gap-4 px-12 py-8 w-full *:flex-1">
    <div class="flex items-center gap-2">
      Post kind:
      <select
        class="bg-secondary text-primary px-2 py-1 rounded-full w-fit"
        onchange={(e) => {
          const value = (e.target as HTMLSelectElement).value;
          if (value === "all") {
            current_filters = [];
          } else {
            current_filters = [{ kind: value }];
          }
        }}
      >
        <option value="all">All</option>
        <option value="blogs">Blogs</option>
        <option value="opinionated">Opinionated</option>
        <option value="literature">Literature</option>
        <option value="knowyourlaws">Know Your Laws</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 px-12 pb-12">
    {#if current_posts.length === 0}
      <p class="text-center col-span-3 text-lg">
        No posts found for the selected filters.
      </p>
    {:else}
      {#each current_posts as post}
        <PostPreview data={post} />
      {/each}
    {/if}
  </div>

  <Footer top="" />
</div>
