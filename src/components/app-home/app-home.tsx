import { Component, h, Prop } from '@stencil/core';
import blogConfig from '../../blogConfig.jsx';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  @Prop() posts;

  componentWillLoad() {
    this.posts = blogConfig;
    this.posts = this.posts.slice(Math.max(this.posts.length - 6, 0));
  }

  render() {
    return (
      <div class='app-home'>
        <div class='about-me'>
          <h1 class='about-title'>About Me</h1>
          <p class='about-desc'>Hi, I'm Ethan, an apprentice applications developer at PebblePad. My main interests are in frontend web development, however I am also interested in mobile development where I am looking into Flutter.</p>
        </div>

        <div class='blog-posts'>
          <h2 class='blog-title'>Blog Posts</h2>
            {this.posts.map(post => 
              <div class='post'>
                <stencil-route-link url={'/blog/' + post.tag}>
                  <h3>{post.title} - {post.date}</h3>
                </stencil-route-link>
                <p>{post.desc}</p>            
              </div>
            )}
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
