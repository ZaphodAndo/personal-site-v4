import { Component, h, Element } from '@stencil/core';


@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  shadow: true
})
export class NavBar {
  @Element() buttonElement: HTMLElement;

  componentDidRender() {
    const themeButton = this.buttonElement.shadowRoot.getElementById('theme-button');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme !== 'light') {
      document.body.setAttribute('data-theme', 'dark');
      themeButton.innerText = '🌞';
    } else {
      document.body.setAttribute('data-theme', 'light');
      themeButton.innerText = '🌙';
    }

    function toggleTheme() {
      const meme = document.body.getAttribute('data-theme');

      if (meme === 'light') {
        document.body.setAttribute('data-theme', 'dark');
        themeButton.innerText = '🌞';
        localStorage.setItem('theme', 'dark');

      } else {
        document.body.setAttribute('data-theme', 'light');
        themeButton.innerText = '🌙';
        localStorage.setItem('theme', 'light');
      }
    }

    themeButton.onclick = toggleTheme;
  }

  render() {
    return (
      <div class='header'>
        <div class='profile'>
          <stencil-route-link url='/'>
            <img src='../../assets/profile-image/profile-pic.png' alt='profile image'></img>
          </stencil-route-link>
          <div class='profile-text'>
            <h1>Hi, i'm Ethan</h1>
            <p>Destroyer of Builds, Remover of Strings, Creator of lint errors.</p>
          </div>
        </div>

        <div class='links'>
          <stencil-route-link url='/blog'>
            <a class='blog-link'>Blog</a>
          </stencil-route-link>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/ZaphodAndo'>Github</a>
          <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/ethan_ando'>Twitter</a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/ethan-anderson-41ba9a172/'>LinkedIn</a>
          <button id='theme-button'>🌞</button>       
        </div>
      </div>
    );
  }
}
