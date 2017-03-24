<!-- .slide: data-state="title" -->
# CSSNext
Media Queries
>>Speaker Notes:
It's time to make our project responsive and the next generation of CSS rules gives us the ability to make this easier with using custom media query names.

---
## Custom Queries

<ul>
	<li class="fragment">`@custom-media`</li>
	<li class="fragment">`--name`</li>
	<li class="fragment">Use `>=` `<=`
</ul>

>> Speaker Notes:
Media queries can be complicated to write and a little repetitive, so the next generation of CSS allows us to give them names to make things easier.
1. To create these custom media queries, you use the @custom-media keyword in the root definition of your project
2. You use a name with double dashes just like a variable name.
3. Then you can apply a set of rules using >= or <=

```variables.css
:root {

  --container-default-width: 90%;
  --container-max-width: 1200px;

  --width-standard: {
    width: var(--container-default-width);
    max-width: var(--container-max-width);
    margin: 0 auto;
  }

  @custom-media --viewport-small (width >= 576px);
  @custom-media --viewport-medium (width >= 768px);
  @custom-media --viewport-large (width >= 992px);
  @custom-media --viewport-extralarge (width >= 1200px);

  @custom-selector :--headings h1, h2, h3, h4, h5, h6;
} /* root */```


```_header.css
.header {

  & .header-info {
    width: 100%;
    text-align: center;
    margin-bottom: 30px;

    & .header-info-headline {
      font-size: calc(var(--font-size-base) * 2.2);
      @apply --width-standard;

      @media (--viewport-small) {
        font-size: calc(var(--font-size-base) * 2.5);
      }

      @media (--viewport-large) {
        font-size: calc(var(--font-size-base) * 3.5);
      }

    } /* header-info-headline */

    & .header-info-subheadline {
      font-size: calc(var(--font-size-base)*1.2);
      @apply --width-standard;

      @media (--viewport-medium) {
        font-size: calc(var(--font-size-base) * 1.5);
      }
      @media (--viewport-large) {
        font-size: calc(var(--font-size-base) * 1.8);
      }
    }/* header-info-subheadline */

    & .header-info-text {
      display: none;
      @apply --width-standard;

      @media (--viewport-small) {
        display: block;
        font-size: calc(var(--font-size-base) * .9);
        line-height:  calc(var(--line-height-base) * .9);

        & a:any-link {
          font-size: calc(var(--font-size-base) * 1.2);
          color: var(--yellow);
        }
      }

      @media (--viewport-large) {
        font-size: calc(var(--font-size-base) * 1.2);
        line-height:  calc(var(--line-height-base) * 1.1);

        & a:any-link {
          font-size: calc(var(--font-size-base) * 1.7);
        }
      }

    }/* header-info-text */
  } /* header-info */
} /* header */```


## Conclusion
Adding a variable name is really convenient