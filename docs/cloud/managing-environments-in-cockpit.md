---
title: Managing environments using the Magnolia cockpit
---

In this section and its subpages, you learn how to manage environments.

An environment consists of one or several *[spaces](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#space)*, which group together related functionality needed to build or deliver a site. The systems that a space actually contains and how they are connected is defined by the *[space's setup](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#space-setup)*. A space is a container for one or more instances of Magnolia.

 ![](/assets/cloud/gloss-env.png)

A cloud-based Magnolia package typically consists of three [environments](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#environment):

* **Live**: Where the tested and approved version of the content product is delivered to customers.
* **UAT** (User Acceptance Testing): Where the next version of the product is made available to editors and managers for testing and review.
* **Integration**: Where developers try out ideas and test solutions before giving internal users access

[/_i/_cloudContext/_cloud+environments+vary](!include)

Environments are managed in the **Manage environments** page.

To access this page, in the **Package overview** page, click **Manage environments**.

![](/assets/cloud/Envs-Change-envs-BAR_.png)

From the **Manage environments** page you can:

* [Manage your log levels](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging/Managing+cloud+log+levels)
* [Restart an instance](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Restarting+instances)
* [View RDS information](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Viewing+cloud+database+information)
* [Set up a new environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Setting+up+a+new+environment)
* [Tear down an environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Tearing+down+an+environment)
* [Configure domain redirect rules](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Configuring+domain+redirect+rules)
* [Protect environments from being torn down](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Protecting+environments)
* [Back up and restore](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Backing+up+and+restoring)

![](/assets/cloud/cloud-manage-environments-all-available.png)

:::note
  The options available in **Manage environments** depend on the current state of your setup:

* If the Live environment is not set up, some actions are disabled.
* Backup related actions are only available for the Live environment.

  Unavailable actions appear greyed out.
:::



<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="5ed5a900-ead5-4a7a-a0a3-c1a431b68cdb"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><p><ac:structured-macro ac:name="list-children" ac:schema-version="1" ac:macro-id="df8ccd7b-ade0-4881-88ff-3c60d1c2b116" /></p></ac:rich-text-body></ac:structured-macro><p>In this section and its subpages, you learn how to manage environments.&nbsp;</p><p>An environment consists of one or several&nbsp;<em><ac:link ac:anchor="Space"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[spaces]]></ac:plain-text-link-body></ac:link></em>, which group together related functionality needed to build or deliver a site.&nbsp;The systems that a space actually contains and how they are connected is defined by the&nbsp;<em><ac:link ac:anchor="Spacesetup"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[space's setup]]></ac:plain-text-link-body></ac:link></em>. A space is a container for one or more instances of Magnolia.&nbsp;</p><p><span> <ac:image><ri:attachment ri:filename="gloss-env.png"><ri:page ri:content-title="Magnolia cockpit concepts" /></ri:attachment></ac:image> <br /></span></p><p>A cloud-based Magnolia package typically consists of three <ac:link ac:anchor="Environment"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[environments]]></ac:plain-text-link-body></ac:link>:</p><ul><li><strong>Live</strong>: Where the tested and approved version of the content product is delivered to customers.&nbsp;</li><li><strong>UAT</strong> (User Acceptance Testing):&nbsp;Where&nbsp;the next version of the product is made available to editors and managers for testing and review.</li><li><strong>Integration</strong>: Where developers try out ideas and test solutions before giving internal users access</li></ul><p><ac:structured-macro ac:name="include" ac:schema-version="1" ac:macro-id="442fb67b-2cd7-41a1-acfd-d846c9f31434"><ac:parameter ac:name=""><ac:link><ri:page ri:content-title="_cloud environments vary" /></ac:link></ac:parameter></ac:structured-macro></p><p>Environments are managed in the <strong>Manage environments</strong> page.</p><p>To access this page, in the <strong>Package overview</strong> page, click <strong>Manage environments</strong>.</p><p><ac:image ac:width="600"><ri:attachment ri:filename="Envs-Change-envs-BAR_.png" /></ac:image></p><p>From the <strong> <ac:inline-comment-marker ac:ref="7f4fa969-697c-487b-aff8-ccefa802d7b2"> Manage environments </ac:inline-comment-marker> </strong> page you can:</p><ul><li><ac:link><ri:page ri:content-title="Managing cloud log levels" /><ac:plain-text-link-body><![CDATA[Manage your log levels]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Restarting instances" /><ac:plain-text-link-body><![CDATA[Restart an instance]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Viewing cloud database information" /><ac:plain-text-link-body><![CDATA[View RDS information]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Setting up a new environment" /><ac:plain-text-link-body><![CDATA[Set up a new environment]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Tearing down an environment" /><ac:plain-text-link-body><![CDATA[Tear down an environment]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Configuring domain redirect rules" /><ac:plain-text-link-body><![CDATA[Configure domain redirect rules]]></ac:plain-text-link-body></ac:link></li><li><ac:link><ri:page ri:content-title="Protecting environments" /><ac:plain-text-link-body><![CDATA[Protect environments from being torn down]]></ac:plain-text-link-body></ac:link></li></ul><div class="child _mce_tagged_br"><ul><li><ac:link><ri:page ri:content-title="Backing up and restoring" /><ac:plain-text-link-body><![CDATA[Back up and restore]]></ac:plain-text-link-body></ac:link></li></ul></div><p><ac:image ac:width="600"><ri:attachment ri:filename="cloud-manage-environments-all-available.png" /></ac:image></p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="8201b09b-bb7e-468a-9b6e-92d4d59cb4fa"><ac:rich-text-body><p>The options available in <strong>Manage environments</strong> depend on the current state of your setup:</p><ul><li>If the Live environment is not set up, some actions are disabled.</li><li>Backup related actions are only available for the Live environment.</li></ul><p>Unavailable actions appear greyed out.</p></ac:rich-text-body></ac:structured-macro>

-->
