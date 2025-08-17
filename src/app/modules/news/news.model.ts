import { model, Schema } from "mongoose";
import { INews } from "./news.interface";


const newsSchema: Schema<INews> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imgUrl: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true }
},
  { timestamps: true }
)

const newsModel = model<INews>("News", newsSchema)

export default newsModel