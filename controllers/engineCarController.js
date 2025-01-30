import EngineCar from '../models/engineCar.js';

// Create a new engine car
export const createEngineCar = async (req, res) => {
    try {
        const car = await EngineCar.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error creating car', error: error.message });
    }
};

// Get all engine cars
export const getAllEngineCars = async (req, res) => {
    try {
        const cars = await EngineCar.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cars', error: error.message });
    }
};

// Get a single engine car by ID
export const getEngineCarById = async (req, res) => {
    try {
        const car = await EngineCar.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching car', error: error.message });
    }
};

// Update an engine car
export const updateEngineCar = async (req, res) => {
    try {
        const car = await EngineCar.findByIdAndUpdate(req.params.id, req.body, {
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

// Delete an engine car
export const deleteEngineCar = async (req, res) => {
    try {
        const car = await EngineCar.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting car', error: error.message });
    }
};
