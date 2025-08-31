import { model, Schema } from "mongoose";
import { IInfo } from "./info.interface";


const infoSchema: Schema<IInfo> = new Schema({
  totalVillages: { type: Number },
  totalWards: { type: Number },
  totalPrimarySchools: { type: Number },
  toalHighSchools: { type: Number },
  totalColleges: { type: Number },
  totalHospitals: { type: Number },
  totalBanks: { type: Number },
  totalMarkets: { type: Number },
  totalRestaurants: { type: Number },
  totalHotels: { type: Number },
  totalTouristPlaces: { type: Number },
  totalPopulation: { type: Number },
  totalMosques: { type: Number },
},
  { timestamps: true }
)

const infoModel = model<IInfo>("Info", infoSchema)

export default infoModel