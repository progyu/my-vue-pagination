<template>
	<ul>
		<li v-for="(comment, index) in data" :key="index">
			{{ comment.content }}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'CommentsList',
	props: {
		data: [],
	},
};
</script>

<style scoped></style>
