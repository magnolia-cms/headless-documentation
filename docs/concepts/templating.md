---
title: "Author Templating"

---

## Overview

> Note: This topic is only relevant if you are using the Visual SPA Editor to allow content authors to build out experiences in a WYSIWYG fashion.

Of course you are already familiar with the templating of your frontend framework of choice, whether React, Vue or Angular. You encapsulate your desired markup in a component. Then that component acts as a template, you can use it wherever you want in your app and just pass it the props/content every time you instantiate it.

In the Magnolia context, its the same meaning - but with a focus on the content author. In the Magnolia UI, the author chooses a component template from a dropdown to add to a page, then they fill in a form with the content they want to be displayed by the template.

The cool thing with the Visual SPA Editor is that you can connect these two kinds of templating together. When the content author selects a component template - they are selecting from a list of **your provisioned frontend components**. The content they enter into the form is then passed as props into your components.

So now, instead of hardcoding all of your components into your app, you hardcode just a few and replace the rest with **areas** where content authors can dynamically add, edit and manage which components are included and what content they render.

_**You are directly connecting Frontend JS components with author-managed CMS components!**_

To do this you need to learn a few simple _author-centric_ templating concepts


## Magnolia Author Templating

It’s all about specifying what is available to the author in different places and what content they can input. In this way the content author has freedom, but is also not overwhelmed with choices and can be confident they don’t put a component in the wrong place.  


## Templates

In your project you provision template definitions for page templates and component templates with YAML files. These definitions do a few things:

*   Make Magnolia aware of the templates.
*   Optionally reference **dialog** definitions.
*   Optionally declare **areas** in the template, and which components are _available_ be added to them.
*   Optionally reference a template script.

```yaml
# Example template definition

title: 'React: Basic'
templateScript: /react-minimal-lm/webresources/build/index.html
renderType: spa
class: info.magnolia.rendering.spa.renderer.SpaRenderableDefinition

areas:
  main:
    title: Main Area
    availableComponents:
      Header:
        id: spa-lm:components/header
      Image:
        id: spa-lm:components/image
      Paragraph:
        id: spa-lm:components/paragraph
      Expander:
        id: spa-lm:components/expander
      List:
        id: spa-lm:components/list
 ```

## Dialogs

Dialog definitions declare the form that the author sees when they edit the template. This acts as an implicit content model for the template.

```yaml
# Example dialog definition

label: Header
form:
  tabs:
    - name: tabMain
      fields:
        - name: text
          label: Header Text
          fieldType: text 
```
<!--TODO: Update App to M6 format!-->

## Areas

Areas are basically _slots_ where authors are able to add component instances. Each Area configures which components can be placed in them via a `componentAvailabilty` node. In a way, this defines a content model relationship between the different component types.

Both pages and components can define areas. They can define multiple areas. The fact that a component can define areas means that you can have  ‘nested components’. Or looked at another way, it means you can have a hierarchy of components on a page. A typical example is a responsive _columns_ component. It might have two areas: a left one and a right one.


## Page hierarchy

In the Magnolia UI authors can add pages as children of other pages. It’s as if the page was acting as a folder. This is a very comfortable and intuitive way for authors to think about the pages of a website or other digital experience.

As a developer you can use this hierarchy however makes sense in your frontend, for example to dynamically generate navigation UI elements like nav bars and bread crumbs.


## Link CMS & SPA components

You configure which of your SPA components gets generated when an author chooses a Magnolia component in the editor via a simple mapping file in your SPA project.

Your SPA will then hit a Magnolia REST endpoint to get the contents of a page. The JSON response contains the Magnoila template ID’s (for example `myModule:/components/columns`). The SPA then determines the SPA component to instantiate based on that ID and the mapping file.

```js
import Basic from './pages/Basic';
import Header from './components/Header';
import Image from './components/Image';
import Paragraph from './components/Paragraph';

const config = {
    'react-minimal-lm:pages/basic': Basic,

    'spa-lm:components/header': Header,
    'spa-lm:components/image': Image,
    'spa-lm:components/paragraph': Paragraph,
};
```

## CLI

The CLI has generators ‘create-page’ and ‘create-component’ which makes it easy to get started with Magnolia templating.

[CLI on NPM](https://www.npmjs.com/package/@magnolia/cli)
```
npm install @magnolia/cli -g
```

## Reference

#### Dialog Definitions
* [Dialog Definition](https://documentation.magnolia-cms.com/display/DOCS/Dialog+definition)
* [Form Definition](https://documentation.magnolia-cms.com/display/DOCS/Form+definition)
