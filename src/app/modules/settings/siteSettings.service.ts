import { ISiteSettings } from "./siteSettings.interface";
import siteSettingsModel from "./siteSettings.model";

// Get site settings (returns the single settings document)
const getSiteSettingsFromDB = async (): Promise<ISiteSettings | null> => {
  const settings = await siteSettingsModel.findOne();
  return settings;
};

// Create or update site settings (only one document should exist)
const createOrUpdateSiteSettingsInDB = async (
  data: Partial<ISiteSettings>
): Promise<ISiteSettings | null> => {
  const existingSettings = await siteSettingsModel.findOne();

  if (existingSettings) {
    // Update existing settings
    const updatedSettings = await siteSettingsModel.findByIdAndUpdate(
      existingSettings._id,
      data,
      { new: true, runValidators: true }
    );
    return updatedSettings;
  } else {
    // Create new settings
    const newSettings = await siteSettingsModel.create(data);
    return newSettings;
  }
};

// Update specific fields in site settings
const updateSiteSettingsInDB = async (
  data: Partial<ISiteSettings>
): Promise<ISiteSettings | null> => {
  const settings = await siteSettingsModel.findOne();

  if (!settings) {
    throw new Error("Site settings not found. Please create settings first.");
  }

  const updatedSettings = await siteSettingsModel.findByIdAndUpdate(
    settings._id,
    data,
    { new: true, runValidators: true }
  );

  return updatedSettings;
};

// Delete site settings (use with caution)
const deleteSiteSettingsFromDB = async (): Promise<ISiteSettings | null> => {
  const settings = await siteSettingsModel.findOne();

  if (!settings) {
    throw new Error("Site settings not found");
  }

  const deletedSettings = await siteSettingsModel.findByIdAndDelete(settings._id);
  return deletedSettings;
};

export const siteSettingsService = {
  getSiteSettingsFromDB,
  createOrUpdateSiteSettingsInDB,
  updateSiteSettingsInDB,
  deleteSiteSettingsFromDB
};