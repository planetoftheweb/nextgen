<!-- .slide: data-state="title" -->
# PostCSS
Flexbox Layouts

>>Speaker Notes:
It's time to start working with the layouts for our page. Since it's the first thing on the page, we'll get started with the header. I'm going to use flexbox for layouts. The nice thing about having PostCSS is that it takes care of browser inconsistencies when it comes to using flexbox.
---

## PostCSS & Flexbox

<ul>
	<li class="fragment">Flexbox</li>
	<li class="fragment">Browser support</li>
	<li class="fragment">Why not grids?</li>
	<li class="fragment">Containers</li>
</ul>

>> Speaker Notes:
1. Flexbox is a set of CSS rules that gives you a more efficent way to align and distribute items within a container when their size is unknown.
2. It's well supported in browsers after Internet Explorer 10, so if you're going to use this technology, you have to bear in mind that it isn't meant for older browsers.
3. There's even a newer technology available for layouts called CSS Grids, so you may be wondering why we're not using that here. I try to be realistic about what you should be using. CSS Grid layouts are better for two dimensional grids, but support for CSS Grids is just starting to appear in browsers (http://caniuse.com/#feat=css-grid), so I don't think it's quite ready for real sites.

---

## Working with Flexbox

<ul>
	<li class="fragment">Containers vs Items</li>
	<li class="fragment">`flex-direction`</li>
	<li class="fragment">`flex-wrap`</li>
	<li class="fragment">`align-content`</li>
</ul>

>> Speaker Notes

1. The main thing you have to remember with Flexbox is that there are two ways of controlling elements within a layout. You modify the display property of an element to use flexbox and then generally decide how the elements need to lay out. However, you can also customize how the elements within the container work. Most of your time though will be spent just controlling the general containers.
1. To make flexbox manage items, you start by setting the display property of an element to flex, by default it will assume that you want to place items side by side. You can change this to a column layout using flex-direction, but it doesn't always work as planned.
1. Another property you can use is flex-wrap, it controls what happens to elements if they don't fit in a new line. You can choose to wrap elements or not and also optionally change the order of the elements. The default is not wrap the items and display them side by side.
1. Another property you can control is how you want the content to vertically align. There's a lot of options here and you can chose that the elements appear towards the beginning, the end, centered, stretch to fit the layout or align to the baseline. There are other options and we'll take a look at some of them later, but let's get some practical experience under our belts here.

```_style.css
	@import "header";
```

```_header.css
.header {
  color: var(--color-main);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  height: 100vh;

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
  }
}
```

## Conclusion
The basic thing to remember when working with flexbox is what happens when we turn it on and how to control the internal elements to lay out different items.