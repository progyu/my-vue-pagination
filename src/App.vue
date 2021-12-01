<template>
	<div id="app">
		<CommentsList :data="comments" />
		<Pagination
			:total_count="allComments.length"
			:current_Page="current_Page"
			:onSetCurrentPage="onSetCurrentPage"
		/>
	</div>
</template>

<script>
// api 자체가 pagination을 지원하는지 아니면 프론트에서 전체 리스트를 잘라서 사용하는지에 따라서 로직이 변경될 수 있음.

import CommentsList from './components/CommentsList.vue';
import Pagination from './components/Pagination.vue';
import * as commentsApi from './api/comments';

export default {
	name: 'App',
	data() {
		return {
			allComments: [],
			comments: [],
			current_Page: 1,
		};
	},
	components: {
		CommentsList,
		Pagination,
	},
	async created() {
		// api 호출
		this.getAllComments();
		this.getComments(this.current_Page);
	},
	methods: {
		async getAllComments() {
			const allComments = await commentsApi.getAllComments();
			this.allComments = allComments.data;
		},
		// api 함수
		async getComments(currentPage) {
			const comments = await commentsApi.getComments(currentPage);
			this.comments = comments.data;
		},
		onSetCurrentPage(page) {
			console.log('page', page);
			this.current_Page = page;
			this.getComments(page);
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
