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
		// 페이지 버튼을 만들기 위한 computed
		pageArray() {
			// 몇개의 버튼으로 나눌지 정하는 코드
			const page_count = Math.ceil(this.total_count / 4);

			// page 숫자가 들어갈 배열
			const pageArray = [];

			// 버튼으로 만들 숫자를 배열에 넣는 코드
			for (let num = 1; num <= page_count; num++) {
				pageArray.push(num);
			}

			return pageArray; // [1,2,3 ...]
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
