import { setContext } from 'svelte'

import { key } from './key'

import type { MethodsType } from './formTypes'

export const setFormContext = (methods: MethodsType) => {
	setContext(key, methods)
}
