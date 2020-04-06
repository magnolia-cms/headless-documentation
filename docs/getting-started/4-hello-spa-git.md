---
title: "Hello Magnolia - SPA"

---
## Overview 
In this Tutorial we will learn how to use the Visual Single Page Application (SPA) Editor to build stunning websites with ReactJS and Angular.
Classical Form based headless CMS systems are good for constraint and predefined content. 
To give marketers the ability to create Articles, page structure or create their own micro sites, the Magnolia Single Page Application (SPA) Editor will accelerate your Marketer and free up your development capacity.

The Visual SPA is bridging the gap between enterprise level content management systems and SPA frontend development.

:::tip New to Headless CMS?
Checkout our [*Hello Magnolia Headless Tutorial*](2-hello-headless.md)  to get started with some basics.
:::

### What are we going to build?

We are going to build a Travel Website SPA promoting travel packages.

In the [prevoius](2-hello-headless.md) tutorial we have build a classic Headless CMS Website. In this tutorial we will create an application but enable the Marketer to visually change the SPA.

- Marketers can add new navigation items
- They can create new pages and arrange the content freely with a pre-defined list of *Components*.


### Prerequisites

- Magnolia Toolchain and required development tools. The instructions are [here](1-installation.md)

## Installing the demo project
To jumpstart our Project we will install our demo Project. The easiest way to do this is to clone our git repository.

Create a directory named "hello-magnolia-headless" (if this directory is alredy existing you can reuse it):

```
cd hello-magnolia-headless
```

Clone the git repository:
```
git clone https://git.magnolia-cms.com/scm/~czimmermann/minimal-headless-spa-demos.git
```

```
git clone https://git.magnolia-cms.com/scm/~czimmermann/minimal-headless-spa-demos.git
```

### Install Magnolia for your demo project
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

Next choose number 2 (magnolia-community-webapp)

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


From within the ```minimal-headless-spa-demos/magnolia``` directory we will copy Demo Content and configuration from `./_dev/content-to-bootstrap` into
`./apache-tomcat/webapps/magnoliaAuthor/WEB-INF/bootstrap/common`.


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

### Start Magnolia
Open a new terminal window and from within your ```minimal-headless-spa-demos/magnolia``` directory execute following command to start your Magnolia Headless CMS:

```
mgnl start
```

- Magnolia is up and running
  - open http://localhost:8080 to verify the installation

![welcome screen](/assets/01-installation-01-welcome.png)

### Configure CORS
Magnolia is an enterprise level CMS system, therefore security is taken very serously. To be able to access  website content from our headless application we will need to enable CORS in the system.

* Open [Configuration app](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:configuration)
* Find /server/filters and scroll to the end.
* Move `addCORSHeaders.xml` directly after `uriSecurity` (a few items up.)

![Frontend](/assets/configure-cors.png)

### Install the SPA
In your terminal switch to prevoiusly created ```hello-magnolia-headless``` directory. Install the dependencies either with npm or yarn and do your first build.
<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
  ]  
}>
<TabItem value="react">

```
cd minimal-headless-spa-demos/spa/react-minimal
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
cd minimal-headless-spa-demos/spa/angular-minimal 
```

```
npm install
```
```
npm run build
```
</TabItem>
</Tabs>

## View and inspect the Starter Code
Let's have a look at the running demo containing the starter content before we are going to inspect the Starter Code. We have started Magnolia and built and deployed the project in the chapter before.

### Install demo content

We have prepared Demo Content to start with. To install the Demo Content follow these steps:

* Open Pages app
* Click `Import` action
* For React: Select the file `./magnolia/_dev/content-to-import/website.react-minimal.yaml` 
* For Angular: Select the file `./magnolia/_dev/content-to-import/website.angular-minimal.yaml` 


![Terminal Create Content Type](/assets/spacontentimport.png)

### Page Builder
Open the Magnolia [Pages App](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:pages-app) in your Browser.

Open the SPA Project by double clicking on ```react-sample``` or ```angular-sample`` depending on which project you have installed in the previous chapter.

![Page Builder](/assets/editspa.png)

Now you can see the react or angular app rendered in the Magnolia Page Builder. Go-ahead and try to change the title or add an image. 

### Inspect the Code
Let's have a look how our demo project is structured:
<center>

![Component Mapping](/assets/03-spa-component-screenshot.png)
</center>

The blue and green components are fix components. The developer is defining the position and visibility. The magenta colored components inside the *Area Component* can be freely arranged (added, moved, deleted, etc.) by the Marketer using the Page Editor with components pre-defined by the Developer.


The green **Page Component** and **Area Component** are provided by Magnolia. 
- The Page Component is repsonible to fetch the right content for the given route.
- The Area Component is mapping the compnents defined by the developer to the content created by the marketer to render them. You can define multiple area components on the same Page Component.


#### Light Modules

##### Shared Light Module: spa-lm 
You can share code and components between multiple light modules. For this demo we have created a shared light module "spa-lm". 

```
cd mangolia/spa-lm
```

###### Components

```
cd templates/components
```
- header.yaml
- image.yaml
- paragraph.yaml

###### Dialogs

```
cd dialogs/components
```
- header.yaml
- image.yaml
- paragraph.yaml

##### Application Light Module
<Tabs
  defaultValue="react"
  values={[
    { label: 'React', value: 'react', },    
    { label: 'Angular', value: 'angular' },
  ]  
}>
<TabItem value="react">

```
cd mangolia/react-minimal-lm
```

We have defined two Page Templatse to be able to select our SPA in the page builder
```
cd templates/pages
```

</TabItem>
<TabItem value="angular">

```
cd templates/pages
```
</TabItem>
</Tabs>


#### App Structure
We have tow categories of components. *Page* and *Components*. 
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

In our source directory we have two sub directories. Page, containing Layout Components and Components.
- App
- Page
  - basic
  - contact
- Components
  - Navigation
  - Headline
  - Image
  - Text

</TabItem>
<TabItem value="angular">

Open your project in 

```
minimal-headless-spa-demos/spa/angular-minimal/src/app
```

In our src/app directory we have two sub directories. Page, containing Layout Components and Components.
- Root Component
- Page
  - basic
  - contact
- Components
  - Navigation
  - Headline
  - Image
  - Text

</TabItem>
</Tabs>

#### magnolia.config.js

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
</TabItem>
<TabItem value="angular">

```js
import { BasicComponent } from './pages/basic/basic.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListComponent } from './components/list/list.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ImageComponent } from './components/image/image.component';
import { ExpanderComponent } from './components/expander/expander.component';

export const config = {
    'componentMapping': {
      'angular-minimal-lm:pages/basic': BasicComponent,
      'angular-minimal-lm:pages/contact': ContactComponent,

      'spa-lm:components/header': HeaderComponent,
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

## Root Component / Bootstrap Component

The initialization of 

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



## Build a Component
In the "Headless CMS" tutorial we have created a headless app to show tour packages. Using the Visual SPA Editor and the classic Form-Centric approach is not mutual exclusive. On the contrary, both approaches can complement each other.

### What are we going to build?
We will build a *Tour Listing* Component. Our Marketers will be enabled to choose and add the component anywhere they want.

- Create a new component using light modules
- Create a Dialog for Marketers to add a Headline and to select Tour Categories
- Extend the Rest endpoint to resolve categories

### Create Tour Listing Component

```
cd hello-magnolia-headless
```

```
cd magnolia/light-modules/spa-lm/templates/components
```

```
touch tourList.yaml
```

```yaml
title: Tour Listing (headless)
dialog: spa-lm:components/tourList
```

Dialog

```
cd hello-magnolia-headless
```

```
cd magnolia/light-modules/spa-lm/dialogs/components
```

```
touch tourList.yaml
```


```yaml
label: Tour Listing
form:
    tabs:
      - name: tabMain
        label: Seleced Tour Categories
        fields:
          - name: headlinie
            label: Listing Headline
            fieldType: text
          - name: selectCategories
            fieldType: multiValue
            label: Select category
            field:
              name: linkField
              class: info.magnolia.ui.form.field.definition.LinkFieldDefinition
              targetWorkspace: category
              appName: categories
              identifierToPathConverter:
                class: info.magnolia.ui.form.field.converter.BaseIdentifierToPathConverter
actions:
  commit:
    class: info.magnolia.ui.admincentral.dialog.action.SaveDialogActionDefinition
  cancel:
    class: info.magnolia.ui.admincentral.dialog.action.CancelDialogActionDefinition
```

define where to use the new component. add our tourlisting to available compoennts

```yaml
      TourList:
        id: spa-lm:components/tourList 
```


add rest enpoint to resovle the tours

```yml
  - name: toursReference
    propertyName: tours
    referenceResolver:
      class: info.magnolia.rest.reference.jcr.JcrReferenceResolverDefinition
      targetWorkspace: category
      expand: true
```

### React

```
cd src/components
```

```
touch TourList.js
```

```jsx
import React from "react";

export default ({ headline, tours }) => (
  <div className="tourlist">
    <h1>{headline}</h1>
    Selected Categories:
    <ul>
      {tours.map(tour => (
        <li>{tour.displayName}</li>
      ))}
    </ul>
  </div>
);

```

### Angular

```
ng generate component tourList
```
Output:
```
CREATE src/app/tour-listing/tour-listing.component.css (0 bytes)
CREATE src/app/tour-listing/tour-listing.component.html (27 bytes)
CREATE src/app/tour-listing/tour-listing.component.spec.ts (664 bytes)
CREATE src/app/tour-listing/tour-listing.component.ts (298 bytes)
UPDATE src/app/app.module.ts (1777 bytes)

```


```js
import { TourListComponent } from './components/tour-list/tour-list.component';

```
add to mapping
```js
'spa-lm:components/tourlist': TourListComponent
```

edit tour component

```html
<div className="tourlist">
  <h1>{{ content?.headline }}</h1>
  Selected Categories:
  <ul>
    <li *ngFor="let tour of content?.tours">
        {{ tour.displayName }}
    </li>
  </ul>
</div>

```

## What next?

