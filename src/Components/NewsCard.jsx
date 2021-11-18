/** @format */
import { Container } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import './../App.css';

const NewsCard = ({ title, author, date, url }) => {
	const temp = date.split('');
	const temp2 = [];
	for (let i = 0; i < 10; i++) {
		temp2.push(temp[i]);
		// console.log(temp[i]);
	}
	const editDate = temp2.join('');
	console.log(url);

	const style = url === null ? 'none' : 'all';
	return (
		<Container className='NewsCard'>
			<div className='newsInfo'>
				<h3>{title}</h3>
				<p>
					{editDate} | {author}
				</p>
			</div>

			<a href={url} style={{ pointerEvents: `${style}` }}>
				<FormatListBulletedIcon />
				<span>Zum Artikel</span>
			</a>
		</Container>
	);
};

export default NewsCard;
