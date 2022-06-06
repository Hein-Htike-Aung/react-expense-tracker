import React, { useContext } from 'react';
import { numberWithCommas } from '../utils/format';
import { GlobalContext } from './context/GlobalState';

const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts.reduce((total, item) => (total += item), 0).toFixed(2);

	return (
		<>
			<h4>Your Balance</h4>
			<h1 id='balance'>${numberWithCommas(total)}</h1>
		</>
	);
};

export default Balance;
