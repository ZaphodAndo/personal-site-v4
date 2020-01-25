import { Component, h, Prop } from '@stencil/core';
import blogConfig from '../../blogConfig.jsx';

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.css',
  shadow: true
})
export class AppProfile {

  @Prop() posts;

  componentDidLoad() {
    this.posts = blogConfig;
    console.log(this.posts);
  }

  render() {
    return (
      <div class="app-blog">
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
      </div>
    );
  }
}
