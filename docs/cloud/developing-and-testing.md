---
title: Developing and testing
---

Once you have [set up a local Git
repository](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+local+Git+repository)
and [a local
development](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+Magnolia+bundle+for+local+development),
you are ready to start developing.

:::tip
When adding new features to your local light-modules folder, always test
them on your local Magnolia bundle before pushing them to the remote Git
repository.
:::

This page offers some insights about the development process itself:
writing the code to create new features for your Magnolia cloud package.


Developing
==========

Develop with a running local instance
-------------------------------------

We recommend you develop with a [running local Magnolia
instance](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+Magnolia+bundle+for+local+development).
Whenever you add a file to the light-module folder, Magnolia detects it
and makes the file available to the system. In this way you can test and
use your newly developed features directly.

:::tip
Use the [Definitions app](/Apps/List+of+apps/Definitions+app) and/or
[tail the
log](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+Magnolia+bundle+for+local+development#tailthelogfile).
Both display valuable information during code development, for example,
whether your new items contain errors.
:::

Add your code to the light-modules folder
-----------------------------------------

We assume that you have already [set up a local Git
repository](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+local+Git+repository).
When developing new features for your Magnolia cloud package, all code
and all the resources must go into the light-modules folder of your
local Git repository.

By introducing a new feature you expand an existing light module or
create a new one.

[/\_i/\_what+is+a+light+module](!include)

Read [Module structure](/Modules/Module+structure) to understand the
folder and file structure of a Magnolia light module.

:::tip
If you need to create a new light module, use the following [Magnolia
CLI](/Magnolia+CLI) command:

`mgnl create-light-module <module-name>`\
It is much faster than doing it manually.

:warning: Use only the characters from the `[a-zA-Z0-9-_]` regex range
for the module name.
:::

Use Magnolia CLI
----------------

[Magnolia CLI](/Magnolia+CLI) is an [npm](https://www.npmjs.com/)
package providing a command line interface (CLI) tool to set up and
facilitate light development with Magnolia. It speeds up your work,
helps avoid too many boilerplate tasks and is fun to use. Wondering
whether you have already installed Magnolia CLI? Just open a shell,
enter the following and press Return:

``` {.bash}
mgnl help
```

If you get "mgnl: command not found"*, * you should [install Magnolia
CLI](/Magnolia+CLI#installing).

The Magnolia CLI provides commands to create an empty light module,
create a page and template components within a light module and other
similar things. It creates all the necessary files (template definition,
template script, dialog definition) and links them together on the basis
of prototypes which you can modify per project or per light module. It
is a powerful tool for agile development. Please note that Magnolia CLI
is still under development and gets new features continuously. If you
are familiar with it and have some cool ideas for new features it is
lacking so far, please let us know via the [Suggestion
Box](/DEV/Suggestion+Box).

Build templates
---------------

Writing templates is a very common task when it comes to development. If
you are completely new to templating, have a look at some of the
following pages to learn the basics: [Template
definition](/Templating/Template+definition), [Dialog
definition](/Templating/Dialog+definition), [Template
scripts](/Templating/Template+scripts). Since the code of template
scripts has to be written in [FreeMarker](http://freemarker.org/), also
see the [Directives](/Templating/Template+scripts/Directives) page
explaining some of the most commonly used standard FreeMarker
directives, as well as Magnolia-specific directives.

:::tip
Learn how to use the built-in templating functions such as
[`cmsfn`](/Templating/Template+scripts/Templating+functions/cmsfn),
[`damfn`](/Templating/Template+scripts/Templating+functions/damfn),
[`sitefn`](/Templating/Template+scripts/Templating+functions/sitefn),
[`catfn`](/Templating/Template+scripts/Templating+functions/catfn),
[`searchfn`](/Templating/Template+scripts/Templating+functions/searchfn),
[`restfn`](/Templating/Template+scripts/Templating+functions/restfn),
[`resfn`](/Templating/Template+scripts/Templating+functions/resfn),
[`imgfn`](/Templating/Template+scripts/Templating+functions/imgfn),
[`navfn`](/Templating/Template+scripts/Templating+functions/navfn),
[`jsonfn`](/Templating/Template+scripts/Templating+functions/jsonfn) and
[`tagfn`](/Templating/Template+scripts/Templating+functions/tagfn).
These functions can be used in FreeMarker scripts and provide methods to
accomplish very common tasks that would be complicated to resolve with
FreeMarker directives only.
:::

Development tutorial for Magnolia in the cloud
----------------------------------------------

![](cloudy_.gif){.inline} Follow the [Hello-cloud
tutorial](/Magnolia+Cloud/Hello-cloud+-+a+development+tutorial). It
presents the complete Magnolia development cycle step-by-step based on a
concrete example. In the tutorial you create a light module named
**hello-cloud** on your local machine and bring it to your cloud-based
Magnolia Live environment. All this with just a few clicks and in just a
few minutes!

See also [Light development in
Magnolia](/Developing/Light+development+in+Magnolia) and [Magnolia
front-end development](/Developing/Magnolia+front-end+development) and
[stay updated](/Support/Stay+updated).

Testing
=======

Testing should always be a part of your development process. In the
context of local development, your goal should be to have error-free
code before you push it to the remote Git repository. Test your code
before you commit and push it with Git. Later on when your new code is
in the cloud-based Magnolia package, test it again in the Integration
environment before asking your editors and managers to do user
acceptance testing in the UAT environment and finally going public in
the Live environment.

Later, if you need to test new development work on the basis of real
content that is already deployed in the UAT or Live environments, you
can [copy content from an environment for testing
purposes](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Copying+content+for+testing).


