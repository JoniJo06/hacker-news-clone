/** @format */
import React from 'react';
import { Container } from '@mui/material';
import { styled } from '@mui/system';
import CompanyLogo from './CompanyLogo';

import './Header.css';

const Header = ({ windowSize }) => {
	return (
		<Container maxWidth='100%' className='Header'>
			<Content>
				<CompanyLogo iconShown={windowSize.width < 550 ? 'none' : 'block'} name='HackerNews' name2='clone' flexDirection='row' iconScale='1.5' />
				<a className='original-link' href='https://news.ycombinator.com/news' rel='noreferrer' target='_blank'>
					{windowSize.width < 550 ? 'Original' : 'zur originalen Webseite'}
				</a>
			</Content>
		</Container>
	);
};

export default Header;

const Content = styled('div')({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '5px 0',
});
