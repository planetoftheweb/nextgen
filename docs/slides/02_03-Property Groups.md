<!-- .slide: data-state="title" -->
# CSSNext
Property Groups
>>Speaker Notes:
Next generation CSS will let you create a group of properties that can be applied at the same time. This is like a variable that can have more than one property.

---

## Applying Groups

<ul>
	<li class="fragment">`:root`</li>
	<li class="fragment">`--name`</li>
	<li class="fragment">`@apply`</li>
</ul>

>> Speaker Notes:
1. You need to add the group of variable in the root section of your css just like other variable definitions.
2. You create a name just like you do with a variable using double dashes at the beginning of the name.
3. Whenever you want to use the group of property, you add an @apply and then use the variable name.

```_header.css
    & .header-info-headline {
      font-size: calc(var(--font-size-base)*2.5);
      @apply  --width-standard;
    } /* header-info-headline */

    & .header-info-subheadline {
      font-size: calc(var(--font-size-base)*1.5);
      @apply  --width-standard;
    }/* header-info-subheadline */

    & .header-info-text {
      @apply  --width-standard;

      & a:any-link {
        font-size: calc(var(--font-size-base)*1.7);
      } /* a:any-link */

    }/* header-info-text */
```

```variables.css
  --container-default-width: 90%;
  --container-max-width: 1200px;

  --width-standard: {
    width: var(--container-default-width);
    max-width: var(--container-max-width);
    margin: 0 auto;
  }
```

## Conclusion
Property group variables are really useful since you can apply a set of rules to a series of elements quickly. It's another great addition to CSS.