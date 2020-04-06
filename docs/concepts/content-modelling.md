---
title: "Content Modelling"

---

## Overview
Your content model is a key consideration for every web and digital experience project you work on. It creates a shared understanding across the domains of a project, from project owners to marketing leads, content creators to developers.

Concretely, it describes the key types of content in your project, the properties each of those types has and the relationships between the content types.

Content modelling has become more important with the proliferation of digital channels, from new devices like smart speakers to networks like instagram and tiktok. You want to create 'future proof' content that will work across all current channels, and those to come. You don't want a CMS to mix presentational HTML  in with your content so that it only works on today's web browsers, and your current graphical theme. This is one of the cornerstones of the headless CMS approach.

But most headless CMS have gone too far, only supporting fully structured content. They fall short on the authoring UI, only supporting a form-based editing interface. The UI is limiting and removed from the actual experience. Many headless projects fail or must be retrofitted because authors don't like them.


## Fully and Semi-structured content

Magnolia gives you three editing interfaces. Choose one, or all of them for your project.

With __Content Apps__ Magnolia supports fully structured content with a form-based editing interface, just like the other headless CMS. Very useful in many cases… but not all.

With the __Stories App__ we support semi-structured content with a 'Medium'-like editor that lets authors add whatever components they choose in a list.

With the __Pages App__ (aka the __Visual SPA Editor__)  we support semi-structured hierarchical content with a WYSIWYG view of the final experience. Authors can choose which components to add, and where.

This may surprise you as it goes against the current headless conventional wisdom, but the current wisdom is confused on a few matters:

*   There is an assumption that a WYSIWYG editor is mixing presentation with the content. But in Magnolia, they are separate. You can hit a REST endpoint and get a clean hierarchy of the pure content in JSON.
*   There is an assumption that having fully structured content is more important than a good authoring UI. This is true for some projects and some users, but not for infrequent or less technical authoring staff.
*   There is a philosophy that authors should not see how their content is used as it can slow them down. Can be true in some cases (like writing news articles), but experience on many projects shows that it can slow down authors even further because they choose to additionally make a visit to the web experiences to check how their content is presented!


## Modelling

In a Magnolia project, as you model your content, you also consider which authoring experience makes the most sense for the project, and the content authors.


### Content Types (Content Apps)

Magnolia Content Types are similar to the content types concepts from other headless CMS. Some key differences are: They are defined in YAML files in a very slim format (with all of the benefits of [Light Development](light-development). They support hierarchies via nested folders. They define only the model. The generated UI, called a Content App, can be customized more deeply than any other CMS.

[Full Docs: Content Types](https://documentation.magnolia-cms.com/display/DOCS/Content+type+definition)
<!--See the Content Types chapter for more details. TODO-LINK-->


### Stories App

The Stories App is provisioned out of the box with a sensible default content model. The top of the Stories App contains structured content, identical to a Content App. It is followed by the 'blocks' section where authors can add any block they want in a 'Medium'-like editing experience.

The Stories app is not provisioned via a content type, you configure the editing UI directly. The configuration of the editing UI acts as an implicit content model. You can also configure exactly which blocks are available.

While a Stories App is provisioned out of the box, you can modify it, rename it, or create additional instances of Stories Apps to cover the needs of your project such as articles, blogs, and even rich product pages.

[Full Docs: Stories App](https://documentation.magnolia-cms.com/display/DOCS62/Stories+app)

### Pages App

The Pages App is provisioned out of the box. Typically you will not customize the app itself. The customization is done with Page and Component Templates, for each of these you configure an editing form, which acts as an implicit content type.

Pages and Components can declare Areas, which are basically 'slots' where authors can then add Component instances. Each Area configures which Components can be placed in them, this forms a relationship between the different components.

[Full Docs: Pages App](https://documentation.magnolia-cms.com/display/DOCS62/Editing+pages)