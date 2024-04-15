<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const avatar = tv({
    slots: {
      base: "avatar placeholder group",
      icon: "border-base-content/20 bg-neutral text-neutral-content group-hover:bg-accent group-hover:text-accent-content w-24 rounded-full border transition-colors group-active:bg-[color-mix(in_oklab,oklch(var(--a)),black_10%)]",
    },
    variants: {
      size: {
        24: {
          icon: "w-24",
        },
        16: {
          icon: "w-16",
        },
        12: {
          icon: "w-12",
        },
        8: {
          icon: "w-8",
        },
      },
    },
  });
</script>

<script lang="ts">
  import User from "lucide-svelte/icons/user";
  import type { HTMLButtonAttributes, HTMLImgAttributes } from "svelte/elements";

  const {
    onclick,
    src,
    alt,
    size,
    class: className,
    ...restProps
  }: Pick<HTMLImgAttributes, "src" | "alt"> &
    HTMLButtonAttributes &
    VariantProps<typeof avatar> = $props();

  const { base, icon } = avatar({ size });
</script>

<button
  {onclick}
  class={base({ class: className })}
  {...restProps}
>
  <div class={icon()}>
    {#if src}
      <img
        {src}
        {alt}
      />
    {:else}
      <User {size} />
    {/if}
  </div>
</button>
