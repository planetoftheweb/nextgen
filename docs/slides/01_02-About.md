<!-- .slide: data-state="title" -->
# PostCSS & CSSNext
How They Work

>> Speaker Notes:
CSS is a living language, which means that features are being added all of the time, but different browsers implement these features inconsistently and that's why we need a tool like PostCSS and CSSNext.

---

## PostCSS & CSSNext

<ul>
	<li class="fragment">PostCSS Processes CSS</li>
	<li class="fragment">CSSNext Plugins</li>
	<li class="fragment">Easily Configurable</li>
</ul>

>> Speaker Notes:
1. PostCSS is a CSS processor like Sass and Less, but unlike those tools, it's in extremely configurable so that you can customize it with just the tools you need.
2. CSSNext is a family of PostCSS plugins that help you convert some of these cutting edge features so that they work with older browser. It's really a combination of multiple CSS Plugins designed to help work work comfortably with next generation CSS code.
3. Each plugin within this family can be configured to your needs and if you don't like the way something works PostCSS lets you delete or add additional plugins or reconfigure existing plugins to customize your workflow.

---

## CSSNext Features

<ul>
	<li>Prefixing</li>
	<li>Custom Variables & Media Queries</li>
	<li>Color Functions</li>
	<li>Nesting</li>
	<li>Advanced Pseudo Classes</li>
</ul>

>> Speaker Notes:
1. Some of the features available through the group of CSSNext plugins are the automatic prefixing of CSS rules, so that your CSS works with older browsers.
2. Custom variables and media queries. CSSNext will make these more compatible with older browsers and allow you to easily use calculations within some of these features.
3. Nesting of your CSS so that you can easily organize your code inside other relevant rules.
4. Some advanced pseudo class selectors like any-link, matches and negative selectors like not.

Let's take a look at how I've configured PostCSS for this project.

https://github.com/postcss/postcss, http://cssnext.io, https://github.com/ai/browserslist

## Conclusion
Now that you understand how things work, it's time to get busy writing some code.