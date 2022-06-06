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
- [x] Move the data to a database named react_gallery and include database.sql file
  - [x] Create database in Postico
  - [x] Create pool.js file
  - [x] insert 6 original images into database
  - [x] Create database.sql file
  - [x] Update GET route - had to npm install pg (oofda forgot about this)
  - [x] Update PUT route
- [x] Add the ability to POST a new gallery item (start from client to db)
  - [x] create new component with front end inputs/button. Add component to App.jsx. 
  - [x] collect input info into an object and set up hook/click handler for add button
  - [x] set up axios PUT call in component
  - [x] set up PUT route
  - [x] test and add SQL queries
  /// BONUS
  - [ ] clear inputs
  - [ ] make input field bigger
- [x] Add the ability to delete a gallery item
  - [x] add delete button to Gallery Item
  - [x] add click handler to delete button with Axios route
  - [x] test SQL delete query in Postico and add to database.sql
  - [x] add delete route
- [ ] Add styling with Material-UI