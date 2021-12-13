import preprocess from 'svelte-preprocess'
import netlify from '@sveltejs/adapter-netlify'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: netlify(),
		ssr: true,
		target: '#svelte',
		vite: () => ({
			resolve: {
				alias: {
					$form: resolve(__dirname, './src/form')
				}
			},
			envPrefix: ['VITE_']
		})
	}
}

export default config
