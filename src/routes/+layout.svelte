<script lang="ts">
  import Button from '$lib/components/Button.svelte'
  import Card from '$lib/components/Card.svelte'
  import TextInput from '$lib/components/TextInput.svelte'
  import { CloudOff, Play } from 'lucide-svelte'
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
  <Card
    bordered
    glass
  >
    <div class="join">
      <TextInput
        bordered
        class="join-item"
      />
      <Button
        intent="primary"
        class="join-item"
      >
        Play
        <Play />
      </Button>
    </div>
    <Button block>
      Offline Mode
      <CloudOff />
    </Button>
  </Card>
</div>
