import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <div class='about-me'>
          <h1 class='about-title'>About Me</h1>
          <p class='about-desc'>Hi, I'm Ethan, an apprentice applications developer at PebblePad. My main interests are in frontend web development, however I am also interested in mobile development where I am looking into Flutter.</p>
        </div>

        <div class='blog-posts'>
          <h2 class='blog-title'>Blog Posts</h2>
          <div class='post'>
            <stencil-route-link url='/blog/git-setup'>
              <h3>Setting Up Git! - 07/08/19</h3>
            </stencil-route-link>
            <p>How to set up Git on Windows 💻</p>            
          </div>
          <div class='post'>
            <stencil-route-link url='/blog/revamp-post'>
              <h3>An original meme and a blast from the past! - 05/08/19</h3>
            </stencil-route-link>
            <p>Its an old meme sir but it still checks out</p>            
          </div>
          <div class='post'>
            <stencil-route-link url='/blog/first-post'>
              <h3>Welcome to my site - 05/08/19</h3>
            </stencil-route-link>
            <p>Something I will redesign hundreds of times only to make two posts</p>            
          </div>
        </div>

        <div class='events'>
          <h2 class='events-title'>Events I Have Attended</h2>
          <p>
            26/10/19 - HackTheMidlands 4.0 - This is a hackathon that I went to in Birmingham where me and my team created
            <a class='p-link' target='_blank' rel='noopener noreferrer' href='https://github.com/kanaikimi/project-fanta'> this.</a>
          </p>
        </div>

        <div class='projects'>
          <h2 class='projects-title'>Projects</h2>
          <div class='project'>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/ZaphodAndo/scuffed-text'>Scuffed Text</a>
            <p>An NPM package I created that allows for the converting of conventional text into alternating caps</p>            
          </div>
          <div class='project'>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/kanaikimi/project-fanta'>Project Fanta</a>
            <p>Project Fanta is an instant and simple platform for anybody who wants to broadcast messages to subscribers using SMS!</p>            
          </div>
        </div>
      </div>
    );
  }
}
