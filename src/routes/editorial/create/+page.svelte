<script lang="ts">
  import { marked } from "marked";
  import "../../post.css";

  let { data, form } = $props();
  let { postKinds, user } = data;

  let title = $state("");
  let quote = $state("");
  let postData = $state("");
  let imgUrl = $state("");

  console.log(user);
</script>

<div class="relative top-[calc(var(--spacing)*16+1.5em+2px)] z-0">
  {#if form?.success}
    <p class="bg-green-500/50 text-center py-4">Post published successfully!</p>
  {/if}

  <div class="flex flex-row w-2/3 mx-auto gap-4 py-8">
    <div class="flex-1">
      <form method="POST" action="?/publish" class="grid grid-cols-3 gap-4">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          class="col-span-2"
          bind:value={title}
        />

        <label for="quote">Quote:</label>
        <textarea id="quote" name="quote" class="col-span-2" bind:value={quote}
        ></textarea>

        <label for="content">Content:</label>
        <textarea
          id="content"
          name="content"
          class="col-span-2"
          bind:value={postData}
        ></textarea>

        <label for="image">Image URL:</label>
        <input
          type="url"
          id="image"
          name="image"
          class="col-span-2"
          bind:value={imgUrl}
        />

        <label for="kind">Kind:</label>
        <select id="kind" name="kind" required class="col-span-2">
          {#each postKinds as kind}
            <option value={kind.id}>{kind.name}</option>
          {/each}
        </select>

        <button type="submit" class="cursor-pointer col-span-3 w-1/2 mx-auto"
          >Submit</button
        >
      </form>
    </div>

    <div
      class="flex-1 w-full h-full max-h-[80vh] p-2 border-1 border-secondary rounded overflow-scroll"
    >
      <h1 class="text-emphasis text-2xl font-bold mb-2">{title}</h1>
      <h2 class="text-lg italic mb-4">{quote}</h2>
      {#if title.length > 0}
        By {user?.name}
      {/if}
      <img src={imgUrl} alt="" class="w-full h-auto mb-4 rounded" />
      <div id="post-content">
        {@html marked.parse(postData)}
      </div>
    </div>
  </div>
</div>

<style>
  input,
  textarea,
  button {
    background-color: var(--color-secondary);
    color: var(--color-primary);

    padding: 4px;
  }

  #post-content :global(pre) {
    font-family: var(--font-text);
    font-size: 1.25em;
  }

  #post-content :global(br) {
    margin-bottom: 0.1em;
  }

  #post-content > :global(p:first-child::first-letter) {
    font-size: 3.75em;
    font-weight: bold;
    float: left;
    line-height: 1;
    margin-right: 0.1em;
  }

  #post-content :global(p:not(:first-child)) {
    text-indent: 1.5em;
  }

  #post-content :global(p) {
    font-size: 1em;
    text-align: justify;

    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  #post-content :global(img) {
    width: 100%;
    height: auto;
    margin: 1.5em 0;
    border-radius: 0.5em;
  }

  #post-content :global(blockquote) {
    border-left: 4px solid var(--primary);
    padding-left: 1em;
    margin-left: 0;
    font-style: italic;
    color: var(--color-emphasis);

    font-size: 1.25em;
  }

  #post-content :global(p > blockquote) {
    text-indent: 0;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  :global(.date) {
    margin-left: auto;
    color: var(--darker-secondary);
  }

  #post-content :global(h1) {
    font-size: 1.8em;
    line-height: 1.2;

    text-indent: 0;
    margin-top: 1em;
    margin-left: 0;
    margin-bottom: 1em;
    font-weight: bold;
    color: var(--color-emphasis);
    font-style: italic;
  }

  #post-content :global(h2) {
    text-indent: 0;
    margin-top: 2em;
    margin-left: 0;
    margin-bottom: 1em;
    font-weight: bold;
    color: var(--color-emphasis);
    font-style: italic;
  }

  #post-content :global(ol) {
    list-style: decimal outside;
    margin-left: 1.5em;
    margin-bottom: 1.5em;

    text-align: justify;
  }

  #post-content :global(ul) {
    list-style: disc outside;
    margin-left: 1.5em;
    margin-bottom: 1.5em;

    text-align: justify;
  }

  #post-content > :global(li) {
    margin-bottom: 1em;
  }
</style>
