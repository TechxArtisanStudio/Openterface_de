import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Produkte",
    href: '/products/',
    children: [
      { label: "Alle Produkte", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Zubehör", href: '/accessories/' },
    ],
  },
  {
    label: "Apps",
    href: '/app/',
    children: [
      { label: "Alle Apps", href: '/app/' },
      { label: "KVM-Steuerung", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Medien", href: '/videos/' },
  { label: "Über uns", href: '/about/' },
  { label: "Dokumentation", href: docsPath(), external: true },
  { label: "News", href: newsPath(), external: true },
  { label: "Shop", href: siteConfig.links.shop, external: true },
];
