##[DEMO](http://juliaebert.com/jekyll-polymer)

A Jekyll theme built with Google's Polymer library and following the material design specifications.

There are a few custom web components included designed to match Material design.

## Features

- Full-text searching with [simple-jekyll-search](https://github.com/christian-fei/Simple-Jekyll-Search)
- Paginated home page
- Support for images in posts' YAML frontmatter (appears on cards in previews)
- Threaded comments with Disqus
- Google Analytics integration

## Installation instructions

(Instructions are based off of those for the [Polymer Starter Kit](https://github.com/PolymerElements/polymer-starter-kit).)

- Clone this repository or download it as a .zip file and unzip.
- Install jekyll (and any other Ruby gems) with `bundle install`. (Prerequisite: must have Ruby installed. You may also have to install bundler with `gem install bundler`.)
- From the project root folder, run `npm install -g gulp bower && npm install && bower install`. (See the [Polymer Starter Kit installation instructions](https://github.com/PolymerElements/polymer-starter-kit#install-dependencies) for more details or troubleshooting.)

## Deployment

### Serve/watch

`gulp serve`: Starts a jekyll serve process on the default port (4000 or whatever is specified in `_config.yml`).

`gulp serve --port 6666`: Start serving on port `6666`

`gulp serve:dist`: Build as below, and serve the result from the `dist/` directory. (Useful for testing changes to the gulpfile.)

### Build and vulcanize

`gulp`: Builds the files with jekyll, vulcanizes, minimizes, and puts the result in the `dist/` directory. (This can be slow.)

## Deploy

`gulp deploy-gh-pages`: Deploy the current build to the gh-pages branch of your repository.

`gulp build-deploy-gh-pages`: Rebuild and then deploy. (Equivalent to `gulp && gulp deploy-gh-pages`)

## Future Improvements:

- Search
    - Ripple effect in search results on click (needs set height)
    - Escape toggles search show
    - arrow keys/tab moves focus on search results
    - better animation for search bar leaving/entering
- Navigation drawer
    - Change hover effect on drawer items (see Google Music)
    - Make selected/active items in drawer colored
- Page transition animations
- Give option of setting card-colorbar color
- Add ripple effect to nav drawer menu items
- Pagination:
    - Maybe replace with actual buttons
    - hover effects like buttons?
    - Handle if it gets too wide for screen? (limit number of page links)
- Tags
    - Show tags with posts
    - Allow filtering by tag
- Add material box or lightbox for images
- Add 'source' option for YAML frontmatter
- increase spacing between list items
- Fix things like header-panel to utilize updates to polymer paper elements

### Known issues

- JS and HTML aren't minimized
- Title on toolbar appears over search bar (not yes sure why or how to fix it)
- Too much space on cards between end of excerpt and read more button