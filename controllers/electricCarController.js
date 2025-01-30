import ElectricCar from '../models/electricCar.js';

// Create a new electric car
export const createElectricCar = async (req, res) => {
    try {
        const car = await ElectricCar.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error creating car', error: error.message });
    }
};

// Get all electric cars
export const getAllElectricCars = async (req, res) => {
    try {
        const cars = await ElectricCar.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cars', error: error.message });
    }
};

// Get a single electric car by ID
export const getElectricCarById = async (req, res) => {
    try {
        const car = await ElectricCar.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching car', error: error.message });
    }
};

// Update an electric car
export const updateElectricCar = async (req, res) => {
    try {
        const car = await ElectricCar.findByIdAndUpdate(req.params.id, req.body, {
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

// Delete an electric car
export const deleteElectricCar = async (req, res) => {
    try {
        const car = await ElectricCar.findByIdAndDelete(req.params.id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting car', error: error.message });
    }
};
