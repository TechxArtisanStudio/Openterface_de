import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: 'Verwandeln Sie Ihr Smartphone in eine Mini-Tastatur',
    description:
      'Ein kompakter USB + Bluetooth HID-Emulator, der Ihr Smartphone in eine tragbare Tastatur und ein Trackpad verwandelt. Plug-and-Play, 100 % Open Source. Perfekt für Kioske, Smart-TVs und schnelle Workflow-Shortcuts.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'JETZT unterstützen', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: 'Produkt ansehen', href: '/keymod/' },
    progressSmall: 'KeyMod Series',
    progressLarge: 'Smartphone als Mini-Tastatur',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: 'Der ultrakompakte KVM für den Schlüsselbund',
    description:
      'Entwickelt, um an Ihren Schlüsselbund zu passen und den Tag im Handumdrehen zu retten. Dieses KVM-over-USB-Gadget der nächsten Generation wurde für schnelle IT-Einsätze vor Ort gebaut.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'JETZT vorbestellen', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: 'Produkt ansehen', href: '/kvmgo/' },
    funding: { amount: '$101.548', date: 'Finanziert am 30. Dez. 2025', backers: '478' },
    progressSmall: 'KVM-GO Series',
    progressLarge: 'KVM für den Schlüsselbund',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: 'Die kompakte KVM-Lösung für Profis',
    description:
      'Eine kompakte, funktionsreiche Open-Source KVM-over-USB-Lösung, die Ihr Technik-Leben bei täglichen IT-Aufgaben und der Fehlersuche vereinfacht.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'JETZT bestellen', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: 'Produkt ansehen', href: '/minikvm/' },
    funding: { amount: '$505.471', date: 'Finanziert am 13. Juni 2024', backers: '3.775' },
    progressSmall: 'Mini-KVM Series',
    progressLarge: 'KVM-Lösung für Profis',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: 'Vervollständigen Sie Ihr Setup mit Premium-Zubehör',
    description:
      'Entdecken Sie unser Sortiment an unverzichtbarem Zubehör, darunter Videoadapter, Hochgeschwindigkeitskabel und Speicherlösungen. Verbessern Sie Ihr Openterface-Erlebnis mit Profi-Zubehör.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'TxA Shop Zubehör',
    primaryCta: { label: 'JETZT shoppen', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: 'Zubehör ansehen', href: '/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: 'Premium-Zubehör',
  },
];

export const homeSeo = {
  title: 'Openterface | Ultrakompakte KVM-Lösungen für IT-Profis',
  description:
    'Entdecken Sie Openterface - Ultrakompakte KVM-over-USB-Lösungen einschließlich KVM-GO Series (schlüsselbundgroß), Mini-KVM Series und uConsole KVM Extension.',
  keywords:
    'KVM-over-USB, KVM-Switch, portabler KVM, USB KVM, Headless-Server-Management, KVM-GO, Mini-KVM, KeyMod',
};
