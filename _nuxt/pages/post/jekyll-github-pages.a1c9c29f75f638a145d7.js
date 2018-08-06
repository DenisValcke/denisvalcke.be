webpackJsonp([4],{VaTU:function(e,t){e.exports='<section><h2>Jekyll &amp; Github Pages</h2>\n<p><small><em>2016-05-22</em></small></p>\n<p>When I was setting up my previous blog, I came across a ridiculous amount of information but never the information I really needed to get it done. That is why I\'ve decided to write down the process of how to set up Jekyll to work with Github-Pages.</p>\n<p>We\'ll go through these four simple steps.</p>\n<ol>\n<li>Setup a Github repository for Github-Pages</li>\n<li>Setup Jekyll locally</li>\n<li>Push Jekyll to Github and check the result</li>\n<li>Link your custom domain name</li>\n</ol>\n<h3>Setup a Github repository for Github-Pages</h3>\n<p>Github is primarily know as the location for setting up and managing Git repo\'s. But it is also possible to host static websites for free on Github. How? Well this is what I\'ll be explaining.</p>\n<p>First, create a new public repository in your Github account, get the link for cloning the github repo, open terminal, move to the correct folder and follow the steps under <strong>…or create a new repository on the command line</strong></p>\n<p>Make sure the name of repository is the same as your username, it should be identical or this will not work.</p>\n<pre><code class="language-bash"><span class="hljs-built_in">echo</span> <span class="hljs-string">"# test"</span> &gt;&gt; README.md\ngit init\ngit add README.md\ngit commit -m <span class="hljs-string">"first commit"</span>\ngit remote add origin git@github.com:[the-url-provided-by-github]\ngit push -u origin master\n</code></pre>\n<h3>Setup Jekyll locally</h3>\n<p>Open Terminal and, if you have not done so earlier, install jekyll <code>gem install jekyll</code>.</p>\n<p>Next move to the folder of your github pages repo and execute <code>jekyll new .</code>, this will create a new Jekyll site in the existing folder. You can now serve Jekyll locally by using <code>jekyll s</code> and start building your website.</p>\n<h3>Push Jekyll to Github and check the result</h3>\n<p>The next step is to commit your changes and push them to your github repository.</p>\n<p><img src="/images/repo-gh-pages-branch.png" alt="gh-pages repo screenshot"></p>\n<p>If you now go to the following url <code>YourGithubName.github.io</code>, you can see your jekyll website.</p>\n<p>It\'s worth the mention that if you experience some problems with url\'s or resources not loading correctly, you might need to have a look at the <code>baseurl</code> &amp; <code>url</code> values in the config.yml file.</p>\n<h3>Link your custom domain name</h3>\n<p>As a final step, go to your repository on github.com and add a new file called CNAME. In that file just type your domainname <code>yourdomain.com</code> and commit it.</p>\n<p>Next, make sure the A-records for you domainname are set to one of the Github IP addresses (192.30.252.153 or 192.30.252.154). Keep in mind that the time to live (TTL) set a certain amount of time for which the old website can still be visible.</p>\n<p>That should do it, you should now be hosting your jekyll site on Github Pages, enjoy!</p>\n</section>\n'},iRow:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("vq86"),n=o("u7md"),s=o("VU/8")(i.a,n.a,!1,null,null,null);s.options.__file="pages/post/jekyll-github-pages.vue",t.default=s.exports},u7md:function(e,t,o){"use strict";var i=function(){var e=this.$createElement;return(this._self._c||e)("div",{domProps:{innerHTML:this._s(this.post)}})};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n},vq86:function(e,t,o){"use strict";var i=o("VaTU"),n=o.n(i);t.a={computed:{post:function(){return n.a}},transition:"page"}}});