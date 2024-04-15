<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const modal = tv({
    slots: {
      base: "modal bg-neutral/40",
      backdrop: "modal-backdrop",
    },
    variants: {
      glass: {
        true: "backdrop-blur-sm",
      },
      close: {
        anywhere: {
          backdrop: "z-10",
        },
        disabled: {
          backdrop: "pointer-events-none",
        },
      },
    },
  });
</script>

<script lang="ts">
  import type { HTMLDialogAttributes } from "svelte/elements";

  let {
    dialog = $bindable(),
    glass,
    close,
    class: className,
    children,
    ...restProps
  }: { dialog?: HTMLDialogElement } & HTMLDialogAttributes & VariantProps<typeof modal> = $props();

  const { base, backdrop } = modal({ glass, close });
</script>

<dialog
  bind:this={dialog}
  class={base({ class: className })}
  {...restProps}
>
  {#if children}
    {@render children()}
  {/if}
  <form
    method="dialog"
    class={backdrop()}
  >
    <button>close</button>
  </form>
</dialog>
