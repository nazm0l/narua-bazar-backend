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

export interface IHeroSection {
  title?: string;
  subtitle?: string;
  description?: string;
  shopCount?: number;
  educationCount?: number;
  villageCount?: number;
}

export interface INewsSection {
  title?: string;
  subtitle?: string;
}

export interface IShopSection {
  title?: string;
  subtitle?: string;
}

export interface IEventSection {
  title?: string;
  subtitle?: string;
}

export interface IAddShopSection {
  title?: string;
  subtitle?: string;
}

export interface IHomePageSettings {
  heroSection?: IHeroSection;
  newsSection?: INewsSection;
  shopSection?: IShopSection;
  eventSection?: IEventSection;
  addShopSection?: IAddShopSection;
}

export interface IPageSettings {
  title?: string;
  subtitle?: string;
  filterTitle?: string;
  newsTitle?: string;
  eventTitle?: string;
}

export interface IFooterSettings {
  logoUrl?: string;
  description?: string;
}

export interface ISiteSettings {
  siteName: string;
  logoUrl?: string;
  faviconUrl?: string;
  description?: string;
  homePage?: IHomePageSettings;
  shopPage?: IPageSettings;
  newsPage?: IPageSettings;
  eventPage?: IPageSettings;
  contactPage?: IPageSettings;
  contactInfo?: IContactInfo;
  socialLinks?: ISocialLinks;
  footer?: IFooterSettings;
  footerText?: string;
  copyrightText?: string;
  maintenanceMode?: boolean;
  updatedBy?: string;
}