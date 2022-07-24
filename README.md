<div id="top"></div>
<h1 align="center">
  <br>
  <a href="https://github.com/Aahaar007"><img src="./assets/logo.png" alt="Markdownify" width="200"></a>
  <br>
  Aahaar
  <br>
</h1>

<h4 align="center">Food for everyone</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#team">Team</a> •
  <a href="#license">License</a>
</p>

<!-- ![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif) -->

## Key Features

- **User Authorization**
  - Phone + email based user sign-up
  - OTP authorization for user sign-in
- **User profile**
  - Stats on user donations/reqests
  - Basic user details
- **My Orders tab**
  - Scrollable list of user's donations, requests
  - Supports filtering
- **Food Listings**
  - Scrollable list of active donations
- **Hotspot Listings**
  - Scrollable list of hotspots (places where needy people are concentrated)
  - Option to filter NGOs from regular hotspots
- **Donations & Recieves**
  - Transaction based donations and requests
  - Each donation can have multiple recieve requests for varaying amounts of food
  - QR code based transaction confirmation system for ease of use

<p align="right">(<a href="#top">back to top</a>)</p>

## How To Use

<h4>Prequisites</h4>

- The project was built with Node v16.10.0, follow these <a href="https://nodejs.dev/learn/how-to-install-nodejs">instructions</a> to install Node

- The project uses yarn as the package manager, follow these <a href="https://yarnpkg.com/getting-started/install">instructions</a> to install yarn

- To clone and run this application, you'll also need [Git](https://git-scm.com)

- Follow <a href="#firebase-setup"> firebase setup </a> to connect your project with the firebase.

<h4>Install instructions</h4>

Once the prequisites are met you can proceed with the following:

```bash
# Clone this repository
$ git clone https://github.com/Aahaar007/frontend.git

# Go into the repository
$ cd frontend
```
- Follow <a href="#env-specs">environment variable specifications</a> and add the environment variables to the .env file
> After adding the .env file follow the instructions below:

```bash
# Install dependencies
$ yarn install

# Run the app
$ yarn start
```

> Follow expo instructions to run the app on an emulator/phone

> **Note**
> The app does not work on the web. If you run the app on web it might have graphical glitches.

<h4 id="#firebase-setup">Firebase Setup</h4>

- Follow the link to <a href="https://cloud.google.com/firestore/docs/client/get-firebase">connect your project with firebase</a>
- Select Web APP patform
- Register you app with the desired nickname
- Follow the futher steps as shown by Firebase
- From the Firebase console refer the firebaseConfig object to match the .env variable values to the object keys enclosed in `<>` 
<h4 id="env-specs">Environment variable specifications</h4>

```
FIREBASE_API_KEY = <apiKey>
FIREBASE_AUTH_DOMAIN = <authDomain>
FIREBASE_PROJECT_ID = <projectId>
FIREBASE_STORAGE_BUCKET = <storageBucket>
FIREBASE_MESSAGING_SENDER_ID = <messagingSenderId>
FIREBASE_APP_ID = <appId>
FIREBASE_MEASUREMENT_ID = <measurementId>
BACKEND_URL = <backend url>
```
> Set the BACNEND_URL variable to your local/remote backend server for Aahaar

<p align="right">(<a href="#top">back to top</a>)</p>

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

<p align="right">(<a href="#top">back to top</a>)</p>

 ## Download

You can [download](https://drive.google.com/drive/folders/1vIJXaPm-e7-ocYOrxyDEp4It1ss2w3An?usp=sharing) the apk for android and install the app on your device.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ## Emailware

Markdownify is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this app or it has helped you in any way, I'd like you send me an email at <bullredeyes@gmail.com> about anything you'd want to say about this software. I'd really appreciate it! -->

<!-- ## Credits

This software uses the following open source packages:

- [Electron](http://electron.atom.io/)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)
- [showdown](http://showdownjs.github.io/showdown/)
- [CodeMirror](http://codemirror.net/)
- Emojis are taken from [here](https://github.com/arvida/emoji-cheat-sheet.com)
- [highlight.js](https://highlightjs.org/) -->

<!-- ## Related

[markdownify-web](https://github.com/amitmerchant1990/markdownify-web) - Web version of Markdownify -->

<!-- ## Support

<a href="https://www.buymeacoffee.com/5Zn8Xh3l9" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

<p>Or</p>

<a href="https://www.patreon.com/amitmerchant">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a> -->

<!-- ## You may also like...

- [Pomolectron](https://github.com/amitmerchant1990/pomolectron) - A pomodoro app
- [Correo](https://github.com/amitmerchant1990/correo) - A menubar/taskbar Gmail App for Windows and macOS -->

<h1 id="team"> Team ✨</h1>

|                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<img src="https://media-exp1.licdn.com/dms/image/C4D03AQEXgaTFPDF0wQ/profile-displayphoto-shrink_800_800/0/1658565966815?e=1663804800&v=beta&t=2By5H3oRSeHlYIXUsoPcGg6K-HNOsVVtWclp1M83sAo" alt="drawing" width="200"/>](https://linktr.ee/ayushman_)                         | [<img src="https://i.postimg.cc/cZ9YQrvw/avijit.jpg" alt="drawing" width="200"/>](https://www.linkedin.com/in/avijit-pandey/)                                                                                  | [<img src="https://media-exp1.licdn.com/dms/image/C4E03AQFaU4Ij6tKxMg/profile-displayphoto-shrink_800_800/0/1589619959724?e=1663804800&v=beta&t=V25ueD-2zYjs7LRul1bw16AgvAaebyj_KTZ6GD0BF18" alt="drawing" width="200"/>](https://16mhiray.wixsite.com/overallportfolio) |
| [Ayushman Singh](https://linktr.ee/ayushman_)                                                                                                                                                                                                                                  | [Avijit Pandey](https://www.linkedin.com/in/avijit-pandey/)                                                                                                                                                    | [Mohit Hiray](https://16mhiray.wixsite.com/overallportfolio)                                                                                                                                                                                                             |
| [<img src="https://avatars.githubusercontent.com/u/18416186?v=4" alt="drawing" width="200"/>](https://www.linkedin.com/in/k4droid3/)                                                                                                                                           | [<img src="https://avatars.githubusercontent.com/u/78607331?s=400&u=f5d327450b4d3abbe57d0d28047564464d90daf1&v=4" alt="drawing" width="200"/>](https://www.linkedin.com/in/drishtdyumn-shrivastava-645716199/) | [<img src="https://i.postimg.cc/xcGsvrzb/anshul.jpg" alt="drawing" width="200"/>](https://www.linkedin.com/in/anshul-sharma-8438a619a)                                                                                                                                   |
| [Kshitiz Singh](https://www.linkedin.com/in/k4droid3/)                                                                                                                                                                                                                         | [Drishtdyumn Shrivastava](https://www.linkedin.com/in/drishtdyumn-shrivastava-645716199/)                                                                                                                      | [Anshul Sharma](https://www.linkedin.com/in/anshul-sharma-8438a619a)                                                                                                                                                                                                     |
| [<img src="https://media-exp1.licdn.com/dms/image/C4D03AQH9Caa0RvahUw/profile-displayphoto-shrink_800_800/0/1621952338079?e=1663804800&v=beta&t=Igy-tU7cFO-xLjGtHAZlxDqUC3CXdP1aCzhTtlTLUAQ" alt="drawing" width="200"/>](https://www.linkedin.com/in/atharv-tiwari-871a73212) | [<img src="https://i.postimg.cc/D0XYvpcH/krishan.png" alt="drawing" width="200"/>](https://www.linkedin.com/in/krishan-mishra-833b35205/)                                                                      | [<img src="https://avatars.githubusercontent.com/u/63453782?v=4" alt="drawing" width="200"/>](https://www.linkedin.com/in/lohitaksh-kaushik/)                                                                                                                            |
| [Atharv Tiwari](https://www.linkedin.com/in/atharv-tiwari-871a73212)                                                                                                                                                                                                           | [Krishan Mishra](https://www.linkedin.com/in/krishan-mishra-833b35205/)                                                                                                                                        | [Lohitaksh K.](https://www.linkedin.com/in/lohitaksh-kaushik/)                                                                                                                                                                                                           |

<p align="right">(<a href="#top">back to top</a>)</p>

## License

MIT
