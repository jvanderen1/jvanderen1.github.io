<script>
	import { createForm } from 'felte'

	export let initialValues = {}
	export let onSubmit = (values) => { console.log(values) }

	const { form } = createForm({
		initialValues,
		onSubmit
	})
</script>

<form use:form={form} class={`${$$props.class}`}>
	<slot />
</form>
