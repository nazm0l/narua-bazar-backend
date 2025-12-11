import { model, Schema } from "mongoose";
import { ISiteSettings } from "./siteSettings.interface";

const siteSettingsSchema: Schema<ISiteSettings> = new Schema({
  siteName: { type: String, required: true },
  logoUrl: { type: String },
  faviconUrl: { type: String },
  description: { type: String },
  contactInfo: {
    phone: { type: String },
    email: { type: String },
    address: { type: String }
  },
  socialLinks: {
    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    youtube: { type: String }
  },
  footerText: { type: String },
  copyrightText: { type: String },
  maintenanceMode: { type: Boolean, default: false },
  updatedBy: { type: Schema.Types.ObjectId, ref: "User" }
},
  { timestamps: true }
);

// Ensure only one settings document exists
siteSettingsSchema.index({}, { unique: true });

const siteSettingsModel = model<ISiteSettings>("SiteSettings", siteSettingsSchema);

export default siteSettingsModel;