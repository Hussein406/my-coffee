# Angular Assignment
​
To apply your knowledge of Angular, please attempt the following assignment. 
​
This assignment contains a base assignment, but also contains a number of different additional challenges. Please complete the base assignment before attempting any of the additional challenges.
​
### Create a Public Github or IBM Github repository
- Push code your code to this repository 
​
## Base Assignment
​
Using the Angular CLI (leveraging the latest Angular version), generate a new project, install all dependencies and ensure it runs correctly.
​
The base requirements for the application can be found below, these baseline requirements should be followed for each of the pages implemented, and should be followed for any of the challenges as well. If you have questions or concerns about this assignment, please reach out to whomever assigned you this. To prove you have also completely read these directions, please add your name in a footer tag at the bottom of the application. If you run into technical issues please reach out to one of the contributors of this repository.
​
- Data should be managed via the NgRx Store
- HTTP requests should be dispatched via NgRx Effects
- While you are encouraged to implement unit tests, please do so as you feel necessary. There are _NO_ code coverage requirements. 
- Please spend some time on styling, it does not need to be perfect, but should look presentable
- The layout should be responsive and have mobile and desktop breakpoints
- You are able to leverage any UI Framework you prefer, if so please.
​
Using your knowledge, add the following page
​
### Create a Product List Page
 - Retrieve a list of 50 coffees items from https://random-data-api.com/api/coffee/random_coffee endpoint
 - You can find API documentation here: hhttps://random-data-api.com
 - Implement pagination, with a limit of 10 items per page
​
### Bonus Challenges
- leverage NgRx Selectors for retrieving data from the Store
- Leverage OnPush ChangeDetection for each of your components
- Add a product details page
​
​
​
**Once you have completed the assignment, provide your public Github repository to your hiring manager.**

# MyCoffee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.