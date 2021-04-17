---
title: "Hello Magnolia - Headless"

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview
- Install the demo project, and Magnolia
- What is a headless cms? 
- Forms to add content 
- Content delivery API 
- Frontend client

> Scenario: We received the UX from our design team, but they still haven't decided on the details yet. However the content from our travel packages is already defined and we do not want to hold our marketers back from writing their content.

## Installing the demo project
To jumpstart our Project we will install our demo Project. The easiest way to do this is to clone our git repository.

create a directory named "hello-magnolia-headless":
```
cd hello-magnolia-headless
```

Clone the git repository:  
(Note that we are cloning a special branch for this tutorial __'hello-magnolia-headless'__)
```
git clone -b hello-magnolia-headless https://git.magnolia-cms.com/scm/~czimmermann/basic-headless-demos.git
```


### Install Magnolia for your demo project

![Install Magnolia](/assets/install-magnolia-cli.gif)


Switch to the cloned project:
```
cd basic-headless-demos 
```

```
cd magnolia
```

```
mgnl jumpstart
```

Choose number 2 (magnolia-community-webapp)

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

<Tabs
  defaultValue="mac"
  groupId="operating-systems"  
  values={[
    { label: 'Mac or Linux', value: 'mac', },    
    { label: 'Windows', value: 'win' },
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

Start Magnolia

```
mgnl start
```

- When the terminal shows `Server startup in [...] milliseconds`, magnolia is up and running
  - Open http://localhost:8080
  - Click 'Run the web update on the author instance'
  - Login with username:`superuser` and password:`superuser`

![welcome screen](/assets/01-installation-01-welcome.gif)

### Configure CORS

* Open the [Configuration app](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:configuration:browser;/server/filters:treeview:)
* Find `/server/filters` and scroll to the end.
* Move `addCORSHeaders` directly after `uriSecurity` (a few items up.)

![Frontend](/assets/configure-cors.gif)

## What are we going to build?

We are going to build a Travel Website SPA promoting travel packages.
- Marketers can add new Navigation Items
- They can create new Pages and arrange the content freely with pre-defined Content Blocks

### What is a Headless CMS?

When talking about Headless CMS we are typically talking about something we call "Form-Centric or API first Approach".

You want to create a technology and layout agnostic way for marketers to create content, and for developers to consume the content and use in any way they want, and whatever tools they want.

What will we do next?

- Create our Content Type
- Create a Magnolia App
- Defining our REST API Endpoint

## Defining our Content Type

> After talking to the design and marketing team we know that our Travel Packages can have the following information:
- name
- description
- featured
- image
- tour types
- location
- date
- duration
- tour operator
- body, some rich text to describe the travel package.

What we have just described is our Content Model. It's the contract between developers and marketers to create their website.

With Magnolia CMS we describe the model of content with something we call "Content Types". Implementing content types is very developer friendly, just describe the type in a Yaml file.

In our ```hello-magnolia-headless``` folder we will go into `contentTypes` directory:

```
cd ./basic-headless-demos/magnolia/light-modules/basic-tours-lm
```
```
cd ./contentTypes
```
create a file named ```tours.yaml``` with the following content:

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
![Terminal Create Content Type](/assets/create-content-type.gif)

Magnolia will automatically pickup the new content type and will make it available on our running instance.

> **More to read:** 
> [Content Type Documentation](https://documentation.magnolia-cms.com/display/DOCS/Content+type+definition)

### Create a Magnolia App

Change to the `basic-tours-lm/apps` directory.

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
          itemProvider:
            $type: currentItemProvider
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

### Browsing our content  
These steps were already enough to browse the content and to use the Form Editor.

![Browsing Content](/assets//02-01-browse.gif)

#### What did we just do? 
- We modeled our content and created a Content Type
- We created a "Tours" App 
- We installed Demo Content
- We browsed through the Tours App and viewed Demo Content


## Defining our REST API Endpoint

Defining our REST API Endpoints is as easy as creating the content type and app.

Change to the `basic-tours-lm/restEndpoints/delivery` directory.

```
cd ../restEndpoints/delivery
```

create a file named (you guessed it) `tours.yaml` with the following content:

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

> **Congratulations!** We are now ready to see our app in action.


### Accessing our content 
- Open your browser
- Go to url: http://localhost:8080/magnoliaAuthor/.rest/delivery/tours/?limit=100&orderBy=mgnl:lastModified%20desc
- You can see the JSON
- (Note the `limit` parameter. Endpoints limit to 10 results by default.)
- (Note the `orderBy` parameter. You can order on any property.)

![Browsing JSON](/assets//02-01-browse-json.gif)

## Extra: Updating and adding new Tours
 - Open the Tours app again http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:tours
 - Add your own tour
 - Check the endpoint URL again and look for the tour you added.

### What did we just do? 
- We have installed a Headless CMS
- We have imported Demo Content
- We have changed existing and added new content
- Without any coding we can see the json to build our website


## Extra: Build a client

We have seen how easy it is to get started. Let's build our website to consume the data.
We will build a very simple project.

![Demo Project](/assets/02-01-vanilla-result.jpg)

Open the `basic-headless-demos/frontend` directory. 



### Write the client

Edit index.html and copy in the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    <title>Hello, world!</title>
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="display-4">Magnolia Tours</h1>
      <p class="lead">List of all Tours</p>
    </div>
    <div class="container">
      <div class="card-columns tours"><!-- placeholder for results --></div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.8.3/polyfill.min.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script>
      (function($) {
        const ENDPOINT = "http://localhost:8080/magnoliaAuthor/.rest/delivery/tours/?limit=100&orderBy=mgnl:lastModified%20desc";
        const IMAGE_BASE = 'http://localhost:8080';

        $.get(ENDPOINT, function(data) {
          $(".tours").append(data.results.map((item)=>`
                  <div class="card">
                    <img src="${IMAGE_BASE + item.image.renditions['480x360'].link}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.description}</p>
                    </div>
                </div>`));
        });
      })(jQuery);
    </script>
  </body>
</html>
```

### Run the frontend

Just open the `index.html` file in a web browser, for example by double-clicking on it.

(You could also place the file on any web server.)

### Permissions for Images

What? No images displaying? We need to allow anonymous access to the image urls since we are running on the author instance.

* Open the [Security app](http://localhost:8080/magnoliaAuthor/.magnolia/admincentral#app:security:roles;/anonymous:treeview:), open the `Roles` tab, and edit the `anonymous` role. 
* Go to `Web access` tab, click `Add new`and enter path `/.imaging*` set to GET.

![Image Access for Anonymous](/assets/README-security-anonymous-imaging.png)

Now refresh your client, et voila - images!

:::tip Congratulations!
In the meantime we have the design. Our marketers want to enhance the travel portfolio page. They want to be able to add promotional teaser on top of the page and a custom sidebar too. They want to be able to define freely what to add there and add new article pages. They want to have full control of the navigation.

Lets have a look at the Magnolia headless SPA editor... 
:::
