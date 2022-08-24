# Flickr Search App

<p>Flickr Search App built with Angular 13.</p>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.


## Table of content

- [Requirements](#Requirements)
- [Getting Started](#Getting-Started)
- [Dependencies](#Dependencies)
- [Installation](#Installation)
- [Setup Environment](#Setup-Environment)
- [Built With](#Built-With)


## Requirements

```
- Node v14.18.0 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version.

- npm 6.14.15 (LTS) or more recent, Yarn can work but was not tested for this project.
```


## Getting Started

1. Clone this repo locally into the location of your choice.
2. Open a terminal and navigate to the root of the repo
3. follow the instructions in the installation step


### Dependencies
- Bootstrap 5: 
 `Used for CSS grid and utilities.`

- ngx-infinite-scroll:
`Used for loading content continuously as the user scrolls down the page.`


### Installation
- From the root of the repo, to install the node_modules run the following: 
- `npm run install`


### Setup Environment
Bellow are the environment variables that needs to be set in a `enviroment.ts` and `enviroment.prod.ts` files. This is the default setting that I used for development, but you can change it to what works for you.

Go to `enviroments` folder, then edit the files with all the required environment variables:


```bash
flickr: {
  url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&',
  apiKey: <Your Flickr API Key>,
}
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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


## Built With

- [Angular](https://angular.io/) - Single Page Application Framework.