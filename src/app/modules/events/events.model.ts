import { model, Schema } from "mongoose";
import { IEvents } from "./events.interface";


const eventsSchema: Schema<IEvents> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true }
},
  { timestamps: true }
)

const eventsModel = model<IEvents>("Events", eventsSchema)

export default eventsModel