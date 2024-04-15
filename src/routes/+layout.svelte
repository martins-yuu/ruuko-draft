<script lang="ts">
  import "../app.css";
  import CoinFlip from "./CoinFlip.svelte";
  import Header from "./Header.svelte";
  import Preferences from "./Preferences.svelte";

  let { children } = $props();
</script>

<Preferences />
<CoinFlip />

<div
  spellcheck="false"
  class="flex min-h-screen flex-col bg-gradient-to-b from-base-100 to-base-200"
>
  <div class="flex flex-grow flex-col items-center justify-center">
    {@render children()}
  </div>
  <Header
    rounded="top"
    bordered="top"
  />
</div>
