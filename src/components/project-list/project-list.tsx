import { Component, h } from '@stencil/core';

@Component({
  tag: 'project-list',
  styleUrl: 'project-list.css',
  shadow: true
})
export class ProjectList {
  render() {
    return (
      <div class='project-list'>
        <h1 class='title'>Projects</h1>
        <hr/>
        <div class='project'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/ZaphodAndo/scuffed-text'>Scuffed Text</a>
          <p>An NPM package for converting text into  alternating caps.</p>            
        </div>
        <div class='project'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/ZaphodAndo/scuffed-text-cli'>Scuffed Text CLI</a>
          <p>A CLI tool for converting text into alternating caps.</p>            
        </div>
        <div class='project'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/kanaikimi/project-fanta'>Project Fanta</a>
          <p>Project Fanta is an instant and simple platform for anybody who wants to broadcast messages to subscribers using SMS!</p>            
        </div>
        <div class='project'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/ZaphodAndo/save-my-eyes'>Save My Eyes</a>
          <p>The VS Code theme that doesn't burn code into your eyes!</p>            
        </div>
        <div class='view-more-holder'>
          <a class='view-more' target='_blank' rel='noopener noreferrer' href='https://github.com/ZaphodAndo?tab=repositories'>View more projects</a>          
        </div>
      </div>
    );
  }
}
