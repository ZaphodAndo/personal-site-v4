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
        <stencil-route-link url='/'>
          <a>Ethan Anderson</a>
        </stencil-route-link>

        <div class='right-links'>
          <stencil-route-link url='/about'>
            <a>About</a>
          </stencil-route-link>

          <stencil-route-link url='/blog' class='blog-link'>
            <a>Blog</a>
          </stencil-route-link>
          <button id='theme-button'>🌞</button>        
        </div>
      </div>
    );
  }
}
