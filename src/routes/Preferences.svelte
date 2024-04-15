<script
  lang="ts"
  context="module"
>
  import resolveConfig from "tailwindcss/resolveConfig";
  import tailwindConfig from "../../tailwind.config";

  const fullConfig = resolveConfig(tailwindConfig);
  const themes = fullConfig.daisyui.themes;

  let dialog: HTMLDialogElement | undefined = $state();

  export const openPreferences = () => dialog?.showModal();
</script>

<script lang="ts">
  import Box from "$lib/components/Box.svelte";
  import Button from "$lib/components/Button.svelte";
  import Modal from "$lib/components/Modal.svelte";
  import ModalBox from "$lib/components/ModalBox.svelte";
  import Title from "$lib/components/Title.svelte";
  import Palette from "lucide-svelte/icons/palette";
  import Settings from "lucide-svelte/icons/settings";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";

  onMount(() => {
    themeChange(false);
  });
</script>

<Modal
  bind:dialog
  box
  glass
>
  <ModalBox class="flex flex-col gap-4">
    <Title>
      <Settings class="text-primary" />
      <span>Preferences</span>
    </Title>
    <Box class="flex flex-col gap-4">
      <div class="form-control">
        <div class="label justify-start gap-2">
          <Palette />
          <span class="label-text">Theme</span>
          <div />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 overflow-y-auto">
        {#each themes as theme}
          <Button
            data-set-theme={theme}
            data-act-class="active"
            data-theme={theme}
            class="rounded [&.active]:btn-active hover:border-primary [&.active]:pointer-events-none [&.active]:border-2 [&.active]:border-primary"
          >
            {theme}
          </Button>
        {/each}
      </div>
    </Box>
  </ModalBox>
</Modal>
