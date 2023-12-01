<script lang="ts">
	import type { ActionResult } from '@sveltejs/kit';
	import { enhance } from '$app/forms';

	let name = $state<string>('');
	let tally = $state<number>(0);
	let { form } = $props<{ form: ActionResult }>();
	let list = $state<Array<NaughtyList>>([]);
	console.log(`in ts`);
	console.log(form);
</script>

<div class="w-full px-8 py-8">
	<div>
		<form
			class="flex w-full mx-auto bg-orange-400 rounded-xl px-4 py-3 gap-4"
			action="?/addRecord"
			method="post"
		>
			<div class="flex gap-4 flex-col">
				<label for="name">Name of Child</label>
				<input type="text" required class="px-4 py-2 rounded-xl" bind:value={name} />
			</div>
			<div class="flex gap-4 flex-col">
				<label for="tally">Tally</label>
				<input type="number" required class="px-4 py-2 rounded-xl" bind:value={tally} />
			</div>
			<div class="flex flex-col pl-6 justify-end">
				<button class="px-6 py-2 bg-orange-200 rounded-2xl">Add</button>
			</div>
		</form>
	</div>
	<div class="py-3 px-6">
		<!-- get all children and view them -->
		<div class="font-semibold flex items-center gap-4">
			<p>Do you want to view the Children who may be naughty?</p>
			<span>
				<form
					method="post"
					action="?/viewList"
					use:enhance={() => {
						return async ({ result }) => {
							console.log(`in use enhance`);
							console.log(result);
							if (result.type === 'success') {
								console.log(result.data);
								list = result.data?.list as NaughtyList;
								console.log(list);
							}
						};
					}}
				>
					<button class="px-6 py-2 bg-orange-400 rounded-2xl text-white">Yes I do</button>
				</form></span
			>
		</div>
		<div class="py-16">
			{#if list.length !== 0}
				<table class="w-full mx-auto">
					<thead>
						<tr class="uppercase">
							<th class="w-40">Name</th>
							<th class="w-20">tally</th>
							<th class="w-60">Naughty Status</th>
						</tr>
					</thead>
					<tbody>
						{#each list as { name, tally }, index}
							<tr>
								<td class="text-center">{name}</td>
								<td class="text-center">{tally}</td>
								<td class="text-center capitalize">{tally > 0 ? 'nice' : 'naughty'}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		</div>
	</div>
</div>
