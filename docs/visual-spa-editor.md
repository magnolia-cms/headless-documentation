---
title: "Visual SPA Editor"

---


## What it does

The Visual SPA Editor connects the modern _component-architecture_ of SPA, with the _component_ concept of CMS page editors. You can build a SPA, and give it placeholder "areas", that can be managed from a CMS.

*   Frontend Developer: Builds SPA. Adapts SPA to make it content manageable.
*   Frontend or Magnolia Developer: Creates Magnolia bindings and dialogs. (Putting _handles and knobs_ on the components for authors.)
*   Content authors and marketers: Choose which components to put in the areas, in what order, and edit their contents.

![Putting handles and knobs on components](/assets/illustrations/SPA-block-1024x512.png)

## Overview


*   Authors use Page Editor
    *   Can build experiences based on predefined "page" and "component" templates.
    *   Result is a hierarchy of pages and components stored in Magnolia.
*   Implementation
    *   Small javascript library for each JS framework (React, Angular, soon Vue)
    *   JS library provides "Area" component. This is a placeholder for authors.
    *   A Magnolia REST endpoint serves both **layout** and **content** for each page.
    *   JS library uses this information to dynamically build app. It instantiates frontend components and passes the content in as props.
    *   In the authoring experience, another Magnolia REST endpoint serves information about all the templates on the page. For example it provides which components are available in an area.
*   Capabilities
    *   Use any frontend component (React, Angular, Vue) without modification. They get all CMS content passed in as props.
    *   Supports nested components.
    *   Supports multiple pages, and 'nested pages' (ie a page tree).
    *   Authoring feature even works if the DOM changes dynamically while authoring.
*   Two key usage scenarios
    *   Existing SPA: Add content management to an Existing SPA
    *   New DX/CMS project: team wants to use React templating.

## Differences to Basic Headless

![Comparing Basic Headless with SPA](/assets/illustrations/basic-headless-vs-next-level-1280.jpg)

In __Basic Headless__, an author fills out a form, in a separate tool.
Content is stored in a list in a database, and it is retrieved as a _list_ via a REST API request. The typical frontend loops through the list and renders each item in a _region_ of the view.
So, authors can manage _content items_. YAY.  But they cannot manage _experiences_.

With the __SPA editor__, an author chooses and places components on a visual page. For each component they fill out a form, _in context_.
Content is stored in a _tree_ in a database, we could call it a 'leaf', and its retrieved as a tree via a REST API

The tree is important - the location of the leaf in the tree represents where the component was placed in the page. Each leaf also stores which type of component it is. In the frontend the code follows every branch of the content tree, and for each leaf it displays the type of component specified in the leaf.

The result: It's a tool an author can use to manage content & to build out the _full_ experience. 




## How it works in Production

The web experience is a SPA, served from any server. 

It hits a Magnolia REST Delivery endpoint to get a JSON page payload which includes:



1. Content: The contents of all of the components on one page. (Typically[ a delivery endpoint](https://demopublic.magnolia-cms.com/.rest/delivery/pagesWithComponents/v1/about/))
2. Layout: The "layout" of components in the page (Actually, just the heirarchy of the content nodes.)

Mapping Information: which SPA component to instantiate for each Magnolia component, is in a file in the SPA.

The SPA instantiates 1) _the specified components_, with 2) _that content_, in 3) _that heirarchy_.

When the user navigates to a new Route (aka Page), the SPA hits the endpoint again and refreshes its content.


## How it works in Editing Experience

An Author opens a page in the Magnolia Pages App. The template has `renderType: spa`.

Page Editor loads the SPA which is bundled in a Magnolia module.

It hits a Magnolia REST Delivery endpoint as above.

It hits the `templateDefinition` Magnolia REST endpoint for information about all the templates on the page. For example it provides which components are available in an area.

The JS library instantiates the components as above, but additionally adds hints/annotations for the Page Editor in the form of the HTML comments, for every area and component on the page. Then it calls the 'mgnlRefresh' method to request the Edit Bars.

The Page Editor injects the green Edit Bars into the DOM, based on the annotations.

Author uses the Edit Bars. 

Edits are persisted to Magnolia. Page Editor reloads the page in the IFRAME.


## How to Make your SPA Editable

:::tip TIP
Consider going through the 'Getting Started' [SPA tutorial](getting-started/hello-spa) to really get hands-on.
:::

Start by browsing the [Minimal Headless Spa Demos](https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse) repository. There you can see a well organized, complete working example.


### Step by step



*   Page
    *   Create a SPA component to represent your page. use a 'prop', like 'title'. ([Example](https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse/spa/react-minimal/src/pages/Basic.js))
    *   Load the content from the delivery endpoint for the the current route. ([Example](https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse/spa/react-minimal/src/helpers/PageLoader.js))
    *   Load the template information from the templateDefinition endpoint, based on the templateID of the route page. ([Example](https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse/spa/react-minimal/src/helpers/PageLoader.js))
    *   Create a component mapping configuration. ([Example](https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse/spa/react-minimal/src/magnolia.config.js))
    *   Use the 'Page' component from the Magnolia JS library to instantiate a frontend component.  based on the templateId of the magnolia page, and the mapping. ([Example](https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse/spa/react-minimal/src/helpers/PageLoader.js))
    *   Deploy your SPA to your Magnolia module. (This version of SPA is only used by authors in the Pages app.) (to: /magnolia/light-modules/react-minimal-lm/webresources)
    *   Create a Page Template definition and point it to the SPA index.html. Add a dialog with a 'title' property. ([Example](https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse/magnolia/light-modules/react-minimal-lm/templates/pages/basic.yaml))
    *   Run the page app. Edit the title.
*   Area
    *   Add areas to page template definition to enable author managed components
    *   Add Area components for the same areas to the frontend page component. 
*   Components
    *   Create frontend components as usual. ([Example](https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse/magnolia/light-modules/spa-lm/dialogs/components/headline.yaml))
    *   Create Magnolia components for each frontend component. (Just a definition and dialog, no template script needed!) Dialog properties will be available in your frontend compont as 'props'. ([Example]( https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse/magnolia/light-modules/spa-lm/templates/components/headline.yaml)) ([Example 2)](https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demos/browse/magnolia/light-modules/spa-lm/dialogs/components/headline.yaml)
    *   Add the component to your mapping configuration file.
    *   Repeat and prosper!

## FAQ

#### Is Magnolia personalization feature supported?
No, not yet 100%. However you can still achieve some personalization scenarios. A full-fledged feature is on roadmap.

#### Can the Page Editor load an app hosted on another server, like 'Next'?
No, not yet due to CSP issues. Supporting this set-up is on our roadmap.

#### How to provide good SEO for my SPA?
Because your public SPA is running completely outside of Magnolia, you should use whatever frontend delivery system makes the most sense for your team and project. We recommend some kind of SSR system such as 'Next', 'Nuxt', 'Render', 'Gatsby' or your own. This is the best practice to have a SPA with good SEO crawlabilty.
(Typically, only the SPA used in the Pages App by authors is hosted in Magnolia, and you don't want SEO in your Pages App.)

#### Is this a 'RAD' App Builder?
It can be used to allow non-developers to assemble web apps & mobile apps in an intuitive way. 
However, it does not provide anything special to manage app state and events, that must be provided by your frontend project.



## Resources 

* [SPA Feature page on the Full Docs](https://documentation.magnolia-cms.com/display/DOCS62/Single-page+applications)

* [JS Library APIs on the Full Docs](https://documentation.magnolia-cms.com/display/DOCS62/SPA+development+and+Magnolia)

* [React-Editor README](https://git.magnolia-cms.com/projects/MODULES/repos/frontend-helpers/browse/packages/react-editor)

* [Angular-Editor README](https://git.magnolia-cms.com/projects/MODULES/repos/frontend-helpers/browse/packages/angular-editor/projects/angular-editor/README.md)