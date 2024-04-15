<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  let { children, class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={"rounded-box bg-base-200 p-4" + " " + className}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
