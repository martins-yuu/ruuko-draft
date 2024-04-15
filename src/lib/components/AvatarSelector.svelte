<script
  lang="ts"
  context="module"
>
  let dialog: HTMLDialogElement | undefined = $state();

  export const show = () => dialog?.showModal();
</script>

<script lang="ts">
  import Modal from "$lib/components/Modal.svelte";
  import Box from "$lib/components/Box.svelte";
  import Title from "$lib/components/Title.svelte";
  import User from "lucide-svelte/icons/user";
  import Avatar from "./Avatar.svelte";
  import ModalBox from "./ModalBox.svelte";
</script>

<Modal
  bind:dialog
  box
  glass
  gap={4}
>
  <ModalBox class="flex flex-col gap-4">
    <Title>
      <User class="text-primary" />
      <span>Select Avatar</span>
    </Title>
    <Box class="grid grid-cols-5 gap-4">
      <Avatar />
    </Box>
  </ModalBox>
</Modal>
