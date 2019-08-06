---
title: CSS Quickies border-radius
slug: css-quickies-border-radius
createdAt: 28.07.2019
published: false
description: Learn how border-radius works and what fancy things it can do!
tags: #css #webdev #beginners
cover_image: ''
series: CSS Quickies
---

![cover image](https://thepracticaldev.s3.amazonaws.com/i/37qeq2ljviy6k0ft9y7x.png)

### What is CSS Quickes?

I started to ask my beloved community on Instagram: "what CSS properties are confusing for you?"

In "CSS Quickies" I will explain one CSS property in deep. These are community requested properties.  If you also confused about a CSS property, then write to me on [Instagram](https://www.instagram.com/lampewebdev/) or [Twitter](https://twitter.com/lampewebdev) or down below in the comments! 

### The basics
Let's talk about border-radius.

The short answer is: you can give HTML elements round corners, and you can only see this if the background has a different color then the HTML Element or if the HTML element has a  border color.

The most basic syntax is:
```css
.radius {
  border-radius: 10px;
}
```
{% codepen https://codepen.io/lampewebdev/pen/ydvpNN %}

It is time to understand what radius means. 
So you have to imagine a circle. Every circle has a radius. The Radius is the length from the middle to any border point of the circle.
![Alt text of image](https://www.mathematics-monster.com/images5/radius.jpg)

Now that you know what a radius is. Imagine that you cut out the corner along the edges of the circle of your HTML element! That's it! Just a Circle where someone cuts along with scissors. 

### Getting deeper
There are different ways how you can use it.
```css
.border{
    /* top-left-and-bottom-right | top-right-and-bottom-left */
    border-radius: 10px 10px;

    /* top-left | top-right-and-bottom-left | bottom-right */
    border-radius: 10px 10px 10px;

    /* top-left | top-right | bottom-right | bottom-left */
    border-radius: 10px 10px 10px 10px;
}
```
You see that we can set every corner what give is good flexability to create fancy websites.

### Supported values
You can use px, em and % values.

{% codepen https://codepen.io/lampewebdev/pen/dBddro %}

### Second radius

There is also an advanced use of `border-radius` where you can define a second radius. Think about it like you would have now two circles for every corner! And you can set them independent. 

```css
.radius{
    border-radius: 50px 50px 50px 50px / 50px 50px 50px 50px;
    /* you can read this like this: */
    border-radius: 
       top-left-up
       top-right-up
       bottom-right-down
       bottom
       left-down /
       top-left-left
       top-right-right
       bottom-right-right
       bottom-left-left
}
```
Here are some examples:
{% codepen https://codepen.io/lampewebdev/pen/JQpLLK %}

### Creating round elements

Border-radius is also used to create round elements.

That's it! There is not more to learn about `border-radius`.
This is straightforward; you have to have an element that has the same `width` and `height` and set `border-radius` to 50%.

{% codepen https://codepen.io/lampewebdev/pen/bPLvJO %}

### Finale thoughts

This is a new format I'm trying out.
How do you like it?
What did you miss?
Please comment down below!

### Resources
* [Border Radius Generator](https://9elements.github.io/fancy-border-radius/) 

* [CSS Border-Radius Can Do That? ](https://www.webdesignerdepot.com/2018/10/css-border-radius-can-do-that/)

* [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)

**Thanks for reading!**

**Say Hallo!** [Instagram](https://www.instagram.com/lampewebdev/) | [Twitter](https://twitter.com/lampewebdev) | [LinkedIn](https://www.linkedin.com/in/michael-lazarski-25725a87) | [Medium](https://medium.com/@lampewebdevelopment)