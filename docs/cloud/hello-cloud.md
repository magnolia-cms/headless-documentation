---
title: Hello-cloud - a development tutorial
---

::: infobox
Related topics

* [Developing for Magnolia in the cloud](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud)
* [Cockpit](/Magnolia+Cloud/Cockpit)
:::

![](cloudy_.gif){.inline} In this tutorial you will:

* In [Part A](#A)

  * Write code using only a few [Magnolia CLI](/Magnolia+CLI) commands to create a functional Magnolia light module containing a page template and a component template. The resulting FreeMarker [template scripts](/Templating/Template+scripts), the [YAML](/Developing/YAML)-formatted [template definitions](/Templating/Template+definition) and [dialog definitions](/Templating/Dialog+definition) will appear in the light-modules directory.
  * Test the code on a Magnolia bundle running locally.
  * Send the code to the cloud-based Magnolia Git repository, using the commit and push commands.
* In [Part B](#B)

  * Install the code in cloud-based Magnolia environments via the Cockpit.

[](!toc)

# Prerequisites

 Before you start, make sure you have:

* [Installed and started a Magnolia bundle for local development on your machine](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+Magnolia+bundle+for+local+development#installing-the-local-magnolia-bundle)
* [Set up](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Setting+up+a+new+environment) the Integration, UAT, and Live environments in the Cockpit.

# A) On your local machine []{#A}

## 1. Write new code

### Create a light-module directory

Open a shell and create the following `light-modules` directory (Mac path usage is shown):

::: codebox

```{.bash}
/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules

```
:::

### Create a light module

Change to the `light-modules` directory and execute the `create-light-module` command to create a light module called `hello-cloud`:

::: codebox

```{.bash}
mgnl create-light-module hello-cloud
```
:::

Magnolia CLI creates the following structure in the directory:

::: codebox

  ~/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules/hello-cloud

```{.bash}
hello-cloud/
├── decorations
├── dialogs
│ ├── components
│ └── pages
├── i18n
│ └── hello-cloud-messages_en.properties
├── includes
├── templates
│ ├── components
│ └── pages
└── webresources
```
:::

### Create a page template

Now `cd` into the newly created `hello-cloud` directory and execute the following command to create a page, giving the page the name `cloudy-page`.

::: codebox

```{.bash}
cd hello-cloud/
mgnl create-page cloudy-page
```
:::

All going well, Magnolia CLI creates three files:

||
|-|-|
|[Page template definition](/Templating/Template+definition/Page+definition)|`light-modules/hello-cloud/templates/pages/cloudy-page.yaml`|
|Page [template script](/Templating/Template+scripts)|`light-modules/hello-cloud/templates/pages/cloudy-page.ftl`|
|Page [dialog definition](/Templating/Dialog+definition)|`light-modules/hello-cloud/dialogs/pages/cloudy-page.yaml`|

In a real-world situation you would edit these files, for instance to apply a stylesheet. In this tutorial we will skip this step to simplify.

### Create a component

In the shell, make sure that you are still in the `hello-cloud` directory. In a Mac or Linux shell, you can use the `pwd` command to see the path to the current directory:

::: codebox

```{.bash}
pwd
/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules/hello-cloud
```
:::

Run the following command to create a component, naming it `bluesky-component`.

::: codebox

```{.bash}
mgnl create-component bluesky-component
```
:::

Magnolia CLI creates three additional files:

||
|-|-|
|[Component template definition](/Templating/Template+definition/Component+definition)|`light-modules/hello-cloud/templates/components/bluesky-component.yaml`|
|Component [template script](/Templating/Template+scripts)|`light-modules/hello-cloud/templates/components/bluesky-component.ftl`|
|Component [dialog definition](/Templating/Dialog+definition)|`light-modules/hello-cloud/hello-cloud/dialogs/components/bluesky-component.yaml`|

Again, in a real-world situation you would edit and refine the component even further, but we will not do that in this tutorial.

### Make the component available to the page template

We want to make sure that the new component can be used in the new page template. Execute the following Magnolia CLI command to make the `bluesky-component` available in `cloudy-page` in the `main` [area](/Templating/Template+definition/Area+definition).

Before executing the command, have a look a these files:

* `light-modules/hello-cloud/templates/pages/cloudy-page.yaml`
* `light-modules/hello-cloud/templates/pages/cloudy-page.ftl`

  Magnolia CLI will modify these files when you run the `mgnl add-availability` command from the `hello-cloud` directory:

::: codebox

```
mgnl add-availability components/bluesky-component pages/cloudy-page@main
```
:::

:warning: Please note that Magnolia CLI may have inserted the `area` directive at the very end of the .ftl file. Edit `cloudy-page.ftl` and move the directive to the position that immediately follows the `<h1/>` tag:

See line 15 in the example below. The line number in your file can be different, but make sure you place the `area` directive after the &lt;h1/&gt; tag.

::: codebox

  cloudy-page.ftl

```{.numberLines .xml}
<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
  <head>
    [@cms.page /]
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!""}" />
    <meta name="keywords" content="${content.keywords!""}" />

  </head>
  <body class="cloudy-page ${cmsfn.language()}">
    <div class="container ">
      <h1>cloudy-page works!</h1>
    [@cms.area name="main"/]
    </div>
  </body>
</html>
```
:::

### Make an MTK component available to the page template

Use the [MTK module](/Modules/List+of+modules/MTE+module/MTK+module) (Magnolia Templating Kit module) to make the components, such as `HTML`, available in the `cloudy-page` of the `hello-cloud` light module. To make the component available to the `cloudy-page` template in the `main` [area](/Templating/Template+definition/Area+definition), execute the following command from the `hello-cloud` directory:

::: codebox

```
mgnl add-availability mtk:components/html pages/cloudy-page@main
```
:::

The command will modify the `light-modules/hello-cloud/templates/pages/cloudy-page.yaml` file.

## 2. Test the code []{#A2}

Now it's time to test the new template on your local Magnolia instance. Make sure your local Magnolia is running.

### Login to your local Magnolia installation

Use your favorite web browser to open the URL `http://localhost:8080/magnoliaAuthor/`. The first request may take some time if Magnolia has to finish installing its modules. When you see the login screen, enter `superuser` for both the user name and password:

![](/assets/cloud/loginAuthor_crop_v2.png){width=600}

### Create a new page with the cloudy-page template

Search for and open the Pages app. Add a page. Name it `home` and select the `cloudy-page` template:

![](/assets/cloud/add_home_page_crop.png){width=600}

Open `cloudy-page` for editing:

![](/assets/cloud/cloudypage_2edit.png){width=600}

Add a component to the MAIN area. Make sure that both the `bluesky-component` and `HTML` components are available :

![](/assets/cloud/add_component_crop.png){width=600}

### Find hello-cloud in the Resource Files app

Type "open resources app" in the Find Bar or click the (mgnl-app-launcher: []) app launcher icon and then the **Resource Files** app. In the tree you can see the `hello-cloud` light module with all of its resources. The filesystem icon ( ![](/assets/cloud/origin-icon-file-system.gif){.inline}) in the Origin column will indicate that all of the resources in the module are stored on your local filesystem.\
\
![](/assets/cloud/treeview_crop.png){width=600}

## 3. Send the code to the cloud-based Magnolia repository

When you are satisfied with your new `hello-cloud` light module, push the changes to the cloud-based Magnolia instance using Git commands . Before you can push, you must add and then commit your changes to Git.

Open the shell and `cd` to the root directory of the Git repository:

::: codebox

```{.bash}
cd /Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/
```
:::

Add the folder of the new light module to the Git index:

::: codebox

```{.applescript}
git add light-modules/hello-cloud/
```
:::

Commit the changes with a meaningful commit message:

::: codebox

```{.bash}
 git commit -m "Add light-module 'hello-cloud'"
```
:::

With this command you have just created a new entry in Git's history. The entry is sent to the Magnolia repository in the next step.

Send your code to the cloud-based Magnolia repository with the Git `push` command:

::: codebox

```{.bash}
git push
```
:::

If the push is successful, you see some something like this:

::: codebox

```{.bash}
Counting objects: 11, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (11/11), 1.40 KiB | 1.40 MiB/s, done.
Total 11 (delta 1), reused 4 (delta 0)
To https://git.magnolia-cms.com/scm/odc/magnolia-docs.git
   79b2c82..ef4fabc master -> master
```
:::

Finally, run the `git status` command. You should get something like this:

::: codebox

```
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean
```
:::

![](/assets/cloud/cloudy_.gif){.inline} Great! You've successfully concluded the first part of the tutorial in which you have created a Magnolia light module and pushed it to your Magnolia Git repository. In the next part of the tutorial you will be working in the Magnolia cockpit.

# B) In the Magnolia cockpit []{#B}

The Magnolia cockpit guides you through the next few actions.

::: tip
  Use the credentials you received during the [onboarding](/Magnolia+Cloud/Onboarding+to+Magnolia+Cloud) process to log into the cockpit and the cloud author instance
:::

## 4. Install a development snapshot containing the new light module

In this section you make the most recent changes (the latest commit to master) available in the Magnolia Integration environment by installing a snapshot.

Reminder: We assume that you have already [set up](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Setting+up+a+new+environment) the Integration, UAT, and Live environments in the Cockpit.

Log in to the Magnolia cockpit and click **Show package overview** &gt; **Install an update** in the **Installed releases** section towards the bottom of the page.

On the **Install an update** page click **Install a development snapshot**:

![](/assets/cloud/tutorial4a.png){width=600}

A [two-step wizard](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot) guides you through how to retrieve your latest commit from the Git repository and install it in the Integration environment. The **Master** option in the wizard includes the hello-cloud light module you committed to Git in step 3 of this tutorial.

Once you have completed the steps in the wizard, look at the Integration environment in the **Package overview** page. Note the green tick before the instance name and the **Info** column that shows *master*.

![](/assets/cloud/tutorial4b.png){width=600}

At this point you can check that your module updates are present in the installed snapshot by going to the Magnolia author instance via the **Edit content** link in the Integration section. The state of the light modules should now be identical in both your local Magnolia instance and the cloud-based Integration environment.

## 5. Define a release with the hello-cloud module

You now wrap the snapshot carrying the module updates into an installable release. In fact, all of the development snapshots installed in the Integration environment since the last release are wrapped into a single release, but in this tutorial there is only one snapshot to wrap. Click **Install an update** in the **Installed releases** section.

On the **Install an update** page click **Define a new release**:

![](/assets/cloud/tutorial5a.png){width=600}

Another [three-step wizard](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Defining+a+release) guides you through how to wrap the snapshot containing the hello-cloud light module into a release.

Once you have completed the steps in the wizard, look at the Integration environment in the Package overview page. Note that the release is assigned a version number that is displayed in the Integration environment section . You will refer to this version number later on when installing in environments.

![](/assets/cloud/tutorial5b.png){width=600}

## 6. Install the new release in the UAT environment

After you have defined the release, you install it in the UAT and Live environments. Start with the installation in the UAT environment.

Click **Install an update** in the **Installed releases** section.

On the **Install an update** page click **Install a release**:

![](/assets/cloud/tutorial6a.png){width=600}

Another [four-step wizard](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+UAT) guides you through how to install the release to the UAT or Live environment.

:warning: Choose the release version you have just defined and the **UAT** option in this step of the tutorial.

Once you have completed the steps in the wizard, look at the UAT environment in the Package overview page. Note that the same release version is now displayed in both the Integration and UAT environment sections.

## 7. Install the release in Live

This is the last step in the whole cycle. Installing a release in the Live environment is almost identical to installing in UAT.

In **Package overview** click **Install an update** and on the next screen choose **Install a release** again.

This time in the [four-step wizard](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+Live), choose the release version you have just installed in the UAT environment and the **Live** option.

 Once you have completed the steps in the wizard, look at the Live environment in the Package overview page. Note that the same release version is now displayed in all the environment sections.

## 8. Check the result of the installation in Package overview

In **Package overview** all of the environments should now be running your release version.

You can now open the author instance in the Live environment and create a new page using the `hello-cloud` template in the very same way as in [step 2 above](#A2) (**Test the code**). The difference is that the author and public instances are now running as part of your cloud-based Magnolia installation.

::: tip
  Use the credentials you received during the [onboarding](/Magnolia+Cloud/Onboarding+to+Magnolia+Cloud) process to log into the cloud author instance
:::

For example, here we have added a page named "home" using the `cloudy-page` template, and added the `bluesky-component` and `HTML` components to the main area (with an image and some text):

![](pages open hello cloudy page.png){width=600}

If you [publish](/Administration/Architecture/Publishing+and+activation) the page (and in this example, the image), it looks like this in the Public instance :

![](published hello cloudy page.png){width=600}

![](/assets/cloud/cloudy_.gif){.inline} Congratulations, you have completed this tutorial! ![](/assets/cloud/cloudy_.gif){.inline}

Have a look at the rest of the [Magnolia Cloud](/Magnolia+Cloud) or dig further into light module development by learning about [front-end development in Magnolia](/Developing/Magnolia+front-end+development).



<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="effad116-e9c4-46f6-86b7-b8ae58e9afa0"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="float">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">BLOCK</ac:parameter><ac:rich-text-body><p>Related topics</p><ul><li><ac:link><ri:page ri:content-title="Developing for Magnolia in the cloud" /></ac:link></li><li><ac:link><ri:page ri:content-title="Cockpit" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p><ac:image><ri:attachment ri:filename="cloudy_.gif" /></ac:image>&nbsp; In this tutorial you will:</p><ul><li>In <ac:link ac:anchor="A"><ac:plain-text-link-body><![CDATA[Part A]]></ac:plain-text-link-body></ac:link>&nbsp;<br /><ul><li>Write code&nbsp;using only a&nbsp;few <ac:link><ri:page ri:content-title="Magnolia CLI" /></ac:link> commands to create a functional Magnolia light module containing a page template and a component template. The resulting FreeMarker&nbsp;<ac:link><ri:page ri:content-title="Template scripts" /><ac:plain-text-link-body><![CDATA[template scripts]]></ac:plain-text-link-body></ac:link>, the <ac:link><ri:page ri:content-title="YAML" /></ac:link>-formatted&nbsp;<ac:link><ri:page ri:content-title="Template definition" /><ac:plain-text-link-body><![CDATA[template definitions]]></ac:plain-text-link-body></ac:link>&nbsp;and <ac:link><ri:page ri:content-title="Dialog definition" /><ac:plain-text-link-body><![CDATA[dialog definitions]]></ac:plain-text-link-body></ac:link>&nbsp;will appear in the light-modules directory.</li><li>Test the code on a Magnolia bundle running locally.</li><li>Send the code to the cloud-based Magnolia Git repository, using the commit and push commands.</li></ul></li><li>In <ac:link ac:anchor="B"><ac:plain-text-link-body><![CDATA[Part B]]></ac:plain-text-link-body></ac:link> <br /><ul><li>Install the code in cloud-based Magnolia environments via the Cockpit.</li></ul></li></ul><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="abffdb22-a0c1-4fd2-8442-564f2eeb3478"><ac:parameter ac:name="maxLevel">3</ac:parameter><ac:parameter ac:name="style">none</ac:parameter></ac:structured-macro></p><h2>Prerequisites</h2><p><ac:inline-comment-marker ac:ref="3656f6d9-bf67-4cb8-9cc2-be5f6ab3f871"> Before </ac:inline-comment-marker> you start, make sure you have:</p><ul><li><ac:link ac:anchor="InstallingthelocalMagnoliabundle"><ri:page ri:content-title="Setting up a Magnolia bundle for local development" /><ac:plain-text-link-body><![CDATA[Installed and started a Magnolia bundle for local development on your machine]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Setting up a new environment" /><ac:plain-text-link-body><![CDATA[Set up]]></ac:plain-text-link-body></ac:link>&nbsp;the Integration, UAT, and Live environments in the Cockpit.</li></ul><h2>A) On your local machine <ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="2908e1d1-b4cd-4efb-92e4-868b0b44e911"><ac:parameter ac:name="">A</ac:parameter></ac:structured-macro></h2><h3>1.&nbsp;Write new code</h3><h4><ac:inline-comment-marker ac:ref="867045c8-6711-4704-bd3e-5ce87fe9094f"> Create </ac:inline-comment-marker> a light-module directory</h4><p>Open a shell and create the following <code>light-modules</code> directory (Mac path usage is shown):</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="42757a30-afbe-437f-aeda-1e3daee8de5e"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules
]]></ac:plain-text-body></ac:structured-macro><h4>Create a light module</h4><p>Change to the <code>light-modules</code> directory and execute the <code>create-light-module</code> command to create a light module called&nbsp;<code>hello-cloud</code>:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="51bb45b0-f820-4354-8354-179623479a17"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[mgnl create-light-module hello-cloud ]]></ac:plain-text-body></ac:structured-macro><p>Magnolia CLI creates the following structure in the directory:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="9992d0ca-02c8-4efe-bd36-2f81523e3288"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="title">~/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules/hello-cloud   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[hello-cloud/
├── decorations
├── dialogs
│   ├── components
│   └── pages
├── i18n
│   └── hello-cloud-messages_en.properties
├── includes
├── templates
│   ├── components
│   └── pages
└── webresources]]></ac:plain-text-body></ac:structured-macro><h4>Create a page template</h4><p>Now <code>cd</code> into the newly created <code>hello-cloud</code> directory and execute the following command to create a page, giving the page the name <code>cloudy-page</code>.</p><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="6db92ddb-296d-4ac1-893e-70c3c6c735e0"><ac:parameter ac:name="language">bash</ac:parameter><ac:plain-text-body><![CDATA[cd hello-cloud/
mgnl create-page cloudy-page]]></ac:plain-text-body></ac:structured-macro><p>All going well, Magnolia CLI creates three files:</p><table class="relative-table wrapped" style="width: 69.6309%;"><colgroup> <col style="width: 30.8806%;" /> <col style="width: 69.1194%;" /> </colgroup><tbody><tr><td><ac:link><ri:page ri:content-title="Page definition" /><ac:plain-text-link-body><![CDATA[Page template definition]]></ac:plain-text-link-body></ac:link></td><td colspan="1"><code>light-modules/hello-cloud/templates/pages/cloudy-page.yaml</code></td></tr><tr><td>Page <ac:link><ri:page ri:content-title="Template scripts" /><ac:plain-text-link-body><![CDATA[template script]]></ac:plain-text-link-body></ac:link></td><td colspan="1"><code>light-modules/hello-cloud/templates/pages/cloudy-page.ftl</code></td></tr><tr><td colspan="1">Page <ac:link><ri:page ri:content-title="Dialog definition" /><ac:plain-text-link-body><![CDATA[dialog definition]]></ac:plain-text-link-body></ac:link></td><td colspan="1"><code>light-modules/hello-cloud/dialogs/pages/cloudy-page.yaml</code></td></tr></tbody></table><p>In a real-world situation you would edit these files, for instance to apply a stylesheet. In this tutorial we will skip this step to simplify.</p><h4>Create a component</h4><p>In the shell, make sure that you are still in the <code>hello-cloud</code> directory. In a Mac or Linux shell, you can use the <code>pwd</code> command to see the path to the current directory:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="5c810f01-3929-4e9a-858e-69b2bb68f4b4"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[pwd
/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules/hello-cloud]]></ac:plain-text-body></ac:structured-macro><p>Run the following command to create a component, naming it <code>bluesky-component</code>.</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="f60a27c8-63fc-49ca-b8eb-5a055a7d518b"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[mgnl create-component bluesky-component]]></ac:plain-text-body></ac:structured-macro><p>Magnolia CLI creates three additional files:</p><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><td><ac:link><ri:page ri:content-title="Component definition" /><ac:plain-text-link-body><![CDATA[Component template definition]]></ac:plain-text-link-body></ac:link></td><td><p><code>light-modules/hello-cloud/templates/components/bluesky-component.yaml</code></p></td></tr><tr><td>Component <ac:link><ri:page ri:content-title="Template scripts" /><ac:plain-text-link-body><![CDATA[template script]]></ac:plain-text-link-body></ac:link></td><td><p><code>light-modules/hello-cloud/templates/components/bluesky-component.ftl</code></p></td></tr><tr><td>Component <ac:link><ri:page ri:content-title="Dialog definition" /><ac:plain-text-link-body><![CDATA[dialog definition]]></ac:plain-text-link-body></ac:link></td><td><p><code>light-modules/hello-cloud/hello-cloud/dialogs/components/bluesky-component.yaml</code></p></td></tr></tbody></table><p>Again, in a real-world situation you would&nbsp;edit and refine the component even further, but we will not do that in this tutorial.</p><h4>Make the component available to the page template</h4><p>We want to make sure that the new component can be used in the new page template. Execute the following Magnolia CLI command to make the <code>bluesky-component</code> available in <code>cloudy-page</code> in the <code>main</code> <ac:link><ri:page ri:content-title="Area definition" /><ac:plain-text-link-body><![CDATA[area]]></ac:plain-text-link-body></ac:link>.</p><p>Before executing the command, have a look a these files:</p><ul><li><code>light-modules/hello-cloud/templates/pages/cloudy-page.yaml</code></li><li><code>light-modules/hello-cloud/templates/pages/cloudy-page.ftl</code></li></ul><p><span> <ac:inline-comment-marker ac:ref="f89f8a82-8e7e-4f15-af27-e82557505e07"> Magnolia </ac:inline-comment-marker> CLI will modify these files when you run the <code> <span>mgnl add-availability</span> </code>&nbsp;<span>&nbsp;</span> <ac:inline-comment-marker ac:ref="f420fc20-85d0-4ce7-9c2a-b656623276a3"> command </ac:inline-comment-marker> from the <code>hello-cloud</code> directory:<br /></span></p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="1f833ebb-bfab-4a04-800a-df4af03c5333"><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[mgnl add-availability components/bluesky-component pages/cloudy-page@main]]></ac:plain-text-body></ac:structured-macro><p><ac:emoticon ac:name="warning" />&nbsp;Please note that Magnolia&nbsp;CLI may have inserted the&nbsp;<code>area</code>&nbsp;directive at the very end of the .ftl file. Edit <code>cloudy-page.ftl</code>&nbsp;and move the directive to the position that immediately follows the <code>&lt;h1/&gt;</code> tag:</p><ac:structured-macro ac:name="expand" ac:schema-version="1" ac:macro-id="f8588705-5d0c-4006-9ecf-a90f5d259df0"><ac:parameter ac:name="title">
    Click here to see how to edit cloudy-page.ftl
   </ac:parameter><ac:rich-text-body><p>See line 15 in the example below. The line number in your file can be different, but make sure you place the <code>area</code>&nbsp;directive after the &lt;h1/&gt; tag.</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="d732163d-8b3e-4f4f-8d8e-6030919dba97"><ac:parameter ac:name="language">xml</ac:parameter><ac:parameter ac:name="title">cloudy-page.ftl     </ac:parameter><ac:parameter ac:name="linenumbers">true</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
      INLINE
     </ac:parameter><ac:plain-text-body><![CDATA[<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
  <head>
    [@cms.page /]
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!""}" />
    <meta name="keywords" content="${content.keywords!""}" />

  </head>
  <body class="cloudy-page ${cmsfn.language()}">
    <div class="container ">
      <h1>cloudy-page works!</h1>
    [@cms.area name="main"/]
    </div>
  </body>
</html>]]></ac:plain-text-body></ac:structured-macro></ac:rich-text-body></ac:structured-macro><h4>Make an MTK component available to the page template</h4><p>Use the <ac:link><ri:page ri:content-title="MTK module" /></ac:link> (Magnolia Templating Kit module) to make the components, such as <code>HTML</code>, available in the <code>cloudy-page</code> of the <code>hello-cloud</code> light module. To make the component available to<span> the</span> <code>cloudy-page</code> <span> template in the </span> <code>main</code> <ac:link><ri:page ri:content-title="Area definition" /><ac:plain-text-link-body><![CDATA[area]]></ac:plain-text-link-body></ac:link> <span>, execute the following <ac:inline-comment-marker ac:ref="de0aa5bc-674c-4b74-8137-f87b359f07eb"> command </ac:inline-comment-marker> from the <code>hello-cloud</code> directory: <br /></span></p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="cf90be64-a9ff-4ead-b397-877c0ff55bf0"><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[mgnl add-availability mtk:components/html pages/cloudy-page@main]]></ac:plain-text-body></ac:structured-macro><p>The command will modify the <code>light-modules/hello-cloud/templates/pages/cloudy-page.yaml</code> file.</p><h3>2. Test the code&nbsp;<ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="3094910b-6cb2-41b6-bdb9-a4678c52c808"><ac:parameter ac:name="">A2</ac:parameter></ac:structured-macro></h3><p>Now it's time to test the new template on your local Magnolia instance. Make sure your local Magnolia is running.</p><h4>Login to your local Magnolia installation</h4><p>Use your favorite web browser to open the URL <code>http://localhost:8080/magnoliaAuthor/</code> . The first request may take some time if Magnolia has to finish installing its modules. When you see the login screen, enter <code>superuser</code> for both the user name and password:</p><div><ac:image ac:width="600"><ri:attachment ri:filename="loginAuthor_crop_v2.png" /></ac:image></div><h4>Create a new page with the cloudy-page template</h4><p>Search for and open the Pages app. Add a page. N<span>ame it </span> <code>home</code> <span>&nbsp;</span>and select the <code>cloudy-page</code> template:</p><div><ac:image ac:width="600"><ri:attachment ri:filename="add_home_page_crop.png" /></ac:image></div><div><br />Open <code>cloudy-page</code> for editing:</div><div><ac:image ac:width="600"><ri:attachment ri:filename="cloudypage_2edit.png" /></ac:image></div><div><br />Add a component to the MAIN area. Make sure that both the <code>bluesky-component</code> and <code>HTML</code> <span> <ac:inline-comment-marker ac:ref="0ad6004d-f2cb-4251-bc67-70c98e34e435"> components are available </ac:inline-comment-marker> </span> <ac:inline-comment-marker ac:ref="0ad6004d-f2cb-4251-bc67-70c98e34e435"> : <br /></ac:inline-comment-marker></div><div><ac:image ac:width="600"><ri:attachment ri:filename="add_component_crop.png" /></ac:image></div><h4>Find hello-cloud in the Resource Files app</h4><p><ac:inline-comment-marker ac:ref="dea968ff-433f-4142-89a6-c86fc64d20fc">Type &quot;open resources app&quot; in the Find Bar or click the <ac:structured-macro ac:name="mgnl-app-lauchner" ac:schema-version="1" ac:macro-id="7cbd1d71-07ca-4848-94d1-65e1abcd2e8a" />&nbsp;app launcher icon and then the </ac:inline-comment-marker> <strong>Resource Files</strong>&nbsp;app. In the tree you can see the <code>hello-cloud</code> light module with all of its resources. The filesystem icon ( <ac:image><ri:attachment ri:filename="origin-icon-file-system.gif" /></ac:image>) in the Origin column will indicate that all of the resources in the module are stored on your local filesystem.<br /><br /><ac:image ac:width="600"><ri:attachment ri:filename="treeview_crop.png" /></ac:image></p><h3>3. Send the code to the cloud-based Magnolia repository</h3><p>When you are satisfied with your new <code>hello-cloud</code> light module, push the changes to the cloud-based Magnolia instance using <ac:inline-comment-marker ac:ref="da663298-9b99-4fcb-bb2e-48e0c85326b4"> Git commands </ac:inline-comment-marker>. Before you can push, you must add and then commit your changes to Git.</p><p>Open the shell and <code>cd</code> to the root directory of the Git repository:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="82727450-77cc-417c-8940-5a8ce876b9a8"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[cd /Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/]]></ac:plain-text-body></ac:structured-macro><p>Add the folder of the new light module to the Git index:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="7d1035a8-599b-411b-b1cb-669d018776bf"><ac:parameter ac:name="language">applescript</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[git add light-modules/hello-cloud/]]></ac:plain-text-body></ac:structured-macro><p>Commit the changes with a meaningful commit message:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="51df8cf6-1650-4c2e-be23-1c3971ccf7fa"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[ git commit -m "Add light-module 'hello-cloud'"]]></ac:plain-text-body></ac:structured-macro><p>With this command you have just created a new entry in Git's history. The entry is sent to the Magnolia repository in the next step.&nbsp;</p><p>Send your code to the cloud-based Magnolia repository with the Git <code>push</code> command:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="995e835f-8ee1-439f-b199-17fe170e6f91"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[git push]]></ac:plain-text-body></ac:structured-macro><p>If the push is successful, you see some something like this:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="344b7986-b611-485d-ba80-0c0a4ccac46d"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[Counting objects: 11, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (11/11), 1.40 KiB | 1.40 MiB/s, done.
Total 11 (delta 1), reused 4 (delta 0)
To https://git.magnolia-cms.com/scm/odc/magnolia-docs.git
   79b2c82..ef4fabc  master -> master]]></ac:plain-text-body></ac:structured-macro><p>Finally, run the <code>git status</code> command. You should get something like this:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="4e399d37-0d28-45c5-86b3-f85a05dd16e3"><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean]]></ac:plain-text-body></ac:structured-macro><p class="inline-comment-marker"><br /><ac:image><ri:attachment ri:filename="cloudy_.gif" /></ac:image> Great! <ac:inline-comment-marker ac:ref="01b0c783-1562-4d09-af05-fd77f74001c4"> You've successfully concluded the first part of the tutorial in which you </ac:inline-comment-marker>have created a Magnolia light module and pushed it to your Magnolia Git repository. In the next part of the tutorial you will be working in the Magnolia cockpit.&nbsp;</p><h2 class="inline-comment-marker">B) In the Magnolia cockpit&nbsp;<ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="8789beb8-cb09-49f4-a2f5-da52f1aceb69"><ac:parameter ac:name="">B</ac:parameter></ac:structured-macro></h2><p>The Magnolia cockpit guides you through the next few actions.&nbsp;</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="5bef28f3-11bb-4ea7-8a9a-cccb61d0270d"><ac:rich-text-body><p>Use the credentials you received during the <ac:link><ri:page ri:content-title="Onboarding to Magnolia Cloud" /><ac:plain-text-link-body><![CDATA[onboarding]]></ac:plain-text-link-body></ac:link> process to log into the cockpit and the cloud author instance</p></ac:rich-text-body></ac:structured-macro><h3>4. Install a development snapshot containing the new light module</h3><p>In this section you make the most recent changes (the latest commit to master) available in the Magnolia Integration environment by installing a snapshot.</p><p>Reminder: We assume that you have already&nbsp;<ac:link><ri:page ri:content-title="Setting up a new environment" /><ac:plain-text-link-body><![CDATA[set up]]></ac:plain-text-link-body></ac:link>&nbsp;the Integration, UAT, and Live environments in the Cockpit.</p><p>Log in to the Magnolia cockpit and click&nbsp;<strong>Show package&nbsp;overview&nbsp;</strong>&gt;&nbsp;<strong>Install an update</strong>&nbsp;in the&nbsp;<strong>Installed releases</strong>&nbsp;section towards the bottom of the page.&nbsp;</p><p>On the <strong>Install an update</strong> page click&nbsp;<strong>Install a development snapshot</strong>:</p><p><ac:image ac:width="600"><ri:attachment ri:filename="tutorial4a.png" /></ac:image></p><p>A <ac:link><ri:page ri:content-title="Installing a snapshot" /><ac:plain-text-link-body><![CDATA[two-step wizard]]></ac:plain-text-link-body></ac:link> guides you through how to retrieve your latest commit from the Git repository and install it in the Integration environment. The <strong>Master</strong>&nbsp;option in the wizard includes the hello-cloud light module you committed to Git in step 3 of this tutorial.</p><p>Once you have completed the steps in the wizard, look at the Integration environment in the <strong>Package overview</strong> page.&nbsp;Note the green tick before the instance name and the <strong>Info</strong> column that shows <em>master</em>.</p><p><ac:image ac:width="600"><ri:attachment ri:filename="tutorial4b.png" /></ac:image></p><p>At this point you can check that your module updates are present in the installed snapshot by going to the Magnolia author instance via the <strong>Edit content</strong> link in the Integration section. The state of the light modules should now be identical in both your local Magnolia instance and the cloud-based Integration environment.&nbsp;</p><h3>5. Define a release with the hello-cloud module</h3><p>You now <ac:inline-comment-marker ac:ref="17452d3a-e121-4c95-bd81-e58f55dc68a7"> wrap the snapshot carrying the module updates </ac:inline-comment-marker> into an installable release. In fact, all of the development snapshots installed in the Integration environment since the last release are wrapped into a single release, but in this tutorial there is only one snapshot to wrap. Click&nbsp;<strong>Install an update</strong>&nbsp;in the <strong>Installed releases</strong>&nbsp;section.</p><p>On the&nbsp;<strong>Install an update</strong>&nbsp;page click&nbsp;<strong>Define a new release</strong>:</p><p><ac:image ac:width="600"><ri:attachment ri:filename="tutorial5a.png" /></ac:image></p><p class="inline-comment-marker">Another&nbsp;<ac:link><ri:page ri:content-title="Defining a release" /><ac:plain-text-link-body><![CDATA[three-step wizard]]></ac:plain-text-link-body></ac:link>&nbsp;guides you through how to wrap the snapshot containing the hello-cloud light module into a release.</p><p>Once you have completed the steps in the wizard, look at the Integration environment in the Package overview page.&nbsp;Note that the release is assigned a version number that is displayed<ac:inline-comment-marker ac:ref="6cb46716-62e1-4b6f-ab66-59bf4ae88b80">&nbsp;in the Integration environment section </ac:inline-comment-marker>.&nbsp;You will refer to this version number later on when installing in environments.&nbsp;</p><p><ac:image ac:width="600"><ri:attachment ri:filename="tutorial5b.png" /></ac:image></p><h3>6. Install the new release in the UAT environment</h3><p>After you have defined the release, you install it&nbsp;in the UAT and Live environments. Start with the installation in the UAT environment.</p><p>Click&nbsp;<strong>Install an update</strong>&nbsp;in the <strong>Installed releases</strong>&nbsp;section.</p><p>On the&nbsp;<strong>Install an update</strong>&nbsp;page <ac:inline-comment-marker ac:ref="037c0dbb-e53d-4011-b2e7-c3d6300eed6f"> click </ac:inline-comment-marker>&nbsp;<strong>Install a release</strong>:</p><p><ac:image ac:width="600"><ri:attachment ri:filename="tutorial6a.png" /></ac:image></p><p>Another&nbsp;<ac:link><ri:page ri:content-title="Installing a release in UAT" /><ac:plain-text-link-body><![CDATA[four-step wizard]]></ac:plain-text-link-body></ac:link>&nbsp;guides you through how to install the release to the UAT or Live environment.</p><p><ac:emoticon ac:name="warning" />&nbsp;Choose the release version you have just defined and the <strong>UAT</strong> option in this step of the tutorial. &nbsp;</p><p>Once you have completed the steps in the wizard, look at the UAT environment in the Package overview page.&nbsp;Note that&nbsp;the same release version is now displayed in both the Integration and UAT environment sections.&nbsp;</p><h3>7. Install the release in Live</h3><p>This is the last step in the whole cycle. Installing a release in the Live environment is almost identical to installing in UAT.</p><p>In&nbsp;<strong>Package overview</strong>&nbsp;click&nbsp;<strong>Install an update</strong>&nbsp;and on the next screen choose&nbsp;<strong>Install a release</strong> again.&nbsp;</p><p>This time in the&nbsp;<ac:link><ri:page ri:content-title="Installing a release in Live" /><ac:plain-text-link-body><![CDATA[four-step wizard]]></ac:plain-text-link-body></ac:link>, choose the release version you have just installed in the UAT environment and the&nbsp;<strong>Live</strong>&nbsp;option. &nbsp;</p><p><ac:inline-comment-marker ac:ref="cc0af171-da74-4952-b383-e05f8fab0764"> Once you have completed the steps in the wizard, look at the Live environment in the Package overview page.&nbsp;Note that&nbsp;the same release version is now displayed in all the environment sections. </ac:inline-comment-marker>&nbsp;</p><h3>8. Check the result of the installation in Package overview</h3><p>In <strong>Package overview</strong> all of the <ac:inline-comment-marker ac:ref="cb610d18-01f5-426e-99ad-0379cb1e376c"> environments should now be running&nbsp;your </ac:inline-comment-marker>release <ac:inline-comment-marker ac:ref="ab9552d5-12a0-48ea-afa3-c0d0d4a58744"> version.</ac:inline-comment-marker></p><p>You can now open the author instance in the Live environment and create a new page using the <code>hello-cloud</code> template in the very same way as in <ac:link ac:anchor="A2"><ac:plain-text-link-body><![CDATA[step 2 above]]></ac:plain-text-link-body></ac:link> (<strong>Test the code</strong>). The difference is that the author and public instances are now running as part of your cloud-based Magnolia installation.&nbsp;</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="15a445e6-c109-4d33-87f6-057dbc4e70ca"><ac:rich-text-body><p>Use the credentials you received during the <ac:link><ri:page ri:content-title="Onboarding to Magnolia Cloud" /><ac:plain-text-link-body><![CDATA[onboarding]]></ac:plain-text-link-body></ac:link> process to log into the cloud author instance</p></ac:rich-text-body></ac:structured-macro><p>For example, here we have added a page named &quot;home&quot;&nbsp;using the&nbsp;<code>cloudy-page</code>&nbsp;template, and added the <code>bluesky-component</code>&nbsp;and&nbsp;<code>HTML</code>&nbsp;components to the main area (with an image and some text):</p><p><ac:image ac:width="600"><ri:attachment ri:filename="pages open hello cloudy page.png" /></ac:image></p><p>If you <ac:link><ri:page ri:content-title="Publishing and activation" /><ac:plain-text-link-body><![CDATA[publish]]></ac:plain-text-link-body></ac:link>&nbsp;the page (and in this example, the image), it looks like <ac:inline-comment-marker ac:ref="748789ef-1d0a-4af2-aa89-ef8785ced6b9"> this&nbsp; <span>in the Public instance</span> </ac:inline-comment-marker>:</p><p><ac:image ac:width="600"><ri:attachment ri:filename="published hello cloudy page.png" /></ac:image></p><p><ac:image><ri:attachment ri:filename="cloudy_.gif" /></ac:image>&nbsp; Congratulations, you have completed this tutorial! &nbsp; <ac:image><ri:attachment ri:filename="cloudy_.gif" /></ac:image></p><p>Have a look at the rest of the <ac:link><ri:page ri:content-title="Magnolia Cloud" /></ac:link> or dig further into light module development by learning about <ac:link><ri:page ri:content-title="Magnolia front-end development" /><ac:plain-text-link-body><![CDATA[front-end development in Magnolia]]></ac:plain-text-link-body></ac:link>.</p>

-->
