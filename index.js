import express from 'express';
import pkg from 'pg';
import path from 'path';

const { Pool } = pkg;

const psql = new Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'anthonylinux',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'hurryup',
});


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