# Javascript Introduction
1. How to connect script with html.
2. What is client side JS and Server Side JS.
3. How and where to use script tag in js

![Execution of scripts](./script-execution.png)

## How and where to use script tag in js?

### Using inside the head tag

**Needed when JS has to be loaded before the page**

```html
<head>
  <script src="app.js"></script>
</head>

```
1. browser starts parsing the html
2. hits the script tag
3. stops parsing 
4. Completes download, execute the script
5. Resumes parsing

**Pros**
- Script runs early

**Cons**
- Dom is not ready yet.
- block rendering.
- Slow page loading


### Using script tag at the bottom of the body

```html
<body>
  ...
  <script src="app.js"></script>
</body>
```

- HTML is fully parsed and DOM is built.
- Script is downloaded .
- Script is then executed.

**Pros**
DOM is completely built.
No render blocking
Simple and predictable

**Cons**
Script start downloading late.


### Using script tag with async

- Script downloads in parallel
- Executes as soon as the download is complete.
- Parsing stops at execution.

**Pros**
Fast 
Non blocking download


**Cons**
Can execute without a dom ready.
Scripts may run out of order


## Using defer with script tag

- HTML parsing begins
- Hits script and start downloading the script.
- Download continues along with the rest of html parsing
- If download is completed before html parse and dom load then the script won't execute until its done.

**Pros** 
- Dom is loaded completely
- No render blocking
- predictable order

**Cons**
- slight delay before code execution
