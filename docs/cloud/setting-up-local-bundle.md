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


## Before you start

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

```bash
magnolia.resources.dir=/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules
```

The property is set automatically if you install the bundle with
[Magnolia CLI](/Magnolia+CLI) `jumpstart` command. If you install the
bundle manually, you also have to set the property manually.

Magnolia bundle
---------------

The Magnolia bundle for local development is bundled with a Tomcat
application server containing the [same apps and
modules](/Magnolia+Cloud/Supported+modules+in+the+cloud) as those
installed in the cloud-based Magnolia package.

:::info
Access to the Magnolia bundle requires credentials to Magnolia Nexus. If
you haven't subscribed to a Magnolia cloud package yet, we suggest you
try out our `magnolia-community-demo-bundle`. It can be installed with
Magnolia CLI and you don't need a license for it.
:::

## Installing the local Magnolia bundle

There are two ways to install the bundle: using Magnolia CLI or
manually.

### Installing with Magnolia CLI

The installation of the bundle with Magnolia CLI is done via the
`jumpstart` command. To be able to install the bundle, you must have
[Magnolia CLI](/Magnolia+CLI#installing) and DX Core or Cloud
credentials to access to the Magnolia [Nexus
repository](https://nexus.magnolia-cms.com). If you do not have
credentials, use our free community edition for this tutorial instead.

Change to the directory where you want to install the bundle:

```bash
cd /Users/<username>/dev/mgnl-bundles
```

Execute the Magnolia CLI `jumpstart` command with the `-p` option
pointing to the `light-modules` directory of [the local Git
repository](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+local+Git+repository).


```bash
mgnl jumpstart -p /Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules
```

You are prompted to choose a Magnolia bundle, choose:

-   `magnolia-dx-core-webapp` if you have already subscribed to Magnolia
    Cloud and have received credentials.
-   `magnolia-community-webapp` if you do not have cloud credentials
    yet.

The jumpstart process may take some time because it includes a download.
Note that the `jumpstart` command automatically sets the
`magnolia.resources.dir` property. Once the setup operation is complete,
you should see a message similar to this one:

```bash
info Magnolia has been successfully setup for light development!
info You can now open a new terminal tab or window and start it up with the CLI command 'mgnl start'
info Magnolia will be ready after a few seconds at localhost:8080/magnoliaAuthor. Username and password is superuser
```

The following files and folders are created:

```bash
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

```bash
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

Remember the path to the `bin` directory. Later on you will start the
bundle from this directory.

Example path:
`/Users/<user-name>/dev/mgnl-bundles/magnolia-<x.y.z.>/apache-tomcat-<x.y.z.>/bin`

### Set the `magnolia.resources.dir` property

Edit the `magnolia.properties` file. The file is located in
`magnolia-<x.y.z.>/apache-tomcat-<x.y.z.>/webapps/magnoliaAuthor/WEB-INF/config/default/magnolia.properties`.
Find the line with the `magnolia.resources.dir` property and change it
to:

```bash
magnolia.resources.dir=/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules
```

## Starting and stopping the bundle


When you have finished configuring the bundle, start it up.

### Starting and stopping with Magnolia CLI

Magnolia CLI looks in the current working directory or parent
directories for the nearest folder with a name that starts with
"apache-tomcat".

Open a shell and execute:

```bash
mgnl start
```

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

```bash
cd /Users/<username>/dev/mgnl-bundles/apache-tomcat/bin
```

If you have installed the bundle from a zip file, execute the following
command:

```bash
cd /Users/<username>/dev/mgnl-bundles/magnolia-<x.x.z>/apache-tomcat-<x.x.z>/bin
```

The `bin` directory contains an executable script which can be used to
start and stop the Tomcat server. Mac, Linux and Solaris users have to
execute the file `magnolia_control.sh`, Windows users have to execute
the `magnolia_control.bat` file. Execute the script with the `start`
option. To shut Magnolia down, use the `stop` option.

### Mac, Linux and Solaris users

Execute the following command:

```bash
./magnolia_control.sh start
```

If you get a low "max open files" error, try executing the command with
the `--ignore-open-files-limit` option:


```bash
./magnolia_control.sh start --ignore-open-files-limit
```

To stop Magnolia, execute:


```bash
./magnolia_control.sh stop
```
:::

### Windows users

Execute the following command:


```bash
magnolia_control.bat start
```
:::

To stop Magnolia, execute:


```bash
magnolia_control.bat stop
```
:::

Tailing the log file
--------------------

:::tip
If your shell knows the `tail` command, you may `tail` the log file to
display a lot of helpful information during the development process. If
you are still in the `bin` directory, execute:


```bash
  tail -f ../logs/catalina.out
```

To stop the `tail`, press `CTRL` + `C`.

Conclude the installation in your web browser
=============================================

To finish the installation of the bundle, open the page
[`http://localhost:8080/magnoliaAuthor/`](http://localhost:8080/magnoliaAuthor/)
in your web browser and follow the instructions shown. Before starting
up the author instance, finish the installation also on the public
instance by opening the page
[`http://localhost:8080/magnoliaPublic/`](http://localhost:8080/magnoliaPublic/).

:::info
When using `magnolia-community-webapp` or `dx-core-webapp`, in your
local public instance, the webapp `magnoliaAuthor` comes with a [virtual
URI mapping](/Administration/URI+mapping/Virtual+URI+mapping) that
redirects `/` to `/.magnolia/admincentral`.

In the cloud environment public instance, `/` redirects to `/home`.

Remove this redirect on your local installation or set it according to
your needs.
:::

