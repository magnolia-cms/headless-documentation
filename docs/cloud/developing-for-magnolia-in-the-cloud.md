---
title: Developing for Magnolia in the cloud
---

 This page gives an overview of the Magnolia development cycle for standard and custom bundles.

[](!toc)

# Standard cloud bundle development workflow

![](mnow-local-dev-overview.png){width=600}

[/_i/_cloudContext/_cloud+environments+vary](!include)

## Local development

 **Creating new features and functions in your Magnolia *[package](/Magnolia+Cloud/Cockpit/Magnolia+cockpit+concepts#glossary-package)*** **starts with local development.** After cloning the remote Git repository linked to your Magnolia subscription package, you install a Magnolia local development bundle on your machine. This is where you develop new features before sending them to the cloud via the Git repository.

Have a look at the prerequisites below before you get started.

[]{#localdevprereqs}

## Working in Magnolia cloud

After developing locally and pushing your work to the Magnolia Git repository, log in to the [cockpit](/Magnolia+Cloud/Cockpit) to retrieve your work. As well as providing an overview of your package's status, the cockpit is the starting point for all the actions you can do in Magnolia in the cloud:

* [Install updates using Magnolia](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit) - Create development snapshots and releases to deploy and test new features through the different environments in Magnolia before making your site available to your customers.

> *Continuous delivery is a way to ensure that new configuration, templates and code can be rapidly and safely deployed to production. You deliver every change first to a UAT environment and verify that business applications and services function as expected through testing. Since every change is delivered to the UAT environment using automation in the Magnolia Cloud Cockpit, you have confidence that the application can be deployed to the Live environment exactly the same way, with a push of a button when the business is ready. In the UAT environment, business users can validate your changes with real content cloned from the Live environment.* \
> *Adapted from Caum, Carl: [Continuous Delivery Vs. Continuous Deployment: What's the Diff?](https://puppet.com/blog/continuous-delivery-vs-continuous-deployment-what-s-diff)*

* [Manage environments in Magnolia](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit) - Create and manage the environments and running instances of Magnolia in the cloud.

## Prerequisites

### Java

Java 1.8 or higher is required to run the Magnolia local development bundle. If you do not know whether you have Java installed or which version you have, please read [get Java](/Getting+started+with+Magnolia/Installing+Magnolia).

### Git

[Git](https://git-scm.com/) is required to develop for Magnolia in the cloud. You need:

* [Git client software](https://git-scm.com/downloads)
* [Basic Git knowledge](https://git-scm.com/doc)

::: bestpractice
  Magnolia recommends that you develop your light module files using [Magnolia CLI](/Magnolia+CLI).
:::

See [Setting up a local Git repository](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Setting+up+a+local+Git+repository) to get started with your standard bundle development workflow.

# Custom cloud bundle development workflow

In the case of [*custom* cloud bundle](/Magnolia+Cloud/Supported+modules+in+the+cloud#cloud-bundle) implementations, the development workflow is different. You or your cloud partner create the Magnolia bundle that is deployed to the cloud.

![](cloud-custom-dev-overview.png){width=600}

From Magnolia 6.2.1, Magnolia provides a [cloud-specific option](https://git.magnolia-cms.com/projects/BUILD/repos/maven-archetypes/browse/magnolia-cloud-project-archetype/src/main/resources/archetype-resources/README.md) in the [Magnolia Maven Archetype](/Developing/How+to+use+Magnolia+Maven+archetypes) to facilitate the creation of your cloud bundles. The Magnolia Maven Archetype generates a best-practice project skeleton. The Magnolia Cloud Maven Plugin validates and uploads your custom cloud bundle. Once your custom bundle is deployed to the cloud, you can also work with Magnolia Cloud using both Light Development (as described above) and Java custom modules.

See [Creating and deploying custom cloud bundles](/Magnolia+Cloud/Developing+for+Magnolia+in+the+cloud/Creating+and+deploying+custom+cloud+bundles).

# Hands-on learning

Try out our end-to-end [Hello-cloud development tutorial](/Magnolia+Cloud/Hello-cloud+-+a+development+tutorial), in which you set up a light module and deploy it in Magnolia.




<!-- Original Confluence content:

<p><ac:inline-comment-marker ac:ref="6caa89f7-b688-4697-9bcc-fe5ec2e575a6"> This page gives an&nbsp;</ac:inline-comment-marker><ac:inline-comment-marker ac:ref="0e73e45a-72f5-4fdc-88e8-84ddf28e1a6f"><ac:inline-comment-marker ac:ref="6caa89f7-b688-4697-9bcc-fe5ec2e575a6">overview&nbsp;</ac:inline-comment-marker></ac:inline-comment-marker>of the Magnolia development cycle for standard and custom bundles.</p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="acf55ef5-e297-4aae-8ea4-40b1b325f909"><ac:parameter ac:name="maxLevel">2</ac:parameter></ac:structured-macro></p><h2>Standard cloud bundle development workflow</h2><p><ac:image ac:width="600"><ri:attachment ri:filename="mnow-local-dev-overview.png" /></ac:image></p><p><ac:structured-macro ac:name="include" ac:schema-version="1" ac:macro-id="5b5ae1a8-6e55-4a64-8e4d-91bad436c2ed"><ac:parameter ac:name=""><ac:link><ri:page ri:content-title="_cloud environments vary" /></ac:link></ac:parameter></ac:structured-macro></p><h3>Local development</h3><p><strong> <ac:inline-comment-marker ac:ref="db450d86-828b-404f-b369-af8c3c540158"> Creating new features&nbsp;and functions in your Magnolia </ac:inline-comment-marker> <em> <ac:inline-comment-marker ac:ref="db450d86-828b-404f-b369-af8c3c540158"> <ac:link ac:anchor="glossary-package"><ri:page ri:content-title="Magnolia cockpit concepts" /><ac:plain-text-link-body><![CDATA[package]]></ac:plain-text-link-body></ac:link> </ac:inline-comment-marker> </em> </strong> <ac:inline-comment-marker ac:ref="db450d86-828b-404f-b369-af8c3c540158"> <strong>starts with&nbsp;local development.</strong> After cloning the remote Git repository linked to your Magnolia subscription package, you install a Magnolia local development bundle&nbsp;on your machine. This is where you develop new features before sending them to the cloud via the Git repository. </ac:inline-comment-marker>&nbsp;</p><p>Have a look at the prerequisites below before you get started.</p><p><ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="612a730f-0788-47db-b73e-f888757c2553"><ac:parameter ac:name="">localdevprereqs</ac:parameter></ac:structured-macro></p><h3>Working in Magnolia cloud</h3><p>After developing locally and pushing your work&nbsp;to the Magnolia Git repository, log in to the&nbsp;<ac:link><ri:page ri:content-title="Cockpit" /><ac:plain-text-link-body><![CDATA[cockpit]]></ac:plain-text-link-body></ac:link> to retrieve your work. &nbsp;As well as providing an overview of your package's status, the cockpit is the starting point for all the actions you can do in Magnolia in the cloud:</p><ul><li><ac:link><ri:page ri:content-title="Installing updates using the Magnolia cockpit" /><ac:plain-text-link-body><![CDATA[Install updates using Magnolia]]></ac:plain-text-link-body></ac:link>&nbsp;- Create development snapshots and releases to deploy and test new features through the different environments in Magnolia before making your site available to your customers.</li></ul><blockquote><p><em>Continuous delivery is a way to ensure that new configuration, templates and code can be rapidly and safely deployed to production. You deliver every change first to a UAT environment and verify that business applications and services function as expected through testing. Since every change is delivered to the UAT environment using automation in the Magnolia Cloud Cockpit, you have confidence that the application can be deployed to the Live environment exactly the same way, with a push of a button when the business is ready. In the UAT environment, business users can validate your changes with real content cloned from the Live environment.&nbsp;</em><br /><em>Adapted from Caum, Carl:&nbsp;<a href="https://puppet.com/blog/continuous-delivery-vs-continuous-deployment-what-s-diff" rel="nofollow" class="external-link">Continuous Delivery Vs. Continuous Deployment: What's the Diff?</a></em></p></blockquote><ul><li><ac:link><ri:page ri:content-title="Managing environments using the Magnolia cockpit" /><ac:plain-text-link-body><![CDATA[Manage environments in Magnolia]]></ac:plain-text-link-body></ac:link>&nbsp;- Create and manage the environments and running instances of Magnolia in the cloud.</li></ul><h3>Prerequisites&nbsp;</h3><h4>Java&nbsp;</h4><p>Java 1.8 or higher is required to run the <ac:inline-comment-marker ac:ref="8f72886c-6be0-4950-a441-0492308ffffa">Magnolia local development bundle. </ac:inline-comment-marker>&nbsp;If you do not know whether you have Java installed or which version you have, please read&nbsp;<ac:link><ri:page ri:content-title="Installing Magnolia" /><ac:plain-text-link-body><![CDATA[get Java]]></ac:plain-text-link-body></ac:link>.</p><h4>Git</h4><p><a href="https://git-scm.com/">Git</a>&nbsp;is required to develop for Magnolia in the cloud. You need:</p><ul><li><a href="https://git-scm.com/downloads">Git client software</a></li><li><a href="https://git-scm.com/doc">Basic Git knowledge</a></li></ul><ac:structured-macro ac:name="bestpractice" ac:schema-version="1" ac:macro-id="f6c90144-6141-4aa3-9c30-b3e66880276c"><ac:parameter ac:name="atlassian-macro-output-type">
    INLINE</ac:parameter><ac:rich-text-body><p>Magnolia recommends that you develop your light module files&nbsp;using <ac:link><ri:page ri:content-title="Magnolia CLI" /></ac:link>.&nbsp;</p></ac:rich-text-body></ac:structured-macro><p>See&nbsp;<ac:link><ri:page ri:content-title="Setting up a local Git repository" /></ac:link>&nbsp;to get started with your standard bundle development workflow.</p><h2>Custom cloud bundle development workflow</h2><p>In the case of <ac:link ac:anchor="anc-cloud-bundle"><ri:page ri:content-title="Supported modules in the cloud" /><ac:link-body> <em>custom</em> cloud bundle</ac:link-body></ac:link> implementations, the development workflow is different. You or your cloud partner create the Magnolia bundle that is deployed to the cloud.&nbsp;</p><p><ac:image ac:width="600"><ri:attachment ri:filename="cloud-custom-dev-overview.png" /></ac:image></p><p>From Magnolia 6.2.1, Magnolia provides a <a href="https://git.magnolia-cms.com/projects/BUILD/repos/maven-archetypes/browse/magnolia-cloud-project-archetype/src/main/resources/archetype-resources/README.md">cloud-specific option</a> in the <ac:link><ri:page ri:content-title="How to use Magnolia Maven archetypes" /><ac:plain-text-link-body><![CDATA[Magnolia Maven Archetype]]></ac:plain-text-link-body></ac:link>&nbsp;to facilitate the creation of your cloud bundles. The Magnolia Maven Archetype generates a best-practice project skeleton. The Magnolia Cloud Maven Plugin validates and uploads your custom cloud bundle. Once your custom bundle is deployed to the cloud, you can also work with Magnolia Cloud using both Light Development (as described above) and Java custom modules.</p><p>See&nbsp;<ac:link><ri:page ri:content-title="Creating and deploying custom cloud bundles" /></ac:link>.</p><h2>Hands-on learning</h2><p>Try out our end-to-end <ac:link><ri:page ri:content-title="Hello-cloud - a development tutorial" /><ac:plain-text-link-body><![CDATA[Hello-cloud development tutorial]]></ac:plain-text-link-body></ac:link>, in&nbsp;which you set up a light module and deploy it in Magnolia.</p><p><br /></p>

-->
