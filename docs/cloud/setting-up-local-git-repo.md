---
title: Setting up a local Git repository
---

Every cloud-based Magnolia package is connected to a Git repository. You
have to clone this repository to your local computer. The Git repository
must contain a folder named `light-modules` - this is the place where
you add new code for new features. You then promote your code to the
remote repository to make it available in the cloud-based Magnolia
package.

This page explains how to set up a local light module folder structure
and synchronize your local folder structure with your Magnolia package
using Git. You therefore need some working knowledge of using
[Git](https://git-scm.com). If you are not familiar with Git, learn a
few basic Git commands such as `clone`, `pull`, `add`, `commit` and
`push`.

Have a look at the
[prerequisites](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud#localdevprereqs)
before you get started.

The Git commands we describe below are presented in command line use.
You can, however, use an application providing a graphical user
interface for Git usage such as
[SourceTree](https://www.sourcetreeapp.com/).

:::info
We assume you are using one Git repository: the one
connected to your Magnolia package. In a more advanced Git setup, you
could use multiple Git repositories: one for development only and
another one connected to Magnolia for deployment.
:::

## Setting up a local light-module repository

Log in to the Magnolia [cockpit](/Magnolia+Cloud/Cockpit) to obtain the
[URL of the Git
repository](/Magnolia+Cloud/Cockpit#additional-information) connected to
your Magnolia package. This information is in the **Additional
information** section of the **Package overview**:

![](/assets/cloud/AdditionalInformation.png)

Open your shell, `cd` into a directory of your choice and clone the
Magnolia repository. Use a directory that does not contain special
characters or spaces within the complete absolute path:

```bash
cd ~/dev/repo/mgnl-cloud-packages
git clone https://<username>@git.magnolia-cms.com/scm/odc/magnolia-docs.git
```

The local repository is the location where you will hold your newly
developed or updated code. It must create a `light-modules` directory to
hold your work. For example:

```bash
magnolia-docs/
└── content/
└── light-modules/
    └── btk/
└── README.md
```

:::info 
Both the Git URL
(`git.magnolia-cms.com/scm/odc/magnolia-docs.git`) and the name of the
directory (`magnolia-docs`) created as a result of the clone operation
are just example names.
:::

## Local light-modules folder path

You must know the path to your `light-modules` directory. All the code
you develop will go into this directory. You need to know the absolute
path when setting up the Magnolia local development bundle. Typical
paths are:

  ----------------------------------- ---------------------------------------------------------------------------------
  Mac                                 `/Users/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules/`

  Linux                               `/home/<username>/dev/repo/mgnl-cloud-packages/magnolia-docs/light-modules/`

  Windows                             `C:\Users\<username>\dev\repo\mgnl-cloud-packages\magnolia-docs\light-modules\`
  ----------------------------------- ---------------------------------------------------------------------------------

