module.exports = {
  title: "Magnolia Headless Documentation",
  tagline: "Magnolia Headless documentation has joined the central Magnolia docs site.",
  url: "https://hd.magnolia-cms.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "magnolia-cms", // Usually your GitHub org/user name.
  projectName: "magnolia-headless-docs", // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: true,

    navbar: {
      title: "Headless Docs",
      logo: {
        alt: "Magnolia Logo",
        src: "img/magnolia-medium.png",
      },

      items: [
        { to: "docs/introduction", label: "Docs", position: "left" },
        {
          href: "https://magnolia-cms.com",
          label: "Magnolia",
          position: "right",
        },
        {
          href: "https://ha.magnolia-cms.com",
          label: "Headless Accelerator",
          position: "right",
        },
        {
          href: "https://documentation.magnolia-cms.com/DOCS/",
          label: "Full Docs",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting-started/start",
            },
            {
              label: "Help!",
              href: "https://groups.google.com/a/magnolia-cms.com/forum/#!forum/user-list",
            },
            {
              label: "Feedback / Bugs",
              href: "mailto:headless-docs@magnolia-cms.com",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Magnolia Homepage",
              href: "https://magnolia-cms.com",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/magnolia",
            },
            {
              label: "User Group List",
              href:
                "https://groups.google.com/a/magnolia-cms.com/forum/#!forum/user-list",
            },
            {
              label: "Community Wiki",
              href: "https://wiki.magnolia-cms.com",
            },
            {
              label: "Newsletter",
              href: "https://www.magnolia-cms.com/email.html",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              href: "https://blog.magnolia-cms.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/magnolia-cms",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/magnolia_cms",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/user/MagnoliaCMSystem/videos",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Magnolia International Ltd. `,
    },

    googleAnalytics: {
      trackingID: "UA-162140716-1",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },

    algolia: {
      apiKey: "4c9ca31a48299ccca5ac1ae42eea75d0",
      indexName: "magnolia-cms_hd",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/magnolia-cms/headless-documentation/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
