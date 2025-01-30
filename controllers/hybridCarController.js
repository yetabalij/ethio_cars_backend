import HybridCar from '../models/hybridCar.js';

// Create a new hybrid car
export const createHybridCar = async (req, res) => {
    try {
        const car = await HybridCar.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error creating car', error: error.message });
    }
};

// Get all hybrid cars
export const getAllHybridCars = async (req, res) => {
    try {
        const cars = await HybridCar.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cars', error: error.message });
    }
};

// Get a single hybrid car by ID
export const getHybridCarById = async (req, res) => {
    try {
        const car = await HybridCar.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching car', error: error.message });
    }
};

// Update an hybrid car
export const updateHybridCar = async (req, res) => {
    try {
        const car = await HybridCar.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error updating car', error: error.message });
    }
};

// Delete an hybrid car
export const deleteHybridCar = async (req, res) => {
    try {
        const car = await HybridCar.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting car', error: error.message });
    }
};
