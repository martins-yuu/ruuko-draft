<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from 'tailwind-variants'

  export const modal = tv({
    slots: {
      base: 'modal bg-neutral/40',
      body: 'col-start-1 row-start-1',
      backdrop: 'modal-backdrop',
    },
    variants: {
      box: {
        true: {
          body: 'modal-box',
        },
      },
      glass: {
        true: 'backdrop-blur-sm',
      },
      close: {
        anywhere: {
          backdrop: 'z-10',
        },
        disabled: {
          backdrop: 'pointer-events-none',
        },
      },
    },
  })
</script>

<script lang="ts">
  import type { HTMLDialogAttributes } from 'svelte/elements'

  let {
    dialog = $bindable(),
    box,
    glass,
    close,
    class: className,
    children,
  }: { dialog?: HTMLDialogElement } & HTMLDialogAttributes & VariantProps<typeof modal> = $props()

  const { base, body, backdrop } = modal({ box, glass, close })
</script>

<dialog
  bind:this={dialog}
  class={base({ class: className })}
>
  <div class={body()}>
    {#if children}
      {@render children()}
    {/if}
  </div>
  <form
    method="dialog"
    class={backdrop()}
  >
    <button>Close</button>
  </form>
</dialog>
