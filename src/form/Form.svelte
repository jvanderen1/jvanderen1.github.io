<script>
	import { setContext } from 'svelte'
	import { createForm } from 'svelte-forms-lib'
	import key from './key'

	export let initialValues = {}
	export let onSubmit

	const methods = createForm({
		initialValues,
		onSubmit
	})

	setContext(key, methods)
</script>

<form on:submit={methods.handleSubmit} class={`${$$props.class}`}>
	<slot />
</form>
