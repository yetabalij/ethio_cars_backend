import express from 'express';
import {
    createEngineCar,
    getAllEngineCars,
    getEngineCarById,
    updateEngineCar,
    deleteEngineCar,
} from '../controllers/engineCarController.js';

const router = express.Router();

router.post('/', createEngineCar); // Create car
router.get('/', getAllEngineCars); // List all cars
router.get('/:id', getEngineCarById); // Get single car detail
router.put('/:id', updateEngineCar); // Edit car
router.delete('/:id', deleteEngineCar); // Delete car

export default router;
