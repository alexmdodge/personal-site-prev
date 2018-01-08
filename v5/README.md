# Alex Dodge *Front-End Web Developer and Educator*
<img src="https://alexmdodge.ca/assets/img/main-logo-banner.png" width="600px"/>
<img src="https://alexmdodge.ca/assets/img/mozilla-badge.png" width="200px"/>

# Table of Contents
* [Introduction](#introduction) <br>
* [Installation](#use) <br>
* [Language Overview](#about) <br>
* [Development Operations](#devops) <br>
* [Updates](#update)

<h1>
	<a name="introduction" aria-hidden="true" class="anchor"></a>
	Introduction
</h1>
Welcome to my GitHub profile! This repository is a copy of my personal site. Any personal data will obviously be kept private, but nearly everything else on the site can be found here.

There are a variety of projects contained within the site. Some can be found in this repository and others have their own standalone repos which are included after compilation.

<h1>
	<a name="use" aria-hidden="true" class="anchor"></a>
	Installation
</h1>
To run this app on your local machine you'll need to have Aurelia CLI installed. First begin by ensuring you have the proper versions of npm and node.
This app is built on the Aurelia CLI, which has a couple of prerequisites you must install first. If you have previously setup your machine for the Aurelia CLI, you can skip this step.

* Install NodeJS >= 4.x
  * You can download it here.
* Install NPM 3.x
  * Ensure you have the latest version install with npm -v 
  * If you need to update, run `npm install npm -g`.

Once the dependency managers are installed, you can install the Aurelia CLI,

`npm install aurelia-cli -g`

You will also need concurrently which runs separate tasks in parallel, and sass which compiles the styles sheets,

`npm install -g concurrently`

You will also need Sass. A detailed installation can be found in their documentation (here)[http://sass-lang.com/install]!
In short, once you have Ruby installed, it's,

`npm install -g sass`

You can now install the dependencies with,

`npm install`

To run the project use,

`npm start`
This automatically starts the aurelia watch task, as well as the sass watch task. To run the unit tests use,

`au test`

The `--watch` flag will  continuously check the tests, presenting a TDD style approach. To run the e2e tests use,

`npm run e2e`

To run and build a production ready site, just use

`npm run build:prod`

This runs a sass compile, aurelia build using production environment variables (removing debugging), and then has a final gulp build process which moves and compresses all the assets.

<h1>
	<a name="about" aria-hidden="true" class="anchor"></a>
	Language Overview
</h1>
There are a couple of focal points of the site. The site itself is written with the following components. I've written an explanation of the purpose beside each, and where it can be found. (No doubt my interests will change and so to will the site and the components)

<div>
	<img src="http://devicon.fr/devicon.git/icons/html5/html5-original-wordmark.svg" 
		style="display: inline !important;" width="50" height="50" alt="HTML5"/>

	<img src="http://devicon.fr/devicon.git/icons/css3/css3-original-wordmark.svg" 
		style="display: inline !important;" width="50" height="50" />

	<img src="http://devicon.fr/devicon.git/icons/bootstrap/bootstrap-plain-wordmark.svg" 
		style="display: inline !important;" width="50" height="50" />

	<img src="http://joelcox.io/images/logos/aurelia-logo.png"
		style="display: inline !important;" width="50" height="50" />

	<img src="http://devicon.fr/devicon.git/icons/gulp/gulp-plain.svg" 
		style="display: inline !important;" width="50" height="50" />

	<img src="http://devicon.fr/devicon.git/icons/javascript/javascript-original.svg" 
		style="display: inline !important;" width="50" height="50" />

	<img src="http://devicon.fr/devicon.git/icons/nodejs/nodejs-original.svg" 
		style="display: inline !important;" width="50" height="50" />

	<img src="http://devicon.fr/devicon.git/icons/sass/sass-original.svg" 
		style="display: inline !important;" width="50" height="50" />

</div>

<p class="space"></p>



| Component       | Purpose        |
|:---------------:|------------------|
**HTML5**        |  It is necessary! In the future I will toy around with some http2 protocol, which has interesting applications, like not needing to concatenate files.
**CSS3**, Less/Sass, Bootstrap    | The core of the styling is taken care of with CSS3, written using Sass and supported with Bootstrap. It was really important to have an uncompiled version of bootstrap as trying to work out the css specificity with the regular file can be irritating.
**Javascript**, jQuery, Velocity, Aurelia | The core of the site is written using the Aurelia framework. This has been a treat to work with, and I'm excited to see the development continue. Velocity is a replacement for jQuery and is incredibly performant in comparison. This is similar to GSAP. 
NodeJS, Gulp | NodeJS is the backbone, helping to bridge the back-end and front-end. NPM also delivers the necessary dependencies. The task runner is Gulp which is employed under the hood of Aurelia, which I've enjoyed quite a bit more than grunt.
Database | Have yet to decide which database to use, but will most likely look into NGINX and PostgreSQL.

<h1>
	<a name="devops" aria-hidden="true" class="anchor"></a>
	Development Operations
</h1>

This is a section where I'm only just starting to explore. Looking forward to working with Flightplan for deployment, and also some early docker. Would love to build this site into a docker container just to see how it would work. Currently this site is hosted on a server which is provisioned by the company and has numerous plugin ins to aid in the setup. Though from what others have shown the performance starts to drop drastically once you have any load on the server.

The next step is to look into virtual machines and provisioning my own servers. I would also love to toy with load balancers (if I ever have enough traffic to have to think about that, or have the money to do it...).


## To-Do
* Finalize designs in photoshop,
  * ~~splash page~~
  * ~~about~~
  * ~~portfolio~~
  * ~~blog~~
  * ~~contact~~
* Convert and build HTML backbone, validate HTML,
  * ~~splash page~~
  * ~~about~~
  * ~~portfolio~~
  * ~~blog~~
  * contact
* Organize design of each page, finalize CSS styles
  * ~~splash page~~
  * ~~about~~
  * ~~portfolio~~
  * ~~blog~~
  * ~~contact~~
* Complete interactive styles and javascript background, with render views and navigation
  * ~~splash page~~
  * ~~about~~
  * ~~portfolio~~
  * ~~blog~~
  * ~~contact~~
* ~~Load in all projects~~
* ~~Integrate projects with sub-domains~~
* Testing and user experience test
  * Write Jasmine tests
* SEO and final clean up
  * Get build systems setup fully for deployment

<h1>
	<a name="update" aria-hidden="true" class="anchor"></a>
	Upates
	<img src="http://image.flaticon.com/icons/svg/25/25429.svg" 
		style="display: inline !important;" width="20" height="20" /> 
</h1>
### 14/11/2016
Well the site is nearly complete in this version. There are a number of things I wish to add over time to test various features. Some of these are SVG animations, Velocity animations, interactive sections, dynamically generated lists, a fully featured blog, and so much more. Currently all of my projects could use to be more robust in terms of testing and other support features. I would also like to add continuous testing and integration into all of my projects.

### 27/10/2016
There are only a couple of other finishing touches before the website is good to go. Reference the issues section for specific tasks. In general the mobile features still need to be built upon. Near the end of development I'll load up a browsersync session with many different devices and try out a number of different use cases.

### 20/10/2016
The site is really starting to come along at this point. I would have finished it sooner but I've started to get involved in a number of other projects. At the moment the markup and styling for the portfolio page is on the way. The about page is finished and has turned out very well. I'm looking forward to getting the site finished and starting the final touches and tweaks.

The blog is the next big component. I was originally going to build it with wordpress, but I'm now thinking I'm going to use it as a learning experience to try some Node programming with express, and write my own Aurelia blogging platform. The contact page is simple so once I have this completed, I'll finalize the site and begin working on the blog.

### 09/10/2016
Al of the designs are finished, and I've begun adding the markup for all of the different sections of the site. The about page is almost complete, and the others will not take as long. I believe my goal will be to get the site up, without any fancy interactions, then work on them feature by feature as time goes on. I would prefer everyone to have access to a well designed site early on.

I also will start designing the block soon. I'm not entirely convinced that I want to use WordPress but it's a skill I would still like to develop to some degree because of the popularity!

### 28/09/2016
I've finished the designs for the about section of the site and am currently working on the designs for the portfolio section. This is the longest section of the site in terms of front end requirements. I want to make sure it flows well through the various parts and is very performant. I finished the coding for the splash page, but I want to finish the designs first so I can code it all in one big chunk.

### 19/09/2016
Spent a good portion of time and seriously mapped out how the site is going to look. For the various section, was thinking of playing around with routers and views to generate a unique about me and projects page. Finished the designs for the home page and now in the process of updating some assets.

### 01/09/2016
The aurelia structure is setup and the first couple pages have been ported over from the older version of my site. Struggling currently with the aurelia build process, as it seems to remove all font files from the build version, and the build instructions are embedded deep within layers of dependencies. Really impressed with the routing speed and responsiveness of the framework though. Looking forward to getting some content in and starting to organize.

### 19/08/2016
The build system is complete with all of the automated tasks. Moving on to copying over some content and integrating the Aurelia framework into the build.

For some of the other functionality I would eventually like to get a testing framework installed and incoporated into the build system as well.

### 22/07/2016
Currently setting up the Gulp build files. Will create an install section for those who want to try the site locally and play around with the source code. The styling will reflect a very minimalist but unique navigation and display of information. Well animated, but not obtrusive.

Once the build is setup, going to dive into the Aurelia routers and copy some of the Version 4 site into the new site for testing purposes.

Some of my other repos will be included on the site as extended web apps. The GridGrind game and simple Google sheets interface are to of the current projects which will be the first. 

## Current Workstation Specifications
A section more for my own doing, as I'm in the process of transitioning both projects and computer and just looking to keep things consistent until Bower and the other dependency management sections are up and running.

OS: 64 bit Ubuntu 16.04 LTS
