<!-- .slide: data-state="title" -->
# CSSNext
Using Color
>>Speaker Notes:
Next generation CSS allows you to use functions that help you modify existing colors.

---
## Color Adjustments

<ul>
	<li class="fragment">`color( color|hue adjuster )`</li>
	<li class="fragment">**Adjusters:** `hue`, `saturation`, `lightness`, `whiteness`, `blackness`, `tint`, `shade`, `blend`, etc</li>
</ul>

>> Speaker Notes:
1. It's pretty easy to do, just use color function and then inside use a color in pretty much any format as well as one of many adjusters. 
2. There are lots of adjusters that you can use, so make sure you check the documentations

```variables.css
.footer {
  background: linear-gradient(var(--darkblue),var(--color-dark) 20%);
  color: var(--color-main);
  padding: 40px 0;
  display: flex;
  justify-content: center;
  align-content: center;

  & .footer-elements {
    width: var(--container-default-width);
    max-width: var(--container-max-width);

    & .footer-top {
      display: flex;
      align-items: center;
      justify-content: center;

      & .footer-logo {
        width: 70px;
      }

      & .footer-address {
        padding-left: 10px;
      }
    }

    & .footer-bottom {
      display: flex;
      justify-content: center;

      & .logocolor{
        fill: var(--color-light);
      }

      & .legal {
        width: var(--container-default-width);
        max-width: var(--container-max-width);
        font-size: calc(var(--font-size-base)*.5);
        line-height: var(--line-height-base);
        text-align: center;
      }
    }
  }
}```

## Conclusion
Adding a variable name is really convenient