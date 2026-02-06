import { model, Schema } from "mongoose";
import { ISiteSettings } from "./siteSettings.interface";

const siteSettingsSchema: Schema<ISiteSettings> = new Schema({
  siteName: { type: String, required: true },
  logoUrl: { type: String },
  faviconUrl: { type: String },
  description: { type: String },
  homePage: {
    heroSection: {
      title: { type: String },
      subtitle: { type: String },
      description: { type: String },
      shopCount: { type: Number },
      educationCount: { type: Number },
      villageCount: { type: Number }
    },
    newsSection: {
      title: { type: String },
      subtitle: { type: String }
    },
    shopSection: {
      title: { type: String },
      subtitle: { type: String }
    },
    eventSection: {
      title: { type: String },
      subtitle: { type: String }
    },
    addShopSection: {
      title: { type: String },
      subtitle: { type: String }
    },
  },
  shopPage: {
    title: { type: String },
    subtitle: { type: String },
    filterTitle: { type: String }
  },
  newsPage: {
    title: { type: String },
    subtitle: { type: String },
    newsTitle: { type: String },
    eventTitle: { type: String }
  },
  eventPage: {
    title: { type: String },
    subtitle: { type: String },
    eventTitle: { type: String }
  },
  contactPage: {
    title: { type: String },
    subtitle: { type: String }
  },
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
  footer: {
    logoUrl: { type: String },
    description: { type: String }
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