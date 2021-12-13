<script>
	import { getContext } from 'svelte'
	import key from './key'

	export let name
	export let autocomplete = ''
	export let rows = 4

	const { form, handleBlur, handleChange } = getContext(key)
</script>

<textarea
	{...autocomplete && { autocomplete }}
	bind:value={$form[name]}
	class={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${$$props.class}`}
	{name}
	on:blur={handleBlur}
	on:change={handleChange}
	{...rows && { rows }}
/>
