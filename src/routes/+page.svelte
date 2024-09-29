<script lang="ts">
  import { onMount } from 'svelte'
  import { Textarea } from '$lib/components/ui/textarea'
  import * as Select from '$lib/components/ui/select'
  import { Card, CardContent } from '$lib/components/ui/card'
  import { Button } from '$lib/components/ui/button'

  import init, { add } from 'textgen'

  onMount(async () => {
    await init()
  })

  const models = [{ value: 'llama-3.2', label: 'Llama 3.2' }]
</script>

<svelte:head>
  <title>Card maker</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full space-y-4">
  <h1 class="text-4xl font-extrabold text-center">
    Card maker in the browser 🦀
  </h1>
  <p class="text-muted-foreground text-center">
    This is a demo app to show how to use Rust compiled to WebAssembly in a
    Svelte app to run a local LLM model to generate cloze deletion cards.
  </p>
  <Card>
    <CardContent class="p-2 space-y-2">
      <Textarea placeholder="Enter your text here" class="w-full" rows={10} />
      <div class="flex items-center justify-between">
        <Select.Root>
          <Select.Trigger class="w-[180px]">
            <Select.Value placeholder="Select a model" />
          </Select.Trigger>
          <Select.Content>
            {#each models as model}
              <Select.Item value={model.value}>{model.label}</Select.Item>
            {/each}
          </Select.Content>
          <Select.Input name="favoriteFruit" />
        </Select.Root>
        <Button
          on:click={() => {
            const value = add(1, 2)
            alert(value)
            console.log(value)
          }}
        >
          Generate cards
        </Button>
      </div>
    </CardContent>
  </Card>
</section>
