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
              Bacon ipsum dolor amet swine doner chislic cow, jowl pork loin jerky tongue shank capicola bresaola. 
              Salami ground round jerky, spare ribs sirloin beef ribs swine landjaeger short ribs hamburger filet 
              mignon tongue beef ribeye andouille. Turducken capicola fatback beef frankfurter pancetta, buffalo 
              t-bone salami bacon ham chicken ball tip. Prosciutto shankle ham short loin short ribs boudin porchetta 
              ham hock chicken pork chop bresaola leberkas salami.
            </p>
            <p>
              Bacon ipsum dolor amet swine doner chislic cow, jowl pork loin jerky tongue shank capicola bresaola. 
              Salami ground round jerky, spare ribs sirloin beef ribs swine landjaeger short ribs hamburger filet 
              mignon tongue beef ribeye andouille. Turducken capicola fatback beef frankfurter pancetta, buffalo 
              t-bone salami bacon ham chicken ball tip. Prosciutto shankle ham short loin short ribs boudin porchetta 
              ham hock chicken pork chop bresaola leberkas salami.
            </p>
            <p>
              Bacon ipsum dolor amet swine doner chislic cow, jowl pork loin jerky tongue shank capicola bresaola. 
              Salami ground round jerky, spare ribs sirloin beef ribs swine landjaeger short ribs hamburger filet 
              mignon tongue beef ribeye andouille. Turducken capicola fatback beef frankfurter pancetta, buffalo 
              t-bone salami bacon ham chicken ball tip. Prosciutto shankle ham short loin short ribs boudin porchetta 
              ham hock chicken pork chop bresaola leberkas salami.
            </p>
          </div>

          <div class='info'>
            <h2>Info</h2>
            <hr/>
            <p>Age <span>19</span></p>
            <p>Location <span>UK</span></p>
            <p>Interests <span>Programming, tech, music, comics, movies, gaming, peanut M&Ms</span></p>
            <p>Work <a target='_blank' rel='noopener noreferrer' href='https://www.pebblepad.co.uk/'>PebblePad</a></p>
            <p>Pets <span>Two cats</span></p>
          </div>
        </div>
      </div>
    );
  }
}
