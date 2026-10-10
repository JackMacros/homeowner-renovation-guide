import {themes as prismThemes} from 'prism-react-renderer';

const siteUrl = process.env.SITE_URL || 'https://example.com';
const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '毛坯房装修业主指南',
  tagline: '从开工放线到验收交付，按阶段把控材料、工艺与风险',
  favicon: 'img/favicon.svg',
  url: siteUrl,
  baseUrl,
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'guide',
          sidebarPath: './sidebars.js',
          showLastUpdateTime: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.6,
        },
      },
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        docsRouteBasePath: '/guide',
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  themeConfig: {
    image: 'img/site-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '毛坯房装修指南',
      logo: {
        alt: '装修业主指南',
        src: 'img/home-mark.svg',
        href: '/guide/introduction',
      },
      items: [
        {
          to: '/guide/introduction',
          label: '施工流程',
          position: 'left',
          activeBaseRegex: '^/guide/(introduction|process-overview|stage-template|stages/)',
        },
        {
          to: '/guide/checklists',
          label: '现场清单',
          position: 'left',
          activeBaseRegex: '^/guide/checklists(?:/|$)',
        },
        {
          to: '/guide/topics',
          label: '管理专题',
          position: 'left',
          activeBaseRegex: '^/guide/(topics|references)(?:/|$)',
        },
        {
          to: '/guide/templates',
          label: '实用模板',
          position: 'left',
          activeBaseRegex: '^/guide/templates(?:/|$)',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright:
        'Copyright©2021-2026 · <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">苏ICP备2021001257号-1</a>',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
  },
};

export default config;
