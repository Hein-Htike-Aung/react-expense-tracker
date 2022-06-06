import React, { useContext, useState } from 'react';
import { GlobalContext } from './context/GlobalState';

const AddTransaction = () => {
	const { addTransaction } = useContext(GlobalContext);

	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const onSubmit = (e) => {
		e.preventDefault();

		addTransaction({
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: Number(amount),
		});

		setText('');
		setAmount(0);
	};

	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className='form-control'>
					<label htmlFor='text'>Text</label>
					<input
						type='text'
						value={text ?? ''}
						onChange={(e) => setText(e.target.value)}
						placeholder='Enter text...'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type='number'
						placeholder='Enter amount...'
						value={amount ?? 0}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button type='submit' className='btn'>
					Add transaction
				</button>
			</form>
		</>
	);
};

export default AddTransaction;
