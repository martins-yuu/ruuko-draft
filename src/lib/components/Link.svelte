<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from 'tailwind-variants'

  export const link = tv({ extend: button })
</script>

<script lang="ts">
  import { button } from '$lib/components/Button.svelte'
  import type { Snippet } from 'svelte'
  import type { HTMLAnchorAttributes } from 'svelte/elements'

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
  }: {
    children: Snippet
  } & HTMLAnchorAttributes &
    VariantProps<typeof link> = $props()
</script>

<a
  href="#top"
  role="button"
  class={link({
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
  {@render children()}
</a>
