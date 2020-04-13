import { Component, h } from '@stencil/core';

@Component({
  tag: 'revamp-post',
  styleUrl: '../posts.css',
  shadow: true
})
export class RevampPost {
  render() {
    return (
      <div class='blog-post'>
        <div class='meta-info'>
          <h1>Welcome to my site Again!!</h1>
          <p class='description'>This is like the 4th maybe 5th design now</p>
          <p class='date'>25th Janurary 2020</p>          
        </div>

        <div class='content'>
          <h2>Welcome..... again 🖖</h2>
          <p>
            So in my first blog post I mentioned how I would probably make like 3 posts or something and then redesign the blog like four times.<br/>
            Yeah that's exactly what happened 🤦‍♂️
          </p>
          <p>The site you are now reading on is probably the fourth or maybe even fifth redesign of my blog in the space of like 4 months or something.</p>
          <ul>
            <li>The very first iteration was made using <a target='_blank' rel='noopener noreferrer' href='https://www.webcomponents.org/introduction'>web components</a>.</li>
            <li>The second iteration used a react based framework called <a target='_blank' rel='noopener noreferrer' href='https://nextjs.org/'>next.js</a>.</li>
            <li>The third and fourth designs were both built in <a target='_blank' rel='noopener noreferrer' href='https://www.gatsbyjs.org/'>GatsbyJS</a> another react based framework</li>
            <li>This fifth iteration is back to native web components however im now using a web components compiler called <a target='_blank' rel='noopener noreferrer' href='https://stenciljs.com/'>StencilJS</a>.</li>
          </ul>
          <p>At this rate im going to have remade my site in every frontend framework and technology possible. 🤣</p>
        </div>
      </div>
    );
  }
}
