import { Component, h } from "@stencil/core";

@Component({
  tag: "arm-migration",
  styleUrl: "../posts.css",
  shadow: true,
})
export class RevampPost {
  render() {
    return (
      <div class="blog-post">
        <div class="meta-info">
          <h1>The Great ARM Migration!</h1>
          <p class="description">
            Some thoughts on Apples move from intel to ARM for Macs
          </p>
          <p class="date">18th June 2020</p>
        </div>
        <p>
          Apple are reportedly going to be transitioning from using Intel
          processors to their own custom ARM processors for their Mac lineup,
          due to be announced at WWDC next week. I find this incredibly exciting
          and just want to run through some of my thoughts about this.
        </p>
        <h2>Why are Apple moving to ARM?</h2>
        <p>
          Why have Apple decided to migrate to using their own processors? Well
          there are a few reasons for why Apple might want to do this.{" "}
        </p>
        <p>
          The first being that in recent years Intel have really been dropping
          the ball with their iterative improvements and delays to their own
          product roadmap which have impacted Apple and resulted in not the most
          amazing year on year performance improvements (CPU wise) for the Mac.
          Apple producing their own processors for the Mac would remove this
          dependency and allow Apple to exert greater control over the direct
          performance improvements they provide to their computers allowing for
          potentially better performance just as they have done with the iPhone
          which thoroughly smashes every other smartphone when comparing CPU
          power.
        </p>
        <p>
          The second reason is Apple's seemingly continuous obsession with
          trying to develop every bit of hardware they use themselves allowing
          them to be less reliant on other companies and this has been shown by
          how more and more of the iPhone over the years has slowly been using
          more in house hardware components, most notably being Apple’s very own
          A series processors that are used in the iPhone and things like the T2
          security chip.
        </p>
        <h2>Effects of the move to ARM</h2>
        <p>
          The effects of this move will probably be quite profound as for Mac
          users it could result in much more power efficient Macs due to ARM’s
          architecture but also potentially more powerful Macs depending on how
          well Apple’s custom processors perform in a Mac. They have already
          proved that they can make amazing processors for the iPhone and iPad
          so it will be interesting to see how well they fare with something
          like a Macbook which has a very different cooling system and a bigger
          device footprint for them to work with.
        </p>
        <p>
          However not everything about this move is likely to be sunshine and
          rainbows as the likelihood is that when Apple releases the first ARM
          powered Mac the software support from third party developers might not
          be there. It's going to take effort from developers to port their apps
          to the new architecture which costs time and money so it's unlikely
          that everyone's favorite apps and services will be available on day
          one. Some developers may even use it as an opportunity to drop support
          for the Mac and older legacy apps which may not be in active
          development anymore and so may be left behind forever.
        </p>
        <p>
          Although maybe Apple will surprise me and it will be as simple as
          clicking a button in Xcode and your app will be ready for the ARM
          revolution, knowing Apple it probably won't be that simple however we
          will have to wait for WWDC to find out.
        </p>
        <h2>How will this affect the wider industry?</h2>
        <p>
          Apple is very much a trend setter. When Apple removed the headphone
          jack, everyone removed the headphone jack, some even ripped Apple for
          it only to remove it the next year (looking at you Google). When Apple
          added a notch to the iPhone, everyone added a notch to their phones.
          When Apple released the airpods people laughed at them however they
          are now very much a fashion symbol spurring massive growth for Apple’s
          wearables business and companies are shamelessly ripping them off all
          over the place.
        </p>
        <p>
          Apple moving to ARM could signal a similar move for the wider
          industry. We already have windows on ARM and Chrome OS on ARM and
          pretty much all smartphones and mobile platforms run on ARM chips
          already. This move could very well result in the desktop and laptop
          world moving to produce more ARM laptops and could potentially mean
          companies start to try and invest in their own processors in an effort
          to try and beat Apple at their own game. There are already rumours
          around{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.theverge.com/2020/4/14/21221062/google-processor-pixels-chromebooks-whitechapel-samsung-qualcomm"
          >
            Google
          </a>{" "}
          developing their own ARM processors potentially for the Pixel phones
          but also maybe for their chromebooks as well. A product area they are
          increasingly trying to market as actual laptops.
        </p>
        <p>
          Although Apple moving away from Intel isn't the end of the world for
          Intel considering how small Mac market share is for global PC sales,
          the impact of a general shift to ARM for the wider industry could be
          fairly damaging to the company. Intel hasn't been having a fun time in
          recent years by being absolutely destroyed by AMD product wise in the
          CPU market and having lots of manufacturing trouble trying to perfect
          their own 10nm process. More manufacturers leaving them for ARM will
          be damaging to their bottom line however on a positive note maybe it
          will get them to get off their backside and make some better CPU’s.
        </p>
        <h2>Dunking on people's opinions</h2>
        <p>
          I just want to take a moment to dunk on some peoples opinions around
          this whole subject around ARM on the Mac. A fairly common outlook on
          this that I seem to see mainly from Apple fanboys is that Apple’s move
          to ARM for the Mac is going to be amazing, “DON'T BUY A MAC NOW WAIT
          FOR ARM”, “AN ARM MAC IS AN INSTANT BUY” and similar statements and
          phrases are generally being thrown around.
        </p>
        <p>
          Although im really excited for this move and am incredibly interested
          in how it all unfolds I think its a bit stupid to say that there is no
          point buying a Mac now BeCaUsE ArM Is aRoUnD ThE CoRnEr as the fact is
          this is not a move that going to happen over night. 2021 seems the
          earliest that we will be getting an actual ARM Mac for consumers and
          even then for professionals and developers the software and tools they
          use may not even be available on ARM Macs yet. And even if all the
          software support was there on day one they are not going to drop
          support overnight for 2 year old Macs. (Watch Apple go and prove me
          wrong now)
        </p>
        <h2>The future of Mac</h2>
        <p>
          Another interesting thing with Apple at the moment is their insistence
          on making the iPad more of a laptop so people can use it more like a 2
          in 1 such as the Microsoft surface. This leaves the Mac in a very
          interesting situation because if Apple wants people to buy iPads and
          use them instead of a laptop why would someone ever buy a Mac? And to
          be honest most people don't need a Mac, an iPad can do everything that
          they would ever need to do and its capabilities keep on increasing
          with each update (e.g. recent mouse and trackpad support) leaving
          really only power users, enthusiasts and professionals who will keep
          buying Macs because they can't get all of their work done on an iPad,
          yet.
        </p>
        <p>
          This makes Apple's move to ARM more interesting as I could very much
          see this as a way of slowly moving more Mac users to the iPad before
          eventually replacing the Mac altogether. Big statement I know but hear
          me out. By Apple transitioning to ARM that will mean that all software
          running on the Mac will be built to run on their very own ARM
          processors, the same sort of processors that Apple uses in the iPad.
          Apple has also been pushing SwiftUI which is a development framework
          that allows devs to create apps that function and scale across Apples
          portfolio of products. This could eventually lead to the apps on iPad
          and the apps on Mac converging to the point where both devices
          literally run the same software. In some ways this is already
          happening with catalysts which allows devs to port their iPad apps to
          Mac.
        </p>
        <p>
          Maybe I'm reading too much into this but over the years Apple has
          increasingly been neglecting the Mac line and has instead continuously
          been trying to push the iPad as a real computer and I feel that maybe
          in the next ten years we could see the end of the Mac… or maybe things
          will continue on as they always have, the iPad will be used by most
          people but the Mac will still be used by people that actually want to
          get work done and this convergence never happens. I guess we will have
          to wait and see.
        </p>
        <h2>The end</h2>
        <p>
          In conclusion Apple moving from intel to ARM is very exciting but not
          without its ups and downs. Only time will tell how it ends up. And
          with only a few days to go to WWDC where its been rumoured that they
          are going to announce this move it seems it won't be long until we
          find out, unless of course the leaks were wrong and Apple does not
          move to ARM and then me and a load of other people are gonna look like
          a bunch of idiots.
        </p>
      </div>
    );
  }
}
