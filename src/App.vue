<template>
	<div id="app">
		<h1>Api가 pagination을 지원하는 경우</h1>
		<CommentsList :data="comments" />
		<Pagination
			:total_count="allComments.length"
			:current_Page="current_Page"
			:onSetCurrentPage="onSetCurrentPage"
		/>

		<h1>Api가 pagination을 지원하지 않는 경우</h1>
		<!-- 이 부분만 다름 !!!!!!!!!!-->
		<CommentsList :data="splitAllCommets" />
		<Pagination
			:total_count="allComments.length"
			:current_Page="current_Page"
			:onSetCurrentPage="onSetCurrentPage"
		/>
	</div>
</template>

<script>
// api 자체가 pagination을 지원하는지 아니면 프론트에서 전체 목록을 잘라서 사용하는지에 따라서 로직이 변경될 수 있음.

import CommentsList from './components/CommentsList.vue';
import Pagination from './components/Pagination.vue';
import * as commentsApi from './api/comments';

export default {
	name: 'App',
	data() {
		return {
			// 모든 목록
			allComments: [],
			// 페이징별 목록
			comments: [],
			// 현재 페이지
			current_Page: 1,
		};
	},
	components: {
		CommentsList,
		Pagination,
	},
	created() {
		// api 호출
		this.getAllComments();
		this.getComments(this.current_Page);
	},
	methods: {
		// 모든 목록 가져오는 api
		async getAllComments() {
			const allComments = await commentsApi.getAllComments();
			this.allComments = allComments.data;
		},
		// page 별로 목록 가져오는 api
		async getComments(currentPage) {
			const comments = await commentsApi.getComments(currentPage);
			this.comments = comments.data;
		},
		// 각 페이지 버튼 클릭 시 호출되는 함수
		onSetCurrentPage(page) {
			this.current_Page = page;
			this.getComments(page);
		},
	},
	computed: {
		// 전체 목록에서 페이지별로 임의적으로 프론트에서 잘라서 보여줌.
		splitAllCommets() {
			const pageCount = 4; // 한 페이지당 보여줄 목록 개수
			const start = (this.current_Page - 1) * pageCount;
			const end = this.current_Page * pageCount;

			return this.allComments.slice(start, end);
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
