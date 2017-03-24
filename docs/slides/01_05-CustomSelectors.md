<!-- .slide: data-state="title" -->
# CSSNext
Custom Selectors

>>Speaker Notes:
Witch CSSNext, you can create your own selectors to make like easier to choose things like a group of elements with CSS.

---

## Custom Selectors

<ul>
	<li class="fragment">Declare with `@custom-selector `</li>
	<li class="fragment">Format `:--name`</li>
	<li class="fragment">Access via name</li>
</ul>

>> Speaker Notes:
1. To create these, you use an @sign with the name custom-selector in the root section of your css.
2. Then you create a name using a colon and two dashes for then name.
3. Then you can use this instead of the list of selectors in your CSS.


```_variables.css
	@custom-selector :--headings h1, h2, h3, h4, h5, h6;
  } /* root */
```

```_base.css
	h1,h2,h3,h4,h5,h6 {
	:--headings { 
```


## Conclusion
Custom selectors lets you create shortcuts to your often used selectors and that can save you a bunch of time on your bigger projects.