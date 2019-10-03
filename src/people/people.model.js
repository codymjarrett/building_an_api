import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    age: {
      type: Number,
      required: true
    },
    highestEducation: {
      type: String
    },
    sex: {
      type: String,
      enum: ["MALE", "FEMALE", "NON-BINARY", "UNDISCLOSED"]
    }
  },
  { timestamps: true }
);

export const Person = mongoose.model("person", personSchema);
