
module.exports = {
  docs: [

    {
      type: 'doc',
      id:'introduction',
    },
      
      {
        type: 'category',
        label: 'Getting Started',
        items: [
          'getting-started/start',
          'getting-started/installation',
          'getting-started/hello-headless',
          'getting-started/hello-spa',
        ],
      },
      {
        type: 'category',
        label: 'Magnolia Cloud',
        items: [
          {
            type: 'category',
            label: 'Onboarding with Cloud',
            items: [
              'cloud/onboarding-to-magnolia-cloud',
              'cloud/cloud-domains-and-certificates',
              'cloud/cloud-user-management']
          },
          'cloud/hello-cloud',
          {
            type: 'category',
            label: 'The Cockpit',
            items: [
              'cloud/cockpit',
              'cloud/cockpit-concepts', 
              'cloud/understanding-activity-logs',
              'cloud/understanding-cockpit-notifications']
          },
          {
            type: 'category',
            label: 'Developing for Magnolia Cloud',
            items: [
              'cloud/developing-for-magnolia-in-the-cloud',
              'cloud/creating-custom-cloud-bundles',
              'cloud/setting-up-local-git-repo',
              'cloud/setting-up-local-bundle',
              'cloud/developing-and-testing',
              'cloud/committing-remote-git-repository'
            ]
          },
          {
            type: 'category',
            label: 'Installing updates from the Cockpit',
            items: [
              'cloud/installing-updates-in-cockpit',
              'cloud/installing-a-snapshot',
              'cloud/defining-a-release',
              'cloud/installing-a-UAT-release',
              'cloud/installing-a-live-release',
              'cloud/copying-content-for-testing',
              'cloud/upgrading-in-cloud'
            ]
          },
          {
            type: 'category',
            label: 'Managing Environments in the Cockpit',
            items: [
              'cloud/monitoring-and-logging',
              'cloud/restarting-instances',
              'cloud/viewing-cloud-database-info',
              'cloud/setting-up-new-environment',
              'cloud/tearing-down-an-environment',
              'cloud/configuring-redirects',
              'cloud/protecting-environments',
              'cloud/backing-up-and-restoring',
              'cloud/hiding-custom-bundle-snapshots'
            ]
          },
          {
            type: 'category',
            label: 'Cloud modules',
            items: [
              'cloud/supported-cloud-modules',
              'cloud/multisite-in-cloud'
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Concepts',
        items: [
          
          'concepts/light-development',
          'concepts/yaml-hyper-config',
          'concepts/content-modelling',
          'concepts/templating',
          'concepts/customization',
          'concepts/integration',
        ],
      },
      'content-types',
      {             
        type: 'category',
        label: 'API',
        items: [
        "api/delivery",
        {
          type: 'link',
          label:'Delivery API Explorer',
          href: '/api-explorer'
        },
        "api/management",
        {
          type: 'link',
          label:'React-Editor Library',
          href: 'https://git.magnolia-cms.com/projects/MODULES/repos/frontend-helpers/browse/packages/react-editor'
        },
        {
          type: 'link',
          label:'Angular-Editor Library',
          href: 'https://git.magnolia-cms.com/projects/MODULES/repos/frontend-helpers/browse/packages/angular-editor/projects/angular-editor'
        }

        
      ]
    },
      
    ],

  
};
