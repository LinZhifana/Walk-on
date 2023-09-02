// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NeutronStar xx',
  tagline: 'To Know & To Go',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://linzhifana.github.io/',
  baseUrl: '/Walk-on/',

  organizationName: 'LinZhifana', // Usually your GitHub org/user name.
  projectName: 'Walk-on', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/LinZhifana/Walk-on',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/LinZhifana/Walk-on',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'NeutronStarrr',
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Notes',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/LinZhifana/Walk-on',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: { light: 'forest', dark: 'dark' },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'J18AIY1U4O',
        // Public API key: it is safe to commit it
        apiKey: '1d28c52e60809bab36c4976badfc32fb',
        indexName: 'linzhifanaio',
      }
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
}

module.exports = config
