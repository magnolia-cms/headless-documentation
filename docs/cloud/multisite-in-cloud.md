---
title: Multisite in Magnolia in the cloud
---

::: {.infobox}
Related topics in Magnolia documentation

-   [Site definition](/Templating/Site+definition)
-   [Multisite module](/Modules/List+of+modules/Multisite+module)
-   [How to use
    Multisite](/Templating/Site+definition/How+to+use+Multisite)
:::

```{=html}
<!--
The [Multisite module](/Modules/List+of+modules/Multisite+module) allows you to administer multiple websites from a single Magnolia subscription package.

### Automatically assigned (technical) domains

Magnolia automatically assigns a technical domain to each *[space](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#space)*. These domains are used, for example, in the cockpit to create links to the AdminCentral UI of Magnolia and to view the public space of an environment. For example:

|Environment|Technical domain assigned to the public space|
|-|-|
|Integration|[public.integration.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.integration.magnolia-docs.staging.now.magnolia-cms.com)|
|UAT|[public.uat.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.uat.magnolia-docs.staging.now.magnolia-cms.com)|
|**Live**|[public.live.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.live.magnolia-docs.staging.now.magnolia-cms.com)|

You should provide access to your websites in the Live environment using your own registered domain names. For example:
<table>
<tr>
<th>
Environment
</th>
<th>
Technical domain assigned to the public space
</th>
<th>
Your domain names
</th>
</tr>
<tr>
<td>
**Live**
</td>
<td>
[public.live.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.live.magnolia-docs.staging.now.magnolia-cms.com)
</td>
<td>
[www.my-company.com](http://www.winter-cloudy.com/)

[www.mycompany.com](http://www.summer-cloudy.com/)
</td>
</tr>
</table>

### Adding CNAME records for your own domain names

You must register *at least one* CNAME record to provide access to the public space of the Live environment under your own (registered) domain name. If you have configured multiple site definitions in order to run multiple websites, register a CNAME record for each domain.

You can register one or more CNAME records for each public space of the environments you have. However, in many cases, it is sufficient to have at least one record for the public space of the Live environment.

You are asked to provide your registered domain names during the Magnolia Cloud subscription process.

::: tip
  Create a [Helpdesk ticket](https://jira.magnolia-cms.com/servicedesk/customer/portal/6) to request your domain mapping setup.
:::

Below is an example of a CNAME record for one domain mapped to the public space of a Live environment.

|Hostname|IP / Target|
|-|-|
|[www.my-company.com](http://www.winter-cloudy.com/)|[public.live.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.live.magnolia-docs.staging.now.magnolia-cms.com)|

You can usually edit your CNAME records in the web interface of the domain name registrar you used to register your own domain name(s).
[] -->
```
This page explains how to use the Magnolia [Multisite
module](/Modules/List+of+modules/Multisite+module) on your Magnolia
cloud platform. This module allows you to administer multiple websites
from a single Magnolia subscription package. If you manage just one
website from the subscription package, please read at least the section
about [adding CNAME records](#add-cname-records) for your own domains
and the [minimal setup](#site-config-minimal-setup) section.

[](!toc)

Site definitions
================

A Magnolia [site definition](/Templating/Site+definition) is a
configurable set of things such as a [theme](/Templating/Theme), a
[template prototype](/Templating/Site+definition/Template+prototype), a
set of locales, and so on, applied to a defined set of content nodes
which are typically mapped to a domain. The content which belongs to a
site definition is sometimes referred to as "site".

The Multisite module allows you to configure multiple site definitions
to manage multiple websites that can be accessed via distinct domains
but in a single Magnolia package.

What can you do with multisite?
===============================

-   Run multiple websites with completely different purposes and
    domains.
-   Launch minisites and run campaigns.
-   Provide different websites for subsidiaries and country branches.
-   Serve localized versions of the same website.
-   Use handles and URI prefixes to get shorter URLs.

Using CNAME records to enable public domain names
=================================================

> A Canonical Name record (abbreviated as CNAME record) is a type of
> resource record in the Domain Name System (DNS) used to specify that a
> domain name is an alias for another domain, which is the "canonical"
> domain.
>
> (Source: [Wikipedia](https://en.wikipedia.org/wiki/CNAME_record))

Automatically assigned (technical) domains
------------------------------------------

During the setup of a Magnolia cloud package, the system automatically
assigns a technical domain to each
*[space](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#space)*.
These domains are used, for instance, in the cockpit to create links to
the AdminCentral UI of Magnolia and to view the public space of an
environment. The following table shows a list of example domains
assigned as technical domains to the public spaces of a Magnolia cloud
package:

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Environment                         Technical domain assigned to the public space
  ----------------------------------- -----------------------------------------------------------------------------------------------------------------------------------------
  Integration                         [public.integration.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.integration.magnolia-docs.staging.now.magnolia-cms.com)

  UAT                                 [public.uat.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.uat.magnolia-docs.staging.now.magnolia-cms.com)

  **Live**                            [public.live.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.live.magnolia-docs.staging.now.magnolia-cms.com)
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

While such domains may be acceptable for internal usage, you should
provide access to your websites in Live environment via domain names you
have registered yourself:

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Environment             Technical domain assigned to the public space                                                                               Your domain names
  ----------------------- --------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------
  **Live**                [public.live.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.live.magnolia-docs.staging.now.magnolia-cms.com)   [www.winter-cloudy.com](http://www.winter-cloudy.com/),
                                                                                                                                                      [www.summer-cloudy.com](http://www.summer-cloudy.com/)

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The domain names *www.winter-cloudy.com* and *www.summer-cloudy.com* are
just examples. You have to register the name(s) you want to use with a
domain name registrar.

[]{#add-cname-records}Adding CNAME records for your own domain names
--------------------------------------------------------------------

You can register one or more CNAME records for each public space of the
three Magnolia environments. However, in many cases, it is sufficient to
have at least one record for the public space of the Live environment.

You must register *at least one* CNAME record to provide access to the
public space of the Live environment under your own (registered) domain
name. If you have configured multiple site definitions in order to run
multiple websites, register one CNAME record for each domain.

To use your own domain name in the current release of the Magnolia cloud
offer, you should ideally own the domain *before* subscribing to and
onboarding a Magnolia PaaS plan.

::: {.tip}
Create a [Helpdesk
ticket](https://jira.magnolia-cms.com/servicedesk/customer/portal/6) to
request your domain mapping setup.
:::

Below is an example of a CNAME record for one domain mapped to the
public space of a Live environment.

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Hostname                                                 IP / Target
  -------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------
  [www.winter-cloudy.com](http://www.winter-cloudy.com/)   [public.live.magnolia-docs.staging.cloud.magnolia-cms.com](http://public.live.magnolia-docs.staging.now.magnolia-cms.com)

  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

You can usually edit your CNAME records in the web interface of the
domain name registrar you used to register your own domain name(s).

How to use multisite
====================

If you only manage a single website from your Magnolia subscription
package, you should read at least the [minimal
setup](#site-config-minimal-setup) section.

The following points summarize what you need to do to set up a multisite
environment:

[/Templating/Site+definition/How+to+use+Multisite\#site-definition-creation-summary-list](!excerpt-include)

Read [How to use
Multisite](/Templating/Site+definition/How+to+use+Multisite) for more
details about its setup, configuration and examples.

Configuration
=============

Use the [Site app](/Apps/List+of+apps/Site+app) to edit site
definitions.

::: {.tip}
Edit or create a site definition in the Author space of an environment.
When you have finished the configuration, use the **Publish
incl. subnodes** action to enable the configuration in the Public space.
:::

[]{#site-config-minimal-setup}A minimal (default) setup for a single domain
---------------------------------------------------------------------------

Note that the Multisite module is always enabled.

### Site definition

The module provides a default site configuration named `fallback`:

  Node name                Value
  ------------------------ -------
  [fallback]{.n}           
  [[mappings]{.n}]{.lv1}   

```{=html}
<tr>
```
\|[[extends]{.p}]{.lv2}\|override
```{=html}
</tr>
```
```{=html}
<tr>
```
\|[[domains]{.n}]{.lv1}\|
```{=html}
</tr>
```
```{=html}
<tr>
```
\|[[extends]{.p}]{.lv2}\|override
```{=html}
</tr>
```
### Virtual URI mapping on the public instance

The default Magnolia cloud setup defines a [URI
mapping](/Administration/URI+mapping) which redirects requests to
`/home` in the root of your domain on every public instance:

  request           redirection
  ----------------- ----------------------
  `<your-domain>`   `<your-domain>/home`

::: {.info}
If you intend to keep this default configuration, you must have a page
named `home` in your `website` workspace.
:::

  Page          Title
  ------------- ----------------
  [home]{.wp}   \<Some title\>

Custom site definition setup
----------------------------

The preceding section explained that a single-domain minimal (default)
setup relies on a page node called `home`, and that requests to the root
of your domain (`/`) are always redirected to `<your-domain>/home`.

Below we provide an example showing how to serve pages directly from the
root of your domain without such a redirection. This requires a site
definition with a correct configuration in the `mappings` and `domains`
sections of the site configuration.

For our example we assume that:

-   You have a [CNAME record](#add-cname-records) for a domain called
    [www.winter-cloudy.com](http://www.winter-cloudy.com/), a registered
    domain assigned to the technical domain of the public space in the
    Live environment of your Magnolia package.

-   You have the following page nodes in the root of your `website`
    workspace:

      Page            Title
      --------------- -----------------------------
      [winter]{.wp}   Welcome to the winter cloud
      [summer]{.wp}   Welcome to the summer cloud

### Site configuration

The following table shows the configuration for a site definition which
serves the page `/winter` from the root of the
[www.winter-cloudy.com](http://www.winter-cloudy.com/) domain.

  Node name                  Value
  -------------------------- -------
  [winter-cloudy-site]{.n}   
  [[mappings]{.n}]{.lv1}     
  [[website]{.n}]{.lv2}      

```{=html}
<tr>
```
\|[[URIPrefix]{.p}]{.lv3}\|
```{=html}
</tr>
```
```{=html}
<tr>
```
\|[[handlePrefix]{.p}]{.lv3}\|/winter
```{=html}
</tr>
```
```{=html}
<tr>
```
\|[[repository]{.p}]{.lv3}\|website
```{=html}
</tr>
```
```{=html}
<tr>
```
\|[[domains]{.n}]{.lv1}\|
```{=html}
</tr>
```
```{=html}
<tr>
```
\|[[winter-cloudy]{.n} [](http://www.winter-cloudy.com)]{.lv2}\|
```{=html}
</tr>
```
```{=html}
<tr>
```
\|[[name]{.p}]{.lv3}\|www.winter-cloudy.com
```{=html}
</tr>
```
The name for the site definition (`winter-cloudy-site`) is arbitrary.
Alternatively, you can edit the `fallback` site, but we recommend you
create a new custom site definition.

You can add as many site definitions as needed. For example, you could
add `summer-cloudy-site` to map another domain, such as
[www.summer-cloudy.com](http://www.summer-cloudy.com), to serve the page
node `/summer`. []{#disable-unwanted-virtual-URI-mappings}

### Disable unwanted virtual URI mappings

[/\_how+to+remove+/home+redirection](!include)

Multisite configurations in different Magnolia cloud-based environments
-----------------------------------------------------------------------

::: {.info}
In most use cases it is sufficient to configure your custom (multiple)
sites just for the Live
[environment](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#environment).
:::

If you want to test your site configurations in the UAT environment, be
aware of the following points:

-   Each Magnolia [cloud-based
    space](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#space) has
    its own domain. With regard to domain mappings, this means that site
    configurations are therefore slightly different in every
    environment.
-   The [copy content for
    testing](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Copying+content+for+testing)
    action overrides the whole `configuration` workspace (except the
    `/server/activation/subscribers` node). Therefore the multisite
    configuration must be adjusted again after this action.

```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="effad116-e9c4-46f6-86b7-b8ae58e9afa0"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="float">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">BLOCK</ac:parameter><ac:rich-text-body><p>Related topics in Magnolia documentation</p><ul><li><ac:link><ri:page ri:content-title="Site definition" /></ac:link></li><li><ac:link><ri:page ri:content-title="Multisite module" /></ac:link></li><li><ac:link><ri:page ri:content-title="How to use Multisite" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><ac:structured-macro ac:name="hide-macro" ac:schema-version="1" ac:macro-id="1dcca304-50e9-4fdc-89e3-27d1e6376804"><ac:rich-text-body><p>The&nbsp;&nbsp;<ac:link><ri:page ri:content-title="Multisite module" /></ac:link>&nbsp;allows you to administer multiple websites from a single Magnolia subscription package.</p><h4>Automatically assigned (technical) domains</h4><p>Magnolia automatically assigns a technical domain to each <em> <ac:link ac:anchor="Space"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[space]]></ac:plain-text-link-body></ac:link></em>. These domains are used, for example, in the cockpit to create links to the AdminCentral UI of Magnolia and to view the public space of an environment. For example:&nbsp;</p><table><colgroup> <col /> <col /> </colgroup><tbody><tr><th>Environment</th><th>Technical domain assigned to the public space</th></tr><tr><td colspan="1">Integration</td><td colspan="1"><a href="http://public.integration.magnolia-docs.staging.now.magnolia-cms.com">public.integration.magnolia-docs.staging.cloud.magnolia-cms.com</a></td></tr><tr><td colspan="1">UAT</td><td colspan="1"><a href="http://public.uat.magnolia-docs.staging.now.magnolia-cms.com">public.uat.magnolia-docs.staging.cloud.magnolia-cms.com</a></td></tr><tr><td colspan="1"><strong>Live</strong></td><td colspan="1"><a href="http://public.live.magnolia-docs.staging.now.magnolia-cms.com">public.live.magnolia-docs.staging.cloud.magnolia-cms.com</a></td></tr></tbody></table><p>You should provide access to your websites in the Live&nbsp;environment using your own registered domain names. For example:</p><table class="relative-table" style="width: 77.2793%;"><colgroup> <col style="width: 9.09091%;" /> <col style="width: 57.8616%;" /> <col style="width: 33.049%;" /> </colgroup><tbody><tr><th>Environment</th><th>Technical domain assigned to the public space</th><th colspan="1">Your domain names</th></tr><tr><td colspan="1"><strong>Live</strong></td><td colspan="1"><a href="http://public.live.magnolia-docs.staging.now.magnolia-cms.com">public.live.magnolia-docs.staging.cloud.magnolia-cms.com</a></td><td colspan="1"><p><a href="http://www.winter-cloudy.com/">www.my-company.com</a></p><p><a href="http://www.summer-cloudy.com/">www.mycompany.com</a></p></td></tr></tbody></table><h4>Adding CNAME records for your own domain names</h4><p>You must register <em>at least one</em> CNAME record to provide access to the public space of the Live environment under your own (registered) domain name.&nbsp;If you have configured multiple site definitions in order to run multiple websites, register a CNAME record for each domain.</p><p>You can register one or more CNAME records for each public space of the environments you have. However, in many cases, it is sufficient to have at least one record for&nbsp;the public space of the Live environment.</p><p>You are asked to provide your registered domain names during the Magnolia Cloud subscription process.&nbsp;</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="3790768f-0960-458b-aa94-193914d5e4e0"><ac:rich-text-body><p><span style="color: rgb(0,0,0);">Create a <a href="https://jira.magnolia-cms.com/servicedesk/customer/portal/6">Helpdesk ticket</a> to request your domain mapping setup.&nbsp;</span></p></ac:rich-text-body></ac:structured-macro><p>Below is an example of a CNAME record for one domain mapped to the public space of a Live environment.</p><table><colgroup> <col /> <col /> </colgroup><tbody><tr><th>Hostname</th><th>IP / Target</th></tr><tr><td><a href="http://www.winter-cloudy.com/">www.my-company.com</a></td><td><a href="http://public.live.magnolia-docs.staging.now.magnolia-cms.com">public.live.magnolia-docs.staging.cloud.magnolia-cms.com</a></td></tr></tbody></table><p>You can usually edit your CNAME records in the web interface of the domain name registrar you used to register your own domain name(s).</p></ac:rich-text-body></ac:structured-macro><p>This page explains how to use the Magnolia&nbsp;<ac:link><ri:page ri:content-title="Multisite module" /></ac:link>&nbsp;on your <ac:inline-comment-marker ac:ref="ac353770-a962-4bcb-8b3f-0cf2617c6aca"> Magnolia </ac:inline-comment-marker>cloud platform. This module allows you to administer multiple websites from a single Magnolia subscription package. If you manage just one website from the subscription package, please read at least the section about <ac:link ac:anchor="add-cname-records"><ac:plain-text-link-body><![CDATA[adding CNAME records]]></ac:plain-text-link-body></ac:link> for your own domains and&nbsp;the <ac:link ac:anchor="site-config-minimal-setup"><ac:plain-text-link-body><![CDATA[minimal setup]]></ac:plain-text-link-body></ac:link> section.</p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="7df4f440-336a-45a7-9be5-9634435bd889"><ac:parameter ac:name="maxLevel">3</ac:parameter><ac:parameter ac:name="minLevel">2</ac:parameter></ac:structured-macro></p><h2>Site definitions</h2><p>A Magnolia <ac:link><ri:page ri:content-title="Site definition" /><ac:plain-text-link-body><![CDATA[site definition]]></ac:plain-text-link-body></ac:link> is a configurable set of things such as a&nbsp;<ac:link><ri:page ri:content-title="Theme" /><ac:plain-text-link-body><![CDATA[theme]]></ac:plain-text-link-body></ac:link>, a <ac:link><ri:page ri:content-title="Template prototype" /><ac:plain-text-link-body><![CDATA[template prototype]]></ac:plain-text-link-body></ac:link>, a set of locales, and so on, applied to a defined set of content nodes which are typically mapped to a domain. The content which belongs to a site definition is sometimes referred to as &quot;site&quot;.</p><p>The Multisite module allows you to configure multiple site definitions to manage multiple websites that can be accessed via distinct domains but in a single Magnolia package.</p><h2>What can you do with multisite?</h2><ul><li>Run multiple websites with completely different purposes and domains.</li><li>Launch minisites and run campaigns.</li><li>Provide different websites for&nbsp;subsidiaries and country branches.</li><li>Serve localized versions of the same website.</li><li>Use handles and URI prefixes to get shorter URLs.</li></ul><h2>Using CNAME records to enable public domain names</h2><blockquote><p>A Canonical Name record (abbreviated as CNAME record) is a type of resource record in the Domain Name System (DNS) used to specify that a domain name is an alias for another domain, which is the &quot;canonical&quot; domain.&nbsp;</p><p>(Source: <a href="https://en.wikipedia.org/wiki/CNAME_record">Wikipedia</a>)</p></blockquote><h3>Automatically assigned (technical) domains</h3><p>During the setup of a Magnolia cloud package, the system automatically assigns a technical domain to each <em> <ac:link ac:anchor="Space"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[space]]></ac:plain-text-link-body></ac:link></em>. These domains are used, for instance, in the cockpit to create links to the AdminCentral UI of Magnolia and to view the public space of an environment. The following table shows a list of&nbsp;example domains assigned as technical domains to the public spaces of a Magnolia cloud package:</p><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><th>Environment</th><th>Technical domain assigned to the public space</th></tr><tr><td colspan="1">Integration</td><td colspan="1"><a href="http://public.integration.magnolia-docs.staging.now.magnolia-cms.com">public.integration.magnolia-docs.staging.cloud.magnolia-cms.com</a></td></tr><tr><td colspan="1">UAT</td><td colspan="1"><a href="http://public.uat.magnolia-docs.staging.now.magnolia-cms.com">public.uat.magnolia-docs.staging.cloud.magnolia-cms.com</a></td></tr><tr><td colspan="1"><strong>Live</strong></td><td colspan="1"><a href="http://public.live.magnolia-docs.staging.now.magnolia-cms.com">public.live.magnolia-docs.staging.cloud.magnolia-cms.com</a></td></tr></tbody></table><p>While such domains may be acceptable for internal usage, you should provide access to your websites in <ac:inline-comment-marker ac:ref="e6eaf5b6-bbd8-4103-8929-f15e1a1c5d08"> Live&nbsp;environment via domain names you have registered yourself: </ac:inline-comment-marker></p><table class="relative-table wrapped" style="width: 77.2793%;"><colgroup> <col style="width: 9.09091%;" /> <col style="width: 57.8616%;" /> <col style="width: 33.049%;" /> </colgroup><tbody><tr><th>Environment</th><th>Technical domain assigned to the public space</th><th colspan="1">Your domain names</th></tr><tr><td colspan="1"><strong>Live</strong></td><td colspan="1"><a href="http://public.live.magnolia-docs.staging.now.magnolia-cms.com">public.live.magnolia-docs.staging.cloud.magnolia-cms.com</a></td><td colspan="1"><p><a href="http://www.winter-cloudy.com/">www.winter-cloudy.com</a>, <br /><a href="http://www.summer-cloudy.com/">www.summer-cloudy.com</a></p></td></tr></tbody></table><p>The domain names&nbsp;<em>www.winter-cloudy.com</em> and <em>www.summer-cloudy.com</em> are just examples. You have to register the name(s) you want to use with a domain name registrar.</p><h3><ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="fd1b8e9d-6c63-4842-a243-3b953f653cee"><ac:parameter ac:name="">add-cname-records</ac:parameter></ac:structured-macro>Adding CNAME records for your own domain names</h3><p><ac:inline-comment-marker ac:ref="b5abe5ba-c021-456b-9c09-313a449c327c">You can register one or more CNAME records</ac:inline-comment-marker> for each public space of the three Magnolia environments. However, in many cases, it is sufficient to have at least one record for&nbsp;the public space of the Live environment.</p><p>You must register <em>at least one</em> CNAME record to provide access to the public space of the Live environment under your own (registered) domain name.&nbsp;If you have configured multiple site definitions in order to run multiple websites, register one CNAME record for each domain.</p><p class="inline-comment-marker">To use your own domain name in the current release of the Magnolia cloud offer, you should ideally own the domain <em>before</em> subscribing to and onboarding a Magnolia PaaS plan.&nbsp;</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="7c4f4118-c5ee-4d87-9067-7fbc9928c8e7"><ac:rich-text-body><p><span style="color: rgb(0,0,0);">Create a <a href="https://jira.magnolia-cms.com/servicedesk/customer/portal/6">Helpdesk ticket</a> to request your domain mapping setup.&nbsp;</span></p></ac:rich-text-body></ac:structured-macro><p>Below is an example of a CNAME record for one domain mapped to the public space of a Live environment.</p><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><th>Hostname</th><th>IP / Target</th></tr><tr><td><a href="http://www.winter-cloudy.com/">www.winter-cloudy.com</a></td><td><a href="http://public.live.magnolia-docs.staging.now.magnolia-cms.com">public.live.magnolia-docs.staging.cloud.magnolia-cms.com</a></td></tr></tbody></table><p>You can usually edit your CNAME records in the web interface of the domain name registrar you used to register your own domain name(s).</p><h2>How to use multisite</h2><p>If you only manage a single website from your Magnolia subscription package, you should read at least the&nbsp;<ac:link ac:anchor="site-config-minimal-setup"><ac:plain-text-link-body><![CDATA[minimal setup]]></ac:plain-text-link-body></ac:link>&nbsp;section.</p><p>The following points summarize what you need to do to set up a multisite environment:</p><p><ac:structured-macro ac:name="multiexcerpt-include" ac:schema-version="1" ac:macro-id="9e72b987-f4c3-43e1-bb62-9399602c0ebe"><ac:parameter ac:name="MultiExcerptName">site-definition-creation-summary-list</ac:parameter><ac:parameter ac:name="PageWithExcerpt"><ac:link><ri:page ri:content-title="How to use Multisite" /></ac:link></ac:parameter></ac:structured-macro></p><p>Read <ac:link><ri:page ri:content-title="How to use Multisite" /></ac:link>&nbsp;for more details about its setup, configuration and examples.</p><h2>Configuration</h2><p>Use the&nbsp;<ac:link><ri:page ri:content-title="Site app" /></ac:link> to edit site definitions.</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="8968887e-df22-4791-b1a6-29c70c57b9d7"><ac:rich-text-body><p>Edit or create a site definition in the Author space of an environment. When you have finished the configuration, use the <strong>Publish incl. subnodes</strong> action to enable the configuration in the Public space.</p></ac:rich-text-body></ac:structured-macro><h3><ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="a3aaeee5-76a9-4039-928f-b5db809948bc"><ac:parameter ac:name="">site-config-minimal-setup</ac:parameter></ac:structured-macro>A minimal (default) setup for a single domain</h3><p>Note that the Multisite module is always enabled.</p><h4>Site definition</h4><p>The module provides a default site configuration named&nbsp;<code>fallback</code>:</p><ac:structured-macro ac:name="expand" ac:schema-version="1" ac:macro-id="c46405ff-c69f-4faa-a113-0a8b1e3bfdbd"><ac:parameter ac:name="title">
    Click here to see the default fallback site configuration
   </ac:parameter><ac:rich-text-body><ac:structured-macro ac:name="table-plus" ac:schema-version="1" ac:macro-id="d349184d-ff09-4beb-92c3-eae1e4c6513b"><ac:parameter ac:name="heading">
      0
     </ac:parameter><ac:parameter ac:name="multiple">
      false
     </ac:parameter><ac:parameter ac:name="enableHeadingAttributes">
      false
     </ac:parameter><ac:parameter ac:name="enableSorting">
      false
     </ac:parameter><ac:parameter ac:name="class">
      m5-configuration-tree
     </ac:parameter><ac:parameter ac:name="enableHighlighting">
      false
     </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
      BLOCK
     </ac:parameter><ac:rich-text-body><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><th>Node name</th><th>Value</th></tr><tr><td><div class="content-wrapper"><p><ac:structured-macro ac:name="mgnl-n" ac:schema-version="1" ac:macro-id="3dbb16f0-d0dc-4486-8db7-ec30a6d56876" />fallback</p></div></td><td><br /></td></tr><tr><td><div class="content-wrapper"><p style="margin-left: 30.0px;"><ac:structured-macro ac:name="mgnl-n" ac:schema-version="1" ac:macro-id="1b00369b-15af-4d90-aeb8-e3b50596e306" />mappings</p></div></td><td><br /></td></tr><tr style="margin-left: 30.0px;"><td><div class="content-wrapper"><p style="margin-left: 60.0px;"><ac:structured-macro ac:name="mgnl-p" ac:schema-version="1" ac:macro-id="219cab7c-84a3-4e3a-a0d7-5db196ddc7a5" />extends</p></div></td><td>override</td></tr><tr style="margin-left: 30.0px;"><td><div class="content-wrapper"><p style="margin-left: 30.0px;"><ac:structured-macro ac:name="mgnl-n" ac:schema-version="1" ac:macro-id="2cd2d6d7-ab1d-407a-818c-2f2e05ec44a2" />domains</p></div></td><td><br /></td></tr><tr style="margin-left: 30.0px;"><td><div class="content-wrapper"><p style="margin-left: 60.0px;"><ac:structured-macro ac:name="mgnl-p" ac:schema-version="1" ac:macro-id="c486983d-89e7-44ab-9252-4591146e096d" /> extends</p></div></td><td>override</td></tr></tbody></table><p><br /></p><p class="auto-cursor-target"><br /></p></ac:rich-text-body></ac:structured-macro><p><br /></p><p class="auto-cursor-target"><br /></p></ac:rich-text-body></ac:structured-macro><h4>Virtual URI mapping on the public instance</h4><p>The default Magnolia cloud setup defines a&nbsp;<ac:link><ri:page ri:content-title="URI mapping" /></ac:link> which redirects requests to <code>/home</code> in the root of your domain on every public instance:</p><table class="wrapped"><colgroup> <col style="width: 141.0px;" /> <col style="width: 183.0px;" /> </colgroup><tbody><tr><th>request</th><th>redirection</th></tr><tr><td><code>&lt;your-domain&gt;</code></td><td><code>&lt;your-domain&gt;/home</code></td></tr></tbody></table><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="79e26898-574c-489f-ac49-585c85138a8b"><ac:rich-text-body><p>If you intend to keep this default configuration, you must have a page named <code>home</code> in your <code>website</code> workspace.</p></ac:rich-text-body></ac:structured-macro><ac:structured-macro ac:name="table-plus" ac:schema-version="1" ac:macro-id="d40a5e29-b21d-4aa9-9312-0c630a9fe060"><ac:parameter ac:name="heading">
    0
   </ac:parameter><ac:parameter ac:name="multiple">
    false
   </ac:parameter><ac:parameter ac:name="enableHeadingAttributes">
    false
   </ac:parameter><ac:parameter ac:name="enableSorting">
    false
   </ac:parameter><ac:parameter ac:name="class">
    m5-configuration-tree
   </ac:parameter><ac:parameter ac:name="enableHighlighting">
    false
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    BLOCK
   </ac:parameter><ac:rich-text-body><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><th>Page</th><th>Title</th></tr><tr><td><div class="content-wrapper"><p><ac:structured-macro ac:name="mgnl-wp" ac:schema-version="1" ac:macro-id="26d58f4c-829b-4277-b5fe-56f5f044077e" />home</p></div></td><td>&lt;Some title&gt;</td></tr></tbody></table></ac:rich-text-body></ac:structured-macro><h3>Custom site definition setup</h3><p>The preceding section explained that a single-domain minimal (default) setup relies on a page node called <code>home</code>, and that requests to the root of your domain (<code>/</code>) are always redirected to&nbsp;<code>&lt;your-domain&gt;/home</code>.</p><p>Below we provide an example showing how to serve pages directly from the root of your domain without such a redirection. This requires a site definition with a correct configuration in the <code>mappings</code> and <code>domains</code> sections of the site configuration.</p><p>For our example we assume that:</p><ul><li>You have a <ac:link ac:anchor="add-cname-records"><ac:plain-text-link-body><![CDATA[CNAME record]]></ac:plain-text-link-body></ac:link>&nbsp;for a domain called <a href="http://www.winter-cloudy.com/">www.winter-cloudy.com</a>, a registered domain assigned to the technical domain of the public space in the Live environment of your Magnolia package.&nbsp;</li><li><p class="auto-cursor-target">You have the following page nodes in the root of your&nbsp;<code>website</code> workspace:</p><p><br /></p><ac:structured-macro ac:name="table-plus" ac:schema-version="1" ac:macro-id="9c8bc1e1-1f74-427a-83c8-86a5249928d3"><ac:parameter ac:name="heading">
      0
     </ac:parameter><ac:parameter ac:name="multiple">
      false
     </ac:parameter><ac:parameter ac:name="enableHeadingAttributes">
      false
     </ac:parameter><ac:parameter ac:name="enableSorting">
      false
     </ac:parameter><ac:parameter ac:name="class">
      m5-configuration-tree
     </ac:parameter><ac:parameter ac:name="enableHighlighting">
      false
     </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
      BLOCK
     </ac:parameter><ac:rich-text-body><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><th>Page</th><th>Title</th></tr><tr><td><div class="content-wrapper"><p><ac:structured-macro ac:name="mgnl-wp" ac:schema-version="1" ac:macro-id="664674f0-030f-46ee-b7d4-c490564b76e0" />winter</p></div></td><td>Welcome to the winter cloud</td></tr><tr><td colspan="1"><div class="content-wrapper"><p><ac:structured-macro ac:name="mgnl-wp" ac:schema-version="1" ac:macro-id="b9f2b9d5-1160-4029-a2d6-4298fa2f95bc" />summer</p></div></td><td colspan="1">Welcome to the summer cloud</td></tr></tbody></table></ac:rich-text-body></ac:structured-macro></li></ul><h4>Site configuration</h4><p>The following table shows the configuration for a site definition which serves the page&nbsp;<code>/winter</code>&nbsp;from the root of the <a href="http://www.winter-cloudy.com/">www.winter-cloudy.com</a> domain.</p><ac:structured-macro ac:name="table-plus" ac:schema-version="1" ac:macro-id="7f48584a-d141-4d8b-aa8a-4a2df1997aa9"><ac:parameter ac:name="heading">
    0
   </ac:parameter><ac:parameter ac:name="multiple">
    false
   </ac:parameter><ac:parameter ac:name="enableHeadingAttributes">
    false
   </ac:parameter><ac:parameter ac:name="enableSorting">
    false
   </ac:parameter><ac:parameter ac:name="class">
    m5-configuration-tree
   </ac:parameter><ac:parameter ac:name="enableHighlighting">
    false
   </ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">
    BLOCK
   </ac:parameter><ac:rich-text-body><table class="wrapped relative-table" style="width: 51.0075%;"><colgroup> <col style="width: 65.2814%;" /> <col style="width: 34.632%;" /> </colgroup><tbody><tr><th>Node name</th><th>Value</th></tr><tr><td><div class="content-wrapper"><p><ac:structured-macro ac:name="mgnl-n" ac:schema-version="1" ac:macro-id="98d8fa13-cce4-4484-9987-c913a2f8e0ab" />winter-cloudy-site</p></div></td><td><br /></td></tr><tr><td><div class="content-wrapper"><p style="margin-left: 30.0px;"><ac:structured-macro ac:name="mgnl-n" ac:schema-version="1" ac:macro-id="25f2ba98-6d57-4881-8e25-57c3d7067151" />mappings</p></div></td><td><br /></td></tr><tr><td colspan="1"><div class="content-wrapper"><p style="margin-left: 60.0px;"><ac:structured-macro ac:name="mgnl-n" ac:schema-version="1" ac:macro-id="2c9a527a-119f-46ad-b133-9f3b29623149" />website</p></div></td><td colspan="1"><br /></td></tr><tr style="margin-left: 30.0px;"><td><div class="content-wrapper"><p style="margin-left: 90.0px;"><ac:structured-macro ac:name="mgnl-p" ac:schema-version="1" ac:macro-id="551fa8ee-8035-4fc0-a8df-e0c4d189f64e" />URIPrefix</p></div></td><td><br /></td></tr><tr style="margin-left: 30.0px;"><td colspan="1"><div class="content-wrapper"><p style="margin-left: 90.0px;"><ac:structured-macro ac:name="mgnl-p" ac:schema-version="1" ac:macro-id="fd19c0d6-1466-4b9d-afa3-013787c48f73" />handlePrefix</p></div></td><td colspan="1">/winter</td></tr><tr style="margin-left: 30.0px;"><td colspan="1"><div class="content-wrapper"><p style="margin-left: 90.0px;"><ac:structured-macro ac:name="mgnl-p" ac:schema-version="1" ac:macro-id="81ae176c-5122-44c1-a9da-938493d241cc" />repository</p></div></td><td colspan="1">website</td></tr><tr style="margin-left: 30.0px;"><td><div class="content-wrapper"><p style="margin-left: 30.0px;"><ac:structured-macro ac:name="mgnl-n" ac:schema-version="1" ac:macro-id="c8e1c09f-6ba4-464d-bac3-66d5d5cd0a47" />domains</p></div></td><td><br /></td></tr><tr style="margin-left: 30.0px;"><td colspan="1"><div class="content-wrapper"><p style="margin-left: 60.0px;"><ac:structured-macro ac:name="mgnl-n" ac:schema-version="1" ac:macro-id="70c65289-fe6c-4e69-b9e6-13bf0d6b466b" />winter-cloudy<a href="http://www.winter-cloudy.com"> </a></p></div></td><td colspan="1"><br /></td></tr><tr style="margin-left: 30.0px;"><td><div class="content-wrapper"><p style="margin-left: 90.0px;"><ac:structured-macro ac:name="mgnl-p" ac:schema-version="1" ac:macro-id="4bc7f140-dcbd-4e58-b7de-3a37b0d977fa" /> name</p></div></td><td>www.winter-cloudy.com</td></tr></tbody></table></ac:rich-text-body></ac:structured-macro><p>The name for the site definition (<code>winter-cloudy-site</code>) is arbitrary. Alternatively, you can edit the&nbsp;<code>fallback</code>&nbsp;site, but we recommend you create a new custom site definition.</p><p>You can add as many site definitions as needed. For example, you could add <code>summer-cloudy-site</code> to map another domain, such as&nbsp;<a href="http://www.summer-cloudy.com">www.summer-cloudy.com</a>, to serve the page node&nbsp;<code>/summer</code>.&nbsp; <ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="0fef2fc1-5afc-4846-8487-db6da60ae3fb"><ac:parameter ac:name="">disable-unwanted-virtual-URI-mappings</ac:parameter></ac:structured-macro></p><h4><ac:inline-comment-marker ac:ref="468bcfc1-967b-4f06-bd5c-d5d83777f125"> Disable unwanted virtual URI mappings</ac:inline-comment-marker></h4><p><ac:structured-macro ac:name="include" ac:schema-version="1" ac:macro-id="22310ca2-927c-44fc-a64c-5ae342ec959a"><ac:parameter ac:name=""><ac:link><ri:page ri:content-title="_how to remove /home redirection" /></ac:link></ac:parameter></ac:structured-macro></p><h3>Multisite configurations in different Magnolia cloud-based environments</h3><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="8e07a292-827a-46eb-90eb-747f443405d3"><ac:rich-text-body><p>In most use cases it is sufficient to configure your custom (multiple) sites just for the Live&nbsp;<ac:link ac:anchor="Environment"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[environment]]></ac:plain-text-link-body></ac:link>.</p></ac:rich-text-body></ac:structured-macro><p>If you want to test your site configurations in the UAT&nbsp;environment, be aware of the following points:</p><ul><li>Each Magnolia <ac:link ac:anchor="Space"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[cloud-based space]]></ac:plain-text-link-body></ac:link>&nbsp;has its own domain. With regard to domain mappings, this means that site configurations are therefore slightly different in every environment.</li><li>The <ac:link><ri:page ri:content-title="Copying content for testing" /><ac:plain-text-link-body><![CDATA[copy content for testing]]></ac:plain-text-link-body></ac:link> action overrides the whole <code>configuration</code> workspace (except the <code>/server/activation/subscribers</code> node). Therefore the multisite configuration must be adjusted again after this action.&nbsp;</li></ul><p><br /></p>

-->
```
