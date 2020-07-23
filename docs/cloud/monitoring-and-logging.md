---
title: Monitoring and logging
---

Magnolia Cloud integrates with Datadog for logging and monitoring
services to help you troubleshoot your instances and ensure the quality
of your website.

## Datadog accounts

A URL link to Datadog for your subscription package is provided in the
Additional information section of the Cockpit.

You must contact our
[Helpdesk](https://jira.magnolia-cms.com/servicedesk/customer/portal/6)
to get account details to access your dashboards, metrics and logs in
Datadog. Access is not provided by default. When accessing Datadog, you
log in to Magnolia's Identity Provider (Keycloak) first using the
credentials provided by Magnolia.

:::tip
Each subscription package can have up to 5 Datadog accounts. If you
require additional accounts or changes to your account administration,
contact our [Magnolia Cloud
Helpdesk](https://jira.magnolia-cms.com/servicedesk/customer/portal/6).
:::

## Dashboards, metrics and logs

We provide access to preconfigured Datadog dashboards, metrics and logs
about how your setup is performing such as response time, req/s, error
pages, CPU and memory performance.

-   **Dashboards** --- Preconfigured by Magnolia.
-   **Metrics** --- Preconfigured metrics are activated by default for
    your **live** environment. By default, metrics are stored for 15
    months.
-   **Logs** --- Preconfigured logs are activated by default for your
    **live, UAT and integration** environments. By default, logs are
    stored for 15 days.\
    If you require a longer storage period, contact our Helpdesk to
    discuss cold storage. Cold storage is not provided by default and
    comes at an extra charge. Datadog provides a feature for archiving
    the logs to S3 and the indexes can be rehydrated from there when
    needed.

:::info
Customized dashboards, metrics and logs are currently *not* supported.
:::

## Audit logs

In addition to Datadog logging, you can enable audit trail logs in
Magnolia.

An audit trail allows an administrator to record user activity in the
system. The audit trail typically captures the "who, what, when and
where". The default implementation is based on [Log4j
2](https://logging.apache.org/log4j/2.x/index.html).

The audit trail logs can be filtered using the `magnolia.audit` source
in the Datadog log stream.

:::info
By default, logs are stored for 15 days.

See [Audit](/Administration/Monitoring/Audit) for more information.
:::

<!-- Original Confluence content:

<p>Magnolia Cloud integrates with Datadog for logging and monitoring services to help you troubleshoot your instances and ensure the quality of your website.&nbsp;</p><h2>Datadog accounts</h2><p>A URL link to Datadog for your subscription package is provided in the Additional information section of the Cockpit.</p><p>You must contact our <a href="https://jira.magnolia-cms.com/servicedesk/customer/portal/6">Helpdesk</a> to get&nbsp;account details to access your dashboards, metrics and logs in Datadog. Access is not provided by default. When accessing Datadog, you log in to Magnolia's Identity Provider (Keycloak) first using the credentials provided by Magnolia.&nbsp;</p><ac:structured-macro ac:name="tip" ac:schema-version="1" ac:macro-id="046f40d6-3b85-4da4-950b-44c055fe4961"><ac:rich-text-body><p>Each subscription package can have up to 5 Datadog accounts.&nbsp;If you require additional accounts or changes to your account administration, contact our <a href="https://jira.magnolia-cms.com/servicedesk/customer/portal/6">Magnolia Cloud Helpdesk</a>.&nbsp;</p></ac:rich-text-body></ac:structured-macro><h2>Dashboards, metrics and logs</h2><p>We provide access to preconfigured Datadog dashboards, metrics and logs about how your setup is performing such as&nbsp;response time, req/s, error pages, CPU and memory performance.&nbsp;</p><ul><li><strong>Dashboards</strong>&nbsp;&mdash; Preconfigured by Magnolia.</li><li><strong>Metrics</strong>&nbsp;&mdash; Preconfigured metrics are activated by default for your <strong>live</strong>&nbsp;environment. By default, metrics are stored for 15 months.</li><li><strong>Logs&nbsp;</strong>&mdash; Preconfigured logs are activated by default for your <strong>live, UAT&nbsp;and integration</strong>&nbsp;environments. By default, logs are stored for 15 days.<br />If you require a longer storage period, contact our Helpdesk to discuss cold storage. Cold storage is not provided by default and comes at an extra charge. Datadog provides a feature for archiving the logs to S3 and the indexes can be rehydrated from there when needed.</li></ul><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="e14e51cf-74fc-4d5f-8f21-94d50b846932"><ac:rich-text-body><p>Customized dashboards, metrics and logs are currently <em>not</em> supported.</p></ac:rich-text-body></ac:structured-macro><h2>Audit logs</h2><p>In addition to Datadog logging, you can&nbsp;enable audit trail logs&nbsp;in Magnolia.&nbsp;</p><p>An audit trail allows an administrator to record user activity in the system. The audit trail typically captures the &quot;who, what, when and where&quot;. The default implementation is based on&nbsp;<a class="external-link" href="https://logging.apache.org/log4j/2.x/index.html" rel="nofollow">Log4j 2</a>.</p><p>The audit trail logs can be filtered using the <code>magnolia.audit</code> source in the Datadog log stream.</p><p>By default, logs are stored for 15 days.</p><p>See&nbsp;<ac:link><ri:page ri:content-title="Audit" /></ac:link> for more information.</p>

-->

