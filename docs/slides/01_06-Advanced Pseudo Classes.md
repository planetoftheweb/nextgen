<!-- .slide: data-state="title" -->
# CSSNext
Pseudo Selectors

>>Speaker Notes:
CSSNext gives you access to next generation pseudoclass selectors that can be useful when building your projects.

---

## Pseudo Class Selectors

<ul>
	<li class="fragment">`:any-link`</li>
	<li class="fragment">`:matches`</li>
	<li class="fragment">`:not`</li>
</ul>

>> Speaker Notes:
1. The any-link pseudo class selector lets you specify all of the styles for your links at once...letting you choose the styles color for regular and visited links, for example.
2. You can also use things like the matches pseudo class, which lets you choose an element if it matches another element.
3. And you can use the not pseudo-class selector, which lets you choose the opposite of a selector.



```_variables.css
	@custom-selector :--headings h1, h2, h3, h4, h5, h6;
  } /* root */
```

```_base.css
a:any-link {
  color: var(--color-links);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
}


:--headings:matches(.feature-description-headline) {
  color: var(--green);
}

.feature:not(#history, #ask) {
 background: var(--darkblue);
 padding: 30px;
}
```


## Conclusion
These upcoming CSS pseudo class selectors and CSSNext lets you start using them safely because they will be converted 