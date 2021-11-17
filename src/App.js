/** @format */
import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import './App.css';

function App() {
	const size = useWindowSize();
	return (
		<div className='App'>
			{/* <div>
				{size.width} : {size.height}
			</div> */}
			<Header windowSize={size} />
			<SearchBar windowSize={size} />
		</div>
	);
}

export default App;

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
};
