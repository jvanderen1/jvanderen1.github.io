<script lang='ts'>
	import { validator } from '@felte/validator-zod'
	import { createForm } from 'felte'
	import { object as zObject } from 'zod'
	import clsx from 'clsx'

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

	const formClass = clsx($$props.class)
</script>

<form use:form class={formClass}>
	<slot />
</form>
