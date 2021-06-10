---
title: "Hello Magnolia - Hosted Headless"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

- What is a Headless CMS?
- Defining a Content Type
- Forms to add content
- Content delivery API
- Frontend client

> Scenario: We received the rough UX for the new project from our design team, but they still haven't decided on the details yet. However the content from our travel packages is already defined and we do not want to hold our marketers back from entering their content.  
> We'll provision the CMS to allow them to enter content right away.

## What is a Headless CMS?

A headless CMS does not render the content for any channel like websites and mobile apps, it just serves the stored content over REST API's.

A Headless CMS separates your content from the systems that render the content. It allows authors and marketers to create content that is "future proof" and can be used on different channels. And it allows developers to consume the content and use it in any way they want, and whatever tools they want.

## Setup

#### Setup Node.js and npm

Type `node --v` and `npm --v` in a terminal or command prompt. If the system reports a version number, Node.js and npm are installed on your computer.

```
$ node -v
v12.13.0
```

```
$ npm -v
6.13.7
```

If Node.js and/or npm is not installed you can follow [these](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instructions.

> Our system is prepared and ready. Next install the Magnolia CLI.

#### Install Magnolia CLI

The Magnolia Commandline Interface (CLI) helps you to download, install and start Magnolia. It also provides many handy tools for developing [Light Modules](/docs/concepts/light-development#light-module).

```
$ npm install @magnolia/cli -g
```

Depending on your permissions and the Node.js installation location, you may have to execute the above command with root permissions. On Linux or OS-X, to run this command as root, use:

```
$ sudo npm install @magnolia/cli -g
```

Test that it is installed correctly:

```
$ mgnl -v
Magnolia CLI: 4.0.0 (node.js: v12.15.0)
```

You can find more information in the [Magnolia CLI](https://docs.magnolia-cms.com/magnolia-cli/4.x/index.html) Documentation.

:::tip Your system is ready to go
Let's build a headless app, shall we?
:::

## Create a Light Module

Light modules are a slim way to configure Magnolia. They are just a directory of files following a set of conventions.

The system picks up any changes to the files and immediately implements the changes.

In your terminal, go into the `light-modules` directory.

Run:

```
mgnl create-light-module basic-trips-lm
```

Have a look at the contents of the directory it created.

> **More to read:** > [Light Modules](/docs/concepts/light-development#light-module)



## Create a Content Type

> After talking to the design and marketing team we know that our Travel Packages can have the following information:

- name
- description
- featured - A boolean
- image - A reference to an asset
- tour types - A reference to another Content Type of 'tour types'
- location
- date - The start date
- duration - A list with four options
- tour operator
- body - some rich text to describe the travel package

What we have just described is our Content Model. It's the contract between developers and marketers to create their website.

In Magnolia we define the model of content with "Content Types". Implementing content types is very developer friendly, just describe the type in a Yaml file.

Go into the new `basic-trips-lm` directory.

```
cd basic-trips-lm
```

Use the CLI to create a new Content Type

```
mgnl create-content-type trips --app
```

The CLI has created a working scaffold of a new type, and even an app with an editing UI. (Note that)

Now we'll tune it to fit our project.

Edit the `contentTypes/trips.yaml` file.

Replace the entire contents with the following:

```yaml
datasource:
  workspace: trips
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

Notice that this file is slim, readable, and almost identical to the specifiction from the 'marketing team'. It couldn't really be any lighter.

Once deployed, Magnolia will automatically pickup the new content type and will make it available on our running instance. We'll do that a little later.

> **More to read:** > [Content Type Documentation](https://documentation.magnolia-cms.com/display/DOCS/Content+type+definition)

## Create a Content App

A Content App is an editing UI.

Thanks to that `--app` parameter that we used with the `create-content-type` command, an app file has already be created. Let's tune it.

Edit the `apps/trips.yaml` file, and replace its contents with the following.

```yaml
!content-type:trips
name: trips

# Optionally override any of the app configuration supplied by the content type.
subApps:
  detail:
    label: Detail Trip
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

## Create a REST Endpoint

Inside `basic-trips-lm` , create a `restEndpoints` directory, with a `delivery` directory under that.

Result: `basic-trips-lm/restEndpoints/delivery`.

In that location, create a file named (you guessed it) `trips.yaml` with the following content:

```yaml
class: info.magnolia.rest.delivery.jcr.v2.JcrDeliveryEndpointDefinition
workspace: trips
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

> **More to read:** > [REST Endpoint Configuration](https://documentation.magnolia-cms.com/display/DOCS62/Delivery+endpoint+API+v2#DeliveryendpointAPIv2-Configuration)


#### What did we just do?

- We modeled our content and created a Content Type.
- We created an App to edit the content.
- We created a REST endpoint to access it.

## Deploy to Hosted Magnolia

Double check what you have changed.

```
cd ..
git status
```

Add all changes, commit, and push your change to git.

```
git add --all
git commit -m "Add 'trips' content type, app, endpoint."
git push
```

To see your new `Trips` app, log out (Menu in the upper right-hand corner) and log back in to your hosted Magnolia Author instance.
(If you get a blank screen when you log out, simply visit https://magnolia-trials.com.)
Once logged in, press the grid icon in the header. Your Trips app is in the app launcher!

Now, open your Trips app, and go ahead and create a few trips. (Have a dream vacation in mind? :)

## Troubleshooting

> Don't see the Trips app? Double check that you have created the files as mentioned above. You should have a directory structure like this:

- light-modules
  - basic-trips-lm
    - apps
      - trips.yaml
    - contentTypes
      - trips.yaml
    - restEndpoints
      - delivery
        - trips.yaml
    - ...

> Something still not right?
> A good troubleshooting tool is the `Definitions` app.

- In the Magnolia UI, type `Definitions` in the Find Bar at the top, and open the app.
- Switch to the `Problems` tab, and see if there are any problems from your module: `basic-trips-lm`.
- The problem detail message will give you clues about what went wrong. It's usually just a typo.

## Test REST

- Open a new browser tab
- Go to url: [YOUR_AUTHOR_URL]/.rest/delivery/trips
- You can see the JSON

Now try:

- Go to url: [YOUR_AUTHOR_URL]/.rest/delivery/trips/?limit=100&orderBy=mgnl:lastModified%20desc
  - `limit` parameter. Endpoints limit to 10 results by default.
  - `orderBy` parameter. You can order on any property.

For published content, just use [YOUR_PUBLIC_URL] instead of [YOUR_AUTHOR_URL] in the above links.

Did you get an empty result set? Then go back to your `Trips` app, select an item, and use the `Publish` action. (You may need to scroll down in the Action Bar to find it.)

> **More to read:** > [Delivery Endpoint Explorer](https://hd.magnolia-cms.com/api-explorer/)

:::tip Congratulations!
Now you've built and deployed your own headless project to your server.
Authors can edit and publish content, and you can retrieve and use that content in any frontend or channel.

Next, we'll build a simple frontend. Or you can jump to the bottom of the page for Next Steps.
:::

## Extra: Build a client

We have seen how easy it is to get started.

In this section we complete the story with a simple client

> Do you already have a frontend or client project in mind? Then feel free to skip this section and go ahead and change your own project to consume the `trips` endpoint.

Let's build the simplest website.

![Demo Project](/assets/02-01-vanilla-result.jpg)

Create an `index.html` file anywhere on your computer.

For example you could put it in your `Magnolia-Trial` directory, or in the `_dev` directory if you'd like to have it checked into your git project.

### Write the client

Edit index.html and copy in the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>Hello, world!</title>
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="display-4">Magnolia Trips</h1>
      <p class="lead">List of all Trips</p>
    </div>
    <div class="container">
      <div class="card-columns tours"><!-- placeholder for results --></div>
    </div>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.8.3/polyfill.min.js"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.4.1.min.js"
      integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
    <script>
      (function ($) {
        const ENDPOINT =
          "[YOUR_AUTHOR_URL]/.rest/delivery/trips/?limit=100&orderBy=mgnl:lastModified%20desc";
        const IMAGE_BASE = "[YOUR_AUTHOR_URL]";

        $.get(ENDPOINT, function (data) {
          $(".tours").append(
            data.results.map(
              (item) => `
                  <div class="card">
                    <img src="${
                      IMAGE_BASE +
                      (item.image ? item.image.renditions["480x360"].link : "")
                    }" class="card-img-top" alt="...">
                    
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.description}</p>
                    </div>
                </div>`
            )
          );
        });
      })(jQuery);
    </script>
  </body>
</html>
```

In the page, replace the [YOUR_AUTHOR_URL] placeholders with your actual Author URL.

### Run the frontend

Just open the `index.html` file in a web browser, for example by double-clicking on it.

(You could also place the file on any web server.)

### CORS

Don't see any trips? Don't worry, you were doomed to fail. :)
Use your browser's developer tools and check out the console. CORS, right?

We need to enable CORS on the server.

1.  In Magnolia, type `filters` into the Find Bar at the top.
2.  Click on the first result. (It should include '/server/filters/')
    - The `Configuration` app opens, and `/server/filters` is selected.
3.  Click the `Import` Action, you might have to scroll down in the Action Bar.
4.  Click `Upload` and select the `_dev/config.server.filters.addCORSHeaders.xml` file from your repository.
5.  Click `Import File`.
    - The `addCorsHeaders` item is displayed and selected.
6.  Now, click the `Move` action.
7.  Select `uriSecurity` (a few items up.)
8.  Click the `Move After` button.
9.  Now refresh your browser tab with your client app.
    - The trips are rendered!
    - (If not, check the browser developer tools again for hints, especially the `Network` tool.)

### Permissions for Images

What? No images displaying? We need to allow anonymous access to the image urls since we are running on the Author instance.

(If you do see images, it's because you are logged in as a superuser to Magnolia. Try opening your client app in another browser.)

- In Magnolia, click the grid icon at the top, and open the `Security` app.
- Open the `Roles` tab, and edit the `anonymous` role.
- Go to the `Web access` tab.
- Click `Add new` and enter path `/.imaging*` set to `GET`.

![Image Access for Anonymous](/assets/README-security-anonymous-imaging.png)

Now refresh your client, et voila - images!

:::tip Congratulations!
You've built a client for your Headless CMS!
:::

## Next Steps / FAQ

Next, to learn more about building and deploying the SPA included in the preinstalled demo project follow this tutorial:

_[Build and Deploy the SPA](/docs/getting-started/hello-hosted-deploy-spa)_

Or, jump straight to the magnolia-trials.com FAQ to review, and to choose your learning path.

_[FAQ & Next Steps](/docs/getting-started/hosted-faq)_
