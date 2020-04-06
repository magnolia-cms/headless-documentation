---
title: "Hello Magnolia - SPA"
metaTitle: ""
metaDescription: ""
---
## Overview
 
In the prevoius chapter we have build a classic Headless CMS Website. With the new requirement we want to give the marketer more freedom.
Classical Form based headless CMS systems are good for constraint and predefined content. To give marketers the ability to create Articles, structure or create their own micro sites, the Magnolia Single Page Application (SPA) Editor will accelerate your Marketer and free up your development.

With the Magnolia SPA Editor your marketer can change your SPA visually within the Magnolia Page Editor.

:::tip
- Form based Headless CMS is good for pre-structured content
- Micro-Sites and Article requirements will be better off using Magnolia SPA
- You can mix both approaches in one SPA
:::

## Installing the demo project
To jumpstart our Project we will install our demo Project. The easiest way to do this is to clone our git repository.

- create a directory named "hello-magnolia"
- `cd hello-magnolia-headless`
- `git clone https://git.magnolia-cms.com/projects/DEMOS/repos/minimal-headless-spa-demo`



Copy all files from `/magnolia/_dev/content-to-bootstrap` into
`/magnolia/apache-tomcat/webapps/magnoliaAuthor/WEB-INF/bootstrap/common`

Start magnolia
(All files in that directory will be automatically imported into magnolia)
* Most of the files are content.
* `config.modules.site.config.site.travel.xml` Imports a site definition (which declares the theme and language locales)
* `config.server.filters.addCORSHeaders.xml` Imports CORS configuration.

### Configure CORS

Log into Magnlolia
* Open [Configuration app](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:configuration)
* Find /server/filters and scroll to the end.
* Move `addCORSHeaders.xml` directly after `uriSecurity` (a few items up.)
  * You can drag-n-drop it, but take care not to drop it in a folder by accident. If you do you can just drag it back out though.

![Frontend](/assets/admincentral.png)

# What are we going to build?
We are going to build a Travel Website SPA promoting travel packages.
- Marketers can add new Navigation Items
- They can create new Pages and arrange the content freely with pre-defined Content Blocks

:::tip
If you are in a hurry, you can jump directly to "Develop your SPA" and readup the other chapters later.
:::


## Excursion: Component based development

All recently attablished frontend frameworks like React, Angular or VUEJS enforce a component based development approach. Given the popularity of webcomponents and the concept of modular design and the establishment of design systems we are going to take advantage of this and build our website having composibility in mind.

Following diagram shows what we are going to build using our favorite Frontend Framework. Blue Boxes are fix components and magenta boxes are dynamic.

![Frontend](/assets/03-frontend-components.png)


- We have one fix Layout Component. The Layout Component has one fix "Top Navigation Component" on every route.
- We defined a dynamic area in which we want to give the Marketer the ability to add one of our pre-defined Components the way they like.
- One fix footer component on the button of the Layout Component.


:::tip Further reading
If you want to dive deeper into this topic, the "thinking in react" is a good starting point: https://reactjs.org/docs/thinking-in-react.html
:::


## Frontend Components ❤️ Headless CMS 

In the prevoius chapter we have identified all the components we need to build. We defined a "Layout Component" with two fix Components and two dynamic areas in which we want to arrange 4 Components individually on each route.

The Layout Component defines an Area "Children / Slots" which will hold n numbers of components. 
In React you would use Props.children ```{children}```, in Angular ```<ng-content></ng-content>``` and in vuejs ```<slots></slots>```. In Magnolia we do call this concept ```Areas```. All this concept describe a dynamic layout / view structure.

The content of a specific route is described as a **Page**. 

![Frontend](/assets/03-frontend-components-magnolia.png)

:::tip
In Magnolia basically every piece of content is a Component. Therfore you can map almost every frontend component 1:1 to Magnolia Page Content and define the whole structure dynamically.
:::

### The magic ✨
Magnolia is providing pre-build helper components for almost all current major frontend frameworks.
- **Page** Component: The Page Component takes a current route and will get the content from Magnolia CMS
- **Area** Component: The Area Component is reading the Page content and distributing the content to the defined areas and will include your frontend components based on your custom mapping configuration.

Your custom developed Frontend Component e.g. Headline will automatically receive the content from your Magnolia CMS Page and can display that accordently. No more "Hardcoding" JSON files.

![Frontend](/assets/03-frontend-components-magnolia-mapping.png)



## Develop your SPA
Finally we have all the knowledge to develop our SPA. We prepared the Demo project using React and Angular. 

We already cloned and installed our demo project. We will now go to our "hello-magnolia-headless" directory. 
```
$ cd hello-magnolia-headless
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Install dependenciesd


<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
  ]  
}>
<TabItem value="react">
We will need to install all React dependencies first.
<Tabs
  defaultValue="npm"
  values={[
    { label: 'NPM', value: 'npm', },    
    { label: 'Yarn', value: 'yarn', },
  ]
}>
<TabItem value="npm">

```
$ cd react-minimal
$ npm install
```
</TabItem>
<TabItem value="yarn">

```
$ cd react-minimal
$ yarn install
```
</TabItem>
</Tabs>

</TabItem>
<TabItem value="angular">

We will need to install all Angular dependencies first.

<Tabs
  defaultValue="npm"
  values={[
    { label: 'NPM', value: 'npm', },    
    { label: 'Yarn', value: 'yarn', },
  ]
}>
<TabItem value="npm">

```
$ cd angular-minimal
$ npm install
```
</TabItem>
<TabItem value="yarn">

```
$ cd angular-minimal
$ yarn install
```
</TabItem>
</Tabs>

</TabItem>
</Tabs>

### Our Project structure

<Tabs
  defaultValue="react"  
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
  ]  
}>
<TabItem value="react">

```

src
  components
    Headline.js
    Image.js
    Navigation.js
    Paragraph.js
  pages
    basic.js
App.css
App.js
index.js
magnolia.config.js
```

</TabItem>
<TabItem value="angular">

```

drwxr-xr-x  11 senol  staff   352B Mar 17 16:01 app
drwxr-xr-x   3 senol  staff    96B Mar 17 16:01 environments
-rw-r--r--   1 senol  staff    27K Mar 17 16:01 favicon.ico
-rwxr-xr-x   1 senol  staff   302B Mar 17 16:01 index.html
-rwxr-xr-x   1 senol  staff   232B Mar 17 16:01 main.ts
-rwxr-xr-x   1 senol  staff   2.8K Mar 17 16:01 polyfills.ts
-rwxr-xr-x   1 senol  staff   1.3K Mar 17 16:01 styles.scss
-rwxr-xr-x   1 senol  staff   166B Mar 17 16:01 tsconfig.app.json
-rwxr-xr-x   1 senol  staff   314B Mar 17 16:01 tslint.json
```
</TabItem>
</Tabs>


### magnolia.config.js

```js
import Basic from './pages/Basic';
import Contact from './pages/Contact';
import Header from './components/Header';
import Image from './components/Image';
import Paragraph from './components/Paragraph';
import Expander from './components/Expander';
import List from './components/List';
import Item from './components/Item';

const config = {
    'componentMappings':{
        'react-minimal-lm:pages/basic': Basic,
        'react-minimal-lm:pages/contact': Contact,
    
        'spa-lm:components/header': Header,
        'spa-lm:components/image': Image,
        'spa-lm:components/paragraph': Paragraph,
        'spa-lm:components/expander': Expander,
        'spa-lm:components/list': List,
        'spa-lm:components/listItem': Item
    }
};

export default config;

```