import express from 'express';
import authMiddleware from '../../middlewires/auth.middleware';
import { shopController } from './shop.controller';

const router = express.Router()


router.post('/create', authMiddleware, shopController.createShop);
router.get('/', shopController.getAllShops);
router.get('/:id', shopController.getShopById);
router.put('/:id', authMiddleware, shopController.updateShopById);
router.delete('/:id', authMiddleware, shopController.deleteShopById);

export const shopRoutes = router;