<script
  lang="ts"
  context="module"
>
  import { tv, type VariantProps } from "tailwind-variants";

  export const header = tv({ extend: navbar });
</script>

<script lang="ts">
  import Badge from "$lib/components/Badge.svelte";
  import Button from "$lib/components/Button.svelte";
  import Link from "$lib/components/Link.svelte";
  import Navbar, { navbar } from "$lib/components/Navbar.svelte";
  import Coins from "lucide-svelte/icons/coins";
  import Github from "lucide-svelte/icons/github";
  import Home from "lucide-svelte/icons/home";
  import Settings from "lucide-svelte/icons/settings";
  import Twitch from "lucide-svelte/icons/twitch";
  import type { HTMLAttributes } from "svelte/elements";
  import { flipCoin } from "./CoinFlip.svelte";
  import { openPreferences } from "./Preferences.svelte";

  const {
    class: className,
    ...restProps
  }: HTMLAttributes<HTMLElement> & VariantProps<typeof navbar> = $props();

  const { base } = navbar({ ...restProps });
</script>

<Navbar
  gap={2}
  class={base({ class: className })}
  {...restProps}
>
  {#snippet start()}
    <Link
      href="/"
      intent="ghost"
      class="group text-xl font-bold lg:hidden"
    >
      <Home class="transition-colors group-hover:text-primary" />
    </Link>
    <Button
      onclick={openPreferences}
      square
      class="group"
    >
      <Settings class="transition-transform group-hover:rotate-90" />
    </Button>
    <Button onclick={flipCoin}>
      <Coins />
      <span>Flip Coin</span>
    </Button>
  {/snippet}
  {#snippet center()}
    <Link
      href="/"
      intent="ghost"
      class="group hidden lg:inline-flex"
    >
      <Home class="transition-colors group-hover:text-primary" />
      <span class="text-xl font-bold">Ruuko Draft</span>
      <Badge intent="neutral">beta</Badge>
    </Link>
  {/snippet}
  {#snippet end()}
    <Link
      href="https://github.com/martins-yuu/ruuko-draft"
      target="_blank"
      rel="noreferrer"
      intent="ghost"
      square
    >
      <Github />
    </Link>
    <Link
      href="https://twitch.tv/yuukoanny"
      target="_blank"
      rel="noreferrer"
      intent="ghost"
      square
      class="lg:hidden"
    >
      <Twitch />
    </Link>
    <Link
      href="https://twitch.tv/yuukoanny"
      target="_blank"
      rel="noreferrer"
      intent="ghost"
      class="hidden lg:inline-flex"
    >
      <Twitch />
      Yuuko
    </Link>
  {/snippet}
</Navbar>
