import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <hr />
        <div class='container'>
          <nav-bar></nav-bar>

          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/' component='app-home' exact={true} />
                <stencil-route url='/blog' component='app-blog' exact={true} />
                <stencil-route url='/blog/first-post' component='first-post' exact={true} />
                <stencil-route url='/blog/git-setup' component='git-setup' exact={true} />
                <stencil-route url='/blog/revamp-post' component='revamp-post' exact={true} />
              </stencil-route-switch>
            </stencil-router>
          </main>          
        </div>
      </div>
    );
  }
}
