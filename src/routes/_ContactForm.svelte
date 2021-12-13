<script>
	import axios from 'axios'
	import { Form, Label, SubmitButton, TextAreaInput, TextInput } from '$form'

	const onSubmit = (values) => {
		console.log(values)
		axios.post('https://api.staticforms.xyz/submit', values)
	}

	const initialValues = {
		accessKey: `${import.meta.env.VITE_STATIC_FORMS_API_KEY}`,
		email: '',
		message: '',
		name: ''
	}
</script>

<div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
	<div class="flex flex-col gap-12 max-w-xl mx-auto">
		<div class="flex flex-col gap-4 text-center">
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Welcome 👋</h2>
			<p class="text-lg leading-6 text-gray-500">
				I am a Software Engineer looking to build beautiful websites and learn the latest industry
				trends.
			</p>
		</div>
		<div>
			<Form class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" {initialValues} {onSubmit}>
				<input type="hidden" name="accessKey" />
				<div class="sm:col-span-2">
					<Label for="name">Name</Label>
					<div class="mt-1">
						<TextInput type="text" name="name" autocomplete="given-name" />
					</div>
				</div>
				<div class="sm:col-span-2">
					<Label for="email">Email</Label>
					<div class="mt-1">
						<TextInput name="email" type="email" autocomplete="email" />
					</div>
				</div>
				<div class="sm:col-span-2">
					<Label for="message">Message</Label>
					<div class="mt-1">
						<TextAreaInput name="message" />
					</div>
				</div>
				<div class="sm:col-span-2">
					<SubmitButton>Let's talk</SubmitButton>
				</div>
			</Form>
		</div>
	</div>
</div>
