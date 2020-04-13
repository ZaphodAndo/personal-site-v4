import { Component, h, Prop } from '@stencil/core';
import linkConfig from '../../configs/linkConfig.js';

@Component({
  tag: 'home-posts',
  styleUrl: 'home-posts.css',
  shadow: true
})
export class NavBar {

  @Prop() posts;

  componentWillLoad() {
    this.posts = linkConfig;
    this.posts = this.posts.slice(Math.max(this.posts.length - 6, 0));
  }

  render() {
    return (
      <div class='home-posts'>
        <h1 class='title'>Posts</h1>
        <hr/>
          {this.posts.map(post => 
            <div class='post'>
              <stencil-route-link url={'/blog/' + post.tag}>
                <h1 class='post-title'>{post.title}</h1>
              </stencil-route-link>
              <p class='description'>{post.desc}</p>   
              <p class='date'>{post.date}</p>         
            </div>
          )}
        <div class='view-more-holder'>
          <stencil-route-link url='/blog'>
            <p class='view-more'>View more posts</p>
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
