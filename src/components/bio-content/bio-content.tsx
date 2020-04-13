import { Component, h } from '@stencil/core';

@Component({
  tag: 'bio-content',
  styleUrl: 'bio-content.css',
  shadow: true
})
export class BioContent {

  render() {
    return (
      <div class='bio-content'>
        <div class='profile'>
          <div class='profile-text'>
            <h1>Hi, i'm Ethan.</h1>
            <p>Destroyer of Builds, Remover of Strings, Creator of lint errors.</p>
          </div>
          <img src='../../assets/profile-image/profile-pic.png' alt='profile image'></img>
        </div>

        <div class='links'>
          <a class='github-link' target='_blank' rel='noopener noreferrer' href='https://github.com/ZaphodAndo'>Github</a>
          <a class='twitter-link' target='_blank' rel='noopener noreferrer' href='https://twitter.com/ethan_ando'>Twitter</a>
          <a class='linkedin-link' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/ethan-anderson-41ba9a172/'>LinkedIn</a>
        </div>
      </div>
    );
  }
}
