<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const divider = tv({
    base: "divider",
    variants: {
      horizontal: {
        true: "divider-horizontal",
      },
      vertical: {
        true: "divider-vertical",
      },
    },
  });
</script>

<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const {
    horizontal,
    vertical,
    class: className,
    children,
    ...restProps
  }: HTMLAttributes<HTMLDivElement> & VariantProps<typeof divider> = $props();
</script>

<div
  class={divider({ horizontal, vertical, class: className })}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</div>
