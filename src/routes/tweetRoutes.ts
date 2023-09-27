import { Router } from "express";

const router= Router();

// tweet CRUD

// Create tweet
router.post('/', (req, res) => {
    res.status(501).json({ error: 'Not Implemented tweets' });
});

// list tweets
router.get('/', (req, res) => {
    res.status(501).json({ error: 'Not Implemented tweets yet' });
});

//get one tweet
router.get('/:id', (req, res) => {
    const { id }=req.params;
    res.status(501).json({ error: `not implemented ${id}`  });
});

//update tweet
router.put('/:id', (req, res) => {
    const { id }=req.params;
    res.status(501).json({ error: `not implemented ${id}`  });
});

//delete tweet
router.get('/:id', (req, res) => {
    const { id }=req.params;
    res.status(501).json({ error: `not implemented ${id}`  });
});

export default router;