import { setContext } from 'svelte'

import { key } from './key'

import type { MethodsType } from '../types'

export const setFormContext = (methods: MethodsType) => {
	setContext(key, methods)
}
