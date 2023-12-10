import logo from './logo.svg';
import './App.css';
// import { createElement } from 'react';


export const App = () => {

	// return createElement(
	// 	'div',
	// 	{ className: 'App' },
	// 	'header',
	// 	{ className: 'App-header'},
	// )

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>
					{new Date().getFullYear()}
				</p>

			</header>

		</div>
	);
};



//props (пропсы) — это входные данные React-компонентов, передаваемые от родительского компонента дочернему компоненту.
