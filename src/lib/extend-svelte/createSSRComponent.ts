import type { SvelteComponent } from 'svelte'

const createSSRComponent = (Component: SvelteComponent, options = {}) => {
	const { render, $$render } = Component

	return {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		render(props, stuff) {
			const customProps = { ...options, ...props }
			return render(customProps, stuff)
		},
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		$$render(result, props, bindings, slots, context) {
			const customProps = { ...options, ...props }
			return $$render(result, customProps, bindings, slots, context)
		}
	}
}

export default createSSRComponent
