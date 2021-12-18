import { getContext } from 'svelte'

import { key } from './key'

import type { MethodsType } from './formTypes'

export const getFormContext = (): MethodsType => {
	return getContext(key)
}
