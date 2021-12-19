import type { Form } from '@felte/core'

export type Obj = Record<string, unknown>

export type MethodsType = Form<Obj> & Obj
