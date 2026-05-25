export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Produktleitfäden, FAQs, Tutorials und App-Downloads finden Sie auf docs.openterface.com.",
    "homeMessage": "Tutorials, FAQs, App-Downloads und Produktleitfäden finden Sie auf docs.openterface.com.",
    "linkLabel": "Dokumentation öffnen ↗",
    "productMessage": "Detaillierte Specs, Setup-Anleitungen und FAQs finden Sie auf docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "Bleiben Sie informiert",
    "heading": "KVM-GO-, KeyMod- & Mini-KVM-Updates zuerst erhalten",
    "description": "Produktstarts, Firmware-Releases und praktische IT-Tipps — höchstens einmal im Monat. Kein Spam, nur nützliche News vom Openterface-Team.",
    "benefitCrowdfunding": "Früher Zugang zu Crowdfunding- und Vorbestellungsfenstern",
    "benefitGuides": "Setup-Anleitungen und App-Release-Notes",
    "benefitUnsubscribe": "Jederzeit mit einem Klick abbestellen",
    "submitLabel": "Updates abonnieren",
    "namePlaceholder": "Name (optional)",
    "emailPlaceholder": "E-Mail-Adresse *",
    "footnote": "Höchstens eine E-Mail pro Monat. Jederzeit kündbar. Anfragen: info@openterface.com"
  }
};
