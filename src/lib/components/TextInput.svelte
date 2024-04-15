<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const textInput = tv({
    base: "input flex items-center gap-2",
    variants: {
      bordered: {
        true: "input-bordered",
      },
      intent: {
        primary: "input-primary",
        secondary: "input-secondary",
        accent: "input-accent",
        ghost: "input-ghost",
        info: "input-info",
        success: "input-success",
        warning: "input-warning",
        error: "input-error",
      },
      state: {
        info: "input-info",
        success: "input-success",
        warning: "input-warning",
        error: "input-error",
      },
      size: {
        xs: "input-xs",
        sm: "input-sm",
        md: "input-md",
        lg: "input-lg",
      },
    },
  });
</script>

<script>
  import type { HTMLInputAttributes } from "svelte/elements";

  let input: HTMLInputElement;

  let {
    value,
    bordered,
    intent,
    state,
    size,
    class: className,
    ...restProps
  }: HTMLInputAttributes & VariantProps<typeof textInput> = $props();
</script>

<input
  bind:this={input}
  onfocus={() => input.select()}
  onblur={() => document.getSelection()?.empty()}
  type="text"
  bind:value
  class={textInput({ bordered, intent, state, size, class: className })}
  {...restProps}
/>
