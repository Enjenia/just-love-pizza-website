import React, { useEffect } from 'react';
import { Routes, Route, useNavigationType, useLocation } from 'react-router-dom';
import JustLovePizzaWebsite from './components/pages/JustLovePizzaWebsite';

const App = () => {
	const action = useNavigationType();
	const location = useLocation();
	const { pathname } = location;

	useEffect(() => {
		if (action !== 'POP') {
			window.scrollTo(0, 0);
		}
	}, [action, pathname]);

	return (
		<Routes>
			<Route path='/' element={<JustLovePizzaWebsite />} />
		</Routes>
	);
};
export default App;
