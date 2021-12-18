<script>
	export let name
	export let autocomplete = ''
	export let rows = 4
</script>

<textarea
	{...autocomplete && { autocomplete }}
	class={`py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md ${$$props.class}`}
	{name}
	{...rows && { rows }}></textarea>
