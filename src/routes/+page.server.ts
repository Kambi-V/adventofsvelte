import type { Actions } from './$types';

export const actions: Actions = {
	addRecord: ({ request }) => {
		console.log(request);
	},
	viewList: async ({ fetch }) => {
		const list = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json').then(
			(res) => res.json()
		);
		console.log(list);
		return { list };
	}
};
