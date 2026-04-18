<script lang="ts">
  let { data } = $props();
  let { post } = data;
</script>

<h1>{post?.title}</h1>
<h2>{post?.quote}</h2>

<h3>{post?.postKind.name}</h3>

<p>{post?.content}</p>

<p>{post?.author.name}</p>
