// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crimson Shadows',
  tagline: 'A tale of passion, mystery, and forbidden desires',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://iamshraj.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Crimson-Shadows/',

  // GitHub pages deployment config.
  organizationName: 'IamShRaj', // Usually your GitHub org/user name.
  projectName: 'Crimson-Shadows', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

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
          routeBasePath: '/', // This makes docs the root of the site
          // Remove edit links for story content
        },
        blog: false, // Disable blog
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
      image: 'img/crimson-shadows-social.png',
      navbar: {
        title: 'Crimson Shadows',
        logo: {
          alt: 'Crimson Shadows Logo',
          src: 'img/favicon-32.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'storySidebar',
            position: 'left',
            label: 'Chapters',
          },
          {to: '/characters', label: 'Characters', position: 'left'},
          {to: '/timeline', label: 'Timeline', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Story',
            items: [
              {
                label: 'Start Reading',
                to: '/prologue',
              },
              {
                label: 'All Chapters',
                to: '/',
              },
            ],
          },
          {
            title: 'Explore',
            items: [
              {
                label: 'Characters',
                to: '/characters',
              },
              {
                label: 'Timeline',
                to: '/timeline',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Crimson Shadows. A work of fiction.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
