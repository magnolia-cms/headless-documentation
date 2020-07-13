---
title: "Hello Magnolia - Hosted Trial"

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Get Started with the Hosted Trial

Let's take Magnolia for a spin. We'll cover how to work with your new server via the provisioned git repository, and we'll get a local Magnolia installed in order to get the best developer experience.

## First commit

Create a directory named `Magnolia-Trial` on your computer to hold your work.

Go to that directory in your terminal or command prompt. 

Clone your provisioned git repo:
* Go to your hosted git repo.  ([Click the link in your Dashboard](https://www.magnolia-trials.com/dashboard))
* Get your clone url: Use the 'Clone' item from the left menu. (It's the 2nd one down with the arrow.)
* Use your clone url in your terminal:

```
git clone [YOUR_CLONE_URL]
```

Notice that your repository is pre-populated with a demonstration website project. You can remove it later if you want.

This repository is how you make changes to your hosted Magnolia instance. 

Try it now. 

*   In your editor, open: `/light-modules/spa-website-lm/contentTypes/tours.yaml`
*   Change `label: Description` to `label: Summary`, and save.
*   Commit and push your change to git.
```
git commit -a -m"Changed tours label."
git push
```
*   Login to your hosted Magnolia author instance, and close the Tours app if it is open.    
(Click the 'x' in the upper right corner of the app.)
*   Now, open the Tours app, and see that your label change has been applied!


## Run Magnolia Locally

For a great development experience, install a Magnolia instance on your computer.

We'll treat the *hosted* instance on `magnolia-trials.com` as our production server that our authoring team uses and that our site visitors can access.  
And we'll have a *local* instance that we use for fast development.


### Prepare your system

Follow these steps to ensure your computer is good to go, and then return here.

[https://hd.magnolia-cms.com/docs/getting-started/installation](https://hd.magnolia-cms.com/docs/getting-started/installation)


### Install Magnolia DXCore

In a terminal, go into the `Magnolia-Trials` directory. 

Create a directory called `downloads`, and go into that directory.

Download the Magnolia DXCore bundle:

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
curl -O  https://files.magnolia-cms.com/magnolia-dx-core-latest.zip TODO: Get link without demo.
```

</TabItem>
<TabItem value="win">

```
Invoke-WebRequest -O  https://files.magnolia-cms.com/magnolia-dx-core-latest.zip TODO: Get link without demo.
```

</TabItem>
</Tabs>


Unzip the package

```
npx extract-zip magnolia-dx-core-latest.zip TODO actual filename
```

*   You now have an unzipped directory named like  `magnolia-dx-core-demo-6.2.1`.
*   In the unzipped directory, - rename the directory named like `apache-tomcat-9.0.31` to just `apache-tomcat`.
*   Move `apache-tomcat` into your git project directory.
*   Delete the unzipped directory.


### Configure

Configure Magnolia to use our `light-module` and `content-importer` directories.

In your editor, open the file:  
`/apache-tomcat/webapps/magnoliaAuthor/WEB-INF/config/default/magnolia.properties`

Find and change these *existing* properties:

```
magnolia.resources.dir=${magnolia.home}/../../../light-modules
```

```
magnolia.develop=true
```

```
magnolia.update.auto=true
```

Now add a few new properties:

``` 
magnolia.content.bootstrap.dir=${magnolia.home}/../../../content-importer 
magnolia.content.bootstrap.initial=true

```

Now start your magnolia instance, using the terminal:

```
mgnl start
```

Because it is the first start it will perform an install process for every module in the system. It will also import the content in the `content-importer` directory into the database.

When the terminal shows `Server startup in [...] milliseconds`, then open '[http://localhost:8080](http://localhost:8080)' in your browser.


## Register Magnolia

DXCore requires a license key which provisions which features are available, and until which date. Use the key you have recieved.

* Click on `Run the Web update on the author instance`.
* Enter the `License Owner` and `License Key`.
* Return to the previous browser tab to register the *Public* instance.
* Click on `Run the Web update on the public instance`.
* Enter the `License Owner` and `License Key`.

You can now login to your local Author and Public instances with 
* Username: `superuser`
* Password: `superuser`

## Develop Locally

Your local Magnolia instance will instantly pick up any changes that you make to the files in the 'light-modules' directory.

Go ahead and try it. Let's change the label again.


*   In your editor, open: "/light-modules/spa-website-lm/contentTypes/tours.yaml"
*   Change `label: Summary` to `label: Overview`, and save.
*   Open your local Magnolia author instance (http://localhost:8080/magnoliaAuthor).  
Close the Tours app if it is open with the 'x' in the upper right corner of the app.
*   Open the Tours app, and see that your label change has been applied!

Whenever you want to apply your changes to your `magnolia-trials.com` hosted server, commit your changes to git and push.

## Create new projects

To start new projects, you can create additional new light modules in the `light-modules` directory.

In the pages app, you can create additional hierarchies of pages. And thanks to the Multi-Site feature, you can map different domain names to each one.

We'll start to cover this in the next tutorial.

## Want a clean slate?

Would you like to remove the pre-installed demo project?

We recommend keeping the demo project as you go through the tutorials. You can develop your project *adjacent* to the demo project.

### Remove Pre-installed demo 

When you *do* decide to remove it, here is how:


#### Remove Content

The content is installed in the database.

To delete content using the content apps:

* Open the app.
* Select the root node.
* Click the `Delete` action.
* Click the `Publish Deletion` action.

The demo has content installed in these apps:

*   Pages
*   Tours
*   Categories
*   Assets
*   Events
*   Stories

An alternative way to delete content is with the `JCR` App in the `Tools` group.

Use the dropdown to select the workspace. (Use `website` to delete pages.)  
Then delete the content using the same procedure outlined above.

#### Remove Configuration

Removing the files from the light-modules directory will remove their impact on the system configuration. 
You can move the files elsewhere, or simply delete them.

This will remove the configured `contentTypes`, `apps`, `restEndpoints`, `templates` and so forth.

The 'App Launcher' will still show the apps, but once you logout and login again they will be removed.

## Next Steps

:::tip Congratulations!
You're now setup for fast local development, and know how to deploy your changes to your hosted __magnolia-trials.com__ instance.
:::

Next, follow the [Headless Tutorial](/docs/getting-started/hello-hosted-trial) to quickly level-up on headless development with Magnolia.

