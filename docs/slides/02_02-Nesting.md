<!-- .slide: data-state="title" -->
# CSSNext
Nesting Rules
>>Speaker Notes:
One of the features that I really love about processed CSS languages like Sass and Less is the ability to nest CSS rules inside other rules. It's something that's included when you use PostCSS with the set of CSSNext plugins.

---

## PostCSS & Flexbox

<ul>
	<li class="fragment">Better organization</li>
	<li class="fragment">Use `&`</li>
	<li class="fragment">Comments &amp; indentation</li>
</ul>

>> Speaker Notes:
1. Nestin makes it more convenient to organize content by putting rules inside other rules. It makes it easier to see which rules are the parent rules and which are the child rules.
2. Something that is a bit different from Sass and Less is that you normally add an ampersand to use these rules, so they're a little harder to use, but it's worthwhile in the end.
3. I would suggest that you add comments and that you indent your CSS so that things are easier to find and work with.

```_header.css
  background:
    linear-gradient(
      color(var(--orange) a(20%)) 50%,
      rgba(0,0,0,0),rgba(0,0,0,.8) 90%),
      url(../images/hero/appwoman.jpg)
    no-repeat center bottom;
  background-size: cover;

  & .header-info {
    width: 100%;
    text-align: center;

    & .header-info-text {

      & a:any-link {
        font-size: calc(var(--font-size-base) * 1.7);
      } /* any-link */

      & .header-info-headline {
          font-size: calc(var(--font-size-base) * 2.5);
      } /* header-info-headline */
      
      & .header-info-subheadline {
        font-size: calc(var(--font-size-base) * 1.5);
      } /* header-info-subheadline */

    } /* header-info-text */
  } /* header-info */
} /* header */
```

## Conclusion
Nesting is one of those things that is hard to give up once you've tried it. With PostCSS, it's not just a neat feature, but something that is a planned update to next generation CSS...and you can start getting used to it now when you use PostCSS with CSSNext.