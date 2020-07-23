---
title: Supported modules in the cloud
---

This page describes the supported features of Magnolia Cloud.

## Magnolia Cloud bundle variants

Magnolia offers two Cloud bundle variants to suit the needs of our customers and partners.

### Standard bundle – Light Development

This variant includes the standard Magnolia DX Core bundle and additionally offers Magnolia Connector Packs and selected Special Features.

This cloud variant focuses on speed and agility for your projects. Your site is hosted in Magnolia Cloud; Magnolia manages the environment as a service.

The fully managed environment provides the infrastructure for Light Development as well as the [Cockpit](/Magnolia+Cloud/Cockpit), which you use for:

* Configuration
* Deployment workflow
* Backup and restore
* Logs and Monitoring
* Additional services

With this cloud variant, you can customize Magnolia using [light development](/Developing/Light+development+in+Magnolia) and manage the deployment environment via the Cockpit.

### Custom bundle – Light Development and Java Development

This cloud variant is geared toward complex projects that need a high level of customization. With this cloud variant, you can customize Magnolia using both Light Development and Java custom modules.

Your site is hosted in Magnolia Cloud and you or your chosen Partner manages the creation of custom Java modules and the deployment of the bundle. This variant provides the highest level of flexibility allowing for a custom CMS that fits your unique needs. It also includes all the functionality of the standard DX Core bundle and additionally offers Magnolia Connector Packs and selected Special Features.

Our experienced Services team is available to provide best practices and help you onboard to our cloud.

## DX Core modules

* [About App module](/Modules/List+of+modules/About+App+module)

* [Advanced cache modules](/Modules/List+of+modules/Advanced+cache+modules)

* [Cache modules](/Modules/List+of+modules/Cache+modules)

* [Campaign Publisher module](/Modules/List+of+modules/Campaign+Publisher+module)

* [Categorization module](/Modules/List+of+modules/Categorization+module)

* [Content Dependencies module](/Modules/List+of+modules/Content+Dependencies+module)

* [Content Editor module](/Modules/List+of+modules/Content+Editor+module)

* [Content Importer module](/Modules/List+of+modules/Content+Importer+module)

* [Content Tags module](/Modules/List+of+modules/Content+Tags+module)

* [Content Translation Support module](/Modules/List+of+modules/Content+Translation+Support+module)

* [Content Types module](/Modules/List+of+modules/Content+Types+module)

* [Definitions App module](/Modules/List+of+modules/Definitions+App+module)

* [Device Detection module](/Modules/List+of+modules/Device+Detection+module)

* [Diff module](/Modules/List+of+modules/Diff+module)

* [Digital Asset Management module](/Modules/List+of+modules/Digital+Asset+Management+module)

* [Form module](/Modules/List+of+modules/Form+module)

* [Groovy module](/Modules/List+of+modules/Groovy+module)

* [High performance caching modules](/Modules/List+of+modules/High+performance+caching+modules)

* [Imaging module](/Modules/List+of+modules/Imaging+module)

* [JavaScript Models module](/Modules/List+of+modules/JavaScript+Models+module)

* [JCR Tools module](/Modules/List+of+modules/JCR+Tools+module)

* [LDAP Connector module](/Modules/List+of+modules/LDAP+Connector+module)

* [Log Tools module](/Modules/List+of+modules/Log+Tools+module)

* [Mail module](/Modules/List+of+modules/Mail+module)

* [Marketing Tags module](/Modules/List+of+modules/Marketing+Tags+module)

* [Messages App module](/Modules/List+of+modules/Messages+App+module)

* [MTE module](/Modules/List+of+modules/MTE+module)

* [MTK module](/Modules/List+of+modules/MTE+module/MTK+module)

* [Multisite module](/Modules/List+of+modules/Multisite+module)

* [Pages module](/Modules/List+of+modules/Pages+module)

* [Password Manager module](/Modules/List+of+modules/Password+Manager+module)

* [Periscope module](/Modules/List+of+modules/Periscope+module)

* [Periscope Result Ranker module](/Modules/List+of+modules/Periscope+Result+Ranker+module)

* [Personalization module](/Modules/List+of+modules/Personalization+module)

* [Publishing module](/Modules/List+of+modules/Publishing+module)

* [Publishing Transactional module](/Modules/List+of+modules/Publishing+Transactional+module)

* [Resources module](/Modules/List+of+modules/Resources+module)

* [REST Client module](/Modules/List+of+modules/REST+Client+module)

* [REST module](/Modules/List+of+modules/REST+module)

* [RSS Aggregator module](/Modules/List+of+modules/RSS+Aggregator+module)

* [Scheduler module](/Modules/List+of+modules/Scheduler+module)

* [Security App module](/Modules/List+of+modules/Security+App+module)

* [Site module](/Modules/List+of+modules/Site+module)

* [SiteMesh module](/Modules/List+of+modules/High+performance+caching+modules/SiteMesh+module)

* [Soft Locking module](/Modules/List+of+modules/Soft+Locking+module)

* [Tools module](/Modules/List+of+modules/Tools+module)

* [Virtual URI module](/Modules/List+of+modules/Virtual+URI+module)

* [Workflow module](/Modules/List+of+modules/Workflow+module)

## Connector Packs

* [Analytics Connector Pack](/Connector+Packs/Analytics+Connector+Pack)
* [Commerce Connector Pack](/Connector+Packs/Commerce+Connector+Pack)
* [DAM Connector Pack](/Connector+Packs/DAM+Connector+Pack)
* [Marketing Automation Connector Pack](/Connector+Packs/Marketing+Automation+Connector+Pack)
* [Optimization Connector Pack](/Connector+Packs/Optimization+Connector+Pack)

## Special Features

* [Live Copy](/Special+Features/Live+Copy)

## Cloud offer limitations

The Magnolia cloud offer includes the [Configuration app](/Apps/List+of+apps/Configuration+app) that allows you to configure your modules.

Here is a list of known limitations for modules which are part of the Magnolia cloud software bundle:

|Module|Limitation in the cloud offer|Suggested workaround|
|-|-|-|
|[Content Translation Support](/Modules/List+of+modules/Content+Translation+Support+module)|Content from YAML-based dialogs cannot be translated.||
|[Form module](/Modules/List+of+modules/Form+module)|No additional validators or form processors (which require Java).|Use Regexp and other default validators.|
|[Personalization module](/Modules/List+of+modules/Personalization+module)|No Java-based custom traits.|Use cookie-based traits.|
|[REST module](/Modules/List+of+modules/REST+module)|No custom (Java-based) endpoints.|Configure custom [Delivery endpoints](/Developing/API/REST+API/Delivery+endpoint+API) with YAML, use the default endpoints [Nodes](/Developing/API/REST+API/Nodes+endpoint+API) and [Properties](/Developing/API/REST+API/Properties+endpoint+API).|
|REST Tools (part of [REST module](/Modules/List+of+modules/REST+module))|Requires the configuration of the property `apiBasePath` and subsequent restart of the instance.||
|[Workflow module](/Modules/List+of+modules/Workflow+module)|Customization is not possible.||




<!-- Original Confluence content:

<p class="with-breadcrumbs">This page describes the supported features of Magnolia Cloud.</p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="5b7cbce5-43cb-40ee-991f-23a02c2aed1d"><ac:parameter ac:name="maxLevel">3</ac:parameter></ac:structured-macro></p><h2>Magnolia Cloud bundle variants&nbsp;<ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="659ae544-004c-4b27-b55f-6317f0d69676"><ac:parameter ac:name="">anc-cloud-bundle</ac:parameter></ac:structured-macro></h2><p>Magnolia offers two Cloud bundle variants to suit the needs of our customers and partners.</p><h4>Standard bundle &ndash; Light Development</h4><p>This&nbsp;variant includes the standard Magnolia DX Core bundle and additionally offers Magnolia Connector Packs and selected Special Features.</p><p>This cloud&nbsp;variant focuses on speed and agility for your projects. Your site is hosted in Magnolia Cloud; Magnolia manages the environment as a service.</p><p>The fully managed environment provides the infrastructure for Light Development as well as the <a href="https://documentation.magnolia-cms.com/display/DOCS/Cockpit">Cockpit</a>, which you use for:</p><ul><li>Configuration</li><li>Deployment workflow</li><li>Backup and restore</li><li>Logs and Monitoring</li><li>Additional services</li></ul><p>With this cloud&nbsp;variant, you can customize Magnolia using <a href="https://documentation.magnolia-cms.com/display/DOCS/Light+development+in+Magnolia">light development</a> and manage the deployment environment via the Cockpit.&nbsp;</p><h4>Custom bundle &ndash; Light Development and Java Development</h4><p>This cloud&nbsp;variant is geared toward complex projects that need a high level of customization.&nbsp;With this cloud variant, you can customize Magnolia using both Light Development and Java custom modules.</p><p>Your site is hosted in Magnolia Cloud and you or your chosen Partner manages the creation of custom Java modules and the deployment of the bundle. This&nbsp;variant provides the highest level of flexibility allowing for a custom CMS that fits your unique needs. It also&nbsp;includes all the functionality of the standard DX Core bundle and additionally offers Magnolia Connector Packs and selected Special Features.</p><p>Our experienced Services team is available to provide best practices and help you onboard to our cloud.</p><h3>DX Core modules</h3><table class="wrapped"><colgroup> <col /> <col /> <col /> </colgroup><tbody><tr><th>A-G</th><th>H-Pe</th><th>Pu-Z</th></tr><tr><td><p><ac:link><ri:page ri:content-title="About App module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Advanced cache modules" /></ac:link>&nbsp;</p><p><ac:link><ri:page ri:content-title="Cache modules" /></ac:link></p><p><ac:link><ri:page ri:content-title="Campaign Publisher module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Categorization module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Content Dependencies module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Content Editor module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Content Importer module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Content Tags module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Content Translation Support module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Content Types module" /></ac:link>&nbsp;</p><p><ac:link><ri:page ri:content-title="Definitions App module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Device Detection module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Diff module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Digital Asset Management module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Form module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Groovy module" /></ac:link></p></td><td><p><ac:link><ri:page ri:content-title="High performance caching modules" /></ac:link></p><p><ac:link><ri:page ri:content-title="Imaging module" /></ac:link></p><p><ac:link><ri:page ri:content-title="JavaScript Models module" /></ac:link></p><p><ac:link><ri:page ri:content-title="JCR Tools module" /></ac:link>&nbsp;</p><p><ac:link><ri:page ri:content-title="LDAP Connector module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Log Tools module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Mail module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Marketing Tags module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Messages App module" /></ac:link></p><p><ac:link><ri:page ri:content-title="MTE module" /></ac:link></p><p><ac:link><ri:page ri:content-title="MTK module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Multisite module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Pages module" /></ac:link>&nbsp;</p><p><ac:link><ri:page ri:content-title="Password Manager module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Periscope module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Periscope Result Ranker module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Personalization module" /></ac:link></p></td><td><p><ac:link><ri:page ri:content-title="Publishing module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Publishing Transactional module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Resources module" /></ac:link></p><p><ac:link><ri:page ri:content-title="REST Client module" /></ac:link></p><p><ac:link><ri:page ri:content-title="REST module" /></ac:link>&nbsp;</p><p><ac:link><ri:page ri:content-title="RSS Aggregator module" /></ac:link>&nbsp;</p><p><ac:link><ri:page ri:content-title="Scheduler module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Security App module" /></ac:link>&nbsp;</p><p><ac:link><ri:page ri:content-title="Site module" /></ac:link></p><p><ac:link><ri:page ri:content-title="SiteMesh module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Soft Locking module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Tools module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Virtual URI module" /></ac:link></p><p><ac:link><ri:page ri:content-title="Workflow module" /></ac:link>&nbsp;</p></td></tr></tbody></table><h3>Connector Packs&nbsp;</h3><ul><li><a href="https://documentation.magnolia-cms.com/display/DOCS/Analytics+Connector+Pack">Analytics Connector Pack</a>&nbsp;</li><li><a href="https://documentation.magnolia-cms.com/display/DOCS/Commerce+Connector+Pack">Commerce Connector Pack</a></li><li><ac:link><ri:page ri:content-title="DAM Connector Pack" /></ac:link></li><li><ac:link><ri:page ri:content-title="Marketing Automation Connector Pack" /></ac:link></li><li><ac:link><ri:page ri:content-title="Optimization Connector Pack" /></ac:link></li></ul><h3>Special Features</h3><ul><li><a href="https://documentation.magnolia-cms.com/display/DOCS/Live+Copy">Live Copy</a></li></ul><h2>Cloud offer limitations</h2><p>The Magnolia cloud offer&nbsp;includes the&nbsp;<ac:link><ri:page ri:content-title="Configuration app" /></ac:link>&nbsp;that allows you to configure your modules.</p><p>Here is a list of known limitations for modules which are part of the Magnolia cloud software bundle:</p><table class="relative-table wrapped" style="width: 98.9583%;"><colgroup> <col style="width: 33.7064%;" /> <col style="width: 42.7255%;" /> <col style="width: 23.5681%;" /> </colgroup><thead><tr><th><p>Module</p></th><th><p>Limitation in the cloud offer</p></th><th colspan="1"><p>Suggested workaround</p></th></tr></thead><tbody><tr><td colspan="1"><ac:link><ri:page ri:content-title="Content Translation Support module" /><ac:plain-text-link-body><![CDATA[Content Translation Support]]></ac:plain-text-link-body></ac:link></td><td colspan="1">Content from YAML-based dialogs cannot be translated.</td><td colspan="1"><br /></td></tr><tr><td colspan="1"><ac:link><ri:page ri:content-title="Form module" /></ac:link></td><td colspan="1"><p>No additional validators or form processors (which require Java).</p></td><td colspan="1">Use Regexp and other default validators.</td></tr><tr><td><ac:link><ri:page ri:content-title="Personalization module" /></ac:link></td><td><p>No Java-based custom traits.</p></td><td colspan="1"><div class="content-wrapper"><p>Use cookie-based traits.</p></div></td></tr><tr><td><ac:link><ri:page ri:content-title="REST module" /></ac:link></td><td>No custom (Java-based) endpoints.</td><td colspan="1"><p>Configure custom <ac:link><ri:page ri:content-title="Delivery endpoint API" /><ac:plain-text-link-body><![CDATA[Delivery endpoints]]></ac:plain-text-link-body></ac:link> with YAML, use the default endpoints <ac:link><ri:page ri:content-title="Nodes endpoint API" /><ac:plain-text-link-body><![CDATA[Nodes]]></ac:plain-text-link-body></ac:link> and <ac:link><ri:page ri:content-title="Properties endpoint API" /><ac:plain-text-link-body><![CDATA[Properties]]></ac:plain-text-link-body></ac:link>.</p></td></tr><tr><td colspan="1">REST Tools (part of&nbsp;<ac:link><ri:page ri:content-title="REST module" /></ac:link>)</td><td colspan="1"><p>Requires the configuration of the property&nbsp;<code>apiBasePath</code>&nbsp;and subsequent restart of the instance.</p></td><td colspan="1"><br /></td></tr><tr><td colspan="1"><ac:link><ri:page ri:content-title="Workflow module" /></ac:link></td><td colspan="1">Customization is not possible.</td><td colspan="1"><br /></td></tr></tbody></table>

-->
