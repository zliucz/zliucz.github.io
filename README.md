## Features

- Simple and elegant personal homepage theme
- Jekyll theme, automatically deployed by GitHub Pages
- Basic search engine optimization
- Mobile friendly
- Supporting Markdown 
- Supporting dark mode

## Project Architecture

```
.
├── _data                    
|   └── publications.yml                      # the YAML file for publications
├── _includes                    
|   ├── publications.md                       # the Markdown file for publications
|   └── services.md                           # the Markdown file for services
├── _layouts                  
|   └── homepage.html                         #  the html template for the homepage 
├── _sass
|   ├── minimal-light.scss                    #  this file will be compiled into a CSS file to control the style of the page              
|   └── minimal-light-no-dark-mode.scss       #  this file is similar to minimal-light.scss with the dark mode disabled
├── assets                                    #  some files
├── html_source_file                          #  compiled HTML files
├── .gitignore                                #  this file specifies intentionally untracked files that Git should ignore
├── CNAME                                     #  the custom domain, will be used by GitHub page sevice
├── Gemfile                                   #  a RubyGems related file
├── LICENSE                                   #  the license file
├── README.md                                 #  the readme file (English)
├── README_de.md                              #  the readme file (German)
├── README_zh_Hans.md                         #  the readme file (Simplified Chinese)
├── README_zh_Hant.md                         #  the readme file (Traditional Chinese)
├── _config.yml                               #  the Jekyll configuration file, including some options of the page  
└── index.md                                  #  the content of the index page, using Markdown

## Customizing

### Configuration variables

The Minimal Light theme will respect the following variables, if set in your site's `_config.yml`:

  ```yaml
# Basic Information 
title: Your Name
position: Ph.D. Student
affiliation: Your Affiliation
email: yourname (at) example.edu

# Search Engine Optimization (SEO)
# The following information is used to improve the website traffic from search engines, e.g., Google.
keywords: minimal light
description: The Minimal Light is a simple and elegant jekyll theme for academic personal homepage.
canonical: https://minimal-light-theme.yliu.me/

# Links 
# If you don't need one of them, you may delete the corresponding line.
google_scholar: https://scholar.google.com/
cv_link: assets/files/curriculum_vitae.pdf
github_link: https://github.com/
linkedin: https://www.linkedin.com/
twitter: https://twitter.com/

# Images (e.g., your profile picture and your website's favicon) 
# "favicon" and "favicon_dark" are used for the light and dark modes, respectively. 
avatar: ./assets/img/avatar.png
favicon: ./assets/img/favicon.png
favicon_dark: ./assets/img/favicon-dark.png

# Footnote
# You may use the option to disable the footnote, "Powered by Jekyll and Minimal Light theme."
enable_footnote: true

# Auto Dark Mode
# You may use the option to disable the automatic dark theme
auto_dark_mode: true

# Font
# You can use this option to choose between Serif or Sans Serif fonts.
font: "Serif" # or "Sans Serif"

# Google Analytics ID
# Please remove this if you don't use Google Analytics
google_analytics: UA-111540567-4
  ```
### Edit `index.md`

Create `index.md` and add your personal information. It supports **Markdown** and **HTML** syntax.

### Edit included files

There are two markdown files included in `index.md`. They are `_includes/publications.md` and `_includes/service.md`, respectively. These two files also support **Markdown** and **HTML** syntax. If you don't hope to include these two files, you may remove the following lines in `index.md`:
https://github.com/yaoyao-liu/minimal-light/blob/b38070cd0b6bce45d8a885f3828549af8f82b7cb/index.md?plain=1#L21-L23

If you hope to edit the publication list without changing the format, you may edit `_data/publications.yml`:
https://github.com/yaoyao-liu/minimal-light/blob/77b1b3b31d4561091bcd739f37a2e1880e8b5ca5/_data/publications.yml#L3-L11


### Stylesheet

If you'd like to add your own custom styles, you may edit `_sass/minimal-light.scss`.

### Layouts

If you'd like to change the theme's HTML layout, you may edit `_layout/homepage.html`.

## License

This work is licensed under a [Creative Commons Zero v1.0 Universal](https://github.com/yaoyao-liu/minimal-light/blob/master/LICENSE) License.

## Acknowledgements

Our project uses the source code from the following repositories:

* [pages-themes/minimal](https://github.com/pages-themes/minimal)

* [orderedlist/minimal](https://github.com/orderedlist/minimal)

* [al-folio](https://github.com/alshedivat/al-folio)
