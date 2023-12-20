import express from 'express';
import pkg from 'pg';
import path from 'path';
import 'dotenv/config';

const { Pool } = pkg;

const psql = new Pool({
    connectionString : process.env.PG_DATABASE_URL,
});

//?ssl=true at the end of your extrenal database URL from render

const app = express();
const expressPort = 8000;

app.use(express.static('public'))

app.get('/api/items', (req, res, next) => {
    psql.query('SELECT * FROM items', (err, result) => {
        if (err) {
            next(err);
        }
        res.send(result.rows);
    });
});

app.get('/api/customers', (req, res, next) => {
    psql.query('SELECT * FROM Customers', (err, result) => {
        if (err) {
            next(err);
        }
        res.send(result.rows);
    });
});

app.get('/api/carts', (req, res, next) => {
    psql.query('SELECT * FROM carts', (err, result) => {
        if (err) {
            next(err);
        }
        res.send(result.rows);
    });
});

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(expressPort, () => {
    console.log(`Listening on port ${expressPort}`);
});