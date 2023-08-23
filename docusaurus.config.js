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
  url: 'https://github.com',
  baseUrl: '/blog/',

  organizationName: 'LinZhifana', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
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
            'https://github.com/LinZhifana/blog',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/LinZhifana/blog',
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
      announcementBar: {
        id: 'support_us',
        content: '🌟 如果这个网站能帮助到你, 欢迎给一个 star 支持作者 👉  <a target="_blank" rel="noopener noreferrer" href="https://github.com/linzhifana/blog">GitHub</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
        title: 'NeutronStar xx',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Notes',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/LinZhifana/blog',
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
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
}

module.exports = config
