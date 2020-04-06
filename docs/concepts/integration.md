---
title: "Integration"

---

## Overview

Like customizability, integration has been at the core of Magnolia since the very beginning. 

It allows you to take a best-of-breed approach and create the CMS/DXP platform that is best for your company. You can choose the tools that really work for you, integrate the systems you already have, and create a holistic UI that empowers your whole team, from developers to content authors and marketeers.


## Plays well with others

Magnolia fits into your network diagram, however simple or complex that might be. You can run your entire digital experience on Magnolia, or integrate it with a few of your existing content sources and marketing stack, or bring it in to a large sophisticated infrastructure as a robust content service. 


## Headless CMS & Content Hub 

As a headless CMS, Magnolia is useful as a central place to put all of your content.  It makes it all available to all of your systems via REST APIs. Now you can manage and leverage your content way better. Break those content silos!
See: [Full Docs: REST Delivery API](https://documentation.magnolia-cms.com/display/DOCS/Delivery+endpoint+API+v2)



## DX Hub

But Magnolia is more then a content hub. In practice, especially in large organizations, its often not feasible to centralize all content in one system. With ‘multisource’, Magnolia can quickly and painlessly integrate your other content sources into one tool to make it easy for content authors to work with it together. Typical cases are bringing in content from DAM systems, e-commerce systems, or even other legacy or departmental CMS.

You can use Magnolia as a DX hub, a place where marketeers and content practitioners create digital experiences that take advantage of all of your systems. Typical tasks include linking items together, like browsing and choosing 3 particular products from your ecommerce system to feature in a story. Or choosing a lead-generation form from your marketing automation tool to put on a page of your website, or screen of your mobile app.


## Connector Packs

Connectors are the easiest way to integrate specific other systems. Magnolia has connectors to the top DX systems. We organize our connectors into connector packs. Each pack supplies a specific type of integration - Analytics, DAM, Ecommerce, Marketing Automation, Optimization.

In addition to the connectors, the packs each provide an API framework which handles the common tasks and provide common UI elements. This means that even if you want to integrate a system for which no connector exists yet, the framework accelerates and simplifies the development of your own custom connector.

See: [Full Docs: Connector Packs](https://documentation.magnolia-cms.com/display/DOCS/Connector+Packs)


## Magnolia Marketplace

In addition to the connector packs, browse the Marketplace for other connectors or other helpful modules for your project.

See: [Magnolia Marketplace](https://marketplace.magnolia-cms.com)


## IUX - Integrated User Experience

IUX is a set of natural places in the Magnolia UI where you can surface elements and actions from integrated applications and services. 


### IUX Slots

Magnolia apps provide an IUX slot where you have full control over what information is presented from an integration. The slot can contain content, dashboard-style graphics, widgets and can include controls to interact with the linked system. 

Slots are connected to the UI and can react and update based on which items are selected in the Magnolia app.

See: [IUX Slots](https://documentation.magnolia-cms.com/display/DOCS62/Release+notes+for+Magnolia+CMS+6.2#ReleasenotesforMagnoliaCMS6.2-IUX–getmorefromyourintegrations)

### IUX Standard Elements

The standard user interface elements in Magnolia can also be seamlessly connected to external systems. Users get standard and intuitive UI patterns, whether they interact with Magnolia content or with integrated systems.

Find bar

A single prominent search tool returns content from Magnolia or any other system. Results can link within Magnolia or to external websites. For example products from a PIM system can be returned.

Actions

Action buttons in any app or dialog can be linked to operations in linked systems, for example to trigger an email campaign or an AI sentiment analysis.

Columns

Columns can be added to content lists which display text or even graphics, for example to show stock status in an inventory system, or a sparkline graphic from an analytics system.

Select fields

In forms, select (dropdown) fields can display a set of options stored in a linked system, allowing users to connect and link specific items between Magnolia and an integration, for example enabling a user to choose a webinar signup form managed in a Marketing Automation tool and place it directly on a Magnolia managed web page.

Link fields

Similarly, link fields on a form open a rich ‘chooser dialog’ for browsing large sets of linked external content with search and filtering tools. A preview of linked items is shown in the form. It even supports trees of content, for example browsing the deeply nested product taxonomy of a grocery store.


### Integrated Content App

While the above items provide targeted integrations in the UI, it’s also easy to provide a complete app backed with content or data from an integrated system, for example to enable browsing of the assets in a linked DAM application.


## REST Clients

REST clients are the fundamental technology Magnolia uses to make REST requests to other systems. There is a central registry of REST client definitions, which can then be used throughout your project. They are straightforward to create, and pack a lot of features like caching, timeouts, parameterization and authentication. They can be defined with an existing OpenAPI file, or in a lighter Magnolia-specific YAML format. REST clients power the multisource and IUX features.

Use REST clients to connect to integration platforms like Mulesoft, Zapier or Boomi, to trigger your other systems for example to refresh a CDN, or to create webhooks

An example REST client definition

```yaml
baseUrl: http://data.nba.net
restCalls:
  draftPicks:
    method: get
    entityClass: com.fasterxml.jackson.databind.JsonNode
    path: /prod/draft/2018/draft_pick.json
```

Once a REST client is defined, it can then be used in any UI element via the jsonDatasource class, most commonly in an app definition or a select or link field. JSONPath is used to specify which properties within the json response to expose in the datasource. By defining a JSONPath expression for each property you want, you effectively create a transformation of the response structure to what you need in Magnolia.

An example usage of a REST client in a jsonDatasource

```yaml
...
browser:
    class: info.magnolia.ui.contentapp.configuration.BrowserDescriptor
    datasource:
      $type: jsonDatasource
      restClient: nba
      restCall: draftPicks
      jsonPathExpressions:
        itemId: '$.id'
        items: '$'
        describeBy: '$.field_draft_prospect'
        properties:
          video: '$.related_video.[0].url'
...

```

See: [Full Docs: REST Clients](https://documentation.magnolia-cms.com/display/DOCS62/REST+Client+module)


## Resources

* [Full Docs: Integration](https://documentation.magnolia-cms.com/display/DOCS/Integration)


