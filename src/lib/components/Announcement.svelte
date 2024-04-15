<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const {
    glass,
    children,
    class: className,
    ...restProps
  }: { glass?: boolean } & HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={"border-y-base-content/20 from-base-100 to-base-200/50 flex w-screen -skew-y-6 flex-col items-center justify-center gap-2 border-y bg-gradient-to-b p-8" +
    " " +
    className}
  {...restProps}
  class:backdrop-blur={glass}
  class:backdrop-saturate-150={glass}
>
  {#if children}
    {@render children()}
  {/if}
  <div class="bg-base-300/40 absolute -z-10 h-full w-full max-w-prose -skew-x-12" />
</div>
