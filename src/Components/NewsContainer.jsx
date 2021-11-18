/** @format */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, CircularProgress, Pagination } from '@mui/material';
import NewsCard from './NewsCard';

import './../App.css';

const NewsContainer = ({ searchValue, hitsPerPage }) => {
	let hitsPerPageEdit;
	if (hitsPerPage === 'DEFAULT') {
		hitsPerPageEdit = 20;
	} else {
		hitsPerPageEdit = hitsPerPage; //anzahl an einträgen pro seite. wenn default dann 20
	}
	const defaultNewsLimit = 1_000; // das limit an artikel die man von der api bekommt
	const [news, setNews] = useState(); // gefetchte daten werden hier zwischen gespeichert
	const [page, setPage] = useState(0); // auf welcher seite ich mich gerade befinde
	const [loadingFirst, setLoadingFirst] = useState(true); // ob das erste mal gerendert wird
	const [haveHits, setHaveHits] = useState(false); // ob hits einträge vorhanden sind

	const handlePaginationChange = (e) => {
		const itemChild = e.target.parentNode.getAttribute('data-testid');
		const item = e.target.getAttribute('data-testid');
		const itemParent = e.target.parentNode.getAttribute('aria-label');
		console.log(itemChild, item, itemParent);
		if (itemChild === 'LastPageIcon' || (item === 'LastPageIcon' && itemParent === 'Go to last page')) {
			setPage(defaultNewsLimit / hitsPerPageEdit - 1);
		} else if (itemChild === 'NavigateNextIcon' || (item === 'NavigateNextIcon' && itemParent === 'Go to next page')) {
			setPage((prevPage) => prevPage + 1);
		} else if (itemChild === 'NavigateBeforeIcon' || (item === 'NavigateBeforeIcon' && itemParent === 'Go to previous page')) {
			setPage((prevPage) => prevPage - 1);
		} else if (itemChild === 'FirstPageIcon' || (item === 'FirstPageIcon' && itemParent === 'Go to first page')) {
			setPage((prevPage) => prevPage - prevPage);
		} else {
			setPage(e.target.outerText - 1);
		}
	};

	useEffect(() => {
		setNews();
		setHaveHits(false);
		axios
			.get(`https://hn.algolia.com/api/v1/search?query=${searchValue}&page=${page}&hitsPerPage=${hitsPerPageEdit}`)
			.then((res) => setNews(res))
			.catch((err) => console.error(err));
	}, [page || searchValue]); //eslint-disable-line

	useEffect(() => {
		if (loadingFirst) {
			setLoadingFirst(false);
		} else {
			if (!news.data.hits[0]) {
				setHaveHits(true);
			}
			setLoadingFirst(true);
		}
	}, [news]); // eslint-disable-line

	return (
		<Container className='NewsContainer'>
			{!news ? (
				<CircularProgress className='loadingSpinner' />
			) : (
				news.data.hits.map((news) => {
					return <NewsCard key={news.objectID} date={news.created_at} title={news.title} author={news.author} url={news.url} />;
				})
			)}
			{!haveHits || !news ? null : (
				<h2 className='noMatches'>
					no matches for{' '}
					<b>
						<em style={{ fontSize: '1.5em' }}>{searchValue}</em>
					</b>
				</h2>
			)}
			{!news || haveHits ? null : (
				<Pagination
					color='warning'
					className='newsPagination'
					onChange={handlePaginationChange}
					count={defaultNewsLimit / hitsPerPageEdit}
					page={page + 1}
					shape='rounded'
					showFirstButton
					showLastButton
					// hidePrevButton
					// hideNextButton
				/>
			)}
		</Container>
	);
};
export default NewsContainer;
