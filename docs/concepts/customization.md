---
title: "Customization"

---

## Overview

Customizability is at the core of Magnolia. We are flexible by nature!

This means that every key project ‘primitive’ ([aka ‘definition’](light-development#definitions))  can be customized. All common customizations are done with Light Development, mostly with YAML configuration files. For everything else, limitless customization is available via Java APIs.


## No Limits

With Magnolia, there's no limits to what you can do with your CMS. Magnolia is designed to be customized and to be integrated with other systems. This allows you to take a best-of-breed approach and choose the tools that work for you. Integrate the systems you already have. Create the UI that makes the most sense for your authors. 


## Modules

Magnolia is completely built from modules. Magnolia is built from the same type of modules used for your projects. The first level of customization is simply which modules you choose to include in your project. For example, modules from the [Magnolia Marketplace](https://marketplace.magnolia-cms.com) or [Connector](https://documentation.magnolia-cms.com/display/DOCS/Connector+Packs) modules can be added to your project to give it additional features.

It’s standard to create custom definitions of these types for headless projects.

*   Content types
*   Content apps
*   Stories app 
*   REST endpoints
*   REST clients
*   Templates
*   Dialogs
*   Theme
*   CLI prototypes


## Content App UI customization

Content apps are usually created based on a content type. You have many additional options to customize the UI of the app, all via configuration.

In the browser view:

*   Which columns are displayed, the order of columns, the display of the column entries, their widths, whether they are sortable and filterable.
*   If folders are available.
*   Which actions are available, which publishing workflow is available.

In the detail editor view:

*   Which control types are used for a certain property type - ie using radio buttons vs a select control.
*   Specifying the number of rows in a text entry field.
*   Moving fields into tabs
*   Grouping fields, such as with sections and line divisions

Example of tuning an app created with a content type.

```yaml
!content-type-m5:tours
name: tours
label: Tours

# Optionally override any of the app configuration supplied by the content type.

subApps:
  detail:
    editor:
      form:
        tabs:
          default:
            fields:

            # Make the summary textarea bigger
              - name: summary
                rows: 10

```


## Java customization

Throughout the ‘definitions’ and all of the other Magnolia configuration you can always specify the Java type or class used to implement that definition or feature. Normally you just use the Magnolia-provided default. But _every one of these_ is a customization point where your team can plug-in your own custom implementation, if the need arises.

```yaml
...
renderType: spa
# You could reference your own custom Java class here.
class: info.magnolia.rendering.spa.renderer.SpaRenderableDefinition
...
```

Some examples

*   Custom Workflows
*   Custom Actions
*   Custom UI elements
*   Server filters
*   Fully custom app UIs


## Decorating existing definitions

It’s not just about customizing your own project modules. With the ‘decoration’ feature, your modules can override the customization of Magnolia core modules, for example the shipped Pages app itself. You can use decoration for a ‘light development’ tweak, like changing the width of a column in an item browser, or for a Java tweak, like replacing the Publish action with one that also triggers a webhook to your CI or CDN system to update its content. 


## Resources
* [Lignt Development](light-development)
* [Full Docs: Connector Packs](https://documentation.magnolia-cms.com/display/DOCS/Connector+Packs)




