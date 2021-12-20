import { Form } from '$form'

const styledSvelte = (component: typeof Form) => {
	console.log(component)
	return component // TODO: Return svelte comopnent with props injected
}

const test = styledSvelte(Form)

export default styledSvelte
