<script lang="ts">
  import '../app.css'
  import CoinFlip from './CoinFlip.svelte'
  import Header from './Header.svelte'
  import Preferences from './Preferences.svelte'

  let { children } = $props()
</script>

<Preferences />
<CoinFlip />

<div class="min-h-screen bg-gradient-to-b from-base-100 to-base-300">
  <Header />
  <!-- {@render children()} -->
</div>
