import { Schema, model } from "mongoose";

const userVerificationSchema = new Schema({
 
  verified: {
    type: Boolean,
    default: false,
  },
  verificationId: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserVerification = model("UserVerification", userVerificationSchema);

export default UserVerification;
