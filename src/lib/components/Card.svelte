<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const card = tv({
    slots: {
      base: "card w-fit border-base-content/20 bg-base-100",
      body: "card-body items-center gap-4",
    },
    variants: {
      bordered: {
        true: "border",
        x: "border-x",
        y: "border-y",
      },
      glass: {
        true: "bg-base-100/50 backdrop-blur backdrop-saturate-150",
      },
    },
  });
</script>

<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const {
    bordered,
    glass,
    class: className,
    children,
    ...restProps
  }: HTMLAttributes<HTMLDivElement> & VariantProps<typeof card> = $props();

  const { base, body } = card({ bordered, glass });
</script>

<div
  class={base({ class: className })}
  {...restProps}
>
  <div class={body()}>
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
