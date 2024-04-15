<script
  lang="ts"
  context="module"
>
  let dialog: HTMLDialogElement | undefined = $state()

  export const openPreferences = () => dialog?.showModal()
</script>

<script lang="ts">
  import Modal from '$lib/components/Modal.svelte'
  import Settings from 'lucide-svelte/icons/settings'
</script>

<Modal
  bind:dialog
  box
  glass
>
  <div
    class="flex w-fit items-center justify-center gap-2 rounded-badge border border-base-content/20 bg-base-300 from-primary from-[-200%] to-primary/10 to-60% p-4 font-bold text-base-content [background-image:linear-gradient(-35deg,var(--tw-gradient-stops))]"
  >
    <Settings class="text-primary" />
    Preferences
  </div>
</Modal>
