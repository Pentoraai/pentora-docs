module.exports = {
  title: 'Pentora Documentation',
  tagline: 'Scan. Detect. Secure.',
  url: 'https://docs.pentora.ai',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Pentoraai',
  projectName: 'pentora-docs',
  themeConfig: {
navbar: {
  title: '',
  logo: {
    alt: 'Pentora Logo',
    src: 'img/logo.png',
    href: '/',
  },
  items: [
    {
      href: 'https://github.com/Pentoraai/pentora-core',
      label: 'GitHub',
      position: 'right',
    },
  ],
},
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/dfxEQad6xc',
            },
            {
              label: 'Reddit: r/Pentora',
              href: 'https://www.reddit.com/r/Pentora',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pentora.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};
