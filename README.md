# BookDucks App
A web app for a community library to borrow and exchange books and audiobooks.
The project was focused on using headless CMS (Backend-only CMS that acts primarily as a content repository; the content is accessible by API endpoints.)

# Technologies and Tools
* Headless CMS (Strapi)
* Node.js
* JavaScript
* HTML
* CSS/SASS
* Webpack
* Axios
* REST API
* HTTP request methods
* Authentication/JWT
* URL Routing/Query Strings
* Kanban/Trello
* Git/Github
* Figma

# Skills Learned
* How to interact with a CMS (Content Management System) by customizing the frontend code.
* Structure data by creating collection types and single types as well as establishing relations.
* Manage users, roles & permissions.
* Deepen knowlegde of using HTTP requests.

# App Functionality
* Create new user from UI
* Log in user from UI
* Create new book/audiobook from UI
* See list of books and audiobooks
* Each book card shows:
  * Name of user that uploaded the book
  * Cover image
  * Book title
  * Author
  * Pages (for book)
  * Duration (for audiobook)
  * Rating
  * Genres
* Navigation bar that shows if user is logged in
* Profile page with user info

# Start App
**Backend** `npm run develop`<br/>
**Frontend** `npm run build`

# File Structure
**frontend/src/js**

* **Index**: App starts here.
* **Authentication**: Functions to creates account, log in and profile
* **Content Creation**: Add books and audiobooks
* **Printing**: Rendering book card, navigation buttons, and form for adding books
* **Utils**: Fetching data, manage routing

# UI Mockup Design
[BookDucks Library App - CMS Strapi – Figma](https://www.figma.com/file/Ja9qdEBfDT707qdW5mAWHc/Library-App---CMS-Strapi?node-id=0%3A1)

# App Preview
<img width="543" alt="Screenshot 2022-04-20 at 23 38 01" src="https://user-images.githubusercontent.com/32361363/164327208-29dcbfc9-9d50-43bb-a2f2-132e61c7bc9d.png">
<img width="542" alt="Screenshot 2022-04-20 at 23 37 50" src="https://user-images.githubusercontent.com/32361363/164327216-8b4eb1a4-d4c7-4d29-a891-629b69663766.png">
<img width="544" alt="Screenshot 2022-04-20 at 23 37 41" src="https://user-images.githubusercontent.com/32361363/164327218-20c5d686-153e-40b9-a445-89b7e35d2f20.png">
<img width="542" alt="Screenshot 2022-04-20 at 23 37 23" src="https://user-images.githubusercontent.com/32361363/164327219-5fc1926f-986a-48f6-b829-f31606546851.png">
