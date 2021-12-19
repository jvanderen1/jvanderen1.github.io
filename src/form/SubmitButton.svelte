<script lang='ts'>
	import clsx from 'clsx'
	import { getFormContext } from './FormContext'

	const { isValid } = getFormContext()
	const buttonClass = clsx('w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500', $$props.class)
</script>

<button
	class={buttonClass}
	disabled={!isValid}
	type='submit'
>
	<slot />
</button>
