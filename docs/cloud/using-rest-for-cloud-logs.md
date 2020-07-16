---
title: Using REST to access cloud logs
---

::: {.infobox}
Related topics:

-   [Managing cloud log
    levels](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging/Managing+cloud+log+levels)
-   [Log Tools app](/Apps/List+of+apps/Log+Tools+app)
:::

This page describes the `logs` endpoint, which can be used to access
Magnolia cloud instance logs. For viewing and managing the logs via the
Cockpit, see the [Managing cloud log
levels](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging/Managing+cloud+log+levels)
page.

[](!toc)

Obtaining an authentication token
=================================

::: {.warning}
**Important**

When sending REST requests, make sure you always send them via a secure
protocol such as HTTPS so that communication with the endpoint is
encrypted.
:::

A REST request for a cloud log must be authenticated. Magnolia uses
authentication based on the [JSON Web
Token](https://en.wikipedia.org/wiki/JSON_Web_Token). To obtain a JWT
token, issue the following `curl` command in bash, where:

-   `<your_username>` is the LDAP user name assigned to you in your
    Cloud subscription package to access the Cockpit.
-   `<your_password>` is the LDAP user name assigned to you in the
    package.
-   `<cockpit-domain-name>` is the domain name of your Cockpit.

::: {.codebox}
``` {.bash}
curl -H "X-Auth-Username: <your_username>" -H "X-Auth-Password: <your_password>" -X POST https://<cockpit-domain-name>/authenticate
```
:::

For example:
<!-- 
::: {.codebox}
``` {.bash}
curl -H "X-Auth-Username: John" -H "X-Auth-Password: Doe" -X POST https://cockpit.example.com/authenticate
```
::: -->

You should get a response like this:

<!-- ::: {.codebox}
    {"authToken":"<token-header>.<token-payload>.<token-signature>"}
::: -->

The token required is this part:
`<token-header>.<token-payload>.<token-signature>`.

The request
===========

::: {.info}
Currently Magnolia clouds logs keep a maximum of the last 5 minutes of
log data or the last 1000 log lines, counted from time-now OR from a log
record matching the `recordLocator`, if sent in the request.
:::

Request URL
-----------

[GET]{.get}
`https://{cockpit-domain-name}/.rest/instances/logs?siteName={subscription-package-code}&environment={int|uat|live}&mgnlInstanceName={name-of-the-instance}&logMoveDirection={1|-1}&recordLocator={locator-string}`

Parameters
----------

```{=html}
<table>
```
```{=html}
<tr>
```
```{=html}
<th>
```
Parameter
```{=html}
</th>
```
```{=html}
<th>
```
Description
```{=html}
</th>
```
```{=html}
<th>
```
Parameter Type
```{=html}
</th>
```
```{=html}
<th>
```
Data Type
```{=html}
</th>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
`siteName`

```{=html}
</td>
```
```{=html}
<td>
```
**required**

The code of your subscription package.

You can find the site name displayed in your
[environments](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit),
for example `magnolia-mkg-integration-5-6-3-public1`. The `siteName` is
the prefix before the environment type, in this example, `magnolia-mkg`.
```{=html}
</td>
```
```{=html}
<td>
```
`query`
```{=html}
</td>
```
```{=html}
<td>
```
`String`
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
`environment`
```{=html}
</td>
```
```{=html}
<td>
```
**required**

The environment name.

Can only be one of the following:

-   `live`
-   `uat`
-   `integration`

```{=html}
</td>
```
```{=html}
<td>
```
`query`
```{=html}
</td>
```
```{=html}
<td>
```
`String`
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
`mgnlInstanceName`
```{=html}
</td>
```
```{=html}
<td>
```
**required**

The name of the instance.

You can find the instance name after setting up an environment or in the
[View log
page](/Magnolia+Cloud/Managing+environments+using+the+Magnolia+cockpit/Monitoring+and+logging/Managing+cloud+log+levels)
instance dropdown.

For example: `author1`, `public1`, `public2`
```{=html}
</td>
```
```{=html}
<td>
```
`query`
```{=html}
</td>
```
```{=html}
<td>
```
`String`
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
`logMoveDirection`
```{=html}
</td>
```
```{=html}
<td>
```
**required**

The direction in which to traverse the log.

Use `1` for going forwards or `-1` for going backwards.
```{=html}
</td>
```
```{=html}
<td>
```
`query`
```{=html}
</td>
```
```{=html}
<td>
```
`Integer`
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
<tr>
```
```{=html}
<td>
```
`recordLocator`
```{=html}
</td>
```
```{=html}
<td>
```
**optional**

A specific log record that serves as the main reference point. The
locator is a Base64-encoded string.

:warning: To get a `recordLocator`, first send the request without this
parameter and choose a value shown in the response.
```{=html}
</td>
```
```{=html}
<td>
```
`query`
```{=html}
</td>
```
```{=html}
<td>
```
`String`
```{=html}
</td>
```
```{=html}
</tr>
```
```{=html}
</table>
```
Examples
--------

[GET]{.get} the log from the `public1 uat` instance of the
`example-abbrev` cloud subscription package:

::: {.codebox}
Command

``` {.bash}
curl -H "X-Auth-Token:{JWT-token}" -X GET "https://cockpit.example.com/.rest/instances/logs?siteName=example-abbrev&environment=uat&mgnlInstanceName=public1&logMoveDirection=-1"
```
:::

::: {.codebox}
``` {.js}
{
  "logs": [{
    "message": "172.31.2.212 - - [27/Apr/2018:09:11:42 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMDgxMDYxNjYsMzAwNTExXQ=="
  }, {
    "message": "172.31.27.131 - - [27/Apr/2018:09:11:44 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMDgxMDYyMTYsODc5Nl0="
  }, {
    "message": "172.31.2.212 - - [27/Apr/2018:09:12:12 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:12:16.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMzgxMTExMDIsODU3NDBd"
  }, {
    "message": "172.31.27.131 - - [27/Apr/2018:09:12:14 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:12:16.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMzgxMTExNTEsMzAwNTIxXQ=="
  }, {
    "message": "172.31.2.212 - - [27/Apr/2018:09:12:42 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:12:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzNjgxMTQ1OTYsODgwNV0="
  }],
  "lastRecordLocator": "WzE1MjQ4MjAzMDgxMDYxNjYsMzAwNTExXQ=="
}
```
:::

[GET]{.get} the same as in the previous example but now relative to the
`[1524820338111102,85740]` log record (Base64-encoded as
`WzE1MjQ4MjAzMzgxMTExMDIsODU3NDBd` in the URL):

::: {.codebox}
Command

``` {.bash}
curl -H "X-Auth-Token:{JWT-token}" -X GET "https://cockpit.example.com/.rest/instances/logs?siteName=example-abbrev&environment=uat&mgnlInstanceName=public1&logMoveDirection=-1&recordLocator=WzE1MjQ4MjAzMzgxMTExMDIsODU3NDBd"
```
:::

::: {.codebox}
``` {.js}
{
  "logs": [{
    "message": "172.31.27.131 - - [27/Apr/2018:09:11:14 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:16.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAyNzgxMDIwODYsODc5NV0="
  }, {
    "message": "172.31.2.212 - - [27/Apr/2018:09:11:42 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMDgxMDYxNjYsMzAwNTE1XQ=="
  }, {
    "message": "172.31.27.131 - - [27/Apr/2018:09:11:44 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMDgxMDYyMTYsODc5Nl0="
  }],
  "lastRecordLocator": "WzE1MjQ4MjAyNzgxMDIwODYsODc5NV0="
}
```
:::

```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="3af23fd3-2e30-44b3-8277-2c72ac2d072b"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Managing cloud log levels" /></ac:link></li><li><ac:link><ri:page ri:content-title="Log Tools app" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>This page describes the&nbsp;<code>logs</code> endpoint, which can be used to access Magnolia cloud instance logs. For viewing and managing the logs via the Cockpit, see the&nbsp;<ac:link><ri:page ri:content-title="Managing cloud log levels" /></ac:link> page.&nbsp;</p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="19c9dcdd-6578-41cc-84cc-4633e3459010"><ac:parameter ac:name="maxLevel">3</ac:parameter></ac:structured-macro></p><h2>Obtaining an authentication&nbsp;token</h2><ac:structured-macro ac:name="warning" ac:schema-version="1" ac:macro-id="389154e2-2e5b-4e01-a4f4-403f9f48c888"><ac:parameter ac:name="title">Important</ac:parameter><ac:rich-text-body><p>When sending REST requests, make sure you always send them via a secure protocol such as HTTPS so that communication with the endpoint is encrypted.</p></ac:rich-text-body></ac:structured-macro><p>A REST request for a cloud log must be authenticated. Magnolia uses authentication&nbsp;based on the <a href="https://en.wikipedia.org/wiki/JSON_Web_Token">JSON Web Token</a>. To obtain a JWT token, issue the following <code>curl</code> command in bash, where:</p><ul><li><p><code>&lt;your_username&gt;</code> is the LDAP user name assigned to you in your Cloud subscription package to access the Cockpit.</p></li><li><p><code>&lt;your_password&gt;</code> is the LDAP user name assigned to you in the package.</p></li><li><code>&lt;cockpit-domain-name&gt;</code>&nbsp;is the domain name of your Cockpit.</li></ul><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="e5e606ae-caa6-429b-b61a-c77c17737417"><ac:parameter ac:name="language">bash</ac:parameter><ac:plain-text-body><![CDATA[curl -H "X-Auth-Username: <your_username>" -H "X-Auth-Password: <your_password>" -X POST https://<cockpit-domain-name>/authenticate]]></ac:plain-text-body></ac:structured-macro><p>For example:</p><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="794b8ec7-27bd-428f-a328-93b8393ae526"><ac:parameter ac:name="language">bash</ac:parameter><ac:plain-text-body><![CDATA[curl -H "X-Auth-Username: John" -H "X-Auth-Password: Doe" -X POST https://cockpit.example.com/authenticate]]></ac:plain-text-body></ac:structured-macro><p>You should get a response like this:</p><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="68791cc7-6eae-43ab-8235-12d9ba35717d"><ac:plain-text-body><![CDATA[{"authToken":"<token-header>.<token-payload>.<token-signature>"}]]></ac:plain-text-body></ac:structured-macro><p>The token required is this part:&nbsp;<code>&lt;token-header&gt;.&lt;token-payload&gt;.&lt;token-signature&gt;</code>.</p><h2>The request</h2><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="d8f1b36d-e5ac-4aea-badc-34f006a614bb"><ac:rich-text-body><p>Currently Magnolia clouds logs keep a maximum of the last 5 minutes of log data or the last 1000 log lines, counted from time-now OR from a log record matching the <code>recordLocator</code>, if sent in the request.</p></ac:rich-text-body></ac:structured-macro><h3>Request URL</h3><p><ac:structured-macro ac:name="mgnl-get" ac:schema-version="1" ac:macro-id="2c355e32-5f08-44a2-b1a7-80bd35c43b3f" />&nbsp;<code>https://{cockpit-domain-name}/.rest/instances/logs?siteName={subscription-package-code}&amp;environment={int|uat|live}&amp;mgnlInstanceName={name-of-the-instance}&amp;logMoveDirection={1|-1}&amp;recordLocator={locator-string}</code></p><h3>Parameters</h3><table class="wrapped relative-table" style="width: 74.7936%;"><colgroup> <col style="width: 20.3976%;" /> <col style="width: 39.3225%;" /> <col style="width: 15.0221%;" /> <col style="width: 25.2577%;" /> </colgroup><tbody><tr><th>Parameter</th><th>Description</th><th>Parameter Type</th><th>Data Type</th></tr><tr><td><p><code>siteName</code></p><p><br /></p></td><td><p><strong>required</strong></p><p>The code of your subscription package.</p><p>You can find the site name displayed in your <ac:link><ri:page ri:content-title="Managing environments using the Magnolia cockpit" /><ac:plain-text-link-body><![CDATA[environments]]></ac:plain-text-link-body></ac:link>, for example <code>magnolia-mkg-integration-5-6-3-public1</code>. The <code>siteName</code> is the prefix before the environment type, in this example, <code>magnolia-mkg</code>.</p></td><td><code>query</code></td><td><code>String</code></td></tr><tr><td><code>environment</code></td><td><p><strong>required</strong></p><p>The environment name.</p><p>Can only be one of the following:</p><ul><li><code>live</code></li><li><code>uat</code></li><li><code>integration</code></li></ul></td><td><code>query</code></td><td><code>String</code></td></tr><tr><td colspan="1"><code>mgnlInstanceName</code></td><td colspan="1"><p><strong>required</strong></p><p>The name of the instance.</p><p>You can find the instance name after setting up an environment or in the <ac:link><ri:page ri:content-title="Managing cloud log levels" /><ac:plain-text-link-body><![CDATA[View log page]]></ac:plain-text-link-body></ac:link> instance dropdown.</p><p>For example: <code>author1</code>, <code>public1</code>, <code>public2</code></p></td><td colspan="1"><code>query</code></td><td colspan="1"><code>String</code></td></tr><tr><td colspan="1"><code>logMoveDirection</code></td><td colspan="1"><p><strong>required</strong></p><p>The direction in which to traverse the log.</p><p>Use <code>1</code> for going forwards or <code>-1</code> for going backwards.</p></td><td colspan="1"><code>query</code></td><td colspan="1"><code>Integer</code></td></tr><tr><td colspan="1"><code>recordLocator</code></td><td colspan="1"><p><strong>optional</strong></p><p>A specific log record that serves as the main reference point. The locator is a Base64-encoded string.</p><p><ac:emoticon ac:name="warning" /> To get a <code>recordLocator</code>, first send the request without this parameter and choose a value shown in the response.</p></td><td colspan="1"><code>query</code></td><td colspan="1"><code>String</code></td></tr></tbody></table><h3>Examples</h3><p><ac:structured-macro ac:name="mgnl-get" ac:schema-version="1" ac:macro-id="06b0201e-3331-4215-b0db-a4f94f883f88" />&nbsp;the log from the&nbsp;<code>public1 uat</code>&nbsp;instance of the <code>example-abbrev</code> cloud subscription package:</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="926c4d92-3bde-43c5-a48c-aeaaac3e36d2"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="title">Command</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:plain-text-body><![CDATA[curl -H "X-Auth-Token:{JWT-token}" -X GET "https://cockpit.example.com/.rest/instances/logs?siteName=example-abbrev&amp;environment=uat&amp;mgnlInstanceName=public1&amp;logMoveDirection=-1"]]></ac:plain-text-body></ac:structured-macro><ac:structured-macro ac:name="expand" ac:schema-version="1" ac:macro-id="36b9e415-200d-4f10-8e98-cc138ccd5323"><ac:parameter ac:name="title">Click to see the response</ac:parameter><ac:rich-text-body><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="7fc90e1f-b2cc-41a7-88ed-bb5986354b81"><ac:parameter ac:name="language">js</ac:parameter><ac:plain-text-body><![CDATA[{
  "logs": [{
    "message": "172.31.2.212 - - [27/Apr/2018:09:11:42 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMDgxMDYxNjYsMzAwNTExXQ=="
  }, {
    "message": "172.31.27.131 - - [27/Apr/2018:09:11:44 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMDgxMDYyMTYsODc5Nl0="
  }, {
    "message": "172.31.2.212 - - [27/Apr/2018:09:12:12 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:12:16.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMzgxMTExMDIsODU3NDBd"
  }, {
    "message": "172.31.27.131 - - [27/Apr/2018:09:12:14 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:12:16.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMzgxMTExNTEsMzAwNTIxXQ=="
  }, {
    "message": "172.31.2.212 - - [27/Apr/2018:09:12:42 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:12:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzNjgxMTQ1OTYsODgwNV0="
  }],
  "lastRecordLocator": "WzE1MjQ4MjAzMDgxMDYxNjYsMzAwNTExXQ=="
}]]></ac:plain-text-body></ac:structured-macro></ac:rich-text-body></ac:structured-macro><p><ac:structured-macro ac:name="mgnl-get" ac:schema-version="1" ac:macro-id="8c808269-ed79-4319-b3f1-4a19eee598ab" />&nbsp;the same as in the previous example but now relative to the&nbsp;<code>[1524820338111102,85740]</code>&nbsp;log record (Base64-encoded as <code>WzE1MjQ4MjAzMzgxMTExMDIsODU3NDBd</code> in the URL):</p><ac:structured-macro ac:name="code-pro" ac:schema-version="1" ac:macro-id="fe215230-9c62-4f9f-b940-8e57f309b552"><ac:parameter ac:name="language">bash</ac:parameter><ac:parameter ac:name="title">Command</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:plain-text-body><![CDATA[curl -H "X-Auth-Token:{JWT-token}" -X GET "https://cockpit.example.com/.rest/instances/logs?siteName=example-abbrev&amp;environment=uat&amp;mgnlInstanceName=public1&amp;logMoveDirection=-1&amp;recordLocator=WzE1MjQ4MjAzMzgxMTExMDIsODU3NDBd"]]></ac:plain-text-body></ac:structured-macro><ac:structured-macro ac:name="expand" ac:schema-version="1" ac:macro-id="47292d8b-4004-462c-8c65-50051aa911b0"><ac:parameter ac:name="title">Click to see the response</ac:parameter><ac:rich-text-body><ac:structured-macro ac:name="code" ac:schema-version="1" ac:macro-id="44005ca2-0797-43ae-a4d3-fb89765ca4d7"><ac:parameter ac:name="language">js</ac:parameter><ac:plain-text-body><![CDATA[{
  "logs": [{
    "message": "172.31.27.131 - - [27/Apr/2018:09:11:14 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:16.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAyNzgxMDIwODYsODc5NV0="
  }, {
    "message": "172.31.2.212 - - [27/Apr/2018:09:11:42 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMDgxMDYxNjYsMzAwNTE1XQ=="
  }, {
    "message": "172.31.27.131 - - [27/Apr/2018:09:11:44 +0000] \"GET /.healthcheck/ HTTP/1.1\" 200 30",
    "timestamp": "2018-04-27T09:11:46.000000000+00:00",
    "recordLocator": "WzE1MjQ4MjAzMDgxMDYyMTYsODc5Nl0="
  }],
  "lastRecordLocator": "WzE1MjQ4MjAyNzgxMDIwODYsODc5NV0="
}]]></ac:plain-text-body></ac:structured-macro></ac:rich-text-body></ac:structured-macro>

-->
```
