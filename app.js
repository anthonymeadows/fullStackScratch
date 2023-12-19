import express from 'express';
import fs from 'fs';
// import { pool } from 'pg';

const app = express();
const expressPort = 8000

app.use()


app.get('/', (req, res) => {
    res.sendFile('/home/anthony/git/fullStackScratch/public/index.html')
})

app.listen(expressPort, () => {
    console.log(`Listening on port ${expressPort}`)
})