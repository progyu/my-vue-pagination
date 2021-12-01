<template>
	<div class="page-container">
		<button
			v-for="pageNum in pageArray"
			:key="pageNum"
			class="page-button"
			:class="{ active: current_Page === pageNum }"
			@click="onSetCurrentPage(pageNum)"
		>
			{{ pageNum }}
		</button>
	</div>
</template>

<script>
export default {
	name: 'Pagination',
	props: {
		total_count: Number,
		current_Page: Number,
		onSetCurrentPage: Function,
	},
	computed: {
		pageArray() {
			const page_count = Math.ceil(this.total_count / 4);

			const pageArray = [];

			for (let num = 1; num <= page_count; num++) {
				pageArray.push(num);
			}
			return pageArray;
		},
	},
};
</script>

<style scoped>
.page-container {
	margin-bottom: 20px;
	text-align: center;
}
.page-button {
	padding: 0.375rem 0.75rem;
	border-radius: 0.25rem;
	font-size: 1rem;
	line-height: 1.5;
	border: 1px solid lightgray;
	margin-right: 3px;
}

.active {
	background: gray;
	color: #fff;
}
</style>
