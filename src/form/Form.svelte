<script lang='ts'>
	// TODO: Add once https://github.com/pablo-abc/felte/issues/89 resolved
	import { validator } from '@felte/validator-zod'
	import { createForm } from 'felte'
	import { object as zObject } from 'zod'

	import { setFormContext } from './FormContext'

	import type { Obj } from './types'

	export let initialValues = {}
	export let onSubmit = (values: Obj) => {
		console.log(values)
	}
	export let validateSchema = zObject({})

	const methods = createForm({
		extend: validator,
		initialValues,
		onSubmit,
		validateSchema
	})

	const { form } = methods

	setFormContext(methods)
</script>

<form use:form={form} class={`${$$props.class}`}>
	<slot />
</form>
