---
title: "Hello Magnolia - SPA"
---

## Overview

In this Tutorial we will learn how to use the [Visual Single Page Application (SPA) Editor](https://www.magnolia-cms.com/product/single-page-apps-editing.html) to build stunning websites with ReactJS and Angular.

Basic Form-based headless CMS systems are good for constrained and predefined content types.
But to give marketers the ability to create articles, page structure or create their own custom landing pages or micro-sites, the Magnolia SPA Editor will accelerate your Marketer and free up your development capacity.

The Visual SPA Editor is bridging the gap between enterprise-level content management systems and SPA frontend development.

:::tip New to Headless CMS?
Checkout our [_Hello Magnolia Headless Tutorial_](hello-headless.md) to get started with some basics.
:::

#### What are we going to build?

We are going to build a Travel Website SPA promoting travel packages.

In the [previous](hello-headless.md) tutorial we have built a basic Headless CMS Website. In this tutorial we will create an application, but enable the Marketer to visually change the SPA.

- Marketers can add new navigation items
- They can create new pages and arrange the content freely with a pre-defined list of _Components_.

![Developers and Marketers creating cool stuff together](/assets/illustrations/SPA-handles-1024x512.png)

#### Prerequisites

- Magnolia CLI and required development tools. The instructions are [here](installation.md)

## Install the demo project

To jumpstart our Project we will install our demo Project. The easiest way to do this is to clone our git repository.

Create a directory named "hello-magnolia-headless" (if this directory is alredy existing you can reuse it):

```
cd hello-magnolia-headless
```

Clone the git repository:

```
git clone https://git.magnolia-cms.com/scm/demos/minimal-headless-spa-demos.git
```

#### Install Magnolia for the project

Switch to the cloned project:

```
cd minimal-headless-spa-demos
```

```
cd magnolia
```

```
mgnl jumpstart
```

Next, choose number 2 (magnolia-community-webapp)

```
? What Magnolia would you like to install?
  1) magnolia-empty-webapp
  2) magnolia-community-webapp
  3) magnolia-community-demo-webapp
  4) magnolia-dx-core-webapp
  5) magnolia-dx-core-demo-webapp
  Answer: 2
```

Once the installation is finished you will see an output similar to this on your console:

```
info Magnolia has been successfully setup for light development!
info You can now open a new terminal tab or window and start it up with the CLI command 'mgnl start'
info Magnolia will be ready after a few seconds at localhost:8080/magnoliaAuthor. Username and password is superuser
```

**Before starting**, get some handy configuration and sample images. From the `magnolia` directory, run:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
defaultValue="mac"
groupId="operating-systems"
values={[
{ label: 'Mac or Linux', value: 'mac', },
 { label: 'Windows', value: 'windows' },
]  
}>
<TabItem value="mac">

```
cp -rv ./_dev/content-to-bootstrap/* ./apache-tomcat/webapps/magnoliaAuthor/WEB-INF/bootstrap/common
```

</TabItem>
<TabItem value="windows">

```
xcopy ./_dev/content-to-bootstrap ./apache-tomcat/webapps/magnoliaAuthor/WEB-INF/bootstrap/common\ /E/H
```

</TabItem>
</Tabs>
(It copies all files inside `/magnolia/_dev/content-to-bootstrap` into
`/magnolia/apache-tomcat/webapps/magnoliaAuthor/WEB-INF/bootstrap/common`)

### Start Magnolia

Open a new terminal window, and from within your `minimal-headless-spa-demos/magnolia` directory execute following command to start your Magnolia Headless CMS:

```
mgnl start
```

- When the terminal shows `Server startup in [...] milliseconds`, magnolia is up and running
  - Open http://localhost:8080
  - Click 'Run the web update on the author instance'
  - Login with username:`superuser` and password:`superuser`

![welcome screen](/assets/01-installation-01-welcome.gif)

:::tip Help is here
Are you having any trouble with starting Magnolia?
[Just send us an email, and we'll get you setup!](mailto:headless-docs@magnolia-cms.com)
:::

### Install the SPA

We include a React, Angular & Vue example, just choose which one you want to use.

In your terminal, go to the actual frontend app directory (for React, Angular or Vue). Install the dependencies either with npm or yarn, and do your first build.
<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react', },
 { label: 'Angular', value: 'angular' },
 { label: 'Vue', value: 'vue' },
]  
}>
<TabItem value="react">

```
cd ../spa/react-minimal
```

```
npm install
```

```
npm run deploy:mgnl
```

</TabItem>
<TabItem value="angular">

```
cd ../spa/angular-minimal
```

```
npm install
```

```
ng build --prod
```

</TabItem>
<TabItem value="vue">

```
cd ../spa/vue-minimal
```

```
npm install
```

```
npm run deploy:mgnl
```

</TabItem>
</Tabs>

## See It In Action

Let's have a look at the running demo containing the starter content before we are going to inspect the Starter Code. We have started Magnolia and built and deployed the project in the chapter before.

#### Install demo content

We have prepared Demo Content to start with. To install the Demo Content follow these steps:

- Open the [Pages App](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:pages-app) in your browser.
- Click `Import` action (You might need to scroll down in the action bar.)
- For React: Select the file `./magnolia/_dev/content-to-import/website.react-minimal.yaml`
- For Angular: Select the file `./magnolia/_dev/content-to-import/website.angular-minimal.yaml`
- For Vue: Select the file `./magnolia/_dev/content-to-import/website.vue-minimal.yaml`

![Terminal Create Content Type](/assets/spacontentimport.gif)

### Page Builder

In the Pages App, open the SPA Project by double clicking on `react-minimal`, `angular-minimal` or `vue-minimal` depending on which project you have installed.

Now you can see the React, Angular or Vue app rendered in the Magnolia Page Builder. Go-ahead and try to change the title or add an image.

Note: _You are editing a SPA!_

![Page Builder](/assets/editspa.gif)

## Inspect the Code

Let's have a look how our demo project is structured:

<center>

![Component Mapping](/assets/03-spa-component-screenshot.png)

</center>

The blue and green components are fixed components, the developer controls them and their position. The magenta components inside the _Area Component_ are controlled and freely arranged (added, moved, deleted, etc.) by the marketer. The marketer uses the Page Editor to edit the SPA with components built and defined by the developer.

You can look at it as the developer putting 'handles' and 'knobs' on frontend components, so that marketers and content authors can move them around and tune them with custom content.

The green **Page Component** and **Area Component** are provided by Magnolia.

- The **Page** Component is responsible for rendering the 'top' frontend component, and preparing the Magnolia Page Editor.
- The **Area** Component is mapping the content created by the marketer , to the components defined by the developer, in order to render them. You can define multiple area components on the same Page Component, and a component can have one or more areas of its own.

![Putting handles and knobs on components](/assets/illustrations/SPA-block-1024x512.png)

### Light Modules

You can share code and components in multiple light modules.

#### Shared Light Module: spa-lm

The Magnolia templates and dialogs are the same no matter the front-end framework, so the demo project puts all the shared content in the "spa-lm" module.

```
cd magnolia/light-modules/spa-lm
```

##### Templates

Template definitions register the component with the Magnolia system. They also point to the Dialog definition.

```
cd templates/components
```

- headline.yaml
- image.yaml
- paragraph.yaml

##### Dialogs

Dialog definitions provision the form that Marketers will use to tune and enter content. They define the fields and the names of the properties to be persisted.

```
cd ../../dialogs/components
```

- headline.yaml
- image.yaml
- paragraph.yaml

#### Application Light Module

The actual SPA will be deployed to a front-end framework specific module.

We have defined two Page Templates, which the marketer will be able to include in our SPA in the page builder. In the page template you can define _Areas_ and _which_ components which will be available in that area.

<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react', },
 { label: 'Angular', value: 'angular' },
 { label: 'Vue', value: 'vue' },
]  
}>
<TabItem value="react">

```
cd ../../../react-minimal-lm
```

</TabItem>
<TabItem value="angular">

```
cd ../../../angular-minimal-lm
```

</TabItem>
<TabItem value="vue">

```
cd ../../../vue-minimal-lm
```

</TabItem>
</Tabs>

```
cd templates/pages
```

Have a look at

- basic.yaml
- contact.yaml

### Frontend App Structure

<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react' },
 { label: 'Angular', value: 'angular' },
 { label: 'Vue', value: 'vue' },
]  
}>
<TabItem value="react">

Open your project in

```
minimal-headless-spa-demos/spa/react-minimal/src
```

</TabItem>
<TabItem value="angular">

Open your project in

```
minimal-headless-spa-demos/spa/angular-minimal/src/app
```

</TabItem>
<TabItem value="vue">

Open your project in

```
minimal-headless-spa-demos/spa/vue-minimal/src
```

</TabItem>
</Tabs>

We have two categories of templates. _Page_ and _Components_.

In our source directory we have two sub directories. Page (containing Layout Components) and Components.

- Pages
  - Basic
  - Contact
- Components
  - Navigation
  - Headline
  - Image
  - Text

#### magnolia.config.js

The `componentMappings` in this file are what the Magnolia JS libraries use to determine which SPA component to instantiate, based on the `templateID` (for example: `spa-lm:components/paragraph`) which is received in the JSON from the Magnolia endpoint.
<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react', },
 { label: 'Angular', value: 'angular' },
 { label: 'Vue', value: 'vue' },
]  
}>
<TabItem value="react">

```js
import Basic from "./pages/Basic";
import Contact from "./pages/Contact";
import Headline from "./components/Headline";
import Image from "./components/Image";
import Paragraph from "./components/Paragraph";
import Expander from "./components/Expander";
import List from "./components/List";
import Item from "./components/Item";

const config = {
  componentMappings: {
    "react-minimal-lm:pages/basic": Basic,
    "react-minimal-lm:pages/contact": Contact,

    "spa-lm:components/headline": Headline,
    "spa-lm:components/image": Image,
    "spa-lm:components/paragraph": Paragraph,
    "spa-lm:components/expander": Expander,
    "spa-lm:components/list": List,
    "spa-lm:components/listItem": Item
  }
};

export default config;
```

</TabItem>
<TabItem value="angular">

```js
import { BasicComponent } from "./app/pages/basic/basic.component";
import { ContactComponent } from "./app/pages/contact/contact.component";
import { HeadlineComponent } from "./app/components/headline/headline.component";
import { ListItemComponent } from "./app/components/list-item/list-item.component";
import { ListComponent } from "./app/components/list/list.component";
import { ParagraphComponent } from "./app/components/paragraph/paragraph.component";
import { ImageComponent } from "./app/components/image/image.component";
import { ExpanderComponent } from "./app/components/expander/expander.component";

export const config = {
  componentMapping: {
    "angular-minimal-lm:pages/basic": BasicComponent,
    "angular-minimal-lm:pages/contact": ContactComponent,

    "spa-lm:components/headline": HeadlineComponent,
    "spa-lm:components/list": ListComponent,
    "spa-lm:components/listItem": ListItemComponent,
    "spa-lm:components/paragraph": ParagraphComponent,
    "spa-lm:components/image": ImageComponent,
    "spa-lm:components/expander": ExpanderComponent
  }
};
```

</TabItem>
<TabItem value="vue">

```js
import Basic from './pages/Basic';
import Contact from './pages/Contact';
import Image from './components/Image';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import List from './components/List';
import Item from './components/Item';
import Expander from './components/Expander';

const config = {
  componentMappings: {
    // Pages
    'vue-minimal-lm:pages/basic': Basic,
    'vue-minimal-lm:pages/contact': Contact,

    // Components
    'spa-lm:components/headline': Headline,
    'spa-lm:components/image': Image,
    'spa-lm:components/paragraph': Paragraph,
    'spa-lm:components/list': List,
    'spa-lm:components/listItem': Item,
    'spa-lm:components/expander': Expander,
  },
};

export default config;

```

</TabItem>
</Tabs>

## Frontend Components

### Root Component / Bootstrap Component

The Root Component (`App.js` in React, `root.component.ts` / `root.component.html` in Angular, `App.vue` in Vue) is the main entry point of our app. it defines the page structure and routing.

Note the imports of the Magnolia JS lib: `@magnolia/react-editor` or `@magnolia/angular-editor`.

<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react', },
 { label: 'Angular', value: 'angular' },
 { label: 'Vue', value: 'vue' },
]  
}>
<TabItem value="react">

```jsx
return (
    <BrowserRouter basename={base} forceRefresh={true}>
      
      <header>
        <Navigation />
      </header>  
      
      <div className="container">
        <Switch>
          <Route path="/" component={PageLoader} />       
        </Switch> 
      </div>

      <footer>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        <br />
        Copyright © 2020
      </footer>
    </BrowserRouter>
);
```

From `/helpers/PageLoader.js`
```js
import { EditablePage } from "@magnolia/react-editor";
```

</TabItem>
<TabItem value="angular">

```js
import { EditorContextService } from '@magnolia/angular-editor';
```

```html
<app-navigation ></app-navigation>

<editable-page [content]="content">
</editable-page>

<footer>
    Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
    <br />
    Copyright © 2020
</footer>
```

</TabItem>
<TabItem value="vue">

In Vue js we define the routes in `main.js`.

main.js:

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import PageLoader from './helpers/PageLoader.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/magnoliaAuthor/vue-minimal',
  routes: [{ path: '*', component: PageLoader }],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

```

The `App.vue` is loading the proper routes using the `PageLoader` Component defined in `main.js` using the standard `router-view`.

The main entry point `App.vue` is looking like this:

```js
<template>
  <div id="app">
    <header>
      <Navigation />
    </header>
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <footer>
      Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
      <br />Copyright © 2020
    </footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "app",
  components: {
    Navigation
  }
};
</script>

<style>
@import "./App.css";
</style>

```

</TabItem>
</Tabs>

### Page Component

The Page Component is defining the layout and the placement of the _Area_ components.
Let's have a look at the Basic Page. The `EditableArea` is defining which conntent should be displayed. In our case we have defined `main` and `extras` in our page template.

<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react', },
 { label: 'Angular', value: 'angular' },
 { label: 'Vue', value: 'vue' },
]  
}>
<TabItem value="react">

```jsx
import React from 'react';
import { EditableArea } from '@magnolia/react-editor';

const Basic = props => {
  const { main, extras, title } = props;

  return (
    <div className="Basic">
      <div className="hint">[Basic Page]</div>
      <h1>{title || props.metadata['@name']}</h1>

      <main>
        <div className="hint">[Main Area]</div>         
        {main && <EditableArea className="Area" content={main} />}  
      </main>

      <div className="Extras" >
        <div className="hint">[Sercondary Area]</div>
        {extras && <EditableArea className="Area" content={extras} />}  
      </div>    
    </div>
  ) 
};

export default Basic;
```

</TabItem>
<TabItem value="angular">

```html
<div class="Basic">
    <div class="hint">[Basic Page]</div>    
    <h1>{{title || metadata['@name']}}</h1>
    
    <main>
        <div class="hint">[Main Area]</div>         
        <div editable-area  [content]="main" [parentTemplateId]="metadata['mgnl:template']"></div>  
    </main>
    
    <div class="Extras" >
        <div class="hint">[Extras Area]</div>
        <div editable-area  [content]="extras" [parentTemplateId]="metadata['mgnl:template']"></div>
        <button routerLink="/contact">Contact</button>
    </div>

</div>
```

```ts
import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent {
  @Input() title: any;

  @Input() main: any;
  @Input() extras: any;
  // metadata
  @Input() metadata: any;
}
```

</TabItem>
<TabItem value="vue">

```jsx
<template>
  <div class="Basic">
    <div class="hint">[Basic Page]</div>
    <h1>{{ title || metadata['@name'] }}</h1>

    <main>
      <div class="hint">[Main Area]</div>
      <EditableArea v-if="main" v-bind:content="main" />
    </main>

    <div class="Extras">
      <div class="hint">[Extras Area]</div>
      <EditableArea v-if="extras" v-bind:content="extras" />
    </div>
  </div>
</template>

<script>
import { EditableArea } from "../vue-editor";

export default {
  name: "Basic",
  components: {
    EditableArea
  },
  props: ["title", "metadata", "main", "extras"]
};
</script>

```

</TabItem>
</Tabs>

### _Component_ Components 🤔

We learned earlier that the Magnolia SPA editor framework is helping to map the content structure created in Magnolia to frontend components.
Let's have a look at the _Headline_ Component as an example.

<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react', },
 { label: 'Angular', value: 'angular' },
 {label: 'Vue', value: 'vue'}
]  
}>
<TabItem value="react">

`src/components/Headline.js`


```jsx
import React from 'react';

const Headline = props => <h2 className="Headline">{props.text}</h2>;

export default Headline;

```

You can see how the fields defined in the dialog is passed through to the component, directly as **_`props`_**!

</TabItem>
<TabItem value="angular">


`src/app/components/headline.component.html`

```html
<h2>{{text}}</h2>
```


`src/app/components/headline.component.ts`

```ts
import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent {
  @Input() text: any;
}
```

You can see how the fields defined in the dialog is passed directly through to the component!

</TabItem>
<TabItem value="vue">

```jsx
<template>
  <h2 class="Headline">{{ text }}</h2>
</template>

<script>
export default {
  name: 'Headline',
  props: ['text'],
};
</script>

```

You can see how the fields defined in the dialog is passed directly through to the component!

</TabItem>

</Tabs>

## Build a Component

In the "Headless CMS" tutorial we have created a headless app to show tour packages. Using the Visual SPA Editor and the basic Form-Centric approach is not mutually exclusive. On the contrary, both approaches complement each other.

### What are we going to build?

We will build a _Tour List_ Component. Our Marketers will be able to choose and add the component anywhere they want.

- Create a new component using light modules.
- Create a dialog for Marketers to add a headline.

### Create Tour List Component

Let's create a new Component in Magnolia CMS first. Go to:

```
minimal-headless-spa-demos
```

```
cd magnolia/light-modules/spa-lm/templates/components
```

```
touch tourList.yaml
```

Edit the component file `tourList.yaml` and paste in:

```yaml
title: Tour List
dialog: spa-lm:components/tourList
```

#### Dialog

Next we will define a simple dialog for our Marketers.

```
cd ../../dialogs/components
```

```
touch tourList.yaml
```

Edit the dialog file `tourList.yaml` and paste in:

```yaml
label: Tour List
form:
  properties:
    headline:
      label: Tour List Headline
      $type: textField
      i18n: true
```

#### Make the Component available

Next we want to define where the component can be used. We will add our tourList Component to the available components of our _Basic Page_

<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react', },
 { label: 'Angular', value: 'angular' },
 { label: 'Vue', value: 'vue' },
]  
}>
<TabItem value="react">

```
cd ../../../react-minimal-lm/templates/pages
```

Edit the file `basic.yaml` and add following text to the availableComponents from the _main_ Area:

```yaml
TourList:
  id: spa-lm:components/tourList
```

The full file will look like this:

```yaml
title: "React: Basic"
templateScript: /react-minimal-lm/webresources/build/index.html
dialog: spa-lm:pages/basic

renderType: spa
class: info.magnolia.rendering.spa.renderer.SpaRenderableDefinition

# jsPaths:
#   - http://localhost:3000/static/js/bundle.js
#   - http://localhost:3000/static/js/0.chunk.js
#   - http://localhost:3000/static/js/1.chunk.js
#   - http://localhost:3000/static/js/main.chunk.js

areas:
  main:
    title: Main Area
    availableComponents:
      Headline:
        id: spa-lm:components/headline
      Image:
        id: spa-lm:components/image
      Paragraph:
        id: spa-lm:components/paragraph
      Expander:
        id: spa-lm:components/expander
      List:
        id: spa-lm:components/list
      TourList:
        id: spa-lm:components/tourList

  extras:
    title: Extras Area
    availableComponents:
      Headline:
        id: spa-lm:components/headline
      Paragraph:
        id: spa-lm:components/paragraph
      List:
        id: spa-lm:components/list
```

</TabItem>
<TabItem value="angular">

```
cd ../../../angular-minimal-lm/templates/pages
```

Edit the file `basic.yaml` and add following text to the availableComponents from the _main_ Area:

```yaml
TourList:
  id: spa-lm:components/tourList
```

The full file will look like this:

```yaml
title: "Angular: Basic"
templateScript: /angular-minimal-lm/webresources/build/index.html
dialog: spa-lm:pages/basic

renderType: spa
class: info.magnolia.rendering.spa.renderer.SpaRenderableDefinition

# jsPaths:
#   - /angular-minimal-lm/webresources/build/main.js
#   - /angular-minimal-lm/webresources/build/runtime.js
#   - /angular-minimal-lm/webresources/build/polyfills-es5.js
#   - /angular-minimal-lm/webresources/build/polyfills.js
#   - /angular-minimal-lm/webresources/build/vendor.js
#   - /angular-minimal-lm/webresources/build/styles.js
# cssPaths:
#   - /angular-minimal-lm/webresources/build/styles.css

areas:
  main:
    title: Main Area
    availableComponents:
      Headline:
        id: spa-lm:components/headline
      Image:
        id: spa-lm:components/image
      Paragraph:
        id: spa-lm:components/paragraph
      Expander:
        id: spa-lm:components/expander
      List:
        id: spa-lm:components/list
      TourList:
        id: spa-lm:components/tourList

  extras:
    title: Extras Area
    availableComponents:
      Headline:
        id: spa-lm:components/headline
      Paragraph:
        id: spa-lm:components/paragraph
      List:
        id: spa-lm:components/list
```

</TabItem>
<TabItem value="vue">

```
cd ../../../vue-minimal-lm/templates/pages
```

Edit the file `basic.yaml` and add following text to the availableComponents from the _main_ Area:

```yaml
TourList:
  id: spa-lm:components/tourList
```

The full file will look like this:

```yaml
title: 'Vue: Basic'
templateScript: /vue-minimal-lm/webresources/dist/index.html
dialog: spa-lm:pages/basic

renderType: spa
class: info.magnolia.rendering.spa.renderer.SpaRenderableDefinition

areas:

  main:
    title: Main Area
    availableComponents:
      Headline:
        id: spa-lm:components/headline
      Image:
        id: spa-lm:components/image
      Paragraph:
        id: spa-lm:components/paragraph
      Expander:
        id: spa-lm:components/expander
      List:
        id: spa-lm:components/list
      TourList:
        id: spa-lm:components/tourList
  extras:
    title: Extras Area
    availableComponents:
      Headline:
        id: spa-lm:components/headline
      Paragraph:
        id: spa-lm:components/paragraph
      List:
        id: spa-lm:components/list
```

</TabItem>
</Tabs>

Now we can already select the component in the Page Editor.

Open the [Pages App](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:pages-app) and add your component.

![New Component in Action](/assets/spa-first-component-page-editor.gif)

But of course before we can see anything displayed, we have to implement the frontend component.

### The Frontend Component

Our new component is now provisioned in Magnolia, and an instance of it is saved to the content repository.
First, we want the component to display the Header entered by the Marketer. Once this is running and we have seen how to add and edit the component in the SPA Editor, we will extend the component to read and display our Tour List data.

Now, let's build out our component in React, Angular or Vue.

<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react', },
 { label: 'Angular', value: 'angular' },
 { label: 'Vue', value: 'vue' },
]  
}>
<TabItem value="react">

Switch to our React SPA directory:

```
cd ../../../../../spa/react-minimal
```

Go to the components directory:

```
cd src/components
```

Create a new file for our component:

```
touch TourList.js
```

Edit the Component:

```jsx
import React from "react";

export default ({ headline }) => (
  <div className="tourlist">
    <h1>{headline}</h1>
  </div>
);
```

We will just print the headline surrounded by a div.

Next, open the Magnolia Config file to add our component to the mapping.

```
src/magnolia.config.js
```

Import the new component:

```js
import TourList from "./components/TourList";
```

Add to mapping:

```js
'spa-lm:components/tourList': TourList
```

The full file looks like this:

```js
import Basic from "./pages/Basic";
import Contact from "./pages/Contact";
import Headline from "./components/Headline";
import Image from "./components/Image";
import Paragraph from "./components/Paragraph";
import Expander from "./components/Expander";
import List from "./components/List";
import Item from "./components/Item";
import TourList from "./components/TourList";

const config = {
  componentMappings: {
    "react-minimal-lm:pages/basic": Basic,
    "react-minimal-lm:pages/contact": Contact,

    "spa-lm:components/headline": Headline,
    "spa-lm:components/image": Image,
    "spa-lm:components/paragraph": Paragraph,
    "spa-lm:components/expander": Expander,
    "spa-lm:components/list": List,
    "spa-lm:components/listItem": Item,
    "spa-lm:components/tourList": TourList
  }
};

export default config;
```

Build the SPA (in the `/spa/react-minimal` directory.)

```
npm run deploy:mgnl
```

</TabItem>
<TabItem value="angular">

Switch to our Angular SPA directory:

```
cd ../../../../../spa/angular-minimal
```

```
 ng generate component components/TourList
```

Output:

```
CREATE src/app/components/tour-list/tour-list.component.css (0 bytes)
CREATE src/app/components/tour-list/tour-list.component.html (24 bytes)
CREATE src/app/components/tour-list/tour-list.component.spec.ts (643 bytes)
CREATE src/app/components/tour-list/tour-list.component.ts (286 bytes)
```

Add the new created TourListComponent into your `app.module.ts` file.
Add it as an import and to the `declarations` and `entryComponents`.
(It might have been added by the `ng` command, but double-check `entryComponents`.)

```js
import { TourListComponent } from './components/tour-list/tour-list.component';
...
  declarations: [

    TourListComponent,
...
  ],
  entryComponents: [
...
    TourListComponent,
...
```

Open the Magnolia Config file to add our component to the mapping.

```
src/magnolia.config.js
```

Import the new component:

```js
import { TourListComponent } from "./app/components/tour-list/tour-list.component";
```

Add to mapping:

```js
'spa-lm:components/tourList': TourListComponent
```

The full file looks like this:

```js
import { BasicComponent } from "./app/pages/basic/basic.component";
import { ContactComponent } from "./app/pages/contact/contact.component";
import { HeadlineComponent } from "./app/components/headline/headline.component";
import { ListItemComponent } from "./app/components/list-item/list-item.component";
import { ListComponent } from "./app/components/list/list.component";
import { ParagraphComponent } from "./app/components/paragraph/paragraph.component";
import { ImageComponent } from "./app/components/image/image.component";
import { ExpanderComponent } from "./app/components/expander/expander.component";
import { TourListComponent } from "./app/components/tour-list/tour-list.component";

export const config = {
  componentMapping: {
    "angular-minimal-lm:pages/basic": BasicComponent,
    "angular-minimal-lm:pages/contact": ContactComponent,

    "spa-lm:components/headline": HeadlineComponent,
    "spa-lm:components/list": ListComponent,
    "spa-lm:components/listItem": ListItemComponent,
    "spa-lm:components/paragraph": ParagraphComponent,
    "spa-lm:components/image": ImageComponent,
    "spa-lm:components/expander": ExpanderComponent,
    "spa-lm:components/tourList": TourListComponent
  }
};
```

Change the `tour-list.component.ts` file with following content:

```js
import { Component, Input } from "@angular/core";

@Component({
  templateUrl: "./tour-list.component.html",
  styleUrls: ["./tour-list.component.css"]
})
export class TourListComponent {
  @Input() headline: any;
}
```

**NOTE**: **Please check** that the `styleUrls` path correctly points to the style file, it might have a `.css` or it might have a `.scss` extension. 
(It depends on your angular CLI setup. Tricky!)

Edit TourList component template

```
src/app/components/tour-list/tour-list.component.html
```

```html
<div className="tourlist">
  <h1>{{ headline }}</h1>
</div>
```

Build the component (From the `/spa/angular-minimal` directory.)

```
ng build --prod
```

</TabItem>

<TabItem value="vue">

Switch to our Vue SPA directory:

```
cd ../../../../../spa/vue-minimal
```

Go to the components directory:

```
cd src/components
```

Create a new file for our component:

```
touch TourList.vue
```

Edit the Component:

```jsx
<template>
  <div class="tourlist">
    <h1>{{headline}}</h1>
  </div>
</template>

<script>
export default {
  name: "TourList",
  props: ["headline"]
};
</script>

```

We will just print the headline surrounded by a div.

Next, open the Magnolia Config file to add our component to the mapping.

```
src/magnolia.config.js
```

Import the new component:

```js
import TourList from "./components/TourList";
```

Add to mapping:

```js
'spa-lm:components/tourList': TourList
```

The full file looks like this:

```js
import Basic from './pages/Basic';
import Contact from './pages/Contact';
import Image from './components/Image';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import List from './components/List';
import Item from './components/Item';
import Expander from './components/Expander';
import TourList from "./components/TourList";

const config = {
  componentMappings: {
    // Pages
    'vue-minimal-lm:pages/basic': Basic,
    'vue-minimal-lm:pages/contact': Contact,

    // Components
    'spa-lm:components/headline': Headline,
    'spa-lm:components/image': Image,
    'spa-lm:components/paragraph': Paragraph,
    'spa-lm:components/list': List,
    'spa-lm:components/listItem': Item,
    'spa-lm:components/expander': Expander,
    'spa-lm:components/tourList': TourList
  },
};

export default config;
```

Build the SPA (in the `/spa/vue-minimal` directory.)

```
npm run deploy:mgnl
```

</TabItem>


</Tabs>

### Try your Component

Now that you implemented your component and re-built (and deployed) your SPA, open up the Page Editor again and view your page.

Your component is displayed.

:::tip Nice work!
You've just gone through the complete cycle of building a component (with handles and knobs on it) that a marketer can place in a visual SPA Editor.
:::

Next, keep going with your new component. Bring in the tour listing logic you implemented in the 'Hello Magnolia - Headless' section into your new component.

### Displaying List of Tours

Our Component is up and running. Next we want to:

- Upload some Demo Content
- Define the REST API endpoint
- Extend our Frontend Component to display the list of tours

##### Add Tours Content Type

In the folder _spa-lm_ switch to `contentTypes` directory:

```
cd ./contentTypes
```

Create a file named `tours.yaml`and copy following content into it:

```yaml
datasource:
  workspace: tours
  autoCreate: true

model:
  properties:
    name:
      label: Name
      required: true
      i18n: true

    description:
      label: Description
      i18n: true

    isFeatured:
      type: Boolean #Types 'Decimal', 'Long' and 'Double' are also available.
      label: Feature this item

    image:
      type: asset
      label: Image

    tourTypes:
      label: Tour Types

    location:
      label: Start City
      i18n: true

    date:
      label: Date
      type: Date

    duration:
      type: Long
      label: Tour Duration
      options:
        "2":
          value: 2
          label: 2 days
        "7":
          value: 7
          label: 7 days
        "14":
          value: 14
          label: 14 days
        "21":
          value: 21
          label: 21 days

    tourOperator:
      label: Tour Operator
      i18n: true

    body:
      type: richText
      label: Body
      i18n: true
```
### Create a Magnolia App

Change to the `spa-lm/apps` directory.

```
cd ../apps
```

Create a file named `tours.yaml` with following content:

```yaml
!content-type:tours
name: tours
label: Tours

# Optionally override any of the app configuration supplied by the content type.
subApps:
  detail:
    label: Detail Tour
    form:
      properties:
        isFeatured:
          buttonLabel: "Featured"
        tourTypes:
          $type: jcrMultiValueField
          type: String
          field:
            $type: linkField
            chooser:
              workbenchChooser:
                appName: categories
```

To see your new Tours app, log out and log back in, and press the grid icon.

### Install content
We have prepared Demo Content to start with. To install the Demo Content follow these steps:

* Open Tours app
* Click `Import` action (You might need to scroll down in the action bar.)
* Select the file `./magnolia/_dev/content-to-import/tours.magnolia-travels.xml`

![Terminal Create Content Type](/assets/import-tours-content.gif)

##### Add Tours REST API Endpoint

In the folder _spa-lm_ switch to `restEndpoints/delivery` directory:

```
cd ./restEndpoints/delivery
```

Create a file named `tours.yaml`and copy following content into it:

```yaml
class: info.magnolia.rest.delivery.jcr.v2.JcrDeliveryEndpointDefinition
workspace: tours
depth: 10
bypassWorkspaceAcls: true
includeSystemProperties: true
nodeTypes:
  - mgnl:content

references:
  - name: assetReference
    propertyName: image
    referenceResolver:
      class: info.magnolia.rest.reference.dam.AssetReferenceResolverDefinition
      assetRenditions:
        - 960x720
        - 480x360
```

This creates our new REST endpoint. Give it a try:

```
http://localhost:8080/magnoliaAuthor/.rest/delivery/tours
```


##### Finish the Frontend Component
Finally, we can extend our _TourList_ Component to fetch and display the imported data.

![Tourlist Preview](/assets/tourlist-preview.gif)



<Tabs
defaultValue="react"
groupId="js-framework"
values={[
{ label: 'React', value: 'react', },
 { label: 'Angular', value: 'angular' },
 { label: 'Vue', value: 'vue' },
]  
}>
<TabItem value="react">

**Add some more styling**

In `/spa/react-minimal/src/components` create a file `TourList.css` in the same directory as `TourList.js` and copy in this stylesheet:

```css
.tour-list .tour-list-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tour-list .tour-list-cards .card {
  max-width: 150px;
  margin-right: 15px;
  margin-bottom: 15px;
  -webkit-box-shadow: 10px 10px 28px -4px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 10px 10px 28px -4px rgba(0, 0, 0, 0.53);
  box-shadow: 10px 10px 28px -4px rgba(0, 0, 0, 0.53);
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
}

.tour-list .tour-list-cards .card .card-img-top {
  width: 150px;
}

.tour-list .tour-list-cards .card .card-body {
  padding: 5px;
}

.tour-list .tour-list-cards .card .card-body .card-text {
  margin: 5px;
  opacity: 0.8;
  font-size: 10px;
  font-weight: 200;
  transition: opacity 0.8s ease-in;
}

.tour-list .tour-list-cards .card .card-body .card-title {
  margin: 0;
  font-weight: 200;
}

.tour-list .tour-list-cards .card:hover {
  transform: scale3d(1.5, 1.5, 1.5);
  transform-origin: center;
  background-color: #ffffff;
}

.tour-list .tour-list-cards .card:hover .card-body .card-text {
  opacity: 1;
}

.tour-list .tour-list-cards .card:hover .card-body .card-title {
  color: #00b39b;
}
```

Open your `TourList.js` file, and replace the code with this:

```jsx
import React, { useState, useEffect } from "react";
import "./TourList.css";

const API_ENDPOINT =
  "http://localhost:8080/magnoliaAuthor/.rest/delivery/tours";
const IMAGE_BASE = "http://localhost:8080";

export default ({ headline }) => {
  const [tours, setTours] = useState([]);

  useEffect(() => {    
    async function fetchTourList() {
      let response = await fetch(API_ENDPOINT);
      let data = await response.json();
      setTours(data.results);
    }
    fetchTourList();
  }, []);

  return (
    <div className="tour-list">
      <h1>{headline}</h1>
      {tours.length > 0 ? (
        <div className="tour-list-cards">
          {tours.map(tour => (
            <div class="card">
              <img
                src={IMAGE_BASE + tour.image.renditions["480x360"].link}
                class="card-img-top"
                alt="..."
              />              
              <div class="card-body">
                <h5 class="card-title">{tour.name}</h5>
                <p class="card-text">{tour.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h2>No Tours found</h2>
      )}
    </div>
  );
};
```

Build the SPA (in the `/spa/react-minimal` directory.)

```
npm run deploy:mgnl
```

</TabItem>

<TabItem value="angular">

**Add some more styling**

Open the  ```tour-list.component.css``` file in your previously created component directory `/spa/angular-minimal/src/app/components/tour-list` and copy in the following stylesheet:

> Note: It might be `tour-list.component.scss` depending on the configuration of your Angular CLI.

```css
.tour-list .tour-list-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tour-list .tour-list-cards .card {
  max-width: 150px;
  margin-right: 15px;
  margin-bottom: 15px;
  -webkit-box-shadow: 10px 10px 28px -4px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 10px 10px 28px -4px rgba(0, 0, 0, 0.53);
  box-shadow: 10px 10px 28px -4px rgba(0, 0, 0, 0.53);
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
}

.tour-list .tour-list-cards .card .card-img-top {
  width: 150px;
}

.tour-list .tour-list-cards .card .card-body {
  padding: 5px;
}

.tour-list .tour-list-cards .card .card-body .card-text {
  margin: 5px;
  opacity: 0.8;
  font-size: 10px;
  font-weight: 200;
  transition: opacity 0.8s ease-in;
}

.tour-list .tour-list-cards .card .card-body .card-title {
  margin: 0;
  font-weight: 200;
}

.tour-list .tour-list-cards .card:hover {
  transform: scale3d(1.5, 1.5, 1.5);
  transform-origin: center;
  background-color: #ffffff;
}

.tour-list .tour-list-cards .card:hover .card-body .card-text {
  opacity: 1;
}

.tour-list .tour-list-cards .card:hover .card-body .card-title {
  color: #00b39b;
}
```

Open your ```tour-list.component.ts``` file and replace it with this code:

```js
import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_ENDPOINT =
  "http://localhost:8080/magnoliaAuthor/.rest/delivery/tours";
const IMAGE_BASE = "http://localhost:8080";


@Component({
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']  
})
export class TourListComponent {
  @Input() headline: any;
  @Input() tours: any;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  ngOnInit() {
    this.http.get(API_ENDPOINT).subscribe((data: any) => {
      this.tours = data.results.map(item => ({ ...item, image: IMAGE_BASE + item.image.renditions["480x360"].link }));
    })

  }
}

```

> Note: You might have to change the `styleUrls` to `tour-list.component.scss` depending on the name of your actual file.



Edit TourList component template ```tour-list.component.html```and replace it with this content:

```html
<div class="tour-list">
    <h1>{{ headline }}</h1>
    <div class="tour-list-cards">

        <div class="card" *ngFor="let tour of tours">
        <img
        [src]="tour.image"
            class="card-img-top"
            alt="..."
        />              
        <div class="card-body">
            <h5 class="card-title">{{tour.name}}</h5>
            <p class="card-text">{{tour.description}}</p>
        </div>
        </div>
    
      </div>
</div>
```  


Build the component (From the `/spa/angular-minimal` directory.)

```
ng build --prod
```

</TabItem>

<TabItem value="vue">

**Add some more styling**

In `/spa/vue-minimal/src/components` open your `TourList.vue` file and add at the end of it the stylesheet:

```jsx
<style scoped>
.tour-list .tour-list-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tour-list .tour-list-cards .card {
  max-width: 150px;
  margin-right: 15px;
  margin-bottom: 15px;
  -webkit-box-shadow: 10px 10px 28px -4px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 10px 10px 28px -4px rgba(0, 0, 0, 0.53);
  box-shadow: 10px 10px 28px -4px rgba(0, 0, 0, 0.53);
  transition: transform 0.4s ease-in-out;
  cursor: pointer;
}

.tour-list .tour-list-cards .card .card-img-top {
  width: 150px;
}

.tour-list .tour-list-cards .card .card-body {
  padding: 5px;
}

.tour-list .tour-list-cards .card .card-body .card-text {
  margin: 5px;
  opacity: 0.8;
  font-size: 10px;
  font-weight: 200;
  transition: opacity 0.8s ease-in;
}

.tour-list .tour-list-cards .card .card-body .card-title {
  margin: 0;
  font-weight: 200;
}

.tour-list .tour-list-cards .card:hover {
  transform: scale3d(1.5, 1.5, 1.5);
  transform-origin: center;
  background-color: #ffffff;
}

.tour-list .tour-list-cards .card:hover .card-body .card-text {
  opacity: 1;
}

.tour-list .tour-list-cards .card:hover .card-body .card-title {
  color: #00b39b;
}
</style>
```

Next replace `script`  with this:

```jsx
<script>
const API_ENDPOINT =
  "http://localhost:8080/magnoliaAuthor/.rest/delivery/tours";

export default {
  name: "TourList",
  props: ["headline"],
  data() {
    return {
      tours: [],
      imageBase: "http://localhost:8080"
    };
  },
  created() {
    this.fetchTours();
  },
  methods: {
    async fetchTours() {
      let response = await fetch(API_ENDPOINT);
      let data = await response.json();      
      this.tours = data.results;
    }
  }
};
</script>
```

And extend the template to display the tours by replacing `template` with following code:
```html
<template>
  <div class="tour-list">
    <h1>{{headline}}</h1>
    <div v-if="tours.length > 0" class="tour-list-cards">
      <div class="card" v-for="tour in tours" v-bind:key="tour.path">
        <img
          v-bind:src="imageBase + tour.image.renditions['480x360'].link"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{tour.name}}</h5>
          <p class="card-text">{{tour.description}}</p>
        </div>
      </div>
    </div>
    <h2 v-else>No Tours found</h2>
  </div>
</template>
```

Build the SPA (in the `/spa/vue-minimal` directory.)

```
npm run deploy:mgnl
```

</TabItem>
</Tabs>

You have upgraded your component and re-built (and deployed) your SPA. Now open up the Page Editor again and view your page.

You will see the new tour list.


### Next Steps

:::tip Congratulations!
You've fully upgraded a simple headless SPA into one marketers can fully manage, including placing a sophisticated listing component.
:::

Next, take a well earned break. :)

Then, after this nitty-gritty hands-on practical work, learn more about the [Visual SPA Editor & frontend libraries](/docs/visual-spa-editor)

Or get big-picture theoretical with the topics in the 'Concepts' section.
