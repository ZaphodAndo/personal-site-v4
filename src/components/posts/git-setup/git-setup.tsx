import { Component, h } from '@stencil/core';

@Component({
  tag: 'git-setup',
  styleUrl: '../posts.css',
  shadow: true
})
export class GitSetup {
  render() {
    return (
      <div class='blog-post'>
        <div class='meta-info'>
          <h1>Setting Up Git!</h1>
          <p class='description'>How to set up Git on Windows 💻</p>
          <p class='date'>7th August 2019</p>          
        </div>

        <div class='content'>
          <h2>Useful Links 🙌</h2>
          <ul>
            <li><a target='_blank' rel='noopener noreferrer' href='https://git-scm.com/downloads'>Download Git</a></li>
            <li><a target='_blank' rel='noopener noreferrer' href='https://git-scm.com/doc'>Git Documentation</a></li>
          </ul>
          <h2>Download Git</h2>
          <p>
            Fist navigate to the download section of the official Git site <a target='_blank' rel='noopener noreferrer' href='https://git-scm.com/downloads'>here</a>.<br />
            Then select the download for your operating system of choice. As I am using windows that is the option that I will be selecting.
          </p>
          <h2>Install</h2>
          <p>
            Now that the Git installer has been downloaded, run the installer on your machine.<br />
            Follow the setup until you reach the option to select which editor you want to use. For this option its up to you, I personaly prefer nano but you can use what you want.<br />
            For the rest of the options you can just leave them on the defaults as that should be fine for most people and then press install.
          </p>
          <h2>Your Done! 😎</h2>
          <p>
            Now open your terminal of choice and run the command <code>git --version</code> to check if git is installed correctly.<br />
            Now you can start using Git!<br />
            Its also worth noting that by installing Git you will now also have access to git-bash on your computer if you are on windows, allowing the user to have a terminal that is more inline with what you might find on Linux and MacOS.
          </p>
        </div>
      </div>
    );
  }
}
