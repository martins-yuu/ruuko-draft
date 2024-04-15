<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const { children, class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  class={"modal-box" + " " + className}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
