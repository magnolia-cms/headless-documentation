---
title: "Hello Cloud"

---
## Overview 
In this Tutorial we will learn how to use the Visual Single Page Application (SPA) Editor to build stunning websites with ReactJS and Angular.

Basic Form-based headless CMS systems are good for constrained and predefined content types. 
But to give marketers the ability to create articles, page structure or create their own custom landing pages or micro-sites, the Magnolia SPA Editor will accelerate your Marketer and free up your development capacity.

The Visual SPA Editor is bridging the gap between enterprise-level content management systems and SPA frontend development.

:::tip New to Headless CMS?
Checkout our [*Hello Magnolia Headless Tutorial*](2-hello-headless.md)  to get started with some basics.
:::

#### What are we going to build?

We are going to build a Travel Website SPA promoting travel packages.

In the [previous](2-hello-headless.md) tutorial we have built a basic Headless CMS Website. In this tutorial we will create an application, but enable the Marketer to visually change the SPA.

- Marketers can add new navigation items
- They can create new pages and arrange the content freely with a pre-defined list of *Components*.

![Developers and Marketers creating cool stuff together](/assets/illustrations/SPA-handles-1024x512.png)


#### Prerequisites

- Magnolia and required development tools. The instructions are [here](1-installation.md)

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

__Before starting__, get some handy configuration and sample images. From the `magnolia` directory, run:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="mac"
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
Open a new terminal window, and from within your ```minimal-headless-spa-demos/magnolia``` directory execute following command to start your Magnolia Headless CMS:

```
mgnl start
```

- Magnolia is up and running
  - open http://localhost:8080 to verify the installation

![welcome screen](/assets/01-installation-01-welcome.png)

### Configure CORS
Magnolia is an enterprise-level CMS system, therefore security is taken very serously. To be able to access website content from our headless application we will need to enable CORS in the system.

* Open the [Configuration app](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:configuration:browser;/server/filters:treeview:)
* Find `/server/filters` and scroll to the end.
* Move `addCORSHeaders` directly after `uriSecurity` (a few items up.)

![Frontend](/assets/configure-cors.png)


### Install the SPA

We include both a React and an Angular example, just choose which one you want to use.

In your terminal, go to the actual frontend app directory (for React or Angular). Install the dependencies either with npm or yarn, and do your first build.
<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
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
</Tabs>

## See It In Action
Let's have a look at the running demo containing the starter content before we are going to inspect the Starter Code. We have started Magnolia and built and deployed the project in the chapter before.

#### Install demo content

We have prepared Demo Content to start with. To install the Demo Content follow these steps:

* Open the [Pages App](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:pages-app) in your browser.
* Click `Import` action (You might need to scroll down in the action bart.)
* For React: Select the file `./magnolia/_dev/content-to-import/website.react-minimal.yaml` 
* For Angular: Select the file `./magnolia/_dev/content-to-import/website.angular-minimal.yaml` 


![Terminal Create Content Type](/assets/spacontentimport.png)

### Page Builder
In the Pages App, open the SPA Project by double clicking on ```react-sample``` or ```angular-sample``` depending on which project you have installed.

Now you can see the React or Angular app rendered in the Magnolia Page Builder. Go-ahead and try to change the title or add an image. 

Note: _You are editing a SPA!_

![Page Builder](/assets/editspa.png)


## Inspect the Code
Let's have a look how our demo project is structured:
<center>

![Component Mapping](/assets/03-spa-component-screenshot.png)
</center>

The blue and green components are fixed components, the developer controls them and their position. The magenta components inside the *Area Component* are controlled and freely arranged (added, moved, deleted, etc.) by the marketer. The marketer uses the Page Editor to edit the SPA with components built and defined by the developer.

You can look at it as the developer putting 'handles' and 'knobs' on frontend components, so that marketers and content authors can move them around and tune them with custom content.

The green **Page Component** and **Area Component** are provided by Magnolia. 
- The **Page** Component is responible for fetching the right content for the given route.
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

We have defined two Page Templates, which the marketer will be able to include in our SPA in the page builder. In the page template you can define *Areas* and *which* components which will be available in that area.

<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
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
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
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
</Tabs>

We have two categories of templates. *Page* and *Components*. 

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
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
  ]  
}>
<TabItem value="react">

```js
import Basic from './pages/Basic';
import Contact from './pages/Contact';
import Headline from './components/Headline';
import Image from './components/Image';
import Paragraph from './components/Paragraph';
import Expander from './components/Expander';
import List from './components/List';
import Item from './components/Item';

const config = {
    'componentMappings':{
        'react-minimal-lm:pages/basic': Basic,
        'react-minimal-lm:pages/contact': Contact,
    
        'spa-lm:components/headline': Headline,
        'spa-lm:components/image': Image,
        'spa-lm:components/paragraph': Paragraph,
        'spa-lm:components/expander': Expander,
        'spa-lm:components/list': List,
        'spa-lm:components/listItem': Item
    }
};

export default config;
```
</TabItem>
<TabItem value="angular">

```js
import { BasicComponent } from './app/pages/basic/basic.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { HeadlineComponent } from './app/components/headline/headline.component';
import { ListItemComponent } from './app/components/list-item/list-item.component';
import { ListComponent } from './app/components/list/list.component';
import { ParagraphComponent } from './app/components/paragraph/paragraph.component';
import { ImageComponent } from './app/components/image/image.component';
import { ExpanderComponent } from './app/components/expander/expander.component';

export const config = {
    'componentMapping': {
      'angular-minimal-lm:pages/basic': BasicComponent,
      'angular-minimal-lm:pages/contact': ContactComponent,

      'spa-lm:components/headline': HeadlineComponent,
      'spa-lm:components/list': ListComponent,
      'spa-lm:components/listItem': ListItemComponent,
      'spa-lm:components/paragraph': ParagraphComponent,
      'spa-lm:components/image': ImageComponent,
      'spa-lm:components/expander': ExpanderComponent
    }
  };
```
</TabItem>
</Tabs>

## Frontend Components

### Root Component / Bootstrap Component

The Root Component (`App.js` in React, `root.component.ts` / `root.component.html` in Angular) is the main entry point of our app. it defines the page structure and routing.

Note the imports of the Magnolia JS lib: `@magnolia/react-editor` or `@magnolia/angular-editor`.

<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
  ]  
}>
<TabItem value="react">

```js
import {Page} from '@magnolia/react-editor';
```

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
</TabItem>
<TabItem value="angular">

```js
import { MagnoliaModule } from '@magnolia/angular-editor';
```

```html
<app-navigation></app-navigation>

<mgnl-page [content]="content">
</mgnl-page>

<footer>
    Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
    <br />
    Copyright © 2020
</footer>
```
</TabItem>
</Tabs>

### Page Component

The Page Component is defining the layout and the placement of the *Area* components.
Let's have a look at the Basic Page.

<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
  ]  
}>
<TabItem value="react">

```jsx
import React from 'react';
import { Area } from '@magnolia/react-editor';

const Basic = props => {
  const { main, extras, title } = props;

  return (
    <div className="Basic">
      <div className="hint">[Basic Page]</div>
      <h1>{title || props.metadata['@name']}</h1>

      <main>
        <div className="hint">[Main Area]</div>         
        {main && <Area className="Area" content={main} />}  
      </main>

      <div className="Extras" >
        <div className="hint">[Sercondary Area]</div>
        {extras && <Area className="Area" content={extras} />}
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
    <h1>{{content.title || content['@name']}}</h1>
    
    <main>
        <div class="hint">[Main Area]</div>         
        <div mgnl-area [name]="'main'" [content]="content"></div>  
    </main>
    
    <div class="Extras" >
        <div class="hint">[Extras Area]</div>
        <div mgnl-area [name]="'extras'" [content]="content"></div>
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
  @Input() content: any;
}
```
</TabItem>
</Tabs>

### *Component* Components 🤔
We learned earlier that the Magnolia SPA editor framework is helping to map the content structure created in Magnolia to frontend components.
Let's have a look at the *Headline* Component as an example.

<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
  ]  
}>
<TabItem value="react">

```
src/components/Headline.js
```

```jsx 
import React from 'react';

const Headline = props => 

<h2 className="Headline">{props.text}</h2>;

export default Headline;
```

You can see how the fields defined in the dialog is passed through to the component, directly as __*`props`*__!

</TabItem>
<TabItem value="angular">

```
src/app/components/headline.component.html
```

```html
<h2>{{content?.text}}</h2>
```

You can see how the fields defined in the dialog is passed through to the component, directly on the __*`content`*__ property!

</TabItem>
</Tabs>






## Build a Component
In the "Headless CMS" tutorial we have created a headless app to show tour packages. Using the Visual SPA Editor and the basic Form-Centric approach is not mutually exclusive. On the contrary, both approaches complement each other.

### What are we going to build?
We will build a *Tour List* Component. Our Marketers will be able to choose and add the component anywhere they want.

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

Edit the component file ```tourList.yaml``` and paste in:

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

Edit the dialog file ```tourList.yaml``` and paste in:
```yaml
label: Tour List
form:
    tabs:
      - name: tabMain
        label: Seleced Tour Categories
        fields:
          - name: headline
            label: Tour List Headline
            fieldType: text
actions:
  commit:
    class: info.magnolia.ui.admincentral.dialog.action.SaveDialogActionDefinition
  cancel:
    class: info.magnolia.ui.admincentral.dialog.action.CancelDialogActionDefinition
```

#### Make the Component available
Next we want to define where the component can be used. We will add our tourList Component to the available components of our *Basic Page*

<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
  ]  
}>
<TabItem value="react">

```
cd ../../../react-minimal-lm/templates/pages
```
Edit the file ```basic.yaml``` and add following text to the availableComponents from the *main* Area:


```yaml
      TourList:
        id: spa-lm:components/tourList 
```

The full file will look like this:

```yaml
title: 'React: Basic'
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
Edit the file ```basic.yaml``` and add following text to the availableComponents from the *main* Area:


```yaml
      TourList:
        id: spa-lm:components/tourList 
```

The full file will look like this:

```yaml
title: 'Angular: Basic'
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
</Tabs>

Now we can already select the component in the Page Editor.

Open the [Pages App](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:pages-app) and add your component.

![New Component in Action](/assets/spa-first-component-page-editor.png)

But of course before we an see anything actually displayed, we have to implement the frontend component.

### The Frontend Component
Our new component is now provisioned in Magnolia, and an instance of it is saved to the content repository. Now, let's build out our component in React or Angular.

<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
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

export default ({ headline, tours }) => (
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
import TourList from './components/TourList';
```

Add to mapping:

```js
'spa-lm:components/tourList': TourList
```

The full file looks like this:
```js
import Basic from './pages/Basic';
import Contact from './pages/Contact';
import Headline from './components/Headline';
import Image from './components/Image';
import Paragraph from './components/Paragraph';
import Expander from './components/Expander';
import List from './components/List';
import Item from './components/Item';
import TourList from './components/TourList';

const config = {
    'componentMappings':{
        'react-minimal-lm:pages/basic': Basic,
        'react-minimal-lm:pages/contact': Contact,
    
        'spa-lm:components/headline': Headline,
        'spa-lm:components/image': Image,
        'spa-lm:components/paragraph': Paragraph,
        'spa-lm:components/expander': Expander,
        'spa-lm:components/list': List,
        'spa-lm:components/listItem': Item,
        'spa-lm:components/tourList': TourList
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

Add the new created TourListComponent into your ```app.module.ts``` file.
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
import { TourListComponent } from './app/components/tour-list/tour-list.component';
```

Add to mapping:

```js
'spa-lm:components/tourList': TourListComponent
```

The full file looks like this:

```js
import { BasicComponent } from './app/pages/basic/basic.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { HeadlineComponent } from './app/components/headline/headline.component';
import { ListItemComponent } from './app/components/list-item/list-item.component';
import { ListComponent } from './app/components/list/list.component';
import { ParagraphComponent } from './app/components/paragraph/paragraph.component';
import { ImageComponent } from './app/components/image/image.component';
import { ExpanderComponent } from './app/components/expander/expander.component';
import { TourListComponent } from './app/components/tour-list/tour-list.component';

export const config = {
    'componentMapping': {
      'angular-minimal-lm:pages/basic': BasicComponent,
      'angular-minimal-lm:pages/contact': ContactComponent,

      'spa-lm:components/headline': HeadlineComponent,
      'spa-lm:components/list': ListComponent,
      'spa-lm:components/listItem': ListItemComponent,
      'spa-lm:components/paragraph': ParagraphComponent,
      'spa-lm:components/image': ImageComponent,
      'spa-lm:components/expander': ExpanderComponent,
      'spa-lm:components/tourList': TourListComponent
    }
  };
```

Change the ```tour-list.component.ts``` file with following content:
```js
import { Component, Input } from '@angular/core';

@Component({
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent {
  @Input() content: any;
}
```
__NOTE__: __Please check__ that the `styleUrls` path correctly points to the style file, it might have a `.css` or it might have a `.scss` extension. (tricky!) 

Edit TourList component template

```
src/app/components/tour-list/tour-list.component.html
```

```html
<div className="tourlist">
  <h1>{{ content?.headline }}</h1>  
</div>
```

Build the component (From the `/spa/angular-minimal` directory.)

```
ng build --prod
```
</TabItem>
</Tabs>

### Try your Component
Now that you implemented your component and re-built (and deployed) your SPA, open up the Page Editor again and view your page.

Your component is displayed!

### Next Steps

:::tip Congratulations!
You've just gone through the complete cycle of building a component (with handles and knobs on it) that a marketer can place in a visual SPA Editor. 
:::

Next, keep going with your new component. Bring in the tour listing logic you implemented in the 'Hello Magnolia - Headless' section into your new component.

Or, after this hands-on practical work, get big-picture theoretical with the 'Concepts' section.
