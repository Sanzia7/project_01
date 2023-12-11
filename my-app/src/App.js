import logo from './logo.svg';
import './App.css';
// import { createElement } from 'react';

export const App = () => {

	// return createElement(
	// 	'div',
	// 	{ className: 'App' },
	// 	createElement('header',
   //    { className: 'App-header'}),

   //    createElement('img',
   //     { crs: 'logo'}
   //     { className: 'App-logo'},
   //      {alt: 'logo'}),

   //    createElement('p', nul,
   //    'Edit <code>src/App.js</code> and save to reload' ),
   //      createElement('div', null, "hello world"),
   //
   //   createElement('a',
   //  { className: 'App-link'},
   //  { href: 'https://reactjs.org" },
   //  { target: "_blank" },
   //  { rel: "noopener noreferrer" },
   //   "Learn React"),
   //  createElement('p', {new Date().getFullYear()}, ),
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

//    createElement('i', null, name), это как раз вложеный тег
// если div вложен в div то будет
//    createElement(
//       'div',
//       { className: 'App' },
//       createElement('div', null, "hello world"),
//    );
// }
