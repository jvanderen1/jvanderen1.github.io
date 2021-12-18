import type { Form } from '@felte/core'

type Obj = Record<string, never>
export type MethodsType = Form<Obj> & Obj
