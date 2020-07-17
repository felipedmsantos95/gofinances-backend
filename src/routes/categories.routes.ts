import { getRepository } from 'typeorm';
import { Router } from 'express';

import Category from '../models/Category';

const categoriesRouter = Router();

categoriesRouter.post('/', async (request, response) => {
  const { title } = request.body;
  const categoriesRepository = getRepository(Category);

  const category = categoriesRepository.create({
    title,
  });

  await categoriesRepository.save(category);

  response.json(category);
});

export default categoriesRouter;
