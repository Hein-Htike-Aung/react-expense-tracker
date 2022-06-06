import React, { useContext } from 'react';
import { numberWithCommas } from '../utils/format';
import { GlobalContext } from './context/GlobalState';

const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);

	const amounts = transactions.map((transaction) => transaction.amount);

	const income = amounts
		.filter((amount) => amount > 0)
		.reduce((total, item) => (total += item), 0)
		.toFixed(2);

	const expense = amounts
		.filter((amount) => amount < 0)
		.reduce((total, item) => (total += item), 0)
		.toFixed(2);

	return (
		<div className='inc-exp-container'>
			<div>
				<h4>Income</h4>
				<p className='money plus'>+${numberWithCommas(income)}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className='money minus'>-${numberWithCommas(Math.abs(expense))}</p>
			</div>
		</div>
	);
};

export default IncomeExpenses;
