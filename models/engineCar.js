import mongoose from "mongoose";

const engineCarSchema = new mongoose.Schema({
  make: { type: String, required: false },
  model: { type: String, required: false },
  price: { type: Number, required: false },
  year: { type: Number, required: false },
  mileage: { type: Number, required: false },
  condition: { type: String, required: false },
  color: { type: String, required: false },
  images: { type: [String] },
  engine: { type: String, required: false },
  fuel: { type: String, required: false },
  transmission: { type: String, required: false },
  drive_type: { type: String, required: false },
  seats: { type: Number, required: false },
  plate: { type: String, required: false },
  to_rent: { type: Boolean, required: false },
  commission: { type: Number, required: false },
  sold: { type: Boolean, default: false }, // Tracks if the car is sold
});

const EngineCar = mongoose.model("EngineCar", engineCarSchema);
export default EngineCar;
