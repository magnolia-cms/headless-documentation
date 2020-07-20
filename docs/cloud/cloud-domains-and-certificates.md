---
title: Cloud domains and certificates
---

Once you have received your subscription package information, it is
important to understand how domains and certificates are managed in
Magnolia Cloud.

There are two main approaches available in Magnolia Cloud for domain and
certificate management.

-   You have a relatively **simple setup** and leave the management of
    your single domain and certificate to Magnolia, with limited
    redirects in place. Your involvement is limited to registering your
    domains and requesting your domain mappings via the Cloud Helpdesk.
-   You have a **complex scenario** involving multiple domains, your own
    pre-existing infrastructure or regulatory constraints. You prefer to
    keep full ownership and control of your domain and certificate
    management.

[](!toc)

Magnolia-managed setup
======================

In a simple setup, Magnolia manages your domain and certificates.

Magnolia Cloud subscriptions have one *root* domain (also known as base,
bare, naked, apex root or zone apex domain). By default, these are:

-   `mycompany.com` --- Root domain.
-   `www.mycompany.com` --- Subdomain.

Magnolia Cloud completely manages the root domain and its certificate.

You, or your chosen cloud partner, are responsible for:

-   Maintaining the **Domain Name System (DNS) records** on your chosen
    DNS provider infrastructure and adding any entries needed for
    Magnolia Cloud to verify ownership and certificate validation
    challenges.
-   Verifying and updating your **Certification Authority Authorization
    (CAA) records** if you use them. This is so that certificate
    validation requests can succeed.

> Certificate authorities implementing CAA perform a DNS lookup for CAA
> resource records, and if any are found, ensure that they are listed as
> an authorized party before issuing a digital certificate.
>
> *Source:
> [Wikipedia](https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization)*

What Magnolia provides
----------------------

In a managed setup, Magnolia provides:

-   A redirect service with a fixed IP at: `3.121.148.202`
-   Two possible ways to point your domains to the Magnolia Cloud Live
    environment:
    -   **Preferred** --- A subdomain to point your subdomain/s as CNAME
        entries to:
        `public-live-<subscription-code>.de.magnolia-cloud.com`
    -   **Alternative** required for root domains --- A pair of fixed
        public IPs, provided by AWS Global Accelerator service,
        belonging to your subscription (each subscription has a unique
        pair of IPs) to point the root domain/s as A entries.
-   A DNS entry to verify ownership of the domain and validate
    certificate requests: `example-hash.amazon.verify`

The following restrictions apply:

-   Magnolia only manages the main domain and certificate for public,
    live instances.
-   The certificate cannot be used outside of Magnolia Cloud.
-   The root domain must be part of the certificate, regardless of
    whether it is used as a site domain or for a 301 redirection.

Multisite domains
-----------------

Domains used by the Multisite module must be terminated on the instance.
Make sure that your redirects point to the IP or the CNAME with no
redirects in between.

For more information, see [Multisite in Magnolia in the
cloud](/Magnolia+Cloud/Supported+modules+in+the+cloud/Multisite+in+Magnolia+in+the+cloud).

::: {.info}
**Managed and unmanaged Multisite domains and certificates**

The solutions and restrictions for multisite domains and certificate
management are the same as those described in [Magnolia-managed domain
and certificates](#Magnolia-managed+domain+and+certificates).
:::

Unmanaged setup
===============

If you already have infrastructure supporting your enterprise domain
management system or need to comply with specific regulatory or security
constraints, you may choose to manage your own domains and certificates.

::: {.note}
**SLA**

In an unmanaged setup, note that your Magnolia SLA and availability and
uptime checks and monitors of the subscription are affected.
:::

### Unmanaged certificates

When Magnolia does not manage the creation of certificates, we offer a
manual import of the certificate for the root domain.

Once the initial certificate import is done, you or your cloud partner
are responsible for installing renewed certificates via the Cloud
Helpdesk. Magnolia does *not* oversee this process.

### Unmanaged domains

Managing your own domains gives you the most flexibility but you must
have your own infrastructure or service to do so.

If you or your cloud partner decide to manage your own domains and
certificates, Magnolia only provides the CNAME entries and the
associated public IPs for the Magnolia cloud instances, such as
`[public|author]-<environment>-<subscription-code>.`[`magnolia-cloud.com`](http://magnolia-cloud.com).

Redirects
=========

Magnolia Cloud offers 301 redirects for:

-   The root domain.
-   Multisite module domains.

For example:

  From             To
  ---------------- ------------------------
  my-company.com   **www.**my-company.com

If you need other redirects, you or your cloud partner are responsible
for their implementation.

For example, you or your cloud partner would be responsible for the
following redirects:

  From                   To
  ---------------------- -------------------
  my-company.com         mycompany.com
  my-company.de          mycompany.com
  mycompany.ch           mycompany.com
  mycompany.li           mycompany.com
  mycompany.li           www.mycompany.com
  mycompany.co.uk        mycompany.com
  www.my-company.co.uk   mycompany.com

You may consider these possible solutions to manage your own redirects:

-   Redirects on the domain registrar --- Modern domain registrars
    support URL redirects. This would save the certificate management
    for those domains.
-   Use your own account with API Gateway Service or external forwarding
    service (proxy) contracted directly by yourself or partner (services
    such as Kong, Tyk, Apigee or sub-services of CDN providers such as
    Akamai).\
    With this approach, you can configure all your domains, redirects
    and certificates while fully owning and not sharing the certificates
    and point those to the Magnolia-provided default domain and
    certificate. While this setup requires you to manage domains
    separately from the cloud, it also provides you with the most
    flexibility concerning domain configuration. It also removes the
    need for sharing certificates for the domain with Magnolia thus
    providing the highest level of security for domain-certified
    content.

Path redirects
--------------

If you want to do path redirects, you or partner must configure them in
the [Virtual URI mapping
module](/Administration/URI+mapping/Virtual+URI+mapping) or using other
equivalent Magnolia functionalities.

For example:

  From                                        To
  ------------------------------------------- -------------------------------
  www.mycompany.com**/old-path-to-content**   www.mycompany.com**/content**

Context path
------------

Magnolia Cloud always deploys to the ROOT context. It is not possible to
change this.

For scenarios where adaptations to the context path are needed, we
recommend you use a reverse proxy or an API Gateway to give you the most
flexibility.

SEO recommendations
-------------------

Only root and multisite domains should be terminated on the load
balancers or instances. This means all other domains should be 301
redirected before to root or multisite ones. Magnolia does not offer
this service. We recommend you use a solution such as an API Gateway
Service.

```{=html}
<!-- Original Confluence content:

<ac:structured-macro ac:name="html-wrap" ac:schema-version="1" ac:macro-id="3af23fd3-2e30-44b3-8277-2c72ac2d072b"><ac:parameter ac:name="align">right</ac:parameter><ac:parameter ac:name="class">menu</ac:parameter><ac:parameter ac:name="atlassian-macro-output-type">INLINE</ac:parameter><ac:rich-text-body><p>Related topics:</p><ul><li><ac:link><ri:page ri:content-title="Cockpit" /></ac:link></li><li><ac:link><ri:page ri:content-title="Multisite in Magnolia in the cloud" /></ac:link></li><li><ac:link><ri:page ri:content-title="Configuring domain redirect rules" /></ac:link></li></ul></ac:rich-text-body></ac:structured-macro><p>Once you have received your subscription package information, it is important to understand how domains and certificates are managed in Magnolia Cloud.</p><p>There are two main approaches available in Magnolia Cloud for&nbsp;domain and certificate management.</p><ul><li>You have a relatively <strong>simple setup</strong> and leave the management of your single domain and certificate to Magnolia, with limited redirects in place. Your involvement is limited to registering your domains and requesting your domain mappings via the Cloud Helpdesk.</li><li>You have a <strong>complex scenario</strong> involving multiple domains, your own pre-existing infrastructure or regulatory constraints.&nbsp;You prefer to keep full ownership and control of your domain and certificate management.</li></ul><p><br /></p><p><ac:structured-macro ac:name="toc" ac:schema-version="1" ac:macro-id="f6f3555d-9a60-4050-9d73-aaadb9412abf" /></p><h2>Magnolia-managed setup</h2><p>In a simple setup, Magnolia manages your domain and certificates.</p><p>Magnolia Cloud subscriptions have one <em>root</em> domain&nbsp;(also known as base, bare, naked, apex root or zone apex domain). By default, these are:</p><ul><li><code>mycompany.com</code>&nbsp;&mdash; Root&nbsp;domain.</li><li><code>www.mycompany.com</code>&nbsp;&mdash; Subdomain.</li></ul><p>Magnolia Cloud completely manages the root domain and its certificate.</p><p>You, or your chosen cloud partner, are responsible for:</p><ul><li>Maintaining the <strong>Domain Name System (DNS)&nbsp;records</strong>&nbsp;on your chosen DNS provider infrastructure and adding any entries needed for Magnolia Cloud to verify ownership and certificate validation challenges.</li><li>Verifying and updating your&nbsp;<strong>Certification Authority Authorization&nbsp;(CAA) records</strong> if you use them. This is so that certificate validation requests can succeed.</li></ul><blockquote><p>Certificate authorities implementing CAA perform a DNS lookup for CAA resource records, and if any are found, ensure that they are listed as an authorized party before issuing a digital certificate.</p><p><em>Source: <a href="https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization">Wikipedia</a> </em></p></blockquote><h3>What Magnolia provides</h3><p>In a managed setup, Magnolia provides:</p><ul><li>A redirect service with a fixed IP at: <code>3.121.148.202</code></li><li>Two possible ways to point your domains to the Magnolia Cloud Live environment:<ul><li><strong>Preferred</strong>&nbsp;&mdash; A subdomain to point your subdomain/s as CNAME entries to: <code>public-live-&lt;subscription-code&gt;.de.magnolia-cloud.com</code></li><li><strong>Alternative</strong>&nbsp;required for root domains &mdash; A pair of fixed public IPs, provided by AWS&nbsp;<span style="color: rgb(0,0,0);">Global Accelerator service,&nbsp;</span>belonging to your subscription (each subscription has a unique pair of IPs) to point the root domain/s as A entries.</li></ul></li><li>A DNS entry to verify ownership of the domain and validate certificate requests:&nbsp;<code>example-hash.amazon.verify</code></li></ul><p>The following restrictions apply:</p><ul><li>Magnolia only manages the main domain and certificate for public, live instances.&nbsp;</li><li>The certificate cannot be used outside of Magnolia Cloud.</li><li>The root domain must be part of the certificate, regardless of whether it is used as a site domain or for a 301 redirection.</li></ul><h3>Multisite domains</h3><p>Domains used by the Multisite module must be terminated on the instance. Make sure that your redirects point to the IP or the CNAME with no redirects in between.</p><p>For more information, see&nbsp;<ac:link><ri:page ri:content-title="Multisite in Magnolia in the cloud" /></ac:link>.</p><ac:structured-macro ac:name="info" ac:schema-version="1" ac:macro-id="354e9ebb-c0f6-4111-8f0b-f378770cce7f"><ac:parameter ac:name="title">Managed and unmanaged Multisite domains and certificates</ac:parameter><ac:rich-text-body><p>The solutions and restrictions for multisite domains and certificate management are the same as those described in&nbsp;<ac:link ac:anchor="Magnolia-managed domain and certificates" />.</p></ac:rich-text-body></ac:structured-macro><h2>Unmanaged setup</h2><p>If you already have infrastructure supporting your enterprise domain management system or need to comply with specific&nbsp;regulatory or security constraints, you may choose to manage your own domains and certificates.&nbsp;</p><ac:structured-macro ac:name="note" ac:schema-version="1" ac:macro-id="ea2f66ca-437d-473b-be2e-22073169acc6"><ac:parameter ac:name="title">SLA</ac:parameter><ac:rich-text-body><p>In an unmanaged setup, note that your Magnolia SLA and availability and uptime checks and monitors of the subscription are affected.</p></ac:rich-text-body></ac:structured-macro><h4>Unmanaged certificates</h4><p>When Magnolia does not manage the creation of certificates, we offer a manual import of the certificate for the root domain.</p><p>Once the initial certificate import is done, you or your cloud partner are responsible&nbsp;for installing renewed certificates via the Cloud Helpdesk.&nbsp;Magnolia does<em> not</em> oversee this process.&nbsp;</p><h4>Unmanaged domains</h4><p>Managing your own domains gives you the most flexibility but you must have your own infrastructure or service to do so.</p><p>If you or your cloud partner decide to manage your own domains and certificates, Magnolia only provides the CNAME entries and the associated public IPs for the Magnolia cloud instances, such as&nbsp;<code>[public|author]-&lt;environment&gt;-&lt;subscription-code&gt;.<a href="http://magnolia-cloud.com">magnolia-cloud.com</a>
  </code>.&nbsp;</p><h2>Redirects</h2><p>Magnolia Cloud offers 301 redirects for:</p><ul><li>The root domain.</li><li>Multisite module domains.</li></ul><p>For example:</p><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><th>From</th><th>To</th></tr><tr><td>my-company.com</td><td><strong>www.</strong>my-company.com</td></tr></tbody></table><p>If you need other redirects, you or your cloud partner are responsible for their implementation.</p><p>For example, you or your cloud partner&nbsp;would be responsible for the following redirects:</p><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><th>From</th><th>To</th></tr><tr><td>my-company.com</td><td>mycompany.com</td></tr><tr><td>my-company.de</td><td>mycompany.com</td></tr><tr><td>mycompany.ch</td><td>mycompany.com</td></tr><tr><td colspan="1">mycompany.li</td><td colspan="1">mycompany.com</td></tr><tr><td colspan="1">mycompany.li</td><td colspan="1">www.mycompany.com</td></tr><tr><td colspan="1">mycompany.co.uk</td><td colspan="1">mycompany.com</td></tr><tr><td colspan="1">www.my-company.co.uk</td><td colspan="1">mycompany.com</td></tr></tbody></table><p>You may consider these possible solutions to manage your own redirects:</p><ul><li>Redirects on the domain registrar &mdash; Modern domain registrars support URL redirects. This would save the certificate management for those domains.</li><li>Use your own account with&nbsp;API Gateway Service or external&nbsp;forwarding service (proxy)&nbsp;contracted directly by yourself or partner (services such as Kong, Tyk, Apigee or sub-services of CDN providers such as Akamai). <br />With this approach, you can configure all your domains, redirects and certificates while fully owning and not sharing the certificates and point those to the Magnolia-provided default domain and certificate.&nbsp;While this setup requires you to manage domains separately from the cloud, it also provides you with the most flexibility concerning domain configuration. It also removes the need for sharing certificates for the domain with Magnolia thus providing the highest level of security for domain-certified content.</li></ul><h3>Path redirects</h3><p>If you want to do path redirects, you or partner must configure them in the <ac:link><ri:page ri:space-key="DOCS61" ri:content-title="Virtual URI mapping" /><ac:plain-text-link-body><![CDATA[Virtual URI mapping module]]></ac:plain-text-link-body></ac:link> or using other equivalent Magnolia functionalities.</p><p>For example:</p><table class="wrapped"><colgroup> <col /> <col /> </colgroup><tbody><tr><th>From</th><th>To</th></tr><tr><td>www.mycompany.com<strong>/old-path-to-content</strong></td><td>www.mycompany.com<strong>/content </strong></td></tr></tbody></table><h3>Context path</h3><p>Magnolia Cloud always deploys to the ROOT context. It is not possible to change this.</p><p>For scenarios where adaptations to the context path are needed, we recommend you use a reverse proxy or an API Gateway to give you the most flexibility.</p><h3>SEO recommendations</h3><p>Only root and multisite domains should be terminated on the load balancers or instances. This means all other domains should be 301 redirected before to root or multisite ones. Magnolia does not offer this service. We recommend you use a solution such as an API Gateway Service.&nbsp;</p><p><br /></p>

-->
```
