import * as express from 'express';

import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/chirps/:id', async (req, res) => {
    try {
        res.json((await db.Chirps.one(req.param.id))[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;