import { Component, h, Prop } from '@stencil/core';
import blogConfig from '../../configs/blogConfig.js';

@Component({
  tag: 'app-blog',
  styleUrl: 'app-blog.css',
  shadow: true
})
export class AppProfile {

  @Prop() years;

  componentWillLoad() {
    this.years = blogConfig;
  }

  render() {
    return (
      <div class="app-blog">
        {this.years.map(year => 
          <div>
            <div class='year-section'>
              <h1 id={year[0]}>{year[0]}</h1>
              <hr/>                
            </div>
            {year.map(post => 
              <div class='post'>
                <stencil-route-link url={'/blog/' + post.tag}>
                  <h2 class='post-title'>{post.title}</h2>
                </stencil-route-link>
                <p class='description'>{post.desc}</p>   
                <p class='date'>{post.date}</p>         
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
