import { Component, h } from '@stencil/core';

@Component({
  tag: 'first-post',
  styleUrl: '../posts.css',
  shadow: true
})
export class FirstPost {
  render() {
    return (
      <div class='blog-post'>
        <div class='meta-info'>
          <h1>Welcome to my site</h1>
          <p class='description'>Something I will redesign hundreds of times only to make two posts.</p>
          <p class='date'>5th August 2019</p>          
        </div>

        <div class='content'>
          <p>
            Welcome to my blog that I have been creating over the past couple of weeks.
          </p>
          <p>
            This is the place where I plan on posting all of my rants and raves about things as well as useful guides and posts about what I have learnt over time.
          </p>
          <p>
            So if you are remotely interested in that sort of content then great this is the site for you otherwise what are you doing here? Go watch <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>YouTube</a> or something. 🦀
          </p>
        </div>
      </div>
    );
  }
}
