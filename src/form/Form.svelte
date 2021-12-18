<script>
	// TODO: Add once https://github.com/pablo-abc/felte/issues/89 resolved
	// import { validator } from '@felte/validator-zod'
	import { createForm } from 'felte'

	export let initialValues = {}
	export let onSubmit = (values) => { console.log(values) }
	export let validateSchema = {}

	const { form } = createForm({
		// extend: validator,
		initialValues,
		onSubmit,
		validateSchema,
	})
</script>

<form use:form={form} class={`${$$props.class}`}>
	<slot />
</form>
