import { ILFlag } from '@components/icons/language/ILFlag';
import { SAFlag } from '@components/icons/language/SAFlag';
import { CNFlag } from '@components/icons/language/CNFlag';
import { USFlag } from '@components/icons/language/USFlag';
import { DEFlag } from '@components/icons/language/DEFlag';
import { ESFlag } from '@components/icons/language/ESFlag';
import siteLogo from 'public/assets/images/logo.svg';

export const siteSettings = {
  name: 'BoroBazar',
  description:
    'Fastest E-commerce template built with React, NextJS, TypeScript, TanStack-React-Query and Tailwind CSS.',
  author: {
    name: 'REDQ',
    websiteUrl: 'https://redq.io',
    address: '',
  },
  logo: {
    url: siteLogo,
    alt: 'BoroBazar',
    href: '/',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/',
        label: 'menu-demos',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-modern',
          },
          {
            id: 2,
            path: '/classic',
            label: 'menu-classic',
          },
          {
            id: 3,
            path: '/vintage',
            label: 'menu-vintage',
          },
          {
            id: 4,
            path: '/standard',
            label: 'menu-standard',
          },
          {
            id: 5,
            path: '/minimal',
            label: 'menu-minimal',
          },
          {
            id: 6,
            path: '/trendy',
            label: 'menu-trendy',
          },
          {
            id: 7,
            path: '/elegant',
            label: 'menu-elegant',
          },
          {
            id: 8,
            path: '/refined',
            label: 'menu-refined',
          },
          {
            id: 9,
            path: '/antique',
            label: 'menu-antique',
          },
          {
            id: 10,
            path: '/ancient',
            label: 'menu-ancient',
          },
        ],
      },
      {
        id: 2,
        path: '/search',
        label: 'menu-categories',
        subMenu: [
          {
            id: 1,
            path: '/search',
            label: 'menu-fresh-vegetables',
          },
          {
            id: 2,
            path: '/search',
            label: 'menu-diet-nutrition',
          },
          {
            id: 3,
            path: '/search',
            label: 'menu-healthy-foods',
          },
          {
            id: 4,
            path: '/search',
            label: 'menu-grocery-items',
          },
          {
            id: 5,
            path: '/search',
            label: 'menu-beaf-steak',
          },
        ],
      },
      {
        id: 3,
        path: '/search',
        label: 'menu-dietary',
        subMenu: [
          {
            id: 1,
            path: '/search',
            label: 'menu-vegetarian',
          },
          {
            id: 2,
            path: '/search',
            label: 'menu-kakogenic',
          },
          {
            id: 3,
            path: '/search',
            label: 'menu-mediterranean',
          },
          {
            id: 4,
            path: '/search',
            label: 'menu-organic',
          },
        ],
      },
      {
        id: 4,
        path: '/search/',
        label: 'menu-search',
      },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <ESFlag />,
      },
    ],
    pagesMenu: [
      {
        id: 1,
        path: '/search',
        label: 'menu-best-deals',
      },
      {
        id: 2,
        path: '/about-us',
        label: 'menu-about-us',
      },
      {
        id: 3,
        path: '/contact-us',
        label: 'menu-contact-us',
      },
      {
        id: 4,
        path: '/faq',
        label: 'menu-faq',
      },
    ],
  },
};
