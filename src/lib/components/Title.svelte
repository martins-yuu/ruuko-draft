<script lang="ts">
  import type { Snippet } from "svelte";

  const { children }: { children?: Snippet } = $props();
</script>

<div
  class="flex w-fit items-center justify-center gap-2 rounded-full border border-base-content/20 bg-base-300 from-primary from-[-200%] to-primary/10 to-60% p-4 font-bold text-base-content [background-image:linear-gradient(-35deg,var(--tw-gradient-stops))]"
>
  {#if children}
    {@render children()}
  {/if}
</div>
