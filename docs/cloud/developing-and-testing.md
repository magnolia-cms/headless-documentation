---
title: Developing and testing
---

Once you have [set up a local Git
repository](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+local+Git+repository)
and [a local
development](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+Magnolia+bundle+for+local+development),
you are ready to start developing.

::: {.tip}
When adding new features to your local light-modules folder, always test
them on your local Magnolia bundle before pushing them to the remote Git
repository.
:::

This page offers some insights about the development process itself:
writing the code to create new features for your Magnolia cloud package.

[](!toc)

Developing
==========

Develop with a running local instance
-------------------------------------

We recommend you develop with a [running local Magnolia
instance](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+Magnolia+bundle+for+local+development).
Whenever you add a file to the light-module folder, Magnolia detects it
and makes the file available to the system. In this way you can test and
use your newly developed features directly.

::: {.tip}
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

::: {.tip}
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

::: {.codebox}
``` {.bash}
mgnl help
```
:::

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

::: {.tip}
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

Next:

[Committing and pushing to the remote Magnolia Git
repository](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Committing+and+pushing+to+the+remote+Magnolia+Git+repository)

```{=html}
<!-- Original Confluence content:

<p><ac:inline-comment-marker ac:ref="56afae69-6428-4c1a-8804-c17de2c4de99"> Once you have <ac:link><ri:page ri:content-title="Setting up a local Git repository" /><ac:plain-text-link-body><![CDATA[set up a local Git repository]]></ac:plain-text-link-body></ac:link> and <ac:link><ri:page ri:content-title="Setting up a Magnolia bundle for local development" /><ac:plain-text-link-body><![CDATA[a local development]]></ac:plain-text-link-body></ac:link>, you are ready to start developing.&nbsp;</ac:inline-comment-marker></p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="43d30235-f3c8-4413-b421-b7ee3a3783d1"><ac:rich-text-body><p>When adding&nbsp;new features to your local light-modules folder, always&nbsp;test them on your local Magnolia bundle before pushing&nbsp;them to the remote Git repository.</p></ac:rich-text-body></ac:structured-macro><p><ac:inline-comment-marker ac:ref="56afae69-6428-4c1a-8804-c17de2c4de99">This page offers some insights about the development process </ac:inline-comment-marker> itself: writing the code to create new features for your Magnolia cloud package.</p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="d478dbff-9d82-439c-b675-85d2a321170d" /></p><h2>Developing</h2><h3>Develop with a running local instance</h3><p>We recommend you develop with a <ac:link><ri:page ri:content-title="Setting up a Magnolia bundle for local development" /><ac:plain-text-link-body><![CDATA[running local Magnolia instance]]></ac:plain-text-link-body></ac:link>.&nbsp;Whenever you add a file to the light-module folder, Magnolia detects it and makes the file available to the system. In this way you can test and use your newly developed features directly.&nbsp;</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="4c0a28d8-1ff3-4050-9842-735366271a37"><ac:rich-text-body><p>Use the <ac:link><ri:page ri:content-title="Definitions app" /></ac:link> and/or <ac:link ac:anchor="tailthelogfile"><ri:page ri:content-title="Setting up a Magnolia bundle for local development" /><ac:plain-text-link-body><![CDATA[tail the log]]></ac:plain-text-link-body></ac:link>. Both display valuable information during code development, for example, whether your new items <ac:inline-comment-marker ac:ref="9a4ab831-220e-49aa-801c-4a8a6ddc9d12">contain </ac:inline-comment-marker>errors.</p></ac:rich-text-body></ac:structured-macro><h3>Add your code to the light-modules folder</h3><p>We assume that you have already&nbsp;<ac:link><ri:page ri:content-title="Setting up a local Git repository" /><ac:plain-text-link-body><![CDATA[set up a local Git repository]]></ac:plain-text-link-body></ac:link>.&nbsp;<span>When developing new features for your Magnolia cloud package, all code and all the resources must go into the light-modules folder of your local Git repository.&nbsp;</span></p><p>By introducing a new feature you expand an existing light module or create a new one.</p><ac:structured-macro ac:name="expand" ac:schema-version="1" ac:macro-id="73db2d39-9a43-47b6-b77f-6f6c52aa7c7a"><ac:parameter ac:name="title">
    What is a light module?
   </ac:parameter><ac:rich-text-body><p><ac:structured-macro ac:name="include" ac:schema-version="1" ac:macro-id="8fdd632f-0249-412a-a65b-f35415d3fbd3"><ac:parameter ac:name=""><ac:link><ri:page ri:content-title="_what is a light module" /></ac:link></ac:parameter></ac:structured-macro></p></ac:rich-text-body></ac:structured-macro><p><span>Read </span> <ac:link><ri:page ri:content-title="Module structure" /></ac:link> <span> to understand the folder and file structure of a Magnolia light module.</span></p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="6829e89e-53f5-445e-8035-5a245bb14fa3"><ac:rich-text-body><p>If you need to create a new light module, use the following <ac:link><ri:page ri:content-title="Magnolia CLI" /></ac:link> command:</p><p><code>mgnl create-light-module &lt;module-name&gt;</code> <br />It is much faster than doing it manually.</p><p><img class="emoticon emoticon-warning" title="(warning)" alt="(warning)" border="0" src="https://wiki.magnolia-cms.com/s/en_GB/7109/9af699845080e5027a80c674ed9e6d30a44ff7e8/_/images/icons/emoticons/warning.png" />&nbsp;Use only the characters from the <code>[a-zA-Z0-9-_]</code> regex range for the module name.</p></ac:rich-text-body></ac:structured-macro><h3>Use Magnolia CLI</h3><p><ac:link><ri:page ri:content-title="Magnolia CLI" /></ac:link> is an&nbsp;<a href="https://www.npmjs.com/">npm</a>&nbsp;package providing a&nbsp;command line interface&nbsp;(CLI) tool to set up and facilitate light development with Magnolia. It speeds up your work, helps avoid too many boilerplate tasks and is fun to use. Wondering whether you have already installed Magnolia CLI? Just open a shell, enter the following and press Return:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="5a163058-6123-4540-8929-411c2b1a78ef"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:plain-text-body><![CDATA[mgnl help]]></ac:plain-text-body></ac:structured-macro><p>If you get &quot;mgnl: command not found&quot;<em>, </em>you should <ac:link ac:anchor="Installing"><ri:page ri:content-title="Magnolia CLI" /><ac:plain-text-link-body><![CDATA[install Magnolia CLI]]></ac:plain-text-link-body></ac:link>.</p><p>The Magnolia CLI provides commands to create an empty light module, create a page and template components within a light module and other similar things. It creates all the necessary files (template definition, template script, dialog definition) and links them together on the basis of prototypes which you can modify per project or per light module. It is a powerful tool for agile development. Please note that Magnolia CLI is still under development and gets new features&nbsp;continuously. If you are familiar with it and have some cool ideas for new features it is lacking so far, please let us know via the&nbsp;<ac:link><ri:page ri:space-key="DEV" ri:content-title="Suggestion Box" /></ac:link>.</p><h3>Build templates</h3><p>Writing templates is a very common task when it comes to development. If you are completely new to templating, have a look at some of the following pages to learn the basics:&nbsp;<ac:link><ri:page ri:content-title="Template definition" /></ac:link>,&nbsp;<ac:link><ri:page ri:content-title="Dialog definition" /></ac:link>,&nbsp;<ac:link><ri:page ri:content-title="Template scripts" /></ac:link>. Since the code of template scripts has to be written in&nbsp;<a href="http://freemarker.org/">FreeMarker</a>, also see the <ac:link><ri:page ri:content-title="Directives" /></ac:link> page explaining some of the most commonly used&nbsp;standard <ac:inline-comment-marker ac:ref="a510d222-ba33-416b-ae9a-d1fdd21f48b9"> FreeMarker </ac:inline-comment-marker> directives, as well as Magnolia-specific directives.</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="35b96ea5-9ed1-4f56-86e3-18de2af9323a"><ac:rich-text-body><p>Learn how to use the built-in templating functions such as&nbsp;<code>
        <ac:link><ri:page ri:content-title="cmsfn" /></ac:link>
      </code>,&nbsp;<code>
        <ac:link><ri:page ri:content-title="damfn" /></ac:link>
      </code>,&nbsp;<code>
        <ac:link><ri:page ri:content-title="sitefn" /></ac:link>
      </code>, <code>
        <ac:link><ri:page ri:content-title="catfn" /></ac:link>
      </code>, <code>
        <ac:link><ri:page ri:content-title="searchfn" /></ac:link>
      </code>, <code>
        <ac:link><ri:page ri:content-title="restfn" /></ac:link>
      </code>, <code>
        <ac:link><ri:page ri:content-title="resfn" /></ac:link>
      </code> <span>, </span> <code>
        <ac:link><ri:page ri:content-title="imgfn" /></ac:link>
      </code>, <code>
        <ac:link><ri:page ri:content-title="navfn" /></ac:link>
      </code>, <code>
        <ac:link><ri:page ri:content-title="jsonfn" /></ac:link>
      </code> and <code>
        <ac:link><ri:page ri:content-title="tagfn" /></ac:link>
      </code> . These functions can be used in FreeMarker scripts and provide methods to accomplish very common tasks that would be complicated to resolve with FreeMarker directives only.</p></ac:rich-text-body></ac:structured-macro><h3>Development tutorial for Magnolia in the cloud</h3><p><ac:image><ri:attachment ri:filename="cloudy_.gif" /></ac:image>&nbsp;Follow the <ac:link><ri:page ri:content-title="Hello-cloud - a development tutorial" /><ac:plain-text-link-body><![CDATA[Hello-cloud tutorial]]></ac:plain-text-link-body></ac:link>. It presents the complete&nbsp;Magnolia development cycle step-by-step based on a concrete example. In the tutorial you create a light module named <strong>hello-cloud</strong> on your local machine and bring it to your cloud-based Magnolia Live environment. All this with just a few clicks and in just a few minutes!&nbsp;</p><p>See also <ac:link><ri:page ri:content-title="Light development in Magnolia" /></ac:link> and&nbsp;<ac:link><ri:page ri:content-title="Magnolia front-end development" /></ac:link> and&nbsp;<ac:link><ri:page ri:content-title="Stay updated" /><ac:plain-text-link-body><![CDATA[stay updated]]></ac:plain-text-link-body></ac:link>.</p><h2>Testing</h2><p>Testing should always be a part of your development process. In the context of local development, your goal should be to have error-free code before you push it to the remote Git repository. Test your code before you commit and push it with Git. Later on when your new code is in the cloud-based Magnolia package, test it again in the Integration environment before asking your&nbsp;editors and managers to do user acceptance testing in the UAT environment and finally going public in the Live environment.</p><p><span>Later, if you need to test new development work on the basis of real content that is already deployed in the UAT or Live environments, you can&nbsp;</span> <ac:link><ri:page ri:content-title="Copying content for testing" /><ac:plain-text-link-body><![CDATA[copy content from an environment for testing purposes]]></ac:plain-text-link-body></ac:link> <span>.</span></p><p><br /></p><p>Next:&nbsp;</p><ac:structured-macro ac:name="mgnl-aui-button-inline" ac:schema-version="1" ac:macro-id="85ff37f1-5416-4dcf-bb77-0e5d2c295b2e"><ac:parameter ac:name="Type">
    Normal
   </ac:parameter><ac:parameter ac:name="IconClass">
    aui-iconfont-deploy
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE
   </ac:parameter><ac:rich-text-body><p><ac:link><ri:page ri:content-title="Committing and pushing to the remote Magnolia Git repository" /></ac:link></p></ac:rich-text-body></ac:structured-macro><p><br /></p><p><br /></p>

-->
```
