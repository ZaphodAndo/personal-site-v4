import { Component, h, Prop } from '@stencil/core';
import linkConfig from '../../configs/linkConfig.js';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  @Prop() posts;

  componentWillLoad() {
    this.posts = linkConfig;
  }

  render() {
    return (
      <div>
        <div class='container'>
          <nav-bar></nav-bar>
          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/' component='app-home' exact={true} />
                <stencil-route url='/about' component='app-about' exact={true} />
                <stencil-route url='/blog' component='app-blog' exact={true} />
                {this.posts.map(post => 
                  <stencil-route url={'/blog/' + post.tag} component={post.tag} exact={true} />
                )}
              </stencil-route-switch>
            </stencil-router>
          </main>          
        </div>
      </div>
    );
  }
}
