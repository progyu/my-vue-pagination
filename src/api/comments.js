import axios from 'axios';

export const getComments = (_page = 1) => {
	return axios.get(`http://localhost:4000/comments`, {
		params: {
			_page,
			_limit: 4,
			_order: 'desc',
			_sort: 'id',
		},
	});
};

export const getComment = (id) => {
	return axios.get(`http://localhost:4000/comments/${id}`);
};

export const getAllComments = () => axios.get(`http://localhost:4000/comments`);

export const addComment = (data) =>
	axios.post(`http://localhost:4000/comments`, data);

export const updateComment = (data) =>
	axios.put(`http://localhost:4000/comments/${data.id}`, data);

export const removeComment = (id) =>
	axios.delete(`http://localhost:4000/comments/${id}`);
