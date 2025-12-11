export interface ISocialLinks {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
}

export interface IContactInfo {
  phone?: string;
  email?: string;
  address?: string;
}

export interface ISiteSettings {
  siteName: string;
  logoUrl?: string;
  faviconUrl?: string;
  description?: string;
  contactInfo?: IContactInfo;
  socialLinks?: ISocialLinks;
  footerText?: string;
  copyrightText?: string;
  maintenanceMode?: boolean;
  updatedBy?: string;
}