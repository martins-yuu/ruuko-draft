<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const button = tv({
    base: "btn",
    variants: {
      intent: {
        neutral: "btn-neutral",
        primary: "btn-primary",
        secondary: "btn-secondary",
        accent: "btn-accent",
        ghost: "btn-ghost",
        link: "btn-link",
        info: "btn-info",
        success: "btn-success",
        warning: "btn-warning",
        error: "btn-error",
      },
      active: {
        true: "btn-active",
      },
      state: {
        info: "btn-info",
        success: "btn-success",
        warning: "btn-warning",
        error: "btn-error",
      },
      outline: {
        true: "btn-outline",
      },
      size: {
        xs: "btn-xs",
        sm: "btn-sm",
        lg: "btn-lg",
      },
      wide: {
        true: "btn-wide",
      },
      glass: {
        true: "glass",
      },
      square: {
        true: "btn-square",
      },
      circle: {
        true: "btn-circle",
      },
      block: {
        true: "btn-block",
      },
    },
  });
</script>

<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";

  const {
    intent,
    active,
    state,
    outline,
    size,
    wide,
    glass,
    square,
    circle,
    block,
    children,
    class: className,
    ...restProps
  }: HTMLButtonAttributes & VariantProps<typeof button> = $props();
</script>

<button
  class={button({
    intent,
    active,
    state,
    outline,
    size,
    wide,
    glass,
    square,
    circle,
    block,
    class: className,
  })}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
</button>
