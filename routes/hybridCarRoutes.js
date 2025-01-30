import express from 'express';
import {
    createHybridCar,
    getAllHybridCars,
    getHybridCarById,
    updateHybridCar,
    deleteHybridCar,
} from '../controllers/hybridCarController.js';

const router = express.Router();

router.post('/', createHybridCar); // Create car
router.get('/', getAllHybridCars); // List all cars
router.get('/:id', getHybridCarById); // Get single car detail
router.put('/:id', updateHybridCar); // Edit car
router.delete('/:id', deleteHybridCar); // Delete car

export default router;
