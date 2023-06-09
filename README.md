# Frontend GitHub CLONE

## Project Description
This project aims to create a user-friendly interface for displaying GitHub repositories and implementing a search functionality to filter repositories by name. By utilizing the official GitHub API, the application fetches repositories per user and presents them in a well-designed, responsive interface.

GitHub repositories, though simple in concept, are an essential component for managing and showcasing code projects. This project adds value by offering a streamlined and intuitive user experience, taking inspiration from popular apps and the GitHub interface itself. The design principles of good user experience are followed to ensure a pleasant and efficient browsing experience for users.

This is a MERN Web-first progect.

## Deployment

Welcome to web of the project [GitHub-clone-repos](https://main--frolicking-melomakarona-d95adc.netlify.app/)

## Key features of the application:

- Show reposotories by User: get all repositories from data base and display them,

![All-repos](./src/assets/show_all.png)

- Find by name: in a search bar you can search repository that you want (the result will be get after put 3 simbols in a search bar),

![Search-bar](./src/assets/search.png)

- Filtering by type: All, public, private,

![Visibility-bar](./src/assets/nomatch.png)

- Filtering by Language: All, JavaScript, TypeScript, PHP,

![Languaje](./src/assets/lang.png)

- Sorting by Name (A-Z) or Last updated (for default the orden is A-Z),

![Sort](./src/assets/updated.png)

- Intuitive User Interface: The application offers a user-friendly and easy-to-use interface for an enjoyable user experience,

- Responsive: From window-width<700 the desing change for mobile version

## Technologies Used

The project is built using the following technologies:

- TypeScript,
- React: A JavaScript library for building user interfaces,
- GitHub API: The official API provided by GitHub to access repository data,
---> !It is possoble to change **GitHub API** to data from own backend and MongoDB,
- SASS: The styling CSS extension used to customize the visual presentation,
- Jest for testing,

+ antd: A library for building comonents,
+ moment: A library for working with Date,
+ HelmetSEO: to make better SEO of web


## System Requirements
To run the application in your local environment, make sure you have the following installed:

**NPM** (Node Package Manager) or Yarn

## Environment Setup
Follow the steps below to set up the development environment:

1. Clone the project repository from GitHub: git clone **https://github.com/IuliiaNova/github-clone-react.git**
2. Navigate to the project's root directory: cd <DIRECTORY_NAME>
3. Install the project dependencies using NPM or Yarn: ``npm install or yarn install``
4. Running the Application ``npm run dev`` or config it in your package.json

The development server will start, and the application will be available in your browser at http://localhost:5173 (or other, check it in your terminal)

## Test with Jest

To run test ``npx jest``

You can see tests in the folder ``./src/__test__``. There I'm testing my APIs

- Test FAILED

![Failed](./src/assets/jest/jest.png)

- Test PASSED

![Passed](./src/assets/jest/jest_ok.png)

## Data

**Important!** There are two ways to get data for web: 

1. from GitHub API:
   - in his case you need to create a token in GitHub and save it in **.env**. It is also possible to use API without token, but remebrer that you will have limits of use. Find more about this on official site ![GitHubAPI](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

2. from own backend and MongoDB:
   - First of all you need enter to ``src/reducer/repos/repo.actions.ts`` and comment action with API and delete comment of own API
   ![Action](./src/assets/action.png)
   - Then make the same here ``src/reducer/user/user.action.ts`` and comment action with API and delete comment of own API

## Project Structure
The project follows a standard folder and file structure for a React application. Below is a description of the most important directories:

**figma**: Additional folder to store used Figma model and diagramm,

**src**: Contains the main source code of the application.
- **api**: functions to work with APIs,
- **context** + **reducer**: to get sapareted logic of app and manage states,
- **components**: Contains reusable components used in different parts of the application,
- **pages**: Contains the main pages of the application,
- **router**: Create pagination


## Visualization 

- Thr web is responsive and have two views: desktop and mobile (>700px)
- **Basic layout** that includes 'sidebar' and 'header'. 
- **Pages**: 
    1. **Overviw**: User profile information
    2. **Repositories**: Display all user repositories and make sort with filter of them
    3. **Stars**: Display all repositories with stars by User

**Desktop**

![Desktop](./src/assets/repoP.png)

**Mobile**

![Mobile](./src/assets/mob_github.png)

## Future improvement

- Stars page 
- Implement more **actions** with repositorio: create, update, delete (consult **https://github.com/IuliiaNova/github-clone-node.git** for more information)
- Option to **change user** and get new data dynamically 

## Similar projects

I also ofer you to visit my [GitHub](https://github.com/IuliiaNova) and see my other projects,
for example MERN Fullstack [Gif Strom](https://github.com/IuliiaNova/gif-storm-node.git) where you can find, share and upload gifs.

### Contact
If you have any questions or inquiries related to the project, feel free to contact us via the following email address: **yshihanova@gmail.com**

## Author ✨
<table>
  <td align="center">
    <a href="https://github.com/IuliiaNova">
      <img src="https://avatars.githubusercontent.com/u/115942758" width="100px" alt="Iuliia Shikhanova"/>
      <br />
      <sub>
      <b>Iuliia Shikhanova</b>
      </sub>
    </a>
    <br />
    <a href="#code-luliianova" title="code-tools-maintenance-design">💻🔧🚧🎨</a>
  </td>
  </tr>
  </table>

