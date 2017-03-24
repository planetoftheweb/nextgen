<!-- .slide: data-state="title" -->
# CSSNext
Variables

>>Speaker Notes:
A really useful feature in processors like Sass is the ability to create variables so that your code is easier to maintain. CSSNext allows you to use these today and will automatically convert them so that they work with older browsers.

---

## PostCSS Partials

<ul>
	<li class="fragment">Declare in `:root`</li>
	<li class="fragment">Format `--name`</li>
	<li class="fragment">Access with `var`</li>
</ul>

>> Speaker Notes:
1. You create variables in a special section of your code called the root. It looks just like any other selector.
2. To create a variable, you use a regular CSS name and preceed it with double dashes.
3. To use the variable, you use the var() keyword and then use the variable name. 

```style.css
@import "variables";
```

```_variables.css
:root {
  --white: #FFF;
  --black: #000;
  --eggshell: #EEE8D6;
  --darkblue: #022933;
  --yellow:   #F3D350;
  --blue:     #0076A3;
  --green:    #BFC406;
  --orange:   #DC762B;
  --red:      #D14348;
  --purple:   #6D73C2;

  --color-light: var(--white);
  --color-dark: var(--black);
  --color-main: var(--darkblue);
  --color-background: var(--color-light);
  --color-links: color(var(--blue) lightness(+20%));
  --color-navigation-links: var(--blue);


  --font-size-base: 1.3rem;
  --line-height-base: 150%;
  --font-primary: 'Work Sans', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-weight-light: 100;
  --font-weight-normal: 300;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
} /* root */
```

![Changes to file](https://dl.dropboxusercontent.com/s/e237s38txdll3m3/2017-03-14%20at%209.29%20AM.png)  

## Conclusion
CSS variables are a little more complicated than using Sass variables, but you'll quickly get used to them. It's a great way to code your pages.