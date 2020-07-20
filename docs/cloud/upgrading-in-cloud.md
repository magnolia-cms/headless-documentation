---
title: Upgrading Magnolia in the cloud
---

When a new version of Magnolia is released and available on the Cloud,
you can upgrade your cloud environments directly from the cockpit.

::: {.note}
We urge all cloud customers to upgrade their projects to the latest
Magnolia [LTS release](/Support/End-of-life+policy) within 60 days of
the version release date. All *new* deployments must be based on the
latest LTS version of Magnolia.
:::

You can also manage the automatic upgrade backup that is created for the
Live environment from the cockpit. You can extend the period for which
the backup is stored or restore it to roll back the upgrade.
Alternatively, you can delete the upgrade backup manually to be able to
tear down the Live environment again.

[](!toc)

Upgrading the version of Magnolia
=================================

Before upgrading, we recommend you read the [release notes](/Releases)
for the version of Magnolia you are upgrading to.

::: {.tip}
**Tips**

-   Begin by upgrading your Integration and UAT environments. Then test
    the new features available, check your configuration and content,
    including your website templates and light development work. Check
    the [Definitions app](/Apps/List+of+apps/Definitions+app) to see any
    problematic or deprecated definitions.
-   [Create a manual backup of your
    environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Backing+up+and+restoring/Creating+a+backup+manually)
    before upgrading it.
-   You cannot tear down an environment after upgrading until the
    *automatic* backup that is created is removed. Automatic backups are
    generally removed after 48 hours. You can extend the period of time
    for which the backup is stored or manually remove it.
:::

To upgrade Magnolia in the cockpit:

1.  In the Package overview page, click **Install an update** in the
    Installed releases section.
2.  Click **Change the version of Magnolia used in your environments**:\
    ![](/assets/cloud/cloud-change-magnolia-version-action.png){width="600"}
3.  Select the environment you want to upgrade: Live, UAT or
    Integration.\
    Note that we recommend starting with upgrading the integration
    environment and testing before moving on to UAT and, finally Live.
4.  Select the version of Magnolia you want to upgrade to. If nothing is
    displayed, this means there are no new versions of Magnolia
    available.
5.  Confirm the consequences of the upgrade and click **Install**.\
    The upgrade process takes some time. As all actions in the cockpit
    are asynchronous, you can click on **OK** before the upgrade is
    complete: the action runs in the background and a notification
    appears once it is complete. The action also appears in the
    [activity log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs).

Every automatic backup of the Live environment is stored for 48 hours.
You can [extend this to 5 days](#extend-storage).

Until the automatic backup is removed, you cannot tear down your
upgraded environment. If you need to tear down the environment, you can
[remove the upgrade backup manually](#remove-backup).

[]{#extend-storage}Extending the upgrade backup storage period
==============================================================

Every automatic backup of the Live environment is stored for 48 hours.
You can extend this to 5 days from the Package overview page by clicking
on the **Extend upgrade backup storage period** link:

![](/assets/cloud/cloud-extend-backup-period.png){width="600"}

This link takes you to a wizard where you must confirm the extension you
requested.

If you need an extension for more than 5 days, please [contact the Cloud
Helpdesk](https://jira.magnolia-cms.com/servicedesk/customer/portal/6/group/18).

[]{#remove-backup}Deleting the upgrade backup
=============================================

Until the automatic backup is removed, you cannot tear down your
upgraded environment. If you need to tear down the environment, you can
delete the upgrade backup manually.

To delete an upgrade backup:

1.  In the Package overview page, click **Install an update** in the
    Installed releases section.
2.  Click **Change the version of Magnolia used in your environments**:\
    ![](/assets/cloud/cloud-change-magnolia-version-action.png){width="600"}
3.  Select the **Live** environment.
4.  Click the **Delete the upgrade backup** button.
5.  Confirm the consequences of the deletion and click **Delete**.

Once the backup is deleted, you can tear down the Live environment.

[]{#restore-backup}Restoring the upgrade backup
===============================================

If you want to roll back the upgrade, you can restore the automatic
upgrade backup.

To restore an upgrade backup:

1.  In the Package overview page, click **Install an update** in the
    Installed releases section.
2.  Click **Change the version of Magnolia used in your environments**:\
    ![](/assets/cloud/cloud-change-magnolia-version-action.png){width="600"}
3.  Select the **Live** environment.
4.  Click the **Restore the upgrade backup** button.
5.  Confirm the consequences of the deletion and click **Restore**.

::: {.note}
If you encounter issues with the upgrade process, please [contact the
Cloud
Helpdesk](https://jira.magnolia-cms.com/servicedesk/customer/portal/6/group/18).
:::

<!-- ```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="07de0747-2516-4936-9b0e-fc203f4d216e"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Releases" /></ac:link></li><li><ac:link><ri:page ri:content-title="Backing up and restoring" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>When a new version of Magnolia is released and available on the Cloud, you can upgrade your cloud environments directly from the cockpit.</p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="0fa64bd0-8255-4fba-9e71-ff135724c098"><ac:rich-text-body><p>We urge all cloud customers to upgrade their projects to the latest Magnolia&nbsp;<ac:link><ri:page ri:content-title="End-of-life policy" /><ac:plain-text-link-body><![CDATA[LTS release]]></ac:plain-text-link-body></ac:link>&nbsp;within 60 days of the version release date. All <em>new</em> deployments must be based on the latest LTS version of Magnolia.</p></ac:rich-text-body></ac:structured-macro><p>You can also manage the automatic upgrade backup that is created for the Live environment from the cockpit. You can extend the period for which the backup is stored or restore it to roll back the upgrade.&nbsp;Alternatively, you can delete the upgrade backup manually to be able to tear down the Live environment again.&nbsp;</p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="d2ac1ae8-b46a-4a3f-93ef-3904e1ef380a" /></p><h2>Upgrading the&nbsp;version of Magnolia</h2><p>Before upgrading, we recommend you read the <ac:link><ri:page ri:content-title="Releases" /><ac:plain-text-link-body><![CDATA[release notes]]></ac:plain-text-link-body></ac:link> for the version of Magnolia you are upgrading to.&nbsp;</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="c4a8a10c-61b2-4ead-9bab-84b8f1b4d328"><ac:parameter ac:name="title">Tips</ac:parameter><ac:rich-text-body><ul><li>Begin by upgrading your Integration and UAT environments. Then test the new features available, check your configuration and content, including&nbsp;your&nbsp;website templates and light development work. Check the&nbsp; <ac:link><ri:page ri:content-title="Definitions app" /></ac:link> to see any problematic or deprecated definitions.</li><li><ac:link><ri:page ri:content-title="Creating a backup manually" /><ac:plain-text-link-body><![CDATA[Create a manual backup of your environment]]></ac:plain-text-link-body></ac:link> before upgrading it.</li><li>You cannot tear down an environment after upgrading until the <em>automatic</em> backup that is created is removed. Automatic backups are generally removed after 48 hours. You can extend the period of time for which the backup is stored or manually remove it.</li></ul></ac:rich-text-body></ac:structured-macro><p>To upgrade Magnolia in the cockpit:</p><ol><li>In the Package overview page, click&nbsp;<strong>Install an&nbsp;update</strong> in the&nbsp;Installed releases&nbsp;section.</li><li>Click <strong>Change the version of Magnolia used in your environments</strong>:<br /><ac:image ac:width="600"><ri:attachment ri:filename="cloud-change-magnolia-version-action.png" /></ac:image></li><li>Select the environment you want to upgrade: Live, UAT or Integration. <br />Note that we recommend starting with upgrading the integration environment and testing before moving on to UAT and, finally Live.</li><li>Select the&nbsp;version of Magnolia you want to upgrade to. If nothing is displayed, this means there are no new versions of Magnolia available.</li><li>Confirm the consequences of the upgrade and click&nbsp;<strong>Install</strong>.&nbsp;<br />The upgrade process takes some time. As all actions in the cockpit are asynchronous, you can click on&nbsp;<strong>OK</strong>&nbsp;before the upgrade is complete: the action runs in the background and a notification appears once it is complete.&nbsp;The action also appears in the&nbsp;<ac:link><ri:page ri:content-title="Understanding activity logs" /><ac:plain-text-link-body><![CDATA[activity log]]></ac:plain-text-link-body></ac:link>.</li></ol><p>Every automatic backup of the Live&nbsp;environment is stored for 48 hours. You can <ac:link ac:anchor="anc-extend-storage"><ac:plain-text-link-body><![CDATA[extend this to 5 days]]></ac:plain-text-link-body></ac:link>.</p><p>Until the automatic backup is removed, you cannot tear down your upgraded environment. If you need to tear down the environment, you can <ac:link ac:anchor="anc-remove-backup"><ac:plain-text-link-body><![CDATA[remove the upgrade backup manually]]></ac:plain-text-link-body></ac:link>.</p><h2><ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="c9cc7a2f-89d2-40cb-80b3-944bd625bdce"><ac:parameter ac:name="">anc-extend-storage</ac:parameter></ac:structured-macro>Extending the upgrade backup storage period</h2><p>Every automatic backup of the Live&nbsp;environment is stored for 48 hours. You can extend this to 5 days from the&nbsp;Package overview page by clicking on the <strong>Extend upgrade backup storage period</strong> link:</p><p><ac:image ac:width="600"><ri:attachment ri:filename="cloud-extend-backup-period.png" /></ac:image></p><p>This link takes you to a wizard where you must confirm the extension you requested.</p><p>If you need an extension for more than 5 days, please&nbsp;<a href="https://jira.magnolia-cms.com/servicedesk/customer/portal/6/group/18">contact the Cloud Helpdesk</a>.&nbsp;</p><h2><ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="d9c098e2-4b7c-4d8f-b707-8c2e1694488d"><ac:parameter ac:name="">anc-remove-backup</ac:parameter></ac:structured-macro>Deleting the upgrade backup</h2><p>Until the automatic backup is removed, you cannot tear down your upgraded environment. If you need to tear down the environment, you can delete the upgrade backup manually.</p><p>To delete an upgrade backup:</p><ol><li>In the Package overview page, click&nbsp;<strong>Install an&nbsp;update</strong> in the&nbsp;Installed releases&nbsp;section.</li><li>Click <strong>Change the version of Magnolia used in your environments</strong>:<br /><ac:image ac:width="600"><ri:attachment ri:filename="cloud-change-magnolia-version-action.png" /></ac:image></li><li>Select the <strong>Live</strong> environment.</li><li>Click the <strong>Delete the upgrade backup</strong> button.&nbsp;</li><li>Confirm the consequences of the deletion and click&nbsp;<strong>Delete</strong>.&nbsp;</li></ol><p>Once the backup is deleted, you can tear down the Live environment.</p><h2><ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="c7699da5-38f4-4090-8311-f4803bd60a97"><ac:parameter ac:name="">anc-restore-backup</ac:parameter></ac:structured-macro>Restoring the upgrade backup</h2><p>If you want to roll back the upgrade, you can restore the automatic upgrade backup.</p><p>To restore an upgrade backup:</p><ol><li>In the Package overview page, click&nbsp;<strong>Install an&nbsp;update</strong> in the&nbsp;Installed releases&nbsp;section.</li><li>Click <strong>Change the version of Magnolia used in your environments</strong>:<br /><ac:image ac:width="600"><ri:attachment ri:filename="cloud-change-magnolia-version-action.png" /></ac:image></li><li>Select the <strong>Live</strong> environment.</li><li>Click the <strong>Restore the upgrade backup</strong> button.&nbsp;</li><li>Confirm the consequences of the deletion and click&nbsp;<strong>Restore</strong>.&nbsp;</li></ol><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="ed21fa66-7097-49fb-b5a8-c0de028ec4cd"><ac:rich-text-body><p>If you encounter issues with the upgrade process, please&nbsp;<a href="https://jira.magnolia-cms.com/servicedesk/customer/portal/6/group/18">contact the Cloud Helpdesk</a>.</p></ac:rich-text-body></ac:structured-macro><p><br /></p><p><br /></p>

-->

