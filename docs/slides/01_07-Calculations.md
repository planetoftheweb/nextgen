<!-- .slide: data-state="title" -->
# CSSNext
Calculations

>>Speaker Notes:
Calculations are pretty well supported in almost all browsers, but sometimes when you use them with other features like variables, they can cause problems, so CSSNext will solve this by making calculations safe to use within other features.

---

## Calculations

<ul>
	<li class="fragment">(+), (-), (*) &amp; (/)</li>
	<li class="fragment">Mixed measurements</li>
	<li class="fragment">Nest calc() or vars</li>
</ul>

>> Speaker Notes:
1. Calculations will display the result of math in properties with addition, substraction, multiplication and division.
2. You can mix and match measurements like pixels, percentages where it makes sense, but this doesn't always work, so be careful there.
3. Nest calculations or variables inside other calculations for some really complex results.


```_variables.css
	@custom-selector :--headings h1, h2, h3, h4, h5, h6;
  } /* root */
```

```_base.css

### DELETE
:--headings:matches(.feature-description-headline) {
  color: var(--green);
}

.feature:not(#history, #ask) {
 background: var(--darkblue);
 padding: 30px;
}
```

### CHANGE

```
  --line-height-base: 150%;
```

### TO

```
  line-height: calc(var(--line-height-base)-50%);

```


## Conclusion
These upcoming CSS pseudo class selectors and CSSNext lets you start using them safely because they will be converted 