<div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
	<div class="flex flex-col gap-12 max-w-xl mx-auto">
		<div class="flex flex-col gap-4 text-center">
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				Welcome 👋
			</h2>
			<p class="text-lg leading-6 text-gray-500">
				I am a Software Engineer looking to build beautiful websites and learn the latest industry trends.
			</p>
		</div>
		<div>
			<form action="https://api.staticforms.xyz/submit" method="post" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
				<input type="hidden" name="accessKey" value={JSON.stringify(import.meta.env.VITE_STATIC_FORMS_API_KEY)}>
				<div class='sm:col-span-2'>
					<label for="name" class="block text-sm text-gray-700 font-medium">Name</label>
					<div class="mt-1">
						<input type="text" name="name" id="name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
					<div class="mt-1">
						<input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
					<div class="mt-1">
						<textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"></textarea>
					</div>
				</div>
				<div class="sm:col-span-2">
					<button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Let's talk
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
