const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const transactions = require('./routes/transactions.route');
const connectDB = require('./config/db');
const path = require('path');

dotenv.config({ path: './config/config.env' });
connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json()); // request body parser

if (process.env.NODE_ENV == 'development') {
	app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')),
	);
}

app.listen(
	PORT,
	console.log(
		`App is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold,
	),
);
