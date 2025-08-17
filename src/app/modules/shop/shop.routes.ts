import express from 'express'
import { shopController } from './shop.controller';

const router = express.Router()


router.post('/create', shopController.createShop);
router.get('/', shopController.getAllShops);
router.get('/:id', shopController.getShopById);
router.put('/:id', shopController.updateShopById);
router.delete('/:id', shopController.deleteShopById);

export const shopRoutes = router;