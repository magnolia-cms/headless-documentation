
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
          'cloud/onboarding-to-magnolia-cloud',
          'cloud/hello-cloud',
          'cloud/cockpit',
          'cloud/developing-for-magnolia-in-the-cloud',
          'cloud/installing-updates-in-cockpit',
          'cloud/managing-environments-in-cockpit',
          'cloud/supported-cloud-modules',
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
