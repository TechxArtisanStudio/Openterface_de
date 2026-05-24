import { legacyPath, newsPath } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Startseite', href: '/' },
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
  { label: 'FAQs', href: legacyPath('/faq/'), external: true },
  { label: 'App', href: legacyPath('/app/overview/'), external: true },
  { label: 'Tutorial', href: legacyPath('/tutorial/'), external: true },
  { label: 'Support', href: legacyPath('/support/'), external: true },
  { label: 'News', href: newsPath(), external: true },
  { label: 'Über uns', href: '/about/' },
];
