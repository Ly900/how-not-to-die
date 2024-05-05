import { useState } from 'react';
import Header from './components/Header';

import './App.css';

function App() {
	function handleBeginClick() {
		console.log('hey');
	}
	return (
		<>
			<Header />
			<div className="tracker__step0-container mb-3">
				<button
					className="mb-3 inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors text-lg antialiased font-medium uppercase"
					onClick={handleBeginClick}
				>
					Begin
				</button>
			</div>

			<div className="tracker__step1-container mb-3">
				<p className="text-lg mb-2 font-bold">Step 1:</p>
				<p className="text-lg mb-2">What month do you want to track?</p>
				<label for="email" class="lu avz awd awo axu hidden">
					Month:
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="text-center"
					placeholder="May"
				/>
			</div>

			<div className="tracker__step2-container mb-3">
				<p className="text-lg mb-2 font-bold">Step 2:</p>
				<p className="text-lg mb-2">
					Choose how you want to import your desired foods:
				</p>
				<div className="tracker__option-buttons inline-flex flex-col">
					<button className="mb-3 inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors text-lg antialiased font-medium uppercase">
						Recommended
					</button>
					<button className="bg-slate-300 text-black py-2 px-4 rounded opacity-50 cursor-not-allowed text-lg antialiased font-medium uppercase">
						Custom
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
