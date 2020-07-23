---
title: Setting up a new environment
---

This page explains how to add a new environment to your cloud-based
Magnolia package.

You may only have one environment of each type at any given time.
Therefore, if an environment of the same type already exists, you have
to [tear it
down](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Tearing+down+an+environment)
before you can set a new one up.

:::info
Depending on your subscription package, the environments available to you may differ.

For example, you may have only a single Live environment available, or only a UAT and a Live environment. In these cases, you can install a development snapshot directly in the Live or in the UAT environment respectively. 
:::

To set up a new environment:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.

2.  Click **Set up new environment**.
    ![](/assets/cloud/setup-new-env-start-bar.png)

3.  Choose what kind of environment you want to create: Live, UAT or
    Integration.
    You may only have one environment of each type at any given time. If
    an environment type already exists, the option is greyed out.

4.  Choose the Magnolia version. You can see runtime information (the
    OS, JDK and Tomcat versions) about the bundles available.

    ![](/assets/cloud/SETUP-ENV-CHOOSE-M-VESION.png)

5.  Click **Set up \<environment name\>**. The creation of the
    environment may take some time.

6.  Click **OK**. As all actions in the Magnolia cockpit are
    asynchronous, you can click on **OK** before the action is complete.
    The action runs in the background and a notification will display
    once it is complete. The action also appears in the [activity
    log](/Magnolia+Cloud/Cockpit/Understanding+activity+logs).

