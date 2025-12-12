// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Book',
  tagline: 'An Open Source Book',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Mariya1255.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
      baseUrl: '/humanoid-robotics-book/',
      
      // GitHub pages deployment config.
      // If you aren't using GitHub pages, you don't need these.
      organizationName: 'Mariya1255', // Usually your GitHub org/user name.
      projectName: 'humanoid-robotics-book', // Usually your repo name.
    
      onBrokenLinks: 'ignore',
    
      // Even if you don't use internationalization, you can use this field to set
      // useful metadata like html lang. For example, if your site is Chinese, you
      // may want to replace "en" with "zh-Hans".
      i18n: {
        defaultLocale: 'en',
        locales: ['en'],
      },    
      presets: [
        [
          'classic',
          /** @type {import('@docusaurus/preset-classic').Options} */
          ({
            docs: {
              sidebarPath: './sidebars.js',
              // Please change this to your repo.
              // Remove this to remove the "edit this page" links.
              editUrl:
                'https://github.com/Mariya1255/humanoid-robotics-book/tree/main/',
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
    
      themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
          // Replace with your project's social card
          image: 'img/docusaurus-social-card.jpg',
          colorMode: {
            respectPrefersColorScheme: true,
          },
          navbar: {
            title: 'Physical AI & Humanoid Robotics',
            logo: {
              alt: 'Humanoid Robotics Book Logo',
              src: 'img/logo.svg',
            },
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'bookSidebar',
                position: 'left',
                label: 'Book',
              },
              {to: '/blog', label: 'Blog', position: 'left'},
              {
                href: 'https://github.com/Mariya1255/humanoid-robotics-book',
                label: 'GitHub',
                position: 'right',
              },
            ],
            style: 'dark',
          },      footer: {
        style: 'dark',
        links: [
          {
            title: 'Course Navigation',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Course Outline',
                to: '/docs/intro',
              },
              {
                label: 'Textbook',
                to: '/docs/intro',
              },
              {
                label: 'Hardware Guide',
                to: '/docs/hardware-guide',
              },
              {
                label: 'Simulation Setup',
                to: '/docs/simulation',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'Tutorials',
                href: 'https://docusaurus.io/docs/category/getting-started',
              },
              {
                label: 'Support',
                href: 'https://github.com/Mariya1255/humanoid-robotics-book/issues',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of use',
                href: '#', // Placeholder
              },
              {
                label: 'Privacy Policy',
                href: '#', // Placeholder
              },
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
    }),
};

export default config;
