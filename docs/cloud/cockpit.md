---
title: Cockpit
---

The Magnolia cockpit is the central point of access to all functionality provided by Magnolia in the cloud. This page gives you a brief overview of the main screens in the cockpit and what actions can be performed.


# Logging in

A URL for the cockpit and login details for all the users you requested are provided by Magnolia when you subscribe to Magnolia's cloud offering. Use this information to access the cockpit.

![](/assets/cloud/mnow_login.png){width=500}

Once you have logged in, you can manage your user settings by clicking on your name in the top right corner.

You are logged out automatically after 30 minutes of inactivity for security reasons.

# Subscription packages

 Welcome! The first page you will see upon logging in is the subscription packages page. It shows the package created for you by Magnolia and its status.

![](/assets/cloud/mnow_site_overview.png){width=600}

 From this page, you can:

* View your package and its current status. Click on the plus sign icon to see details about the status of the package.
* Click **Show packageoverview**to access the [package overview](#package-overview).

:::info
  When Magnolia is conducting a support or maintenance operation requiring downtime, you see a message indicating that your subscription package is temporarily in [maintenance mode](/Support/Support+for+Magnolia+cloud+customers#cloud-maintenance) here.
:::

# Notifications

The top banner in the cockpit displays notifications sent to you by Magnolia Helpdesk.

![](/assets/cloud/cloud-cockpit-banner.png){width=600}

There are three types of notification:

* Red – Critical notifications
* Yellow – Warning notifications
* Blue – Information notifications

Click the notifications box to access the [cockpit notifications](/Magnolia+Cloud/Cockpit/Understanding+cockpit+notifications) and manage your messages.

![](/assets/cloud/cloud-cockpit-notifications.png){width=600}

# Package overview

 Click **Show package overview** in the subscription packages page to access the package overview page. This page is the access point for all the package administration actions for the cloud-based cloud Magnolia.

  ![](mnow_site_setup.png){width=600}

From this page you:

* [Access the activity log](#activity-log)
* [Manage your environments](#environments-overview)
* [Install updates](#install-updates)
* [View a list of stakeholders](#people)
* [View additional information](#additional-information) about the GIT repository linked to the subscription package.

## Activity log

The [activity log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs) displays a log of all major actions triggered from the cockpit providing a single location to see who did what when.

![](5-7-1-cloud-activity-log.png){width=600}

# Environments overview

The package overview page provides an overview of all the *[Environments](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#environment)* and *[Spaces](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#space)* that have been set up for the package.

![](/assets/cloud/mnow_env-overview.png){width=600}

A Magnolia package typically consists of three environments:

* **Live** - Where the tested and approved version of the content product is delivered to customers.
* **UAT** (User Acceptance Testing) - Where the next version of the product is made available to editors and managers for testing and review.
* **Integration** - Where developers try out ideas and test solutions before giving internal users access.

As features are developed, the configuration is tested and moved from Integration, through UAT and finally to Live.

[/_i/_cloudContext/_cloud+environments+vary](!include)

From the environments section, you can [Manage your environments](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit):

* [Manage your package logs](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging/Managing+cloud+log+levels)
* [Restart an instance](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Restarting+instances)
* [View RDS information](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Viewing+cloud+database+information)
* [Set up a new environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Setting+up+a+new+environment) \
  If no environment of a given type exists, you can directly create one. If one already exists, you have to tear it down first.
* [Tear down an environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Tearing+down+an+environment)
* [Configure domain redirect rules](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Configuring+domain+redirect+rules)
* [Protect environments](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Protecting+environments)
* [Back up](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Backing+up+and+restoring)
* [Restore](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Backing+up+and+restoring/Recovering+the+Live+environment)

![](cloud-manage-environments-all-available.png){width=600}

## Each environment

Each environment consists of one or several *[spaces](/Glossary#space)*, which separate the environment into larger blocks containing public or author instances of Magnolia. By default, each environment has an Author space and a Public space.

![](/assets/cloud/mnow_each-env.png){width=600}

For a given environment, you can: []{#edit-content-auth-instance}

* **View site** – View the public instance of the site, which must be named home.
* **Edit content** – Access the author instance of the package to edit content.

You can see information about the release or snapshot installed in your environment in the columns:

* When the release or snapshot was created
* When it was installed
* Release or snapshot name
* Git commit ID
* Description

You can see the status of your environment from the status icon beside the instance name (click the + icon to display the name):

|Icon|Status|
|-|-|
|![](cloud-ok.gif){.inline height=25}|Environment running|
|![](cloud-warning.gif){.inline height=25}|Environment rebooting|
|![](cloud-error.gif){.inline height=25}|Environment stopped|

# Installed releases

The package overview page provides information about what has been installed in your package in the Installed releases section.

![](/assets/cloud/mnow_site_release.png){width=600}

You can view time-stamped releases and [install updates](#install-updates).

## Install updates

The **Install an update** page is the access point for developers to retrieve their work and propagate it through the different environments and testing stages before putting it into production.

![](/assets/cloud/mnow_install-update.png){width=600}

See the following pages for information about how to:

* [Install a development snapshot](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+snapshot)
* [Define a new release](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Defining+a+release)
* Install a release
  * [in UAT](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+UAT)
  * [in Live](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Installing+a+release+in+Live)
* [Copy content for testing](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Copying+content+for+testing)
* [Change the version of Magnolia](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Upgrading+Magnolia+in+the+cloud)

# People

The package overview page displays a list of stakeholders and their contact details in the **People** section.

![](/assets/cloud/mnow_people.png){width=600}

# Additional information

Information related with the subscription package is displayed in the **Additional information** section of the package overview page.

A **Logs view URL** link to [the Datadog service for your subscription package](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging) is provided.

The **GIT repository** URL for the subscription package is provided: when you [develop locally](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud), you must push your configuration changes to this GIT repository so they can be installed in the Integration environment.

![](/assets/cloud/mnow_add-info.png){width=600}




<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="309b8c53-94fa-4cdc-87c0-41802099bdb4"><ac:parameter ac:name="width">370</ac:parameter><ac:parameter ac:name="float">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">BLOCK</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Magnolia cockpit concepts" /></ac:link> - Explains how the different elements mentioned in this page fit together.</li><li><ac:link><ri:page ri:content-title="Understanding cockpit notifications" /></ac:link></li><li><ac:link><ri:page ri:content-title="Understanding activity logs" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>The&nbsp;Magnolia cockpit is the central point of access to all functionality provided by Magnolia in the cloud. This page gives you a brief overview of the main screens in the cockpit and what actions can be performed.</p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="bbf2d2f4-c3cf-4192-b65c-c9a9c9a306e7" /></p><h2>Logging in</h2><p>A URL for the cockpit and login details for all the users you requested are provided by Magnolia when you subscribe to Magnolia's cloud offering. Use this information to access the cockpit.&nbsp;</p><p><ac:image ac:width="500"><ri:attachment ri:filename="mnow_login.png" /></ac:image></p><p>Once you have&nbsp;<ac:inline-comment-marker ac:ref="b83b9a19-b01d-48eb-a830-dc7d2c23c2f5">logged in</ac:inline-comment-marker>, you can manage your user settings by&nbsp;<ac:inline-comment-marker ac:ref="80e7b57b-ae67-4a28-af0d-d1789b3369c8">clicking on your name in the&nbsp;top right corner</ac:inline-comment-marker>.&nbsp;</p><p>You are logged out automatically after 30 minutes of inactivity for security reasons.</p><h2><ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="52b1121c-0d89-41ce-bf0b-c0a5b790239c"><ac:parameter ac:name="">anc-sub-package-overview</ac:parameter></ac:structured-macro>Subscription packages</h2><p><ac:inline-comment-marker ac:ref="fda0d89d-8a89-414d-a90f-9d6af8598e0e"> Welcome! The first page you will see upon logging in is the subscription&nbsp;</ac:inline-comment-marker><ac:inline-comment-marker ac:ref="9820e03b-0a9c-4123-884d-11be74d93b48"><ac:inline-comment-marker ac:ref="fda0d89d-8a89-414d-a90f-9d6af8598e0e">packages page. </ac:inline-comment-marker> It</ac:inline-comment-marker>&nbsp;shows the package created for you by Magnolia&nbsp;<ac:inline-comment-marker ac:ref="52567fb2-7860-4924-b131-0e3ab59889cc">and its status. </ac:inline-comment-marker></p><p><ac:image ac:width="600"><ri:attachment ri:filename="mnow_site_overview.png" /></ac:image></p><p><ac:inline-comment-marker ac:ref="e4319e6a-7d67-4a3a-81d6-61d1bc08a2a1"> From this page, you can: </ac:inline-comment-marker></p><ul><li>View your package&nbsp;and its current status. Click on the plus sign icon to see details about the status of the package.</li><li>Click <strong>Show package<strong>&nbsp;overview&nbsp;</strong></strong>to access the <ac:link ac:anchor="Packageoverview"><ac:plain-text-link-body><![CDATA[package overview]]></ac:plain-text-link-body></ac:link>.&nbsp;</li></ul><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="8c04295f-b901-4c76-9004-5c63ea2b6740"><ac:rich-text-body><p>When Magnolia is conducting a support or maintenance operation requiring downtime, you see a message indicating that your subscription package is temporarily in&nbsp;<ac:link ac:anchor="anc-cloud-maintenance"><ri:page ri:content-title="Support for Magnolia cloud customers" /><ac:plain-text-link-body><![CDATA[maintenance mode]]></ac:plain-text-link-body></ac:link>&nbsp;here.&nbsp;</p></ac:rich-text-body></ac:structured-macro><h2>Notifications</h2><p>The top banner in the cockpit displays notifications sent to you by Magnolia Helpdesk.</p><p><ac:image ac:width="600"><ri:attachment ri:filename="cloud-cockpit-banner.png" /></ac:image></p><p>There are three types of notification:</p><ul><li>Red &ndash; Critical&nbsp;notifications</li><li>Yellow&nbsp;&ndash; Warning&nbsp;notifications</li><li>Blue&nbsp;&ndash; Information notifications&nbsp;</li></ul><p>Click the notifications box to access the <ac:link><ri:page ri:content-title="Understanding cockpit notifications" /><ac:plain-text-link-body><![CDATA[cockpit notifications]]></ac:plain-text-link-body></ac:link> and manage your messages.</p><p><ac:image ac:width="600"><ri:attachment ri:filename="cloud-cockpit-notifications.png" /></ac:image></p><h2>Package overview</h2><p><ac:inline-comment-marker ac:ref="0b2cee04-d9e7-4e65-b607-99f9fe467540"> Click </ac:inline-comment-marker> <strong>Show package overview</strong>&nbsp;in the subscription packages&nbsp;page to access the package&nbsp;overview page.&nbsp;This page is the access point for all the package&nbsp;administration actions for the cloud-based cloud Magnolia.</p><p>&nbsp; <ac:image ac:width="600"><ri:attachment ri:filename="mnow_site_setup.png" /></ac:image></p><p>From this page you:</p><ul><li><ac:link ac:anchor="Activitylog"><ac:plain-text-link-body><![CDATA[Access the activity log]]></ac:plain-text-link-body></ac:link></li><li><ac:link ac:anchor="Environmentsoverview"><ac:plain-text-link-body><![CDATA[Manage your environments]]></ac:plain-text-link-body></ac:link></li><li><ac:link ac:anchor="Installupdates"><ac:plain-text-link-body><![CDATA[Install updates]]></ac:plain-text-link-body></ac:link></li><li><ac:link ac:anchor="People"><ac:plain-text-link-body><![CDATA[View a list of stakeholders]]></ac:plain-text-link-body></ac:link></li><li><ac:link ac:anchor="Additionalinformation"><ac:plain-text-link-body><![CDATA[View additional information]]></ac:plain-text-link-body></ac:link> about the GIT repository linked to the subscription package.</li></ul><h3>Activity log</h3><p>The <ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>&nbsp;displays&nbsp;a log of all major&nbsp;actions triggered from the cockpit providing&nbsp;a single location to see who did what when.</p><p><ac:image ac:width="600"><ri:attachment ri:filename="5-7-1-cloud-activity-log.png" /></ac:image></p><h2>Environments overview</h2><p>The package&nbsp;overview page provides an overview of all the<em>&nbsp;<ac:link ac:anchor="Environment"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[Environments]]></ac:plain-text-link-body></ac:link>&nbsp;</em>and<em>&nbsp;<ac:link ac:anchor="Space"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[Spaces]]></ac:plain-text-link-body></ac:link>&nbsp;</em>that have been set up for the package.</p><p><ac:image ac:width="600"><ri:attachment ri:filename="mnow_env-overview.png" /></ac:image></p><p>A Magnolia package&nbsp;typically consists of three environments:</p><ul><li><strong>Live</strong> - Where the tested and approved version of the content product is delivered to customers.&nbsp;</li><li><strong style="line-height: 1.5em;">UAT</strong> (User Acceptance Testing) - Where&nbsp;the next version of the product is made available to editors and managers for testing and review.&nbsp;</li><li><strong>Integration&nbsp;</strong>- Where developers try out ideas and test solutions before giving internal users access.&nbsp;</li></ul><p>As features are developed, the configuration is tested and moved from Integration, through UAT and finally to Live.</p><p><ac:structured-macro ac:name="include" ac:schema-version="1" ac:macro-id="63242e17-de43-413d-abce-923a670e3311"><ac:parameter ac:name=""><ac:link><ri:page ri:content-title="_cloud environments vary" /></ac:link></ac:parameter></ac:structured-macro></p><p>From the environments section, you can <ac:link><ri:page ri:content-title="Managing environments using the Magnolia cockpit" /><ac:plain-text-link-body><![CDATA[Manage your environments]]></ac:plain-text-link-body></ac:link>:</p><ul><li><ac:link><ri:page ri:content-title="Managing cloud log levels" /><ac:plain-text-link-body><![CDATA[Manage your package logs]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Restarting instances" /><ac:plain-text-link-body><![CDATA[Restart an instance]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Viewing cloud database information" /><ac:plain-text-link-body><![CDATA[View RDS information]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Setting up a new environment" /><ac:plain-text-link-body><![CDATA[Set up a new environment]]></ac:plain-text-link-body></ac:link> <br />If no environment of a given type exists, you can directly create one. If one already exists, you have to tear it down first.</li><li><ac:link><ri:page ri:content-title="Tearing down an environment" /><ac:plain-text-link-body><![CDATA[Tear down an environment]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Configuring domain redirect rules" /><ac:plain-text-link-body><![CDATA[Configure domain redirect rules]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Protecting environments" /><ac:plain-text-link-body><![CDATA[Protect environments]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Backing up and restoring" /><ac:plain-text-link-body><![CDATA[Back up]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Recovering the Live environment" /><ac:plain-text-link-body><![CDATA[Restore]]></ac:plain-text-link-body></ac:link></li></ul><p><ac:image ac:width="600"><ri:attachment ri:filename="cloud-manage-environments-all-available.png" /></ac:image>&nbsp;</p><h3>Each environment</h3><p>Each environment&nbsp;consists of one or several&nbsp;<em><ac:link ac:anchor="Space"><ri:page ri:content-title="Glossary" /><ac:plain-text-link-body><![CDATA[spaces]]></ac:plain-text-link-body></ac:link></em>, which separate the environment into larger blocks containing public or author instances of Magnolia. By default, each environment has an Author space and a Public space.</p><p><ac:image ac:width="600"><ri:attachment ri:filename="mnow_each-env.png" /></ac:image></p><p>For a given environment, you can:&nbsp;<ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="7bdda506-aa86-4ce2-a31b-7f94879f2cdc"><ac:parameter ac:name="">anc-edit-content-auth-instance</ac:parameter></ac:structured-macro></p><ul><li><strong>View site</strong>&nbsp;&ndash;&nbsp;View the public instance of the site,&nbsp;which must be named home.</li><li><strong>Edit content</strong> &ndash;&nbsp;Access the author instance of the package&nbsp;to edit content.&nbsp;</li></ul><p>You can see information about the release or snapshot installed in your environment in the columns:</p><ul><li>When the release or snapshot was created</li><li>When it was installed</li><li>Release&nbsp;or snapshot name</li><li>Git commit ID</li><li>Description</li></ul><p>You can see the status of your environment from the&nbsp;status icon beside the instance name (click the + icon to display the name):</p><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><th>Icon</th><th>Status</th></tr><tr><td style="text-align: center;"><div class="content-wrapper"><p><ac:image ac:thumbnail="true" ac:alt="green tick mark" ac:height="25"><ri:attachment ri:filename="cloud-ok.gif" /></ac:image></p></div></td><td>Environment running</td></tr><tr><td style="text-align: center;"><div class="content-wrapper"><p><ac:image ac:thumbnail="true" ac:alt="yellow exclamation mark" ac:height="25"><ri:attachment ri:filename="cloud-warning.gif" /></ac:image></p></div></td><td>Environment rebooting</td></tr><tr><td style="text-align: center;"><div class="content-wrapper"><p><ac:image ac:thumbnail="true" ac:alt="red cross" ac:height="25"><ri:attachment ri:filename="cloud-error.gif" /></ac:image></p></div></td><td>Environment stopped</td></tr></tbody></table><h2>Installed releases</h2><p>The package&nbsp;overview page provides information about what has been installed in your package&nbsp;in the&nbsp;Installed releases&nbsp;section.&nbsp;</p><p><ac:image ac:width="600"><ri:attachment ri:filename="mnow_site_release.png" /></ac:image></p><p>You can view time-stamped releases and <ac:link ac:anchor="Installupdates"><ac:plain-text-link-body><![CDATA[install updates]]></ac:plain-text-link-body></ac:link>.</p><h3>Install updates</h3><p>The<strong> Install an update</strong> page is the access point for developers to retrieve their work and propagate it through the different environments and testing stages before putting it into production.&nbsp;</p><p><ac:image ac:width="600"><ri:attachment ri:filename="mnow_install-update.png" /></ac:image></p><p>See the following pages for information about how to:</p><ul><li><span class="toc-item-body"> <ac:link><ri:page ri:content-title="Installing a snapshot" /><ac:plain-text-link-body><![CDATA[Install a development snapshot]]></ac:plain-text-link-body></ac:link> </span></li><li><ac:link><ri:page ri:content-title="Defining a release" /><ac:plain-text-link-body><![CDATA[Define a new release]]></ac:plain-text-link-body></ac:link></li><li><span class="toc-item-body"> <span class="confluence-link">Install a release</span> </span><ul><li><span class="toc-item-body"> <ac:link><ri:page ri:content-title="Installing a release in UAT" /><ac:plain-text-link-body><![CDATA[in UAT]]></ac:plain-text-link-body></ac:link> </span></li><li><span class="toc-item-body"> <ac:link><ri:page ri:content-title="Installing a release in Live" /><ac:plain-text-link-body><![CDATA[in Live]]></ac:plain-text-link-body></ac:link> </span></li></ul></li><li><ac:link><ri:page ri:content-title="Copying content for testing" /><ac:plain-text-link-body><![CDATA[Copy content for testing]]></ac:plain-text-link-body></ac:link>&nbsp;</li><li><ac:link><ri:page ri:content-title="Upgrading Magnolia in the cloud" /><ac:plain-text-link-body><![CDATA[Change the version of Magnolia]]></ac:plain-text-link-body></ac:link></li></ul><h2>People</h2><p>The package&nbsp;overview page displays a&nbsp;list of stakeholders and their contact details in the&nbsp;<strong>People</strong>&nbsp;section.</p><p><ac:image ac:width="600"><ri:attachment ri:filename="mnow_people.png" /></ac:image></p><h2>Additional information</h2><p>Information related with the subscription package is displayed in the&nbsp;<strong>Additional information</strong> section of the package&nbsp;overview page.</p><p>A <strong>Logs view URL</strong> link to <ac:link><ri:page ri:content-title="Monitoring and logging" /><ac:plain-text-link-body><![CDATA[the Datadog service for your subscription package]]></ac:plain-text-link-body></ac:link> is provided.</p><p>The <strong>GIT repository</strong> URL for the subscription package is provided: when you <ac:link><ri:page ri:content-title="Developing for Magnolia in the cloud" /><ac:plain-text-link-body><![CDATA[develop locally]]></ac:plain-text-link-body></ac:link>, you must push your configuration changes to this GIT repository so they can be installed in the Integration environment.</p><p><ac:image ac:width="600"><ri:attachment ri:filename="mnow_add-info.png" /></ac:image></p><p><br /></p>

-->
