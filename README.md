- [Badges] [ Todo ]

## Intro
GitPaid is an application designed to make tracking the details of your job hunt easier. [ Expand ]

- Video Demo/Micro Gif Demos/Screen Shots [ Todo ]

<hr />

## Table of content

- [Installation](#installation)
  - [Document the installation process](#)
-[Contributing](#contributing)
  - [Doucment how someone can contribute to the project](#)
  - [Document the tech stack we are using](#)
  - [Provide code samples where necessary](#)
  - [Why we are using the stack we are?](#)
  - [ERD Diagram](#)
    - [Lucid chart has an import option.](#)
- [Future plans](#future-pans)
- [FAQ](#faq)
  - [How to add a new Github Issue?](#)
  - [How do I request a feature?](#)
- [License](#license)
  - [MIT](#)

<hr />

### Installation

- Fork and clone this repository.
- Run `npm install` to install the dependencies.
- Run the following commands in your console to setup the database.
```bash
createdb gitpaid_dev
createdb gitpaid_test
npm run knex migrate:latest
npm run knex seed:run
```

<hr />

### Contributing
We are happy and welcome those who wish to contribute to GitPaid.

Head over to our [Issues page](https://github.com/andotherthings/git-paid/issues) and take a look through our open issues.
Feel free to join the discussion and provide your input. If you would like to takle one of the issues just leave a comment Where we can use help^ Pull requests are very much welcome for the following.

##### Bugs 🐞

If you have come across a bug while using the app please file a bug report over on our [Issues page](https://github.com/andotherthings/git-paid/issues).
Try to provide as much information as possible about what you were doing when the bug occured and Be sure to add the "bug" label to your report.

If you are looking to make code contributions, fixing [bugs filed in Issues](https://github.com/andotherthings/git-paid/issues?q=is%3Aopen+is%3Aissue+label%3Abug) is a good place to start.

##### Adding tests

[ Todo ]

##### Writing documentation

Let's face it, documentation is never as good as it could be or alwys up-to-date.
If you find something lacking or out-of-date in our documentation feel free to chime in.
You can either [create an Issue](#) with the "documentation" label, or [make a pull request](#making-a-pull-request) with the changes.

#### Making a Pull Request

In order to make a pull request you will first need to [setup](#installation) GitPaid on your machine.  [ Expand ]

<hr />

### Future Plans

[ Todo ]

<hr />

### FAQ

##### How do I add a new Issue?
Head over to our [Issues page](https://github.com/andotherthings/git-paid/issues).   [ Expand ]

##### How do I make a feature request?
Head over to our [Issues page](https://github.com/andotherthings/git-paid/issues) and use the "feature request" label.   [ Expand ]

<hr />

### License

[MIT](https://opensource.org/licenses/MIT) [ Todo ]
