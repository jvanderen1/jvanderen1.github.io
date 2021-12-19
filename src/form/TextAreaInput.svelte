<script type='ts'>
	export let name: string
	export let autocomplete: string | undefined = undefined
	export let rows: number | undefined = undefined
</script>

<textarea
	{ autocomplete }
	class={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${$$props.class}`}
	{name}
	{rows}></textarea>
