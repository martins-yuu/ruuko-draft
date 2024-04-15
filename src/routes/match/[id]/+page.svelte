<script lang="ts">
  import { User2, UserCircle2 } from "lucide-svelte";
</script>

{#snippet avatar(size, hexagon)}
  <div class="avatar placeholder">
    <div
      class="glass w-24 rounded-box bg-neutral text-neutral-content ring-2 ring-neutral ring-offset-2 ring-offset-base-100"
      class:mask={hexagon}
      class:mask-hexagon-2={hexagon}
      style:width={`${size}rem`}
    >
      <UserCircle2 />
    </div>
  </div>
{/snippet}

{#snippet items(count, columns, size, hexagon)}
  <div
    class="grid grid-cols-2 gap-4"
    style:grid-template-columns={`repeat(${columns},${size}rem)`}
  >
    {#each Array(count) as _}
      {@render avatar(size, hexagon)}
    {/each}
  </div>
{/snippet}

<div class="navbar bg-base-300 p-4">
  <div class="navbar-start justify-center">
    <div class="flex flex-row items-center justify-center gap-4">
      <div class="avatar placeholder">
        <div class="w-16 rounded-full border border-base-content/20">
          <User2 />
        </div>
      </div>
      <span class="text-3xl font-bold">Team</span>
    </div>
  </div>
  <div class="navbar-center">
    <!--  -->
  </div>
  <div class="navbar-end justify-center">
    <div class="flex flex-row-reverse items-center justify-center gap-4">
      <div class="avatar placeholder">
        <div class="w-16 rounded-full border border-base-content/20">
          <User2 />
        </div>
      </div>
      <span class="text-3xl font-bold">Team</span>
    </div>
  </div>
</div>
<main class="grid grid-cols-[min-content_1fr_min-content] grid-rows-[1fr_min-content] gap-4 p-16">
  <div class="">
    {@render items(8, 2, 6, false)}
  </div>
  <!-- <div
    class="flex items-center justify-center overflow-auto rounded-box border-y border-base-content/20 bg-base-100 p-8 shadow-2xl"
  >
    {@render items(50, 5, 6, false)}
  </div> -->
  <div class="">
    {@render items(8, 2, 6, false)}
  </div>
  <div class="col-span-full flex justify-center gap-8">
    {@render items(4, 4, 5, true)}
    <div class="divider divider-horizontal">
      <div class="badge badge-neutral badge-lg font-bold uppercase">BANS</div>
    </div>
    {@render items(4, 4, 5, true)}
  </div>
</main>
