# Overview

This is a skeleton program to be used by developers as a test.


# Requirements

- Node 14
- NPM

# Installation

```
npm i
```

# Running

```
node index.js
```


# Instructions

Use this skeleton program to scrape the Facebook Github Page (https://github.com/facebook) for structured data. I have gone ahead and setup RequestJS properly, so the page is already being pulled into the code. 

Your job is to 'Extract' the relevant information from the page: 

- Name of Company
- Website URL
- Location of Company
- List of Repos


Please format your results into an object that looks like this: 

```
{
  name: 'Facebook',
  url: 'https://opensource.fb.com',
  location: 'Menlo Park, California'
  repos: [
    { name: 'openr' },
    { name: 'rocksdb' },
    { name: 'openbmc-uboot' },
    ....
  ]

}
```

# Hints

1. I have included Cheerio JS (https://cheerio.js.org/). This is an easy way to use CSS selectors (Kinda like jQuery) in order to extract data. You can use whatever method you are comfortable with. (Ex: Regex, Query Selectors, etc.) You don't need to use the Cheerio JS if you are not comfortable with it. 
