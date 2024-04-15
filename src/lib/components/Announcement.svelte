<script lang="ts">
  import type { Snippet } from "svelte";

  let { children }: { children?: Snippet } = $props();
</script>

<div
  class="flex w-screen -skew-y-6 flex-col items-center justify-center gap-2 border-y border-y-base-content/20 bg-gradient-to-b from-base-100 to-base-300 p-8"
>
  {#if children}
    {@render children()}
  {/if}
  <div class="absolute -z-10 h-full w-full max-w-prose -skew-x-12 bg-base-300/40" />
</div>
