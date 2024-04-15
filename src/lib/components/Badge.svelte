<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const badge = tv({
    base: "badge font-bold uppercase",
    variants: {
      intent: {
        neutral: "badge-neutral",
        primary: "badge-primary",
        secondary: "badge-secondary",
        accent: "badge-accent",
        ghost: "badge-ghost",
        info: "badge-info",
        success: "badge-success",
        warning: "badge-warning",
        error: "badge-error",
      },
      outline: {
        true: "badge-outline",
      },
      size: {
        xs: "badge-xs",
        sm: "badge-sm",
        md: "badge-md",
        lg: "badge-lg",
      },
      state: {
        info: "badge-info",
        success: "badge-success",
        warning: "badge-warning",
        error: "badge-error",
      },
    },
  });
</script>

<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  const {
    intent,
    outline,
    size,
    state,
    children,
    class: className,
    ...restProps
  }: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badge> = $props();
</script>

<button
  class={badge({
    intent,
    state,
    outline,
    size,
    class: className,
  })}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</button>
