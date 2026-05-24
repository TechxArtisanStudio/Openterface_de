import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Produkte',
    href: '#',
    children: [
      { label: 'KeyMod Series', href: '/products/keymod/' },
      { label: 'KVM-GO Series', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: 'Zubehör', href: '/products/accessories/' },
    ],
  },
  { label: 'Videos', href: '/videos/' },
  { label: 'Anwendungsfälle', href: '/use-cases/' },
  { label: 'Über uns', href: '/about/' },
  { label: 'Dokumentation', href: docsPath(), external: true },
  { label: 'News', href: newsPath(), external: true },
  { label: 'Shop', href: siteConfig.links.shop, external: true },
];
