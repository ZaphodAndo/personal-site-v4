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
        <bio-content></bio-content>
        <div class='lists'>
          <home-posts></home-posts>
          <div class='project-holder'>
            <project-list></project-list>            
          </div>
        </div>
      </div>
    );
  }
}
