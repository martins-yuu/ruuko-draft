<script
  lang="ts"
  context="module"
>
  enum Coin {
    Heads = "Heads",
    Tails = "Tails",
  }

  let random = $state(Math.random());
  let result: Coin | undefined = $derived(random < 0.5 ? Coin.Heads : Coin.Tails);
  let dialog: HTMLDialogElement | undefined = $state();

  export const flipCoin = () => {
    random = Math.random();
    dialog?.showModal();
  };
</script>

<script lang="ts">
  import Announcement from "$lib/components/Announcement.svelte";
  import Badge from "$lib/components/Badge.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import Drama from "lucide-svelte/icons/drama";
  import Hash from "lucide-svelte/icons/hash";
  import { fly } from "svelte/transition";
</script>

<Modal
  bind:dialog
  glass
  close="anywhere"
>
  {#key random}
    <div
      in:fly={{ y: 100, duration: 300 }}
      class="col-start-1 row-start-1"
    >
      <Announcement>
        <div class="avatar placeholder animate-bounce">
          <div
            class="glass w-24 rounded-full bg-accent text-accent-content ring ring-accent ring-offset-2 ring-offset-base-100"
          >
            {#if result === Coin.Heads}
              <Drama class="size-9" />
            {:else if result === Coin.Tails}
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
    </div>
  {/key}
</Modal>
