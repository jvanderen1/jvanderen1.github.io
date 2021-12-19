<script type='ts'>
	import clsx from 'clsx'

	export let name: string
	export let autocomplete: string | undefined = undefined

	const inputClass = clsx('py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md', $$props.class)
</script>

<input
	{autocomplete}
	class={inputClass}
	type='text'
	{name}
/>
