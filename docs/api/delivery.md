---
title: "Delivery API"

hide_table_of_contents: true
---

import { RedocStandalone } from 'redoc';

Magnolia's modern delivery system is highly customizable. Instead of just the one delivery API, like most Headless CMS, you configure whichever delivery API's you need. You control what content types are returned, what relationships are resolved, the depth of child nodes to return - all with simple YAML configuration files.

Magnolia's content lives in *trees* as well as *lists*, and the delivery API fully takes advantage of this. There are two key ways to access configured endpoints: 

### Read Node

Given the path to a node, this interface returns that node and all its children (and further decendents), in their 'natural order', to the configured depth.

### Query Nodes

When 1 or more query parameters are included in the request, then all matching results are returned, following any requested ordering parameters.

### Resources
* See [Full Docs: Delivery API](https://documentation.magnolia-cms.com/display/DOCS/Delivery+endpoint+API+v2)


<!-- TODO  

# Read Node
If no parameters are used in the request, the 'Read Node' interface returns just the node and it's children to a certain depth, in accordance to the configuration of the REST endpoint. Child nodes are returned in their natural order.

## Get children
By appending the ```@nodes``` handle to url, only the child nodes of the path are returned, not the contents of the specified node itself.

# Query Nodes
If any parameters are added to the url, then the 'Query Nodes' interface is used.


<RedocStandalone
  specUrl="https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml"
/>

-->

