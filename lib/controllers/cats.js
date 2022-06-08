const { Router } = require('express');
// const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const catId = cats.find((cat) => cat.id === id);
    res.json(catId);
  })
  .get('/', (req, res) => {
    const cat = cats.map(({ id, name }) => {
      return { id, name };
    });
    res.json(cat);
  });
