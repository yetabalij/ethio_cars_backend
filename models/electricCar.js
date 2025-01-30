import mongoose from 'mongoose';

const electricCarSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    condition: { type: String, required: true },
    color: { type: String, required: true },
    images: { type: [String] },
    battery_capacity: { type: String, required: true },
    range: { type: Number, required: true },
    drive_type: { type: String, required: true },
    seats: { type: Number, required: true },
    plate: { type: String, required: true },
    to_rent: { type: Boolean, required: true },
    commission: { type: Number, required: true },
    sold: { type: Boolean, default: false }, // Tracks if the car is sold
});

const ElectricCar = mongoose.model('ElectricCar', electricCarSchema);
export default ElectricCar;
