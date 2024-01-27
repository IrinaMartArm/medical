import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import {GlobalStyle} from "./style/GlobalStyle";
import './config/i18n'
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback={<div></div>}>
				<GlobalStyle/>
				<App/>
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
);

