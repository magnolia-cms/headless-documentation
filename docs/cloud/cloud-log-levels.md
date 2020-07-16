---
title: Managing cloud log levels
---

::: {.infobox}
Related topics:

-   [Monitoring and
    logging](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging)
-   [Using REST to access cloud
    logs](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging/Using+REST+to+access+cloud+logs)
-   [Log Tools app](/Apps/List+of+apps/Log+Tools+app)
:::

Magnolia Cloud integrates with
[](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging)
[Datadog for monitoring and
logging](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging)
services.

This page explains where you can change the level of logs displayed for
your Magnolia cloud instance and add loggers in the cockpit.

If you want to access Magnolia cloud instance logs and integrate them
with other external tools, use the [REST API `logs`
endpoint](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging/Using+REST+to+access+cloud+logs).

::: {.info}
The log displayed is the `catalina.out` log.
:::

[](!toc)

Setting log levels
==================

To change the log levels for your running instances:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.
2.  Click **Log levels**.\
    ![](/assets/cloud/5-6-5-cockpit-logs-.png){width="500"}
3.  Select the instance for which you want to change log levels in the
    **Log levels for** dropdown.\
    ![](/assets/cloud/image2018-4-17_11-12-33.png){width="500"}
4.  Select the required log level for each logger using the drop-downs
    on each line.\
    The levels available are standard Log4J log levels: ALL; TRACE;
    DEBUG; INFO; WARN; ERROR; FATAL; OFF.\
    Any change you make in the log levels is applied immediately to the
    instance you selected. You can see this by logging into the instance
    in question and looking in **Tools** **\> Log Tools** app **\> Log
    Levels** tab.

::: {.tip}
If the Log Tools app is open when you change the log levels in the
Cockpit, you must close the app and open it again to see your changes
reflected.

When the instance is restarted, the logs are set back to their default
levels.
:::

Adding loggers
==============

To add a logger for your running instances:

1.  In the Package overview page, click **Manage environments** in the
    Environments section.
2.  Click **Log levels**.
3.  Select the instance for which you want to add a logger in the **Log
    levels for** dropdown.
4.  Type in the name of the logger you want to add in the field at the
    bottom of the list.
5.  Select the required log level for the new logger.\
    The levels available are standard Log4J log levels: ALL; TRACE;
    DEBUG; INFO; WARN; ERROR; FATAL; OFF.\
    Any change you make in the loggers is applied immediately to the
    instance you selected. You can see this by logging into the instance
    in question and looking in **Tools** **\> Log Tools** app **\> Log
    Levels** tab.

```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="3af23fd3-2e30-44b3-8277-2c72ac2d072b"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Monitoring and logging" /></ac:link></li><li><ac:link><ri:page ri:content-title="Using REST to access cloud logs" /></ac:link></li><li><ac:link><ri:page ri:content-title="Log Tools app" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>Magnolia Cloud integrates with<ac:link><ri:page ri:content-title="Monitoring and logging" /><ac:plain-text-link-body><![CDATA[ ]]></ac:plain-text-link-body></ac:link><ac:link><ri:page ri:content-title="Monitoring and logging" /><ac:plain-text-link-body><![CDATA[Datadog for monitoring and logging]]></ac:plain-text-link-body></ac:link>&nbsp;services.&nbsp;</p><p>This page explains where you can change the level of logs displayed for your Magnolia cloud instance&nbsp;and add loggers in the cockpit.&nbsp;</p><p>If you want to access&nbsp;Magnolia cloud instance logs and integrate them with other external tools, use the <ac:link><ri:page ri:content-title="Using REST to access cloud logs" /><ac:link-body>REST API&nbsp;<code>logs</code>&nbsp;endpoint</ac:link-body></ac:link>.&nbsp;</p><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="0a57beeb-de4d-4ac4-9d58-825df31ed29f"><ac:rich-text-body><p>The log displayed is the <code>catalina.out</code> log.</p></ac:rich-text-body></ac:structured-macro><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="ef74a1f8-008b-4d08-a133-629cb6ffd04b" /></p><h2>Setting log levels</h2><p>To <ac:inline-comment-marker ac:ref="b60f8b1d-407c-4d82-a082-e08678e81cfc">change the log levels</ac:inline-comment-marker> for your running instances:</p><ol><li>In the Package overview page, click&nbsp;<strong>Manage environments</strong>&nbsp;in the Environments section.</li><li>Click&nbsp;<strong>Log levels</strong>.<br /><ac:image ac:width="500"><ri:attachment ri:filename="5-6-5-cockpit-logs-.png" /></ac:image></li><li>Select the instance for which you want to change log levels in the <strong>Log levels for</strong> dropdown.<br /><ac:image ac:width="500"><ri:attachment ri:filename="image2018-4-17_11-12-33.png" /></ac:image></li><li>Select the required log level for each logger using the drop-downs on each line. <br />The levels available are standard Log4J log levels:&nbsp; ALL; TRACE; DEBUG; INFO; WARN; ERROR; FATAL; OFF.<br />Any change you make in the log levels is applied immediately to the instance you <ac:inline-comment-marker ac:ref="e57d0ecf-3a5b-46aa-a3b5-2632a61c95d7">selected</ac:inline-comment-marker>.&nbsp;<ac:inline-comment-marker ac:ref="1a962faf-672d-4757-8032-de90aab2c30c">You can see this by logging into the instance in question and looking in </ac:inline-comment-marker> <strong> <ac:inline-comment-marker ac:ref="1a962faf-672d-4757-8032-de90aab2c30c">Tools</ac:inline-comment-marker> </strong> <ac:inline-comment-marker ac:ref="1a962faf-672d-4757-8032-de90aab2c30c"> </ac:inline-comment-marker> <strong> <ac:inline-comment-marker ac:ref="1a962faf-672d-4757-8032-de90aab2c30c">&gt; Log Tools</ac:inline-comment-marker> </strong> <ac:inline-comment-marker ac:ref="1a962faf-672d-4757-8032-de90aab2c30c"> app </ac:inline-comment-marker> <strong> <ac:inline-comment-marker ac:ref="1a962faf-672d-4757-8032-de90aab2c30c">&gt; Log Levels</ac:inline-comment-marker> </strong> <ac:inline-comment-marker ac:ref="1a962faf-672d-4757-8032-de90aab2c30c"> tab.&nbsp;</ac:inline-comment-marker></li></ol><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="f5cd7122-0dc8-47c2-98e1-5163a69f9f34"><ac:rich-text-body><p>If the Log Tools app is open when you change the log levels in the Cockpit, you must close the app and open it again to see your changes reflected.</p><p>When the instance is restarted, the logs are set back to their default levels.</p></ac:rich-text-body></ac:structured-macro><h2>Adding loggers</h2><p>To&nbsp;add a logger for your running instances:</p><ol><li>In the Package overview page, click&nbsp;<strong>Manage environments</strong>&nbsp;in the Environments section.</li><li>Click&nbsp;<strong>Log levels</strong>.</li><li>Select the instance for which you want to add a logger in the&nbsp;<strong>Log levels for</strong>&nbsp;dropdown.</li><li>Type in the name of the logger you want to add in the field at the bottom of the list.</li><li>Select&nbsp;the required log level for the new logger.<br />The levels available are standard Log4J log levels: ALL; TRACE; DEBUG; INFO; WARN; ERROR; FATAL; OFF.<br />Any change you make in the loggers is applied immediately to the instance you&nbsp;selected.&nbsp;You can see this by logging into the instance in question and looking in&nbsp;<strong>Tools</strong>&nbsp;<strong>&gt; Log Tools&nbsp;</strong>app&nbsp;<strong>&gt; Log Levels&nbsp;</strong>tab.&nbsp;</li></ol><p><br /></p>

-->
```
