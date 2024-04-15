<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from 'tailwind-variants'

  export const card = tv({
    slots: {
      base: 'card w-fit bg-base-100',
      body: 'card-body items-center gap-4',
    },
    variants: {
      bordered: {
        true: 'border-y border-neutral-content/20',
      },
      glass: {
        true: 'bg-base-100/90 backdrop-blur-lg backdrop-saturate-200',
      },
    },
  })
</script>

<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { HTMLAttributes } from 'svelte/elements'

  const {
    bordered,
    glass,
    class: className,
    children,
    ...restProps
  }: { children?: Snippet } & HTMLAttributes<HTMLDivElement> & VariantProps<typeof card> = $props()

  const { base, body } = card({ bordered, glass })
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
