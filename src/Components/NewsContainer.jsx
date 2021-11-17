/** @format */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, CircularProgress, Pagination } from '@mui/material';
import NewsCard from './NewsCard';

import './../App.css';

const NewsContainer = ({ searchValue, hitsPerPage }) => {
	const hitsPerPageEdit = hitsPerPage === 'DEFAULT' ? 20 : hitsPerPage;
	const defaultNewsLimit = 1000;
	const [news, setNews] = useState();
	const [page, setPage] = useState(0);
	const handlePaginationChange = (e) => {
		setPage(e.target.outerText - 1);
	};
	// console.log(news);
	useEffect(() => {
		setNews();
		axios
			.get(`https://hn.algolia.com/api/v1/search?query=${searchValue}&page=${page}&hitsPerPage=${hitsPerPageEdit}`)
			.then((res) => setNews(res))
			.catch((err) => console.error(err));
	}, [page || searchValue]); //eslint-disable-line
	return (
		<Container className='NewsContainer'>
			{!news ? (
				<CircularProgress className='loadingSpinner' />
			) : (
				news.data.hits.map((news) => {
					return <NewsCard key={news.objectID} date={news.created_at} title={news.title} author={news.author} url={news.url} />;
				})
			)}
			{!news ? null : (
				<Pagination
					color='warning'
					className='newsPagination'
					onChange={handlePaginationChange}
					count={defaultNewsLimit / hitsPerPageEdit}
					page={page + 1}
					shape='rounded'
					// showFirstButton
					// showLastButton
					hidePrevButton
					hideNextButton
				/>
			)}
		</Container>
	);
};
export default NewsContainer;
