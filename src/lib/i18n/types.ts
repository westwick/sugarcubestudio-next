export type Language = "en" | "fa";

export type TranslationKey = keyof typeof import("./translations/en").default;

export interface Translations {
  // Common
  siteName: string;
  tagline: string;
  comingSoon: string;
  available: string;
  learnMore: string;
  learnMoreSimurgh: string;
  learnMoreNowruz: string;
  subscribe: string;
  
  // Navigation
  navHome: string;
  navApps: string;
  navContact: string;
  
  // Hero Section
  heroExperience: string;
  heroSimurgh: string;
  heroDescription: string;
  heroDiscoverMore: string;
  heroJoinBeta: string;
  
  // Tagline Section
  taglineText: string;
  taglineHighlight: string;
  
  // Video Section
  videoExclusivePreview: string;
  videoWatchTeaser: string;
  videoDescription: string;
  videoTitle: string;
  videoSubtitle: string;
  featureBeatEmUp: string;
  featurePersianSoundtrack: string;
  featureEpicStory: string;
  featureMobileDesktop: string;
  joinBeta: string;
  
  // Newsletter Section
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterPrivacy: string;
  
  // Apps Preview Section
  appsTitle: string;
  appsSubtitle: string;
  appsDescription: string;
  viewAllApps: string;
  
  // Simurgh Card
  simurghTitle: string;
  simurghShortDesc: string;
  simurghLongDesc: string;
  
  // Nowruz Card
  nowruzTitle: string;
  nowruzShortDesc: string;
  nowruzLongDesc: string;
  
  // News Section
  newsTitle: string;
  newsSubtitle: string;
  newsSimurghHeadline: string;
  newsSimurghText: string;
  newsNowruzHeadline: string;
  newsNowruzText: string;
  newsBetaHeadline: string;
  newsBetaText: string;
  availableNow: string;
  joinUs: string;
  
  // CTA Section
  ctaTitle: string;
  ctaHighlight: string;
  ctaDescription: string;
  ctaNewsletter: string;
  ctaContact: string;
  
  // Footer
  footerDescription: string;
  footerQuickLinks: string;
  footerOurApps: string;
  footerStayUpdated: string;
  footerStayUpdatedDesc: string;
  footerCopyright: string;
  linkOurApps: string;
  linkBecomeTester: string;
  linkNewsletter: string;
  linkContact: string;
  linkPrivacyPolicy: string;
  
  // Theme Toggle
  themeLight: string;
  themeDark: string;
  themeSystem: string;
  
  // Language Toggle
  languageEnglish: string;
  languagePersian: string;
  
  // Apps Page
  appsPageSubtitle: string;
  appsPageTitle: string;
  appsPageDescription: string;
  
  // Simurgh Page
  simurghPageSubtitle: string;
  simurghPageTitle: string;
  simurghPageDescription: string;
  simurghAboutText: string;
  simurghScreenshots: string;
  simurghOriginalMusic: string;
  simurghMusicDescription: string;
  simurghListenOnSpotify: string;
  simurghFeatures: string;
  simurghFeature1: string;
  simurghFeature2: string;
  simurghFeature3: string;
  simurghFeature4: string;
  simurghFeature5: string;
  simurghAvailability: string;
  simurghNotifyText: string;
  getNotified: string;
  availableForIosAndroid: string;
  
  // Nowruz Page
  nowruzPageSubtitle: string;
  nowruzPageTitle: string;
  nowruzPageDescription: string;
  nowruzAboutText: string;
  nowruzScreenshots: string;
  nowruzFeatures: string;
  nowruzFeature1: string;
  nowruzFeature2: string;
  nowruzFeature3: string;
  nowruzFeature4: string;
  nowruzFeature5: string;
  downloadNow: string;
  availableOnIosAndroid: string;
  
  // Contact Page
  contactPageSubtitle: string;
  contactPageTitle: string;
  contactPageDescription: string;
  contactFormIntro: string;
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactSend: string;
  contactSending: string;
  contactSuccess: string;
  contactError: string;

  // Game Tester Page
  testerPageSubtitle: string;
  testerPageTitle: string;
  testerPageDescription: string;
  testerMainTitle: string;
  testerParagraph1: string;
  testerParagraph2: string;
  testerParagraph3: string;
  testerBenefitsTitle: string;
  testerBenefit1: string;
  testerBenefit2: string;
  testerBenefit3: string;
  testerBenefit4: string;
  becomeTester: string;
  testerCardDescription: string;
  signUpNow: string;
  testerTime: string;
  
  // Mailing List Page
  mailingPageSubtitle: string;
  mailingPageTitle: string;
  mailingPageDescription: string;
  mailingIntro: string;
  mailingDisclaimer: string;
  mailingSending: string;
  mailingSuccess: string;
  mailingError: string;

  // Privacy Policy Page
  privacyPageSubtitle: string;
  privacyPageTitle: string;
  privacyIntro1: string;
  privacyIntro2: string;
  privacyIntro3: string;
  privacyInfoTitle: string;
  privacyInfoText: string;
  privacyLogTitle: string;
  privacyLogText: string;
  privacyCookiesTitle: string;
  privacyCookiesText: string;
  privacyProvidersTitle: string;
  privacyProvidersText: string;
  privacySecurityTitle: string;
  privacySecurityText: string;
  privacyChildrenTitle: string;
  privacyChildrenText: string;
  privacyChangesTitle: string;
  privacyChangesText1: string;
  privacyChangesText2: string;
  privacyContactTitle: string;
  privacyContactText: string;
}
