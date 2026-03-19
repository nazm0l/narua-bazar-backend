import { Request, Response } from "express";
import { siteSettingsService } from "./siteSettings.service";

// Get site settings
const getSiteSettings = async (req: Request, res: Response) => {
  try {
    const result = await siteSettingsService.getSiteSettingsFromDB();

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Site settings not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Site settings fetched successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

// Create or update site settings
const createOrUpdateSiteSettings = async (req: Request, res: Response) => {
  try {
    const { settings } = req.body;

    const result = await siteSettingsService.createOrUpdateSiteSettingsInDB(settings);

    res.status(200).json({
      success: true,
      message: "Site settings saved successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

// Update site settings
const updateSiteSettings = async (req: Request, res: Response) => {
  try {
    const { settings } = req.body;

    const result = await siteSettingsService.updateSiteSettingsInDB(settings);

    res.status(200).json({
      success: true,
      message: "Site settings updated successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

// Delete site settings
const deleteSiteSettings = async (req: Request, res: Response) => {
  try {
    const result = await siteSettingsService.deleteSiteSettingsFromDB();

    res.status(200).json({
      success: true,
      message: "Site settings deleted successfully",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

export const siteSettingsController = {
  getSiteSettings,
  createOrUpdateSiteSettings,
  updateSiteSettings,
  deleteSiteSettings
};