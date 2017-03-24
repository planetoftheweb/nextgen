<!-- .slide: data-state="title" -->
# PostCSS & CSSNext
Partials

>> Speaker Notes:
One of the features that PostCSS offers is the ability to use true partials in your CSS like what you can do with Sass.

---

## PostCSS Partials

<ul>
	<li class="fragment">True `@import`</li>
	<li class="fragment">Configure with processor</li>
	<li class="fragment">Concatenate to syle.css</li>
</ul>

>> Speaker Notes:
1. The regular CSS import command in CSS will import a file's contents when the browser loads the page. The problem with that is that it creates an unnecessary extra call to the server.
2. You can configure the import command in your gulpfile or other processor. Since I'm used to the way Sass works, so I've added an _ as a prefix and .css as the suffix. You can make them whatever you want.
3. That allows us to divide our code into different pieces, and those get combined into a single style.css file.

```style.css
@import "base";
```

```_base.css
	@import url('https://fonts.googleapis.com/css?family=Work+Sans:100,300,500,700');

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

body {
  color: #EEE8D6;
  background-color: #0076A3;

  font-family: 'Work Sans', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 150%;
  margin: 0;
}

a {
  color: #F3D350;
  font-weight: 300;
  text-decoration: none;
}

a:hover, a:focus {
  text-decoration: underline;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  margin-bottom: .5rem;
  margin-left: 1rem;
}

h1,h2,h3,h4,h5,h6 {
  font-weight: 500;
}
```

## Conclusion
Partials are a real convenient way to break up code into different pieces that are easy to maintain.