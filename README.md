# Inbux-server

<br>

# Quick Compo

<br>

## Description

My project is inspired by Starbucks Coffees. The goal is, based on my experience, to make a project that solves a problem and helps others.
My platform is gonna have twelve Starbucks Coffee with the maximum information about them. Also, in which coffee has a comment box where people who are logged in are able to leave a comment about the coffee or bring some extra information and read others users comments.The user also can filter what coffee he wants to search by name, roast or origin.
The platform also has a brewing guide page which provides 4 types of brewing methods showing how to make perfect coffee (aeropress, chemex, pour over coffee, v60).
I will try to work with google map API where the user can search for a location and the map will display all Starbucks in the searched location.
The user also gonna be able to add favorites coffee and add their own description and also create a new one.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anonymous user I can sign up on the platform so that I can start creating and managing tournaments.
- **Login:** As a user I can login to the platform so that I can access my profile and start creating and managing tournaments.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of coffees.
- **Coffee List Page**: As a user I can go to my coffee list page, see the details and add information (Able only in added coffees).
- **Add Coffes:** As a user I can add coffees to my list.
- **Coffee Comments:** As a user I can see comments in each coffee detail and be able to leave a comment.
- **Homepage:** - As a user I want to be able to access the homepage and filter by type coffee, see brewings and logout;
- **Location Page**: As a user I can go to FIND LOCATION page and search for a Starbucks Store.

## Backlog

- Add weather widget
- lottie interactions
- users can bet
- add geolocation to events when creating

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                         | Component          | Permissions                | Behavior                                          |
| ---------------------------- | ------------------ | -------------------------- | ------------------------------------------------- |
| `/login`                     | LoginPage          | anon only `<AnonRoute>`    | Login form, navigates to home page after login.   |
| `/signup`                    | SignupPage         | anon only `<AnonRoute>`    | Signup form, navigates to home page after signup. |
| `/`                          | HomePage           | public `<Route>`           | Home page.                                        |
| `/user-profile`              | ProfilePage        | user only `<PrivateRoute>` | User and player profile for the current user.     |
| `/user-profile/edit`         | EditProfilePage    | user only `<PrivateRoute>` | Edit user profile form.                           |
| `/coffees`                   | CoffeesListPage    | public `<Route>`           | Coffees list.                                     |
| `/coffees/:coffeeId`         | CoffeesDetailsPage | public `<Route>`           | Coffee details. Shows details.                    |
| `/brewing-guide`             | BrewingGuidePage   | public `<Route>`           | Show 4 differents methods of brewing coffee       |
| `/brewing-guide/:brewingId`  | BrewingDetail      | public `<Route>`           | Show brewing detail                               |
| `/myCoffeeList`              | UserCoffeeList     | user only `<PrivateRoute>` | Show coffees that user added to the list          |
| `/create-coffee`             | CreateCoffee       | user only `<PrivateRoute>` | User can create a new coffee for the list         |
| `/suggestion`                 | CreateSuggestion   | user only `<PrivateRoute>` | User can write suggestion                         |
| `/location`                 | FindStarbucks   | public `<Route>` | User can search for starbucks location                        |

## Components

Pages:

- LoginPage

- SignupPage

- HomePage

- ProfilePage

- EditProfilePage

- CoffeeListPage

- CoffeeDetailsPage

- LocationPage

- BrewingMethodsPage

- BrewingDetailsPage

- CreateCoffeePage

- SuggestionPage 

Components:

- Incomplet
- CoffeeList
- Comments
- CoffeeCard
- Navbar

## Services

- **Auth Service**

  - `authService` :
  - `.login(user)`
  - `.signup(user)`
  - `.logout()`
  - `.validate()`

- **User Service**

  - `userService` :
  - `.updateCurrentUser(id, userData)`
  - `.getCurrentUser()`

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [coffeeId], //corrigir
  imgUrl: String,
  store: String,
  notes: [{
      coffe: coffeId,
      description: String
  }],
  createdCoffees: [] //coffesIds
  type:{ type: String, enum: ["admin", "user"], default: "user" },
}
```

**Coffee model**

```javascript
 {
  coffeeImg: String,
  title: String,
  origin: String,
  description: String,
  roast: String,
  processing: String,
  body: String,
  acidity: String,
  blend: Boolean,
  comments: [] //object id ref coments
  coffeeType: { type: String, enum: ["Starbucks", "userCreation"], default: "userCreation" },

 }
```

**Comments model**

```javascript
{
  author: userId,
  content: String, 
  coffee: coffeeId,
}
```
//Sugestion other model

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                                                                                     
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- 
| GET         | `/auth/profile `       | Saved session                | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`         | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`         |                              | 204            | 400          | Logs out the user                                                                                                               
| GET         | `/coffees`             |                              |                | 400          | Show all coffees                                                                                                           
| GET         | `/brewing-guides`      |                              |                | 400          | Show all 4 brewing guides
| GET         | `/brewing-guides/brewingId`|                          |                | 400          | Show specific brewing method guides                                                                                                                
| GET         | `/coffees/:id`         |                              |                |              | Show specific coffee                                                                                                        
| POST        | `/coffees/:id/comments`|                              | 201            | 400          | Create and save a new coffee                                                                                                |
| POST        | `/coffees/coffeeList`  |                              | 201            | 400          | Add new coffee to the user list coffee                                                                                                |
| PUT         | `/privete/edit-profile`|                              | 200            | 400          | edit coffee                                                                                                                 
| DELETE      | `/coffee/coffee-list/coffeeId`  |                     | 201            | 400          | delete coffee  
| CREATE      | `/user/create-coffee`  |                              |                |              | Create your own coffee with ur details
| POST        | `/user/suggestion`     |                              |                |              | Create suggestion                                             

<br>

## API's

google maps api

## Packages

<br>

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/CTpxKWFG/last-project) 

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your _public_ presentation slides

### Contributors

Marcelo Milhomem - [`<marcelomilhomem>`](https://github.com/marcelomilhomem) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/marcelo-milhomem-79696422b/)

