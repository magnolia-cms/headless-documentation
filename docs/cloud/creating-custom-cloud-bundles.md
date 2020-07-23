---
title: Creating and deploying custom cloud bundles
---

If you have decided to use the [custom cloud bundle
variant](/Magnolia+Cloud/Supported+modules+in+the+cloud), your site is
hosted in Magnolia Cloud and you, or your cloud partner, must create and
deploy the custom bundle.

To successfully deploy custom bundles to Magnolia Cloud, certain best
practices must be followed when creating your project and when deploying
it the first time or continuously thereafter.

Creating your custom bundle
===========================

Magnolia provides a [cloud-specific
option](https://git.magnolia-cms.com/projects/BUILD/repos/maven-archetypes/browse/magnolia-cloud-project-archetype/src/main/resources/archetype-resources/README.md)
in the [Magnolia Maven
Archetype](/Developing/How+to+use+Magnolia+Maven+archetypes) to
bootstrap a new project.

:::note
You receive your **subscription-code** and **access keys** during the
Magnolia Cloud onboarding process.

The `magnolia-cloud-project-archetype` is supported with version 1.3+ of
the Magnolia Maven Archetype.
:::

Usage
-----

```{.bash}
mvn org.apache.maven.plugins:maven-archetype-plugin:2.4:generate -DarchetypeCatalog=https://nexus.magnolia-cms.com/content/groups/public/

...
6: https://nexus.magnolia-cms.com/content/repositories/magnolia.public.snapshots -> info.magnolia.maven.archetypes:magnolia-cloud-project-archetype (Automates the creation of a Magnolia Cloud project: parent pom and webapp)
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): : 6

Define value for property 'groupId': : com.mycompany.project
Define value for property 'artifactId': : web-project-xyz
Define value for property 'version': 1.0-SNAPSHOT: :
Define value for property 'package': com.mycompany.project: :
Define value for property 'cloud-subscription-code': : mycompany-project
Define value for property 'magnolia-bundle-version': : 6.2.1
Define value for property 'project-name': web-project-xyz: :
Confirm properties configuration:
groupId: com.mycompany.project
artifactId: web-project-xyz
version: 1.0-SNAPSHOT
package: com.mycompany.project
cloud-subscription-code: mycompany-project
magnolia-bundle-version: 6.2.1
project-name: web-project-xyz
 Y: : Y

...

[INFO] project created from Archetype in dir: /Users/user/dev/web-project-xyz
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 02:18 min
[INFO] Finished at: 2020-04-23T13:12:46+02:00
[INFO] ------------------------------------------------------------------------
```


Further instructions and best practice information are provided in your
project's `README.md`.

The Magnolia Maven Archetype generates a best-practice project skeleton.
For example:

```
    my-mgnl-cloud-webapp/
    ├── pom.xml
    └── src
        └── main
            └── webapp
                └── WEB-INF
                    └── config
                        └── dev
                        │ └── README.md
                        │ └── magnolia.properties
                        └── shared
                            └── README.md
                            └── magnolia.properties
```

Note that upon creation:

-   Two default profiles are generated: `dev` and `shared`. These
    profiles have their own `magnolia.properties` files.
-   During packaging, the `dev` profile is excluded. The `shared`
    profile is included and deployed to Magnolia Cloud.
-   You can add local developer credentials to the `dev` profile to be
    used instead of the typical Magnolia superuser/superuser, which is
    [disabled in the
    cloud](/Magnolia+Cloud/Onboarding+to+Magnolia+Cloud/Cloud+user+management).
-   In the `shared` profile, you can create specific `.properties` files
    for each cloud environment. This can be used, for example, to test
    the integration of a third-party tool in the UAT environment without
    affecting your Live environment.

:::warning
If you created a custom bundle before Magnolia 6.2.1 with `.properties`
file changes, please check your customizations carefully and adhere to
the structure shown above.
:::

Continuous integration and deployment of custom bundles
=======================================================

You must use the [Magnolia Cloud Maven
Plugin](https://git.magnolia-cms.com/projects/OD/repos/magnolia-cloud-maven-plugin/browse/README.md)
for the continuous integration and deployment (CI/CD) of custom bundles
to Magnolia Cloud. The plugin validates and uploads your custom cloud
bundle and deploys it to Magnolia's pipelines.

:::tip
Make sure you use the latest version of the Magnolia Cloud Maven Plugin
when deploying a new bundle to Magnolia Cloud: v1.0-RC6.
:::

More information can be found in the readme here:
<https://git.magnolia-cms.com/projects/OD/repos/magnolia-cloud-maven-plugin/browse/README.md>

Validation of the custom bundle
-------------------------------

The plugin performs validation checks against the built artifact
(webapp) to ensure compatibility with the Magnolia Cloud infrastructure:

-   Basic checks for required configuration in the `web.xml` and
    `magnolia.properties` files.
-   Inspection of required and blacklisted modules/jars.

Deployment of the WAR file
--------------------------

The plugin uploads the built artifact to the entry point for Magnolia
Cloud's deployment pipelines. It also collects meta-information about
the artifact for debugging purposes.

Magnolia Cloud Simulator
========================

We recommend you test your custom bundle in a simulated cloud
environment before deploying it.

To do so, we offer a docker-compose based setup: [Magnolia Cloud
Simulator](https://git.magnolia-cms.com/projects/OD/repos/magnolia-cloud-simulator/browse/README.md).


<!-- Original Confluence content:

<p>If you have decided to use the <ac:link><ri:page ri:content-title="Supported modules in the cloud" /><ac:plain-text-link-body><![CDATA[custom cloud bundle variant]]></ac:plain-text-link-body></ac:link>, your site is hosted in Magnolia Cloud and you, or your cloud partner, must create and deploy the custom bundle.</p><p>To successfully deploy custom bundles to Magnolia Cloud, certain best practices must be followed when creating your project and when deploying it the first time or continuously thereafter.&nbsp;</p><h2>Creating your custom bundle</h2><p>Magnolia provides a <a href="https://git.magnolia-cms.com/projects/BUILD/repos/maven-archetypes/browse/magnolia-cloud-project-archetype/src/main/resources/archetype-resources/README.md">cloud-specific option</a> in the <ac:link><ri:page ri:content-title="How to use Magnolia Maven archetypes" /><ac:plain-text-link-body><![CDATA[Magnolia Maven Archetype]]></ac:plain-text-link-body></ac:link>&nbsp;to&nbsp;bootstrap a new project.</p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="047abf0b-1707-42b3-884b-be35b3c22790"><ac:rich-text-body><p>You receive&nbsp;your <strong>subscription-code</strong> and <strong>access keys</strong>&nbsp;during the Magnolia Cloud onboarding process.</p><p>The <code>magnolia-cloud-project-archetype</code> is supported with version&nbsp;1.3+ of the Magnolia Maven Archetype.</p></ac:rich-text-body></ac:structured-macro><h3>Usage</h3><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="369b1f41-614f-4989-9bb7-2287669ee215"><ac:parameter ac:name="language">bash</ac:parameter><ac:plain-text-body><![CDATA[mvn org.apache.maven.plugins:maven-archetype-plugin:2.4:generate -DarchetypeCatalog=https://nexus.magnolia-cms.com/content/groups/public/ 

...
6: https://nexus.magnolia-cms.com/content/repositories/magnolia.public.snapshots -> info.magnolia.maven.archetypes:magnolia-cloud-project-archetype (Automates the creation of a Magnolia Cloud project: parent pom and webapp)
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): : 6

Define value for property 'groupId': : com.mycompany.project
Define value for property 'artifactId': : web-project-xyz
Define value for property 'version':  1.0-SNAPSHOT: :
Define value for property 'package':  com.mycompany.project: :
Define value for property 'cloud-subscription-code': : mycompany-project
Define value for property 'magnolia-bundle-version': : 6.2.1
Define value for property 'project-name':  web-project-xyz: :
Confirm properties configuration:
groupId: com.mycompany.project
artifactId: web-project-xyz
version: 1.0-SNAPSHOT
package: com.mycompany.project
cloud-subscription-code: mycompany-project
magnolia-bundle-version: 6.2.1
project-name: web-project-xyz
 Y: : Y

...

[INFO] project created from Archetype in dir: /Users/user/dev/web-project-xyz
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  02:18 min
[INFO] Finished at: 2020-04-23T13:12:46+02:00
[INFO] ------------------------------------------------------------------------]]></ac:plain-text-body></ac:structured-macro><p>Further instructions and best practice information are provided in your project's <code>README.md</code>.</p><p>The Magnolia Maven Archetype generates a best-practice project skeleton. For example:</p><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="11873917-261d-4534-af7e-68e0419bfe36"><ac:plain-text-body><![CDATA[my-mgnl-cloud-webapp/
├── pom.xml
└── src
    └── main
        └── webapp
            └── WEB-INF
                └── config
                    └── dev
                    │   └── README.md
                    │   └── magnolia.properties
                    └── shared
                        └── README.md
                        └── magnolia.properties]]></ac:plain-text-body></ac:structured-macro><p>Note that upon creation:</p><ul><li>Two default profiles are generated: <code>dev</code> and <code>shared</code>. These profiles have their own <code>magnolia.properties</code> files.&nbsp;</li><li>During packaging, the&nbsp;<code>dev</code>&nbsp;profile is excluded. The&nbsp;<code>shared</code>&nbsp;profile is included and deployed to Magnolia Cloud.</li><li>You can add local developer credentials to the <code>dev</code> profile to be used instead of the typical Magnolia superuser/superuser, which is <ac:link><ri:page ri:content-title="Cloud user management" /><ac:plain-text-link-body><![CDATA[disabled in the cloud]]></ac:plain-text-link-body></ac:link>.</li><li>In the <code>shared</code> profile, you can create specific <code>.properties</code> files for each cloud environment. This can be used, for example, to test the integration of a third-party tool in the UAT environment without affecting your Live environment.&nbsp;</li></ul><ac:structured-macro ac:name="warning" ac:schema-version="1" ac:macro-id="f88f4ec1-476d-4927-8193-153df161da93"><ac:rich-text-body><p>If you created a custom bundle before Magnolia 6.2.1 with <code>.properties</code> file changes, please check your customizations carefully and adhere to the structure shown above.</p></ac:rich-text-body></ac:structured-macro><h2>Continuous integration and deployment of custom bundles</h2><p>You must use&nbsp;the&nbsp;<a href="https://git.magnolia-cms.com/projects/OD/repos/magnolia-cloud-maven-plugin/browse/README.md">Magnolia Cloud Maven Plugin</a>&nbsp;for the continuous integration and deployment (CI/CD) of custom bundles to Magnolia Cloud.&nbsp;The plugin validates and uploads your custom cloud bundle and deploys it to Magnolia's pipelines.</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="a89c0bf3-4b90-4550-a7bc-3351906686a6"><ac:rich-text-body><p>Make sure you use the latest version of the Magnolia Cloud Maven Plugin when deploying a new bundle to Magnolia Cloud: v1.0-RC6.</p></ac:rich-text-body></ac:structured-macro><p>More information can be found in the readme here:&nbsp;<a href="https://git.magnolia-cms.com/projects/OD/repos/magnolia-cloud-maven-plugin/browse/README.md">https://git.magnolia-cms.com/projects/OD/repos/magnolia-cloud-maven-plugin/browse/README.md</a></p><h3>Validation of the custom bundle</h3><p>The plugin performs validation checks against the built artifact (webapp) to ensure compatibility with the Magnolia Cloud infrastructure:</p><ul><li>Basic checks for required configuration in&nbsp;the <code>web.xml</code> and <code>magnolia.properties</code> files.</li><li>Inspection of required and blacklisted modules/jars.</li></ul><h3>Deployment of the WAR file</h3><p>The plugin uploads the built artifact to the entry point for Magnolia Cloud's deployment pipelines. It also collects meta-information about the artifact for debugging purposes.</p><h2>Magnolia Cloud Simulator</h2><p>We recommend you test your custom bundle in a simulated cloud environment before deploying it.</p><p>To do so, we offer a docker-compose based setup: <a href="https://git.magnolia-cms.com/projects/OD/repos/magnolia-cloud-simulator/browse/README.md">Magnolia Cloud Simulator</a>.</p><p><br /></p>

-->

