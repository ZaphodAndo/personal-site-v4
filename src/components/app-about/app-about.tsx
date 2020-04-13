import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
  shadow: true
})
export class AppAbout {
  render() {
    return (
      <div>
        <div class='top-section'>
          <div class='top-text'>
            <h1>Hi, I'm <span>Ethan.</span></h1>
            <p>Destroyer of Builds, Remover of Strings, Creator of lint errors.</p>            
          </div>
          <img src='../../assets/profile-image/profile-pic.png' alt='profile image'></img>
        </div>
        <div class='bottom-section'>
          <div class='content'>
            <p>
              I’m an apprentice applications developer at a company called PebblePad. My preferred area is frontend 
              web development using technologies such as JavaScript, TypeScript, and React etc. however I also delve 
              into backend with .net and C # as well as a little bit of NodeJs.
            </p>
            <p>
              Technologies and things that I would like to investigate and learn include <a target='_blank' rel='noopener noreferrer' href='https://flutter.dev/'>Flutter</a> a cross platform development 
              framework, <a target='_blank' rel='noopener noreferrer' href='https://www.rust-lang.org/'>Rust</a> and <a target='_blank' rel='noopener noreferrer' href='https://webassembly.org/'>WASM</a>.
            </p>
            <p>
              If I’m not staring at a screen coding then I’m probably staring at a screen doing something else whether 
              that be gaming, reading or endlessly scrolling 
              through <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/ethan_ando'>twitter</a> and if I 
              am coding I’m probably battling 
              with type errors in typescript or rewording the same text for the fiftieth time.
            </p>
            <p>
              This site is where I am going to collect a bunch of my thoughts and stuff I have learned as well as other 
              interesting things I may have come across. I probably won’t be adding many posts here that often (if at all) 
              in fact I will probably spend much more time redesigning it and changing it than writing posts.
            </p>
          </div>

          <div class='info'>
            <h2>Info</h2>
            <hr/>
            <p>Age <span>19</span></p>
            <p>Location <span>UK</span></p>
            <p>Interests <span>Programming, tech, music, comics, movies, gaming, peanut M&Ms</span></p>
            <p>Work <a target='_blank' rel='noopener noreferrer' href='https://www.pebblepad.co.uk/'>PebblePad</a></p>
            <p>Pets <span>Two cats</span></p>
          </div>
        </div>
      </div>
    );
  }
}
