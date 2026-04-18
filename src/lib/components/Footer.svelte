<script lang="ts">
  let { top } = $props();

  const contacts = [
    {
      name: "Email",
      link: "mailto:plc.evora@gmail.com",
      label: "plc.evora@gmail.com",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/evora.plc/",
      label: "@evora.plc",
    },
  ];
</script>

<footer
  style="top: {top}"
  class="relative h-[50vh] bg-secondary text-primary p-12 z-0"
>
  <h1 class="font-bold text-center text-5xl">Contact Us</h1>
  <hr />
  <table class="mx-auto w-1/2 mt-8 text-center text-xl">
    <tbody>
      {#each contacts as contact}
        <tr>
          <td>{contact.name}:</td>
          <td><a href={contact.link}>{contact.label}</a></td>
        </tr>
      {/each}
    </tbody>
  </table>
</footer>

<style>
  tr {
    display: flex;
    justify-content: space-between;
  }

  td {
    padding: 1em;
    width: 100%;
  }

  td:first-child {
    text-align: left;
  }

  td:nth-child(2) {
    text-align: right;
    color: rgba(from var(--lighter-primary) r g b / 0.6);

    transition: color 0.3s ease;

    &:hover {
      color: var(--lighter-primary);
    }
  }
</style>
