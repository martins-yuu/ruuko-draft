<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const navbar = tv({
    slots: {
      base: "navbar border-base-content/20 bg-base-100",
      start: "navbar-start",
      center: "navbar-center",
      end: "navbar-end",
    },
    variants: {
      gap: {
        2: {
          base: "p-2",
          start: "gap-2",
          center: "gap-2",
          end: "gap-2",
        },
        4: {
          base: "p-4",
          start: "gap-4",
          center: "gap-4",
          end: "gap-4",
        },
      },
      rounded: {
        true: "rounded-box",
        top: "rounded-t-box",
        bottom: "rounded-b-box",
      },
      bordered: {
        true: "border",
        top: "border-t",
        bottom: "border-b",
        y: "border-y",
      },
      glass: {
        true: "bg-base-100/50 backdrop-blur backdrop-saturate-150",
      },
    },
  });
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  const {
    gap,
    rounded,
    bordered,
    glass,
    start,
    center,
    end,
    class: className,
    ...restProps
  }: {
    start?: Snippet;
    center?: Snippet;
    end?: Snippet;
  } & HTMLAttributes<HTMLElement> &
    VariantProps<typeof navbar> = $props();

  const {
    base: baseClass,
    start: startClass,
    center: centerClass,
    end: endClass,
  } = navbar({
    gap,
    rounded,
    bordered,
    glass,
  });
</script>

<nav
  class={baseClass({ class: className })}
  {...restProps}
>
  <div class={startClass()}>
    {#if start}
      {@render start()}
    {/if}
  </div>
  <div class={centerClass()}>
    {#if center}
      {@render center()}
    {/if}
  </div>
  <div class={endClass()}>
    {#if end}
      {@render end()}
    {/if}
  </div>
</nav>
