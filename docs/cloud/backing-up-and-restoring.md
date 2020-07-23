---
title: Backing up and restoring
---

This page and its subpages explain how to backup and restore data in a
cloud-based Magnolia package.

:::info
-   Magnolia automatically creates backups for the Live environment, but
    you also can [create a backup
    manually](/docs/cloud/creating-manual-backup).
-   You can always [recover the Live
    environment](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Backing+up+and+restoring/Recovering+the+Live+environment).
-   See [Upgrading Magnolia in the
    cloud](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Upgrading+Magnolia+in+the+cloud)
    for information about automatic backups created during the upgrade
    process for Live environments.
:::


How and where data is kept safe
===============================

A Magnolia subscription package contains different types of data. We
make sure that all your data is safe and can be recovered.

This table explains the different types of data and how and where we
safeguard it.

| Data type   |      Safe and backed up by      |  100% recoverable |
|----------|-------------|------|
| Magnolia software bundle	 |  Magnolia software repository	 | yes |
| data; Magnolia software custom configuration (JCR data from the workspaces configuration, `users`, `userroles`, `usergroups`) |    centered   |   yes |
| data; ditor created customer content (JCR data in content workspaces such as, `website`, `dam`, `category`, `contacts`, etc.) | Editor created customer content |    live only |


What data is backed up
======================

When a backup is executed, the following data is saved from the Live
environment in its current state:

-   Magnolia software custom **configuration** (JCR data form the
    workspaces `configuration`, `users`, `userroles`, `usergroups`).
-   Editor created customer **content** (JCR data from content
    workspaces such as, `website`, `dam`, `category`, `contacts`, and so
    on).
-   The **release version number** (saved as metadata).
-   The Magnolia **software version number** (saved as metadata).

This applies to both for automatic and manual backups.

When data is backed up
======================

Different events trigger the creation of backups:

-   Automatic backups are made on a daily, weekly and monthly basis at
    1:00 UTC when we assume site traffic is at a minimum. [Contact the
    Cloud
    Helpdesk](https://jira.magnolia-cms.com/servicedesk/customer/portal/6/group/18)
    to change this time to suit your site.
-   When you [create a manual
    backup](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Backing+up+and+restoring/Creating+a+backup+manually).
-   When you [upgrade the version of Magnolia in a Live
    environment](/Magnolia+Cloud/Installing+updates+using+the+Magnolia+cockpit/Upgrading+Magnolia+in+the+cloud).



How many backups are kept?
==========================

The system keeps the most recently created backup for each type:

-   One monthly backup
-   One weekly backup
-   One daily backup
-   One manually created backup

If you need more backups stored, [contact the Cloud
Helpdesk](https://jira.magnolia-cms.com/servicedesk/customer/portal/6/group/18)
to find an arrangement.

<!-- ```{=html}
<!-- Original Confluence content:

<p>This page and its subpages explain how to backup and restore data in a cloud-based Magnolia package.</p><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="cab18e49-6254-43d9-bd21-ec704544df36"><ac:rich-text-body><ul><li>Magnolia<ac:inline-comment-marker ac:ref="05862797-0519-4b8c-8ad6-373dc8b02689"> automatically</ac:inline-comment-marker> creates backups for the Live environment, but you also can <ac:link><ri:page ri:content-title="Creating a backup manually" /><ac:plain-text-link-body><![CDATA[create a backup manually]]></ac:plain-text-link-body></ac:link>.</li><li>You can always <ac:link><ri:page ri:content-title="Recovering the Live environment" /><ac:plain-text-link-body><![CDATA[recover the Live environment]]></ac:plain-text-link-body></ac:link>.</li><li>See&nbsp;<ac:link><ri:page ri:content-title="Upgrading Magnolia in the cloud" /></ac:link> for information about automatic backups created during the upgrade process for Live environments.&nbsp;</li></ul></ac:rich-text-body></ac:structured-macro><p>Continue reading this page to learn the following:</p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="9148e8e2-31d8-453b-bd43-13d4ca8a3a23" /></p><p>Or go directly to the subpages for details about:</p><p><ac:structured-macro ac:name="list-children" ac:schema-version="1" ac:macro-id="166f608a-fa39-4106-b194-7bd15ad70e2e" /></p><h2>How and where data is kept safe</h2><p>A Magnolia subscription package&nbsp;contains different types of data. We make sure that all your data is safe and can be recovered.</p><p>This table explains the different types of data and how and where we safeguard it.</p><table class="wrapped"><colgroup> <col /> <col /> <col /> <col /> </colgroup><tbody><tr><th colspan="2">Type of data</th><th>Data is kept safe and backed up by</th><th colspan="1">100% recoverable</th></tr><tr><td colspan="1"><br /></td><td>Magnolia software bundle</td><td>Magnolia software repository</td><td colspan="1">Yes</td></tr><tr><td colspan="1">code</td><td>Magnolia light modules added by customer</td><td><p>Release versions and git repository</p></td><td colspan="1">Yes</td></tr><tr><td colspan="1">data</td><td colspan="1"><p>Magnolia software custom configuration</p><p>(JCR data from the workspaces <code>configuration</code>, <code>users</code>, <code>userroles</code>, <code>usergroups</code>)</p></td><td rowspan="2"><div class="content-wrapper"><p><ac:inline-comment-marker ac:ref="2e773d22-be66-4d2b-8633-4712b9d8585c"> Backup actions </ac:inline-comment-marker></p><p><ac:inline-comment-marker ac:ref="2e773d22-be66-4d2b-8633-4712b9d8585c"> Kept in backup data storage. </ac:inline-comment-marker></p></div></td><td rowspan="2"><p>Only for Live environment</p><p><br /></p></td></tr><tr><td colspan="1"><span>data</span></td><td colspan="1"><p>Editor created customer content</p><p>(JCR <span>data in content workspaces such as, </span> <code>website</code>, <code>dam</code>, <code>category</code>, <code>contacts</code>, etc.)</p></td></tr></tbody></table><h2>What data is backed up</h2><p>When a backup is executed, the following data is saved from the Live environment in its current state:</p><ul><li>Magnolia software custom <strong> configuration </strong>(JCR data form the workspaces <code>configuration</code>, <code>users</code>, <code>userroles</code>, <code>usergroups</code>).</li><li>Editor created customer <strong>content</strong> (JCR&nbsp;data from content workspaces such as, <code>website</code>,&nbsp;<code>dam</code>,&nbsp;<code>category</code>,&nbsp;<code>contacts</code>, and so on).</li><li>The<strong>&nbsp;release version number</strong> (saved as metadata).</li><li>The Magnolia<strong>&nbsp;software version number</strong>&nbsp;(saved as metadata).</li></ul><p><ac:inline-comment-marker ac:ref="8e379e96-c22f-47c3-8382-fb125235f856"> This applies to both for automatic and manual backups. </ac:inline-comment-marker></p><h2>When data is backed up</h2><p>Different events trigger the creation of backups:</p><ul><li>Automatic backups are made on a <ac:inline-comment-marker ac:ref="0712bc23-a479-409d-a3a3-decef91a12b7">daily, weekly and monthly basis at<span style="color: rgb(0,0,0);"> 1:00 UTC when we assume site traffic is at a minimum. <a href="https://jira.magnolia-cms.com/servicedesk/customer/portal/6/group/18">Contact the Cloud Helpdesk</a>&nbsp;to change this time to&nbsp;suit your site.</span></ac:inline-comment-marker></li><li>When you&nbsp;<ac:link><ri:page ri:content-title="Creating a backup manually" /><ac:plain-text-link-body><![CDATA[create a manual backup]]></ac:plain-text-link-body></ac:link>.</li><li>When you <ac:link><ri:page ri:content-title="Upgrading Magnolia in the cloud" /><ac:plain-text-link-body><![CDATA[upgrade the version of Magnolia in a Live environment]]></ac:plain-text-link-body></ac:link>.&nbsp;</li></ul><p class="auto-cursor-target"><ac:structured-macro ac:name="anchor" ac:schema-version="1" ac:macro-id="2e20d971-4bb0-43f4-be17-2296ed26e60e"><ac:parameter ac:name="">how-many-backups</ac:parameter></ac:structured-macro></p><h2>How many backups are&nbsp;kept?</h2><p>T<ac:inline-comment-marker ac:ref="3189d98e-d434-4bf0-9ece-68b2143ecb80">he system keeps the most recently created backup for each type:</ac:inline-comment-marker></p><ul><li>One monthly backup</li><li>One weekly backup</li><li>One daily backup</li><li>One manually created backup</li></ul><p><span style="color: rgb(0,0,0);">If you need more backups stored, <a href="https://jira.magnolia-cms.com/servicedesk/customer/portal/6/group/18">contact the Cloud Helpdesk</a> to find an arrangement.</span></p><p><br /></p>

-->

