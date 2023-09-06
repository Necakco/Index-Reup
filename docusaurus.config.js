// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Index-Reup",
  tagline: "No Anime No Life (Random skid by Necakco)",
  url: "https://mentorship-guide.onrender.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/logo.png",
  organizationName: "Necakco",
  projectName: "Necakco",
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/anime",
          editUrl:
          "https://github.com/mentorship-sponsorship/mentorship-guide-docs/blob/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
          "https://github.com/mentorship-sponsorship/mentorship-guide-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'toumasidebar',
        path: 'touma',
        routeBasePath: 'touma',
        sidebarPath: require.resolve('./toumasidebar.js'),
        // ... other options
      },
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    navbar: {
      title: "Index-Reup",
      logo: {
        alt: "logo",
        src: "logo.png",
      },
      items: [
        {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'App',
          },
          {
            label: 'LightNovel',
            position: 'left',
            items: [
              {to: '/touma', label: 'Cấm Thư Ma Thuật Index'},

            ]
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Read",
            items: [
              {
                label: "Why mentorship?",
                to: "/docs/what-why-mentorship",
              },
              {
                label: "For Mentors",
                to: "/docs/mentors-overview",
              },
              {
                label: "For Mentees",
                to: "/docs/mentees-overview",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "About",
                to: "/docs/about",
              },
              {
                label: "GitHub",
                href: "https://github.com/mentorship-sponsorship/mentorship-guide-docs",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/holaguedis",
              },
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "What about sponsorship?",
                to: "/docs/about#sponsorship-is-important",
              },
              {
                label: "Share what you can, when you can, how you can",
                to: "/docs/contributing",
              },
            ],
          },
        ],
        copyright: `Mentorship Guide - Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        disableSwitch: false,
      },
    }),
};

module.exports = config;
