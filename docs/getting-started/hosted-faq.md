---
title: "Hosted Trial - FAQ"

---

After you have been through the two introductory tutorials, you are ready to explore further and create your own Proof-of-Concept project for your company or organization. 

This FAQ will give you the key principles you need to work effectively with your hosted magnolia-trials.com instance.

## Multiple projects side-by-side.

In the [second tutorial](/docs/getting-started/hello-hosted-headless) you learned how to create a new light module where you could package all configuration for a new project. 

It is a good practice to put each project in its own module.
However there are a few things to keep in mind when you take this approach.

### Gotcha: Definitions are not scoped to one module

Definitions (such as content types, apps & endpoints) supplied in a light module are available by name anywhere in Magnolia. (With the exception of templates and dialogs.)

In general this is handy and makes them easy to work with, but it could also interfere in a project. For example if two modules bring in a 'cars' content type, then when you reference 'cars' it will be unpredictable which one will be resolved.

### Pages app

If you use the Pages app, you can take advantage of Magnolia's Multisite feature to host multiple websites. Each page at the root represents a different site. It is then possible to map different domain names to each site.
See `[YOUR_PUBLIC_URL]/public-home-page` for more information.

## Removing a project

You should keep the provisioned demo project installed as you go through the tutorials. When you are done with the first tutorials, you can develop your project *adjacent* to the demo project. But given the issues described above, you may eventually wish to remove the pre-installed `spa-website-demo` from your server.

When you *do* decide to remove it, here is how:


### Remove Content

The content is installed in the database.

#### To delete content using the content apps:

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

#### An alternative way to delete content is with the `JCR` App in the `Tools` group.

In the JCR App, use the dropdown to select the workspace.
The content will be displayed. (Use `website` to show 'pages' content.)
Then delete the content using the same procedure outlined above.

### Remove Configuration

Removing the files from the `light-modules` directory will remove their impact on the system configuration. You could remove the entire `spa-website-demo` directory.
You can move the files elsewhere, or simply delete them.

Once you have removed the files, perform a git commit and push.

This will remove the configured `contentTypes`, `apps`, `restEndpoints`, `templates` and so forth.

The 'App Launcher' will show the apps until you logout and login again.


## Learn More

You're off to a great start with Magnolia.

You have reached the end of the tailored learning path for the magnolia-trials.com service. You are ready to explore the further available resources.

While these tutorials are not tailored to the magnolia-trials.com service, you can still deploy them to your hosted server if you would like, using the above information from this FAQ.

### Install locally for best devX

:::tip Developer Experience
These tutorials include installing Magnolia on your local computer. While this setup takes a little longer, you'll be rewarded with a great developer experience. Every change you make will be picked up instantly by your local computer.
:::

### Next Tutorials

#### Hello Magnolia SPA

It's headless, but with a *great authoring experience*. Enable authors to edit your React, VUE or Angular apps in a visual What-You-See-Is-What-You-Get fashion.

This is the tutorial for a minimal SPA Editing project. Great starter project.

[_Hello Magnolia SPA_](hello-headless.md)

#### Hello Magnolia

Learn the basics of Magnolia templating

[_Hello Magnolia_](https://documentation.magnolia-cms.com/display/DOCS/Hello+Magnolia)

