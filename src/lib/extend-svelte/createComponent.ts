import createDomComponent from './createDomComponent'
import createSSRComponent from './createSSRComponent'

import type { SvelteComponent } from 'svelte'

const createComponent = (Component: SvelteComponent, options = {}) => {
	if (typeof Component === 'function') {
		return createDomComponent(Component, options)
	}

	return createSSRComponent(Component, options)
}

export default createComponent
