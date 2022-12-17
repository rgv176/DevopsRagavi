<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/rgv176/DevopsRagavi">
    <img src="istio/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Devops Project</h3>

  <p align="center">
    MAHENTHIRAN Ragavi GR05 (inter)
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
    <li><a href="#Docker-Hub">Docker Hub</a></li>
    <li><a href="#Bonus-tasks">Bonus Tasks</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Homepage][product-screenshot]](https://example.com)

This project is a simple CRUD application where you can register yourself, then see all the registrated users and choose to update or delete them.
It was developped in MERN.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

list of major frameworks/libraries used to bootstrap the project.

- [![React][react.js]][react-url]
- [![NodeJS][nodejs.com]][nodejs-url]
- [![Bootstrap][bootstrap.com]][bootstrap-url]
- [![MongoDB][mongodb.com]][mongodb-url]
- [![Semantic-ui][semantic.com]][semantic-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

You can first clone the project

### Prerequisites

Be sure to have node, docker minkube and kubectl installed

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rgv176/DevopsRagavi.git
   ```
   Now you have 2 solutions:
2. With docker:

   ```sh
    docker-compose up
   ```

   And go to http://localhost:3000

3. With kubernetes:

   Install minikube, kubectl and kubeadm following the steps in this link: https://kubernetes.io/docs/tasks/tools/

   And follow the following steps:

   ```sh
   minikube start
   ```

   ```sh
   cd istio/
   ```

   ```sh
   kubectl apply -f k8s
   ```

   Run:

   ```sh
   minikube service front-service
   ```

   Or run:

   ```sh
   https://<your minikube ip>:31515
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

With **Docker**, when we first run the project, we have the first page to register:

[![Create][product-screenshot2]](https://example.com)

Then we can see, all the registrated users:

[![Read][product-screenshot3]](https://example.com)

We can also update the first name or the last name:

[![Update1][product-screenshot5]](https://example.com)

[![Update2][product-screenshot6]](https://example.com)

And then we can delete:

[![Delete][product-screenshot7]](https://example.com)

With **Kubernetes**, i had some issue on ubuntu but it worked:

[![kub1][product-screenshot8]](https://example.com)

I added the istio inejection and i saw there is now two containers running:

[![kub2][product-screenshot9]](https://example.com)

[![kub3][product-screenshot10]](https://example.com)

Then we run the project with minikube **BE SURE TO HAVE A KUB KLUSTER**:

[![kub4][product-screenshot11]](https://example.com)

[![kub5][product-screenshot12]](https://example.com)

We can easily update the items but to delete, i had some issues on **UBUNTU**, i had to press button 5 times to delete:

[![kub6][product-screenshot13]](https://example.com)

[![kub7][product-screenshot14]](https://example.com)

Then, we monitored with Grafana, but as Grafana was running in the port 3000 and the React front-end was also running on the port 3000, Grafana couldn't analyze the front:

[![kub8][product-screenshot15]](https://example.com)

[![kub9][product-screenshot16]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- ✅ Add Front end
- ✅ Add back end
- ✅ Add Additional style (css, semantic-ui, bootstrap)
- ✅ Add CRUD API + test
- ✅ Add Vagrantfile and playbook for Ansible
- ✅ Add Github Actions
- ✅ Deploy with Docker (Dockerfile, Docker-compose)
- ✅ Deploy with kubernetes (install minikube, kubectl)
- ✅ Monitoring (Prometheus, Grafana)
- [ ] Deploy with Heroku or Render

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Docker-Hub

You can find the 3 images of the project in DockerHub:

- <p>(<a href="https://hub.docker.com/search?q=rgv176%2Fmongo">rgv176/mongo)</p>
- <p>(<a href="https://hub.docker.com/r/rgv176/devopsragavi-front">rgv176/devopsragavi-front)</p>
- <p>(<a href="https://hub.docker.com/r/rgv176/devopsragavi-back">rgv176/devopsragavi-back)</p>

## Bonus-tasks

- More API + unit tests: get, post, delete, put
- Database: MongoDB

## Contact

MAHENTHIRAN Ragavi - ragavimahenthiran@gmail.com

Project Link: [https://github.com/rgv176/DevopsRagavi](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [ECE](https://github.com/adaltas/ece-devops-2022-fall)
- [Img Shields](https://shields.io)
- [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: istio/images/devops1.png
[product-screenshot2]: istio/images/devops2.png
[product-screenshot3]: istio/images/devops3.png
[product-screenshot5]: istio/images/devops5.png
[product-screenshot6]: istio/images/devops6.png
[product-screenshot7]: istio/images/devops7.png
[product-screenshot8]: istio/images/devops8.png
[product-screenshot9]: istio/images/devops9.png
[product-screenshot10]: istio/images/devops10.png
[product-screenshot11]: istio/images/devops11.png
[product-screenshot12]: istio/images/devops12.png
[product-screenshot13]: istio/images/devops13.png
[product-screenshot14]: istio/images/devops14.png
[product-screenshot15]: istio/images/devops15.png
[product-screenshot16]: istio/images/devops16.png
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[mongodb.com]: https://img.shields.io/badge/MongoDB-%20-green
[mongodb-url]: https://www.mongodb.com/
[nodejs.com]: https://img.shields.io/badge/NodeJS-%20-brightgreen
[nodejs-url]: https://nodejs.org/en/
[semantic.com]: https://img.shields.io/badge/Semantic--ui-%20-blue
[semantic-url]: https://react.semantic-ui.com/
