---
title: Setting up a Magnolia bundle for local development
---

This page explains how to set up a Magnolia bundle on your local
computer. The purpose of a local Magnolia instance is to try out new
features locally first. We assume that you already have a [local clone
of the Git
repository](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+local+Git+repository)
which is connected to your Magnolia subscription package. Magnolia
automatically detects new files that you add to the `light-modules`
folder of the local Git repository.

[](!toc)

Before you start
================

Have a look at the
[prerequisites](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud#localdevprereqs)
before you get started.

Make sure you are familiar with the following configuration information.
If not specified otherwise, the paths shown follow Mac usage.

Path to the local Git repository
--------------------------------

Note the path to your local Git repository.\
Example: `/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs`

Path to the light-modules folder
--------------------------------

Note your `light-modules` folder, which is a subfolder of the local Git
repository.\
Example:
`/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules`

Magnolia bundle installation directory
--------------------------------------

Note the Magnolia bundle installation directory. This is the directory
in which you install the local development bundle. When choosing a name,
remember:

-   You need write permission for the folder.
-   It cannot be a subdirectory of the local Git repository.
-   Do not use special characters (including spaces) in the folder name.
-   Example name: `/Users/<username>/dev/mgnl-bundles`

`magnolia.resources.dir` property
---------------------------------

[/\_i/\_What+is+magnolia.resources.dir](!include)

During setup you set the `magnolia.resources.dir` property to point to
your light-modules folder. For example:

::: {.codebox}
``` {.bash}
magnolia.resources.dir=/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules
```
:::

The property is set automatically if you install the bundle with
[Magnolia CLI](/Magnolia+CLI) `jumpstart` command. If you install the
bundle manually, you also have to set the property manually.

Magnolia bundle
---------------

The Magnolia bundle for local development is bundled with a Tomcat
application server containing the [same apps and
modules](/Magnolia+Cloud/Supported+modules+in+the+cloud) as those
installed in the cloud-based Magnolia package.

::: {.info}
Access to the Magnolia bundle requires credentials to Magnolia Nexus. If
you haven't subscribed to a Magnolia cloud package yet, we suggest you
try out our `magnolia-community-demo-bundle`. It can be installed with
Magnolia CLI and you don't need a license for it.
:::

Installing the local Magnolia bundle
====================================

There are two ways to install the bundle: using Magnolia CLI or
manually.

Installing with Magnolia CLI
----------------------------

The installation of the bundle with Magnolia CLI is done via the
`jumpstart` command. To be able to install the bundle, you must have
[Magnolia CLI](/Magnolia+CLI#installing) and DX Core or Cloud
credentials to access to the Magnolia [Nexus
repository](https://nexus.magnolia-cms.com). If you do not have
credentials, use our free community edition for this tutorial instead.

Change to the directory where you want to install the bundle:

::: {.codebox}
``` {.bash}
cd /Users/<username>/dev/mgnl-bundles
```
:::

Execute the Magnolia CLI `jumpstart` command with the `-p` option
pointing to the `light-modules` directory of [the local Git
repository](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+local+Git+repository).

::: {.codebox}
``` {.bash}
mgnl jumpstart -p /Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules
```
:::

You are prompted to choose a Magnolia bundle, choose:

-   `magnolia-dx-core-webapp` if you have already subscribed to Magnolia
    Cloud and have received credentials.
-   `magnolia-community-webapp` if you do not have cloud credentials
    yet.

The jumpstart process may take some time because it includes a download.
Note that the `jumpstart` command automatically sets the
`magnolia.resources.dir` property. Once the setup operation is complete,
you should see a message similar to this one:

::: {.codebox}
``` {.bash}
info Magnolia has been successfully setup for light development!
info You can now open a new terminal tab or window and start it up with the CLI command 'mgnl start'
info Magnolia will be ready after a few seconds at localhost:8080/magnoliaAuthor. Username and password is superuser
```
:::

The following files and folders are created:

::: {.codebox}
``` {.bash}
mgnl-bundles/
 ├── apache-tomcat/
 │ ├── bin/
 │ ├── conf/
 │ ├── lib/
 │ ├── logs/
 │ ├── temp/
 │ └── webapps/
 ├── downloads/
 └── light-modules
```
:::

Remember the path to the `bin` directory. Later on you will start the
bundle from this directory.

Example path: `/Users/<username>/dev/mgnl-bundles/apache-tomcat/bin`.

Installing the bundle manually
------------------------------

### Download and unzip the bundle

Download the bundle manually. Here is a link to the latest version:
[magnolia-cloud-bundle](%5B(%22artifactId%22,%22magnolia-dx-core-webapp%22),(%22groupId%22,%22info.magnolia.dx%22),(%22label%22,%22magnolia-cloud-bundle%22),(%22renderType%22,%22download_link%22),(%22resourceType%22,%22ZIP%22)%5D).
Move the zip file to the installation directory and unzip it. The
following structure is created:

::: {.codebox}
``` {.bash}
mgnl-bundles/
└── magnolia-<x.y.z.>/
    ├── add-ons/
    │ └── magnolia-templating-samples-<x.y.z.>/
    └── apache-tomcat-<x.y.z.>/
        ├── bin/
        ├── conf/
        ├── lib/
        ├── logs/
        ├── temp/
        └── webapps/
```
:::

Remember the path to the `bin` directory. Later on you will start the
bundle from this directory.

Example path:
`/Users/<user-name>/dev/mgnl-bundles/magnolia-<x.y.z.>/apache-tomcat-<x.y.z.>/bin`

### Set the `magnolia.resources.dir` property

Edit the `magnolia.properties` file. The file is located in
`magnolia-<x.y.z.>/apache-tomcat-<x.y.z.>/webapps/magnoliaAuthor/WEB-INF/config/default/magnolia.properties`.
Find the line with the `magnolia.resources.dir` property and change it
to:

::: {.codebox}
``` {.bash}
magnolia.resources.dir=/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules
```
:::

Starting and stopping the bundle
================================

When you have finished configuring the bundle, start it up.

Starting and stopping with Magnolia CLI
---------------------------------------

Magnolia CLI looks in the current working directory or parent
directories for the nearest folder with a name that starts with
"apache-tomcat".

Open a shell and execute:

::: {.codebox}
``` {.bash}
mgnl start
```
:::

The command executes the start script and also
[tails](https://en.wikipedia.org/wiki/Tail_%28Unix%29) the log of the
Tomcat server.

To stop Magnolia, use CTRL+C.

For further information, refer to the [Magnolia CLI
documentation](/Magnolia+CLI).

Starting and stopping the bundle with the `magnolia_control` script
-------------------------------------------------------------------

Open a shell and go to the `bin` directory of your Magnolia Tomcat
bundle. If you have installed the bundle using Magnolia CLI `jumpstart`,
execute the following command:

::: {.codebox}
``` {.bash}
cd /Users/<username>/dev/mgnl-bundles/apache-tomcat/bin
```
:::

If you have installed the bundle from a zip file, execute the following
command:

::: {.codebox}
``` {.bash}
cd /Users/<username>/dev/mgnl-bundles/magnolia-<x.x.z>/apache-tomcat-<x.x.z>/bin
```
:::

The `bin` directory contains an executable script which can be used to
start and stop the Tomcat server. Mac, Linux and Solaris users have to
execute the file `magnolia_control.sh`, Windows users have to execute
the `magnolia_control.bat` file. Execute the script with the `start`
option. To shut Magnolia down, use the `stop` option.

### Mac, Linux and Solaris users

Execute the following command:

::: {.codebox}
``` {.bash}
./magnolia_control.sh start
```
:::

If you get a low "max open files" error, try executing the command with
the `--ignore-open-files-limit` option:

::: {.codebox}
``` {.bash}
./magnolia_control.sh start --ignore-open-files-limit
```
:::

To stop Magnolia, execute:

::: {.codebox}
``` {.bash}
./magnolia_control.sh stop
```
:::

### Windows users

Execute the following command:

::: {.codebox}
``` {.bash}
magnolia_control.bat start
```
:::

To stop Magnolia, execute:

::: {.codebox}
``` {.bash}
magnolia_control.bat stop
```
:::

Tailing the log file
--------------------

::: {.tip}
If your shell knows the `tail` command, you may `tail` the log file to
display a lot of helpful information during the development process. If
you are still in the `bin` directory, execute:

::: {.codebox}
``` {.bash}
  tail -f ../logs/catalina.out
```
:::

To stop the `tail`, press `CTRL` + `C`.
:::

Conclude the installation in your web browser
=============================================

To finish the installation of the bundle, open the page
[`http://localhost:8080/magnoliaAuthor/`](http://localhost:8080/magnoliaAuthor/)
in your web browser and follow the instructions shown. Before starting
up the author instance, finish the installation also on the public
instance by opening the page
[`http://localhost:8080/magnoliaPublic/`](http://localhost:8080/magnoliaPublic/).

::: {.info}
When using `magnolia-community-webapp` or `dx-core-webapp`, in your
local public instance, the webapp `magnoliaAuthor` comes with a [virtual
URI mapping](/Administration/URI+mapping/Virtual+URI+mapping) that
redirects `/` to `/.magnolia/admincentral`.

In the cloud environment public instance, `/` redirects to `/home`.

Remove this redirect on your local installation or set it according to
your needs.
:::

Next:

[Developing and
testing](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Developing+and+testing)

```{=html}
<!-- Original Confluence content:

<p>This page explains how to set up a Magnolia bundle on your local computer. The purpose of a local Magnolia instance is to try out new features locally first.&nbsp;We assume that you already have a <ac:link><ri:page ri:content-title="Setting up a local Git repository" /><ac:plain-text-link-body><![CDATA[local clone of the Git repository]]></ac:plain-text-link-body></ac:link> which is connected to your Magnolia subscription package. Magnolia automatically detects new files that you add to the&nbsp;<code style="letter-spacing: 0.0px;">light-modules</code>&nbsp;folder of the local Git repository.</p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="889a2864-ec8c-485d-9c94-d5e444273ce1"><ac:parameter ac:name="maxLevel">3</ac:parameter></ac:structured-macro></p><h2>Before you start</h2><p>Have a look at the&nbsp;<ac:link ac:anchor="localdevprereqs"><ri:page ri:content-title="Developing for Magnolia in the cloud" /><ac:plain-text-link-body><![CDATA[prerequisites]]></ac:plain-text-link-body></ac:link>&nbsp;before you get started.</p><p>Make sure you are familiar with the following configuration information. If not specified otherwise, the paths shown follow Mac usage.</p><h3>Path to the local Git repository</h3><p>Note the path to your local Git repository.<br />Example: <code>/Users/&lt;username&gt;/dev/repo/mgnl-cloud-packages/magnolia-docs&nbsp;</code></p><h3>Path to the light-modules folder</h3><p>Note your&nbsp;<code>light-modules</code>&nbsp;folder, which is a subfolder of the local Git repository.<br />Example:&nbsp;<code>/Users/&lt;username&gt;/dev/repo/mgnl-cloud-packages/<span>magnolia-docs</span>/light-modules</code></p><h3 style="list-style-type: none;background-image: none;">Magnolia bundle installation directory</h3><p>Note the Magnolia bundle installation directory. This is the directory in which you install the local development bundle. When choosing a name, remember: &nbsp;</p><ul><li>You need write permission for the folder.</li><li>It cannot be a subdirectory of the&nbsp;local Git repository.&nbsp;</li><li>Do not use special characters (including spaces) in the folder name.</li><li>Example name: &nbsp;<code>/Users/&lt;username&gt;/dev/mgnl-bundles</code></li></ul><h3><code>magnolia.resources.dir</code>&nbsp;property</h3><p><ac:structured-macro ac:name="include" ac:schema-version="1" ac:macro-id="4362849e-e64d-4199-98a3-a3f1e5d12e33"><ac:parameter ac:name=""><ac:link><ri:page ri:content-title="_What is magnolia.resources.dir" /></ac:link></ac:parameter></ac:structured-macro></p><p>During setup you set the&nbsp;<code>magnolia.resources.dir</code>&nbsp;property to point to your light-modules folder. For example:</p><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="f8695af2-13a7-44e6-8900-f90efc49b6ba"><ac:parameter ac:name="language">bash</ac:parameter><ac:plain-text-body><![CDATA[magnolia.resources.dir=/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules]]></ac:plain-text-body></ac:structured-macro><p>The property is&nbsp;set automatically if you install the bundle with&nbsp;<ac:link><ri:page ri:content-title="Magnolia CLI" /></ac:link> <code>jumpstart</code>&nbsp;command. If you install the bundle manually, you also have to set the property manually.</p><h3>Magnolia bundle</h3><p>The Magnolia bundle for local development is bundled with a Tomcat application server containing the <ac:link><ri:page ri:content-title="Supported modules in the cloud" /><ac:plain-text-link-body><![CDATA[same apps and modules]]></ac:plain-text-link-body></ac:link> as those installed in the cloud-based Magnolia package.&nbsp;&nbsp;</p><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="2ff6fe7d-f4f1-4797-a41d-0234d54a5a8e"><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p>Access to the Magnolia bundle requires credentials to Magnolia Nexus.&nbsp;If you haven't subscribed to a Magnolia cloud package yet, we suggest you try out our <code>magnolia-community-demo-bundle</code>. It can be installed with Magnolia CLI and you don't need a license for it.</p></ac:rich-text-body></ac:structured-macro><h2>Installing the local Magnolia bundle</h2><p>There are two ways to install the bundle: using Magnolia CLI or manually.</p><h3>Installing with Magnolia CLI</h3><p>The installation of the bundle with <ac:inline-comment-marker ac:ref="36d73081-5b89-4e35-9366-3c9d1bb0cc32"> Magnolia CLI </ac:inline-comment-marker> is done via the <code>jumpstart</code> command. To be able to install the bundle, you must have&nbsp;<ac:link ac:anchor="Installing"><ri:page ri:content-title="Magnolia CLI" /><ac:plain-text-link-body><![CDATA[Magnolia CLI]]></ac:plain-text-link-body></ac:link>&nbsp;and DX Core or Cloud credentials to access to the Magnolia&nbsp;<a href="https://nexus.magnolia-cms.com">Nexus repository</a>. If you do not have credentials, use our free community edition for this tutorial instead.&nbsp;</p><p>Change to the directory where you want to install the bundle:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="447a0c6b-3904-4bcc-aff8-54254b45bdca"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[cd /Users/<username>/dev/mgnl-bundles]]></ac:plain-text-body></ac:structured-macro><p><span>Execute the Magnolia CLI&nbsp;<code><span>jumpstart</span></code>&nbsp;command with the&nbsp;</span> <code>-p</code>&nbsp;option pointing to the&nbsp;<code>light-modules</code>&nbsp;directory&nbsp;of&nbsp;<ac:link><ri:page ri:content-title="Setting up a local Git repository" /><ac:plain-text-link-body><![CDATA[the local Git repository]]></ac:plain-text-link-body></ac:link>.</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="01007177-8e79-4151-8d89-f5f1f23e1021"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[mgnl jumpstart -p /Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules]]></ac:plain-text-body></ac:structured-macro><p>You are prompted to choose a Magnolia bundle, choose:</p><ul><li><span class="s1"><code>magnolia-dx-core-webapp</code>&nbsp;if you have already subscribed to Magnolia Cloud and have received credentials.</span></li><li class="p1"><span class="s1"><code>magnolia-community-webapp</code>&nbsp;<ac:inline-comment-marker ac:ref="f6ce6b31-416e-41cc-91a6-27797d4ddeb8">if you do not have cloud credentials yet.</ac:inline-comment-marker> </span></li></ul><p>The jumpstart process may take some time because it includes a download. Note that the <code>jumpstart</code> command automatically sets the&nbsp;<code>magnolia.resources.dir</code> property. Once the setup operation is complete, you should see a message similar to this one:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="9924e533-3276-44f2-aa26-3da2a3fc07c7"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[info Magnolia has been successfully setup for light development!
info You can now open a new terminal tab or window and start it up with the CLI command 'mgnl start'
info Magnolia will be ready after a few seconds at localhost:8080/magnoliaAuthor. Username and password is superuser]]></ac:plain-text-body></ac:structured-macro><p>The following files and folders are created:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="8e33e9ac-2eb7-4613-b828-c9077a7a890d"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[mgnl-bundles/
 ├── apache-tomcat/ 
 │   ├── bin/ 
 │   ├── conf/ 
 │   ├── lib/ 
 │   ├── logs/ 
 │   ├── temp/ 
 │   └── webapps/ 
 ├── downloads/
 └── light-modules]]></ac:plain-text-body></ac:structured-macro><p>Remember the path to the&nbsp;<code>bin</code> directory. Later on you will start the bundle from this directory.</p><p>Example path: &nbsp;<code>/Users/&lt;username&gt;/dev/mgnl-bundles/apache-tomcat/bin</code>.</p><h3>Installing the bundle manually</h3><h4>Download and unzip the bundle</h4><p>Download the bundle manually. Here is a link to the latest version: <ac:structured-macro ac:name="artifact-resource-macro" ac:schema-version="1" ac:macro-id="cf8b41f5-c9a1-40dc-8ce5-97991cd766a5"><ac:parameter ac:name="groupId">info.magnolia.dx</ac:parameter><ac:parameter ac:name="artifactId">magnolia-dx-core-webapp</ac:parameter><ac:parameter ac:name="label">magnolia-cloud-bundle</ac:parameter><ac:parameter ac:name="renderType">download_link</ac:parameter><ac:parameter ac:name="resourceType">ZIP</ac:parameter></ac:structured-macro>. Move the zip file to the installation directory and unzip it. The following structure is&nbsp;created:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="3e578c65-b542-47e2-9dc8-37470dafdd9a"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[mgnl-bundles/
└── magnolia-<x.y.z.>/
    ├── add-ons/
    │   └── magnolia-templating-samples-<x.y.z.>/
    └── apache-tomcat-<x.y.z.>/
        ├── bin/
        ├── conf/
        ├── lib/
        ├── logs/
        ├── temp/
        └── webapps/]]></ac:plain-text-body></ac:structured-macro><p>Remember the path to the&nbsp;<code>bin</code> directory. Later on you will start the bundle from this directory.</p><p>Example path: &nbsp;<code>/Users/&lt;user-name&gt;/dev/mgnl-bundles/magnolia-&lt;x.y.z.&gt;/apache-tomcat-&lt;x.y.z.&gt;/bin</code></p><h4>Set the <code>magnolia.resources.dir</code> property</h4><p>Edit the <code>magnolia.properties</code> file. The file is located in <code>magnolia-&lt;x.y.z.&gt;/apache-tomcat-&lt;x.y.z.&gt;/webapps/magnoliaAuthor/WEB-INF/config/default/magnolia.properties</code> . Find the line with the&nbsp;<code>magnolia.resources.dir</code> property and change it to:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="bba3ed61-2003-4f75-a072-0ebb0fde1369"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[magnolia.resources.dir=/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules]]></ac:plain-text-body></ac:structured-macro><h2>Starting and stopping the bundle</h2><p>When you have finished configuring the bundle,&nbsp;start it up.</p><h3>Starting and stopping with Magnolia CLI</h3><p>Magnolia CLI looks in the current working directory or parent directories for the nearest folder with a name that starts with &quot;apache-tomcat&quot;.&nbsp;</p><p>Open a shell and execute:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="583d3fe4-71d6-4f38-9889-5b723cf4cea5"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[mgnl start]]></ac:plain-text-body></ac:structured-macro><p>The command executes the start script and also&nbsp;<a href="https://en.wikipedia.org/wiki/Tail_(Unix)">tails</a> the log of the Tomcat server.</p><p>To stop Magnolia, use CTRL+C.&nbsp;</p><p>For further information, refer to the <ac:link><ri:page ri:content-title="Magnolia CLI" /><ac:plain-text-link-body><![CDATA[Magnolia CLI documentation]]></ac:plain-text-link-body></ac:link>.&nbsp;</p><h3>Starting and stopping the bundle with the <code style="font-size: 19.39px;">magnolia_control</code> script</h3><p>Open a shell and go to the&nbsp;<code>bin</code>&nbsp;directory of your Magnolia Tomcat bundle. If you have installed the bundle using Magnolia CLI&nbsp;<code>jumpstart</code>, execute the following command:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="904c393a-bef8-4b2d-b00e-72d380a40c5e"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[cd /Users/<username>/dev/mgnl-bundles/apache-tomcat/bin]]></ac:plain-text-body></ac:structured-macro><p>If you have installed the bundle from a zip file, execute the following command:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="c6064f02-21d1-447c-9c0e-b7919b57c5e0"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[cd /Users/<username>/dev/mgnl-bundles/magnolia-<x.x.z>/apache-tomcat-<x.x.z>/bin]]></ac:plain-text-body></ac:structured-macro><p>The <code>bin</code> directory contains an <ac:inline-comment-marker ac:ref="abecacf8-7f38-4859-b0a8-69bc1aa153d2"> executable script which can be used to start and stop </ac:inline-comment-marker> the Tomcat server. Mac, Linux and Solaris users have to execute the file&nbsp;<code>magnolia_control.sh</code>, Windows users have to execute the <code>magnolia_control.bat</code> file. Execute the script with the&nbsp;<code>start</code> option. To shut Magnolia down, use the&nbsp;<code>stop</code> option.</p><h4>Mac, Linux and Solaris users</h4><p>Execute the following command:</p><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="7178553a-6cf7-4a45-8573-9d46f0fd5715"><ac:parameter ac:name="language">bash</ac:parameter><ac:plain-text-body><![CDATA[./magnolia_control.sh start]]></ac:plain-text-body></ac:structured-macro><p>If you get a low &quot;max open files&quot; error, try executing the command with the&nbsp;<code>--ignore-open-files-limit</code>&nbsp;option:</p><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="b69a8beb-7595-4c55-9cc1-7662b020934f"><ac:parameter ac:name="language">bash</ac:parameter><ac:plain-text-body><![CDATA[./magnolia_control.sh start --ignore-open-files-limit]]></ac:plain-text-body></ac:structured-macro><p><span>To stop Magnolia, execute:</span></p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="0f92d92e-13dc-4fc4-9273-843cc49cb634"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[./magnolia_control.sh stop]]></ac:plain-text-body></ac:structured-macro><h4>Windows users</h4><p>Execute the following command:&nbsp;</p><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="4a5d8628-438c-4bbb-8d9b-1f0d02f6b4d0"><ac:parameter ac:name="language">bash</ac:parameter><ac:plain-text-body><![CDATA[magnolia_control.bat start]]></ac:plain-text-body></ac:structured-macro><p>To stop Magnolia, execute:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="09715d8f-3dd6-4a33-aadc-2ff3cac890d1"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[magnolia_control.bat stop]]></ac:plain-text-body></ac:structured-macro><h3>Tailing the log file</h3><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="90e9f227-3030-478b-9ac4-5ac9d0019d01"><ac:rich-text-body><p>If your shell knows the <code>tail</code> command, you may <code>tail</code> the log file to display a lot of helpful information during the development process. If you are still in the <code>bin</code> directory, execute:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="e70fe1f2-7759-4406-b7d7-b5bca976e5ff"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
      INLINE
     </ac:parameter><ac:plain-text-body><![CDATA[tail -f ../logs/catalina.out]]></ac:plain-text-body></ac:structured-macro><p class="auto-cursor-target">To stop the <code>tail</code> , press <code>CTRL</code> + <code>C</code>.</p></ac:rich-text-body></ac:structured-macro><h2>Conclude the installation in your web browser</h2><p>To finish the installation of the bundle, open the page <code> <a href="http://localhost:8080/magnoliaAuthor/">http://localhost:8080/magnoliaAuthor/</a>
  </code>&nbsp;in your web browser and follow the instructions shown. Before starting up the author instance, finish the installation also on the public instance by opening the page <code> <a href="http://localhost:8080/magnoliaPublic/">http://localhost:8080/magnoliaPublic/</a>
  </code>&nbsp;.</p><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="f73e2341-4a8d-4b3c-8006-1207fc3e92d7"><ac:rich-text-body><p>When using <code>magnolia-community-webapp</code> or <code><span style="color: rgb(0,0,0);">dx-core-webapp</span></code>, in your local public instance, the webapp <code>magnoliaAuthor</code> comes with a <ac:link><ri:page ri:content-title="Virtual URI mapping" /><ac:plain-text-link-body><![CDATA[virtual URI mapping]]></ac:plain-text-link-body></ac:link> that redirects <code>/</code> to <code>/.magnolia/admincentral</code>.</p><p>In the cloud environment public instance, <code>/</code> redirects to <code>/home</code>.</p><p>Remove this redirect on your local installation or set it according to your needs.</p></ac:rich-text-body></ac:structured-macro><p><br /></p><p>Next:&nbsp;</p><ac:structured-macro ac:name="mgnl-aui-button-inline" ac:schema-version="1" ac:macro-id="63c2649b-296b-417d-a2d3-65648626ffa1"><ac:parameter ac:name="Type">
    Normal
   </ac:parameter><ac:parameter ac:name="IconClass">
    aui-iconfont-editor-task
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p><ac:link><ri:page ri:content-title="Developing and testing" /></ac:link></p></ac:rich-text-body></ac:structured-macro><p><br /></p><div><span style="white-space: pre-wrap;"> <br /></span></div>

-->
```
