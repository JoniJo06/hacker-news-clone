/** @format */
import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import CompanyLogo from './CompanyLogo';
import NewsContainer from './NewsContainer';
import './../App.css';

const SearchBar = ({ windowSize }) => {
	const [inputValue, setInputValue] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [hitsPerPage, setHitsPerPage] = useState(20);
	const handleSearch = (e) => {
		e.preventDefault();
		setSearchValue(inputValue);
		setHitsPerPage(e.target.childNodes[0].childNodes[3].childNodes[0].value);
		e.target.childNodes[0].childNodes[1].childNodes[0].value = '';
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};
	useEffect(() => {}, [inputValue]);
	return (
		<Container className='SearchBar'>
			<CompanyLogo className='company-logo' name='HackerNews' name2='clone' flexDirection='column' iconScale='2.5' />
			<div className='searchForm'>
				<form onSubmit={handleSearch}>
					<Grid container spacing={1}>
						<Grid item md={1} xs={0}></Grid>
						<Grid item md={5} xs={12}>
							<input className='searchInput searchField' onChange={handleChange} type='search' name='' id='' required />
						</Grid>
						<Grid item md={2.5} xs={6}>
							<button className='searchSubmit searchField' type='submit'>
								Suchen
							</button>
						</Grid>
						<Grid item md={2.5} xs={6}>
							<select onChange={handleChange} defaultValue={'DEFAULT'} className='searchHitsPerPage searchField'>
								<option value='DEFAULT' className='hitsPerPageDisabled' disabled>
									pro Seite
								</option>
								<option value='10'>10</option>
								<option value='20'>20</option>
								<option value='50'>50</option>
								<option value='100'>100</option>
							</select>
						</Grid>
						<Grid item md={1} xs={0}></Grid>
					</Grid>
				</form>
			</div>
			<NewsContainer hitsPerPage={hitsPerPage} searchValue={searchValue} windowSize={windowSize} />
		</Container>
	);
};

export default SearchBar;
