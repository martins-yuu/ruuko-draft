<script lang="ts">
  import Badge from '$lib/components/Badge.svelte'
  import Button from '$lib/components/Button.svelte'
  import Link from '$lib/components/Link.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import Coins from 'lucide-svelte/icons/coins'
  import Github from 'lucide-svelte/icons/github'
  import Home from 'lucide-svelte/icons/home'
  import Settings from 'lucide-svelte/icons/settings'
  import Twitch from 'lucide-svelte/icons/twitch'
  import { flipCoin } from './CoinFlip.svelte'
  import { openPreferences } from './Preferences.svelte'
</script>

<Navbar
  gap={2}
  bordered="bottom"
  glass
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
      Flip coin
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
      YuukoAnny
    </Link>
  {/snippet}
</Navbar>
