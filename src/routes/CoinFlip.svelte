<script
  lang="ts"
  context="module"
>
  let result: 'heads' | 'tails' | undefined = $state()
  let dialog: HTMLDialogElement | undefined = $state()

  export const flipCoin = () => {
    result = Math.random() < 0.5 ? 'heads' : 'tails'
    dialog?.showModal()
  }
</script>

<script lang="ts">
  import Announcement from '$lib/components/Announcement.svelte'
  import Badge from '$lib/components/Badge.svelte'
  import Modal from '$lib/components/Modal.svelte'
  import Drama from 'lucide-svelte/icons/drama'
  import Hash from 'lucide-svelte/icons/hash'
</script>

<Modal
  bind:dialog
  glass
  close="anywhere"
>
  <Announcement>
    <div class="avatar placeholder animate-bounce">
      <div
        class="glass w-24 rounded-full bg-accent text-accent-content ring ring-accent ring-offset-2 ring-offset-base-100"
      >
        {#if result === 'heads'}
          <Drama class="size-9" />
        {:else if result === 'tails'}
          <Hash class="size-9" />
        {/if}
      </div>
    </div>
    <span class="text-4xl font-black uppercase tracking-wider">{result}</span>
    <Badge
      intent="neutral"
      class="font-normal normal-case"
    >
      Click anywhere to close
    </Badge>
  </Announcement>
</Modal>
