<script lang="ts">
  import Avatar from "$lib/components/Avatar.svelte";
  import { show } from "$lib/components/AvatarSelector.svelte";
  import Button from "$lib/components/Button.svelte";
  import Link from "$lib/components/Link.svelte";
  import Card from "$lib/components/Card.svelte";
  import Divider from "$lib/components/Divider.svelte";
  import TextInput from "$lib/components/TextInput.svelte";
  import CloudOff from "lucide-svelte/icons/cloud-off";
  import Play from "lucide-svelte/icons/play";
  import CoinFlip from "./CoinFlip.svelte";
  import Preferences from "./Preferences.svelte";
</script>

<Preferences />
<CoinFlip />

<Card bordered="y">
  <span class="text-2xl font-bold">New Game</span>
  <div
    class="tooltip tooltip-bottom"
    data-tip="Change your avatar"
  >
    <Avatar onclick={show} />
  </div>
  <div
    class="join has-[input:focus]:outline has-[input:focus]:outline-2 has-[input:focus]:outline-offset-2 has-[input:focus]:outline-primary"
  >
    <TextInput
      placeholder="Enter your nickname"
      bordered
      class="btn btn-ghost join-item no-animation bg-base-200 focus:btn-active focus:cursor-text focus:outline-none focus:placeholder:invisible [&:not(:hover,:focus)]:placeholder:text-base-content"
    />
    <Button
      intent="primary"
      class="join-item border-none bg-gradient-to-l from-secondary/80 font-bold uppercase tracking-wide bg-blend-color focus:outline-none"
    >
      <span>Play</span>
      <Play class="size-4" />
    </Button>
  </div>
  <Divider />
  <Link
    href="/match/offline"
    block
  >
    <span>Offline Mode</span>
    <CloudOff class="size-4" />
  </Link>
</Card>
