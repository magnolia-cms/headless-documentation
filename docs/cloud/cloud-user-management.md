---
title: Cloud user management
---

When you subscribe to Magnolia Cloud, we provide you with login
credentials to access both the cockpit and the cloud-based Magnolia
instances in each environment.

All the users created by Magnolia belong to the default cloud
[groups](/Administration/Security/Groups):

-   `developers`
-   `owners`
-   `supporters`

Note that these default cloud user groups have the [`superuser`
*role*](/Administration/Security/Roles+and+access+control+lists) by
default. The default `superuser` *user* is disabled in Magnolia Cloud.

You must edit the roles assigned to the groups depending on the
permissions you want to grant in the [Security
app](/Apps/List+of+apps/Security+app) of the [author
instance](/Magnolia+Cloud/Cockpit#edit-content-auth-instance) of each
environment. The permissions you grant depend on your project
requirements. In the Security app of the author instance of each
environment, you can also [create user
accounts](/Administration/Security/Users) for users such as content
editors who do not have access to the cockpit but work only with the
instances.

You can view the default cloud user groups in the Security app and in
the **People** section of the cockpit.

\[![](/assets/cloud/5-7-0-cloud-security-groups.png){width="500"}
![](/assets/cloud/image2017-11-29_9-1-19.png){width="500"}\]{.confluence-embedded-file-wrapper
confluence-embedded-manual-size}

\[\]{.confluence-embedded-file-wrapper confluence-embedded-manual-size}

```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="d772a03b-455c-4ee9-898f-0b8334c8c92d"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Security" /></ac:link></li><li><ac:link><ri:page ri:content-title="Group and role strategies" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>When you subscribe to Magnolia Cloud, we provide you with login credentials to access both the cockpit and the cloud-based Magnolia instances in each environment.</p><p>All the users created by Magnolia belong&nbsp;to&nbsp;the default cloud&nbsp;<ac:link><ri:page ri:content-title="Groups" /><ac:plain-text-link-body><![CDATA[groups]]></ac:plain-text-link-body></ac:link>:</p><ul><li><code>developers</code></li><li><code>owners</code></li><li><code>supporters</code></li></ul><p>Note that these default cloud user groups have the&nbsp;<ac:link><ri:page ri:content-title="Roles and access control lists" /><ac:link-body> <code>superuser</code>&nbsp;<em>role</em>&nbsp;</ac:link-body></ac:link>by default. The default&nbsp;<code>superuser</code>&nbsp;<em>user</em> is <ac:inline-comment-marker ac:ref="a6d16c7e-f748-4ee6-9903-489294c55555">disabled</ac:inline-comment-marker> in Magnolia Cloud.</p><p>You must edit the roles assigned to the groups depending on the permissions you want to grant in the&nbsp;<ac:link><ri:page ri:content-title="Security app" /></ac:link>&nbsp;of the&nbsp;<ac:link ac:anchor="anc-edit-content-auth-instance"><ri:page ri:content-title="Cockpit" /><ac:plain-text-link-body><![CDATA[author instance]]></ac:plain-text-link-body></ac:link>&nbsp;of each environment. The permissions you grant depend on your project requirements. In the Security app of the author instance of each environment, you can also&nbsp;<ac:link><ri:page ri:content-title="Users" /><ac:plain-text-link-body><![CDATA[create user accounts]]></ac:plain-text-link-body></ac:link>&nbsp;for users such as content editors who do not have access to the cockpit but work only with the instances.</p><p>You can&nbsp;view the default cloud user groups in the Security app and in the&nbsp;<strong>People</strong>&nbsp;section of the cockpit.</p><p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"> <ac:image ac:width="500"><ri:attachment ri:filename="5-7-0-cloud-security-groups.png" /></ac:image> <ac:image ac:width="500"><ri:attachment ri:filename="image2017-11-29_9-1-19.png" /></ac:image> </span></p><p><span class="confluence-embedded-file-wrapper confluence-embedded-manual-size"> <br /></span></p>

-->
```
