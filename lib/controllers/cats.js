const { Router } = require('express');
// const { cats } = require('../../data/cats');
const Cat = require('../models/Cat');
module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const catId = cats.find((cat) => cat.id === id);
    res.json(catId);
  })
  .get('/', async (req, res) => {
    const catData = await Cat.getAll();
    const finalData = catData.map(({ id, name }) => {
      return { id, name };
    });
    res.json(finalData);
  });
