import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Checkmark from './Checkmark';

function Food({
	food,
	onFoodChange,
	onActionChange,
	action,
	giveCountToParent,
	giveMonthDataToParent,
	getUpdatedServings,
}) {
	// const [count, setCount] = useState(0);

	const didMount = useRef(false);
	const updatedServingsDidMount = useRef(false);
	const foodName = food[0];
	const foodCount = food[1];

	console.log('foodName: ', foodName);

	useEffect(() => {
		if (!didMount.current) {
			didMount.current = true;
			return;
		}

		giveCountToParent(foodCount);
		giveMonthDataToParent([foodName, foodCount]);
	}, []);

	useEffect(() => {
		if (!updatedServingsDidMount.current) {
			updatedServingsDidMount.current = true;
			return;
		}
		if (foodCount < 0) {
			srMessage(`No ${foodName} to remove`);
		} else {
			srMessage(`1 ${foodName} ${action}`);
			srMessage(`${foodCount} total ${foodName}`);
		}
		getUpdatedServings({ foodName, foodCount });
	}, [foodCount]);

	function srMessage(message) {
		document.getElementById('alert').append(message);
		setTimeout(() => {
			document.getElementById('alert').innerHTML = '';
		}, 500);
	}

	function handleAddClick() {
		if (foodCount < 0) {
			setCount(0);
		}
		setCount((foodCount) => foodCount + 1);
		onFoodChange(foodName);
		onActionChange('added');
	}

	function handleRemoveClick() {
		setCount((foodCount) => foodCount - 1);
		onFoodChange(foodName);
		onActionChange('removed');
	}

	function createCheckmarks() {
		if (foodCount > 0) {
			let checkmarksArr = new Array(foodCount);

			for (let i = 0; i < foodCount; i++)
				checkmarksArr.push(<Checkmark key={i} />);

			return checkmarksArr;
		}
	}

	const checkmarks = createCheckmarks();

	return (
		<div key={food} className="tracker__row border-b-2 mb-2 pb-1">
			<div className="tracker__chart-buttons">
				<button
					className="inline-block bg-green-500 hover:bg-green-700 text-white py-1/2 px-1 rounded transition-colors text-base antialiased font-medium uppercase mr-2"
					onClick={() => handleAddClick()}
				>
					Add <span className="sr-only">1 serving of {foodName}</span>
				</button>
				<button
					className="inline-block bg-slate-500 hover:bg-slate-700 text-white py-1/2 px-1 rounded transition-colors text-base antialiased font-medium uppercase"
					onClick={() => handleRemoveClick()}
				>
					Remove <span className="sr-only">1 serving of {foodName}</span>
				</button>
			</div>
			<div className="tracker__food-wrapper">
				<span className="tracker__food-text mr-2 text-right text-base">
					{foodName}
				</span>
			</div>
			<div className="flex align-middle flex-wrap">{checkmarks}</div>
			<div className="">
				<p className="text-base inline-block align-middle">
					<strong>Total:</strong> {foodCount >= 0 ? foodCount : 0}
				</p>
			</div>
		</div>
	);
}

export default Food;
