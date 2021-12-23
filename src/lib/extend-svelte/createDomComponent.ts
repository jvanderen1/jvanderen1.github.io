import type { SvelteComponent } from 'svelte'

const createDomComponent = (Component: SvelteComponent, options: Record<string, never>) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	return class extends Component {
		constructor(_options = {}) {
			super({
				..._options,
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				props: { ...options, ..._options.props }
			})
		}
	}
}

export default createDomComponent
