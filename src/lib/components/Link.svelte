<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const link = tv({ extend: button });
</script>

<script lang="ts">
  import { button } from "$lib/components/Button.svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  const {
    children,
    class: className,
    ...restProps
  }: HTMLAnchorAttributes & VariantProps<typeof link> = $props();
</script>

<a
  href="#top"
  role="button"
  class={link({
    ...restProps,
    class: className,
  })}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</a>
