<script>
	import clsx from 'clsx'

	const labelClass = clsx('block text-sm font-medium text-gray-700', $$props.class)
</script>

<label for={$$props.for} class={labelClass}>
	<slot />
</label>
