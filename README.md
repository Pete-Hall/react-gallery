# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

### Required
- [x] Use axios to retrieve (GET) data from to /gallery and store it in App.jsx.
- [x] create _taco component for template
- [x] create GalleryList component and map over the list of gallery data
- [ ] in GalleryItem...
  - [x] display the image
  - [x] swap the image with description on click
  - [x] display number of likes for each moment and include a like button
  - [x] on like button click, use axios to make a put call update the like count (this goes in the GalleryItem component)
  - [x] update gallery each time a like button is clicked

### Stretch
- [ ] add better css styling to image/description swap (same sizes!) - this is tough since images are being sized responsively. maybe flex boxes. maybe material UI. could make the p tag have div and make that bigger?
- [ ] Move the data to a database named react_gallery and include database.sql file
  - [x] Create database in Postico
  - [x] Create pool.js file
  - [x] insert 6 original images into database
  - [x] Create database.sql file
  - [ ] Update GET route
  - [ ] Update PUT route