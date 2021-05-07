---
title: "Installation"

---

## Overview

In this section we are going to make our local system ready to install and develop the demo projects.

## Preparation

If Node.js, NPM and Java v8 (JRE SE) (On Windows, the JDK is required) are already installed on your computer, you can jump directly to the installation of the [Magnolia CLI](#install-magnolia-cli).

### Setup Java

There is no Java Programming required to develop applications with Magnolia.  
However Magnolia does require the Java Environment (JRE) version 8 or higher. Type ```java -version``` in a terminal or command prompt. If the system reports a version number, Java is installed on your computer.


```console
$ java -version
java version "1.8.0_231"
Java(TM) SE Runtime Environment (build 1.8.0_231-b11)
Java HotSpot(TM) 64-Bit Server VM (build 25.231-b11, mixed mode)
```

:::tip Important
Be sure to use a compatible version of Java from the [Magnolia Certified Stack](https://docs.magnolia-cms.com/product-docs/Administration/Certified-stack.html)
(At the time of writing: Java 8,11,14)
:::

If you don't have Java, or it is not a compatible version, install it on your system.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="mac"
  groupId="operating-systems"  
  values={[
    { label: 'Mac', value: 'mac', },
    { label: 'Windows', value: 'win', },
    { label: 'Linux', value: 'linux', },
  ]
}>
<TabItem value="mac">
The easiest way to install Java on your Mac is using [Homebrew](https://brew.sh/).

First update homebrew
```console
brew update
```

Then install java
```console
brew install homebrew/cask/java
```

Type ```java -version``` to verify your installation.

Alternatively you can [Download](https://www.java.com/en/download/) the latest Java from Oracle Website.
</TabItem>
<TabItem value="win">

Follow the instructions on the [Magnolia Documentation](https://documentation.magnolia-cms.com/display/DOCS/Installing+Magnolia) to install Java on Windows. 

</TabItem>

<TabItem value="linux">

You can follow the directions at https://openjdk.java.net/install/

Type ```java -version``` to verify your installation.
</TabItem>
</Tabs>


### Setup Node.js and npm
Type ```node -v``` and ```npm -v``` in a terminal or command prompt. If the system reports a version number, Node.js and npm are installed on your computer.

```
$ node -v
v12.13.0
```
```
$ npm -v
6.13.7
```

If Node.js and/or npm is not installed you can follow [these](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instructions.


> Our system is prepared and ready. Next install the Magnolia CLI.


## Install Magnolia CLI
The Magnolia Commandline Interface (CLI) helps you to download, install and start Magnolia. It also provides many handy tools for developing [Light Modules](/docs/concepts/light-development#light-module)

```
$ npm install @magnolia/cli -g
```
Depending on your permissions and the Node.js installation location, you may have to execute the above command with root permissions. On Linux or OS-X, to run this command as root, use:
```
$ sudo npm install @magnolia/cli -g
```

Test that it is installed correctly:
```
$ mgnl -v
Magnolia CLI: 4.0.0 (node.js: v12.15.0)
```

You can find more information in the [Magnolia CLI](https://documentation.magnolia-cms.com/display/DOCS/Magnolia+CLI) Documentation.

:::tip Your system is ready to go
Let's build a headless app, shall we?
:::
