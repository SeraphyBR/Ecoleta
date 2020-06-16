import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(req: Request, res: Response) {
        const items = await knex("items").select("*");

        const serialized_items = items.map((item) => {
            return {
                title: item.title,
                image_url: `https://localhost:3333/uploads/${item.image}`,
            };
        });

        return res.json(serialized_items);
    }
}

export default ItemsController;