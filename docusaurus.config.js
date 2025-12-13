// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'An Open Source Book',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Hardcoded production URL
  url: 'https://my-docusaurus-book-16x8.vercel.app',
  baseUrl: '/',

  organizationName: 'Mariya1255',
  projectName: 'humanoid-robotics-book',

  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Mariya1255/humanoid-robotics-book/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Mariya1255/humanoid-robotics-book/tree/main/blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI & Humanoid Robotics Textbook Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'bookSidebar', position: 'left', label: 'Textbook' },
        { to: '/', label: 'Home', position: 'left' },
        { href: 'https://github.com/Mariya1255/my-docusaurus-book', label: 'GitHub', position: 'right' },
      ],
      style: 'dark',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Course Navigation',
          items: [
            { label: 'Home', to: '/' },
            { label: 'Course Outline', to: '/docs/intro' },
            { label: 'Textbook', to: '/docs/intro' },
            { label: 'Hardware Guide', to: '/docs/hardware-guide' },
            { label: 'Simulation Setup', to: '/docs/simulation' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Documentation', href: 'https://docusaurus.io/' },
            { label: 'Tutorials', href: 'https://docusaurus.io/docs/category/getting-started' },
            { label: 'Support', href: 'https://github.com/Mariya1255/humanoid-robotics-book/issues' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Terms of use', href: '#' },
            { label: 'Privacy Policy', href: '#' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    stylesheets: [
      {
        href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Roboto+Mono&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
};

export default config;
