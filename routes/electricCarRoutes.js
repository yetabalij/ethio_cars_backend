import express from 'express';
import {
    createElectricCar,
    getAllElectricCars,
    getElectricCarById,
    updateElectricCar,
    deleteElectricCar,
} from '../controllers/electricCarController.js';

const router = express.Router();

router.post('/', createElectricCar); // Create car
router.get('/', getAllElectricCars); // List all cars
router.get('/:id', getElectricCarById); // Get single car detail
router.put('/:id', updateElectricCar); // Edit car
router.delete('/:id', deleteElectricCar); // Delete car

export default router;
