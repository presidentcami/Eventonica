<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Camille's Eventonica</h3>

  <p align="center">
    This is a project built for one user to manage events in a database. 
    <br />
    <a href="https://github.com/presidentcami/eventonica"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- Need to add pictures for demo -->
    <a href="https://github.com/github_username/repo_name">View Demo</a> 
    ·
    <a href="https://github.com/presidentcami/eventonica/issues">Report Bug</a>
    ·
    <a href="https://github.com/presidentcami/eventonica/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- React
JavaScript / Node.js
Express
SQL
Postgres
Jest
React Testing Library
 -->

### Built With

* [![JavaScript][JavaScript.js]][JavaScript-url]
* [![Postgres][PostgreSQL.org]][PostgreSQL-url]
* [![Express][Express.js]][Express-url]
* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
<!-- instructions for how to use my project and more information about it

 -->
This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

<!-- COMBINE THESE SECTIONS and just take it to one link with installing js and react etc
 -->
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

<!-- add a badge to take ppl to these instructions to a HTML page or another README for setting up the code 
better practice is to have one readme for one project -->
<!-- 
#### Quick Setup 
#### Once you have successfully setup this template and initial database, the view will look like this:

![Initial View of the project](https://raw.githubusercontent.com/Yosolita1978/screenshoots/50a5573f21c1265d20d838a36b98588f9b4eefce/2023/H1/Screen%20Shot%202023-03-09%20at%208.03.32%20PM.png)
### Your First Express and React App with a DB connection

1. Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/2023EventonicaTemplate.git <NAMENEWDIRECTORY>`
![You will see something like this in your terminal.]

> <img width="768" alt="Screen Shot 2023-03-10 at 11 10 34 AM" src="https://user-images.githubusercontent.com/102179075/224608432-5e3d18bd-7cf5-4576-8b3f-2e903106abe1.png">

2. To clean your folder from the owner's git, run the command `rm -rf .git` inside the folder <NAMENEWDIRECTORY>. Then re-initialize as the owner with `git init`.

3. Go to the server folder in the project (`cd server`) and run the command `npm install`

4. Go to the client folder (`cd .. and cd client`) and run the command `npm install`

5. This template has two servers already working. Both servers should start simultaneously, or "concurrently", by running `npm run dev` from within the server directory in your terminal. Please note that your backend server will run from port 8080, and your frontend React server will run from port 3000 .

6. To add a Postgres DB - you will need another terminal window for this part

6.1 Inside your server directory create a `.env` file and copy there the values that are in `.envexample`

* In a different terminal window go to the psql terminal with the comand `psql`
* Inside the psql prompt create your database eventonica with the command `create database eventonica;` (don't forget the semicolon!)

![You will see something like this](https://raw.githubusercontent.com/Yosolita1978/screenshoots/b6b7e47b8ccda4b9f709d20e94cacb6506d4dc13/2023/H1/Screen%20Shot%202023-03-13%20at%2011.13.13%20AM.png)

Back in the terminal window with the project go inside the server directory and run the command `psql -d eventonica -f db.sql` that will create a table `events` with 5 rows inside your db eventonica. 
![This will be the result of that command](https://raw.githubusercontent.com/Yosolita1978/screenshoots/b6b7e47b8ccda4b9f709d20e94cacb6506d4dc13/2023/H1/Screen%20Shot%202023-03-13%20at%2011.12.29%20AM.png)

Your DB should look like this inside the psql terminal
![Your DB should look like this](https://raw.githubusercontent.com/Yosolita1978/screenshoots/696689a627eb5ca206b5a2eaebec7cc1efa15ffc/2023/H1/Screen%20Shot%202023-03-09%20at%208.25.54%20PM.png)

# Links that you will need

* The instructions for [pg](https://node-postgres.com/apis/pool)  
* Setup [postgres correctly](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md).
   ``` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
<!-- add, edit, favorite and delete events with screenshots -->

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

Add an Event



https://user-images.githubusercontent.com/103149318/226381976-fb5d4793-097b-40a4-ba3b-2a2886fdbb74.mp4


Delete an Event



https://user-images.githubusercontent.com/103149318/226381737-45690c64-c037-45d8-8124-e2e722c7ca79.mp4


Edit an Event



https://user-images.githubusercontent.com/103149318/226382183-27b5c55f-9647-4c53-9011-4092d3bc0bb0.mp4


Favorite an Event



https://user-images.githubusercontent.com/103149318/226382315-59b8f2ff-6082-4536-a8fe-124243642c68.mp4



_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
<!-- things that i want to add to my README -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Camille Williams - [@presidentcami](https://twitter.com/presidentcami)

LinkedIn - [Find Me On LinkedIn!][linkedin-url]

Other projects: [Techtonica Assignments Repo](https://github.com/presidentcami/techtonica-assignments)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

[![FontAwesome][FontAwesome.com]][FontAwesome-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- * [![JavaScript][JavaScript.js]][JavaScript-url]
* [![React][React.js]][React-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Postgres][PostgreSQL.org]][PostgreSQL-url]
* [![FontAwesome][FontAwesome.com]][FontAwesome-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
 -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/camille-williams-phl
[product-screenshot]: images/screenshot.png
<!-- [Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/ -->
[JavaScript.js]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://www.javascript.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/node-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[PostgreSQL.org]: https://img.shields.io/badge/postgreSQL-4169E1?style=for-the-badge&logo=postgreSQL&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Fontawesome.com]: https://img.shields.io/badge/fontawesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white
[Fontawesome-url]: https://fontawesome.com
<!-- [Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com -->
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
<!-- [JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com  -->





