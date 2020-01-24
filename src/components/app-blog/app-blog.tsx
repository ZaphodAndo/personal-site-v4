import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.css',
  shadow: true
})
export class AppProfile {
  render() {
    return (
      <div class="app-blog">
        <div class='blog-posts'>
          <h2 class='blog-title'>Blog Posts</h2>
          <div class='post'>
            <h3>Setting Up Git! - 07/08/19</h3>
            <p>How to set up Git on Windows 💻</p>            
          </div>
          <div class='post'>
            <h3>An original meme and a blast from the past! - 05/08/19</h3>
            <p>Its an old meme sir but it still checks out</p>            
          </div>
          <div class='post'>
            <h3>Welcome to my site - 05/08/19</h3>
            <p>Something I will redesign hundreds of times only to make two posts</p>            
          </div>
        </div>
      </div>
    );
  }
}
