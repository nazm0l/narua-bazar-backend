import express from "express";
import { siteSettingsController } from "./siteSettings.controller";

const router = express.Router();

// Get site settings (public route)
router.get("/", siteSettingsController.getSiteSettings);

// Create or update site settings (admin only)
router.post("/", siteSettingsController.createOrUpdateSiteSettings);

// Update site settings (admin only)
router.put("/", siteSettingsController.updateSiteSettings);

// Delete site settings (admin only - use with caution)
router.delete("/", siteSettingsController.deleteSiteSettings);

export const siteSettingsRoutes = router;
