import React from "react";
import "./Styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
    <div className="footer">
    <div className="sectionOne">
    <h2> About Wynk Music</h2>
    <p>  Wynk Music is a complete package that allows you free online music
          streaming, set caller tunes, listen to podcasts, download MP3 music
          offline, and much more! Since music is essentially the only thing that
          can truly understand a person, we consistently offer our audience the
          ideal blend of MP3 Songs by their favourite artists and of versatile
          genres</p>
    </div>
    <div className="sectionTwo">Section 2</div>
    <div className="sectionThree">Section 3</div>
    <div className="sectionFour">Section 4</div>
   </div>
      <div className="border border-black p-5">
        <h2 class="text-xl font-medium mb-1 dark:text-white text-black">
          About Wynk Music
        </h2>
        <p className="mb-4 dark:text-gray-300 text-gray-700">
          Wynk Music is a complete package that allows you free online music
          streaming, set caller tunes, listen to podcasts, download MP3 music
          offline, and much more! Since music is essentially the only thing that
          can truly understand a person, we consistently offer our audience the
          ideal blend of MP3 Songs by their favourite artists and of versatile
          genres
        </p>
        <h2 class="text-xl font-medium mb-1 dark:text-white text-black">
          Play &amp; Download FREE MP3 Songs in all languages
        </h2>

        <p className="mb-4 dark:text-gray-300 text-gray-700">
          One of the unique features of Wynk Music is that it offers users the
          ability to stream music in multiple regional languages, including
          Hindi, Punjabi, Bengali, Tamil, Telugu, and more. Also, users of the
          app can download MP3 songs for offline listening. This online music
          platform provides access to additional features such as offline
          listening, high-quality audio, and exclusive content.
        </p>

        <h2 class="text-xl font-medium mb-1 dark:text-white text-black">
          Wynk Music – One Stop Destination for Offline &amp; Online Music!
        </h2>
        <p className="mb-4 dark:text-gray-300 text-gray-700">
          Wynk Music offers users access to a vast library of music, including
          Indian and international tracks across various genres like Bollywood,
          Punjabi, pop, rock, and more. We have made online music streaming
          simple, fun, and all about you! So, what’s the wait for, discover and
          listen to millions of songs, playlists, podcasts & download MP3 songs
          on any device including mobile for free exclusively on Wynk Music.
          Keep Wynking!
        </p>
      </div>
      <div className="flex mt-20 justify-between items-center bg-gray-500">
        <div className="flex">
          <img
            class="rounded-3xl w-12 h-12"
            src="data:image/jpeg;base64,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"
            alt="Wynk logo"
          ></img>
          <div>
            {" "}
            <h3 class="text-xl font-medium text-black dark:text-white">
              Best way to Listen to Music!
            </h3>
            <p class="text-sm mt-1 text-black dark:text-white">
              Don’t forget to install Wynk Music on your mobile phones
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqNb2PFZ9pbLDzog8QNsJE3pQkTJQKUejNE56b83nf2Qy50VCd08_Th01EGafMu4xYMg&usqp=CAU"
            alt="Google Play"
            className="w-40"
          ></img>
          <img
            src="https://w7.pngwing.com/pngs/822/688/png-transparent-apple-on-the-app-store-screenshot-iphone-app-store-google-play-store-electronics-text-logo-thumbnail.png"
            alt="Apple Play"
            className="w-40"
          />
        </div>
      </div>
      <div className="flex">
        <div >
          <div className="Latest Albums">
            <h6>Latest Albums</h6>
            <span>
              Walkerworld | Dunki | Vikram Original Motion Picture Soundtrack |
              Thallumaala | Pushpa - The Rise | Ninna Sanihake | Praktan | Still
              Rollin | Bhavartha Mauli | Yuva Sarkar | Mal mahu jiban mati |
              1989
            </span>
          </div>
          <div className="Explore Music Genres">
            <h6>Explore Music Genres</h6>
            <span>
              Rock Songs | Patriotic songs | Sufi Music | Ghazals | Workout
              Music | Devotional Songs | Sad Songs | DJ Songs
            </span>
          </div>
          <div className="Old Songs">
            <h6>Old Songs</h6>
            <span>
              Old Songs | Old Hindi Songs | Old English Songs | Old Punjabi
              Songs | Old Telugu Songs | Old Tamil Songs | Old Bengali Songs |
              Old Malayalam Songs | Old Kannada Songs
            </span>
          </div>
          <div className="Top Artists">
            <h6>Top Artists</h6>
            <span>
              Guru Randhawa | Arijit Singh | Atif Aslam | Justin Bieber | Gulzar
              | Armaan Malik | Sidhu Moose Wala | Alan Walker | Udit Narayan |
              Sonu Nigam | Sid Sriram | Akhil | Darshan Raval | Shreya Ghoshal |
              Alka Yagnik
            </span>
          </div>
        </div>
        <div>
          <div className="Regional Playlists">
            <h6>Regional Playlists</h6>
            <span>
              New Bengali Songs | New Bhojpuri Songs | New English Songs | New
              Haryanvi Songs | New Hindi Songs | New Kannada Songs | New Marathi
              Songs | New Punjabi Songs | New Tamil Songs | New Telugu Songs |
              New Odia Songs | New Rajasthani Songs | New Gujarati Songs | New
              Assamese Songs
            </span>
          </div>
          <div className="Latest Songs">
            <h6>Latest Songs</h6>
            <span>
              Laal Peeli Akhiyaan (From "Teri Baaton Mein Aisa Uljha Jiya") |
              Love Like That (feat. Ali Sethi) | Dil Jhoom (From "Crakk -
              Jeetegaa Toh Jiyegaa") | Heer Aasmani (From "Fighter") | Jiya
              Jaise | Kyun | Saajan Ve | Ishq Jaisa Kuch (From "Fighter") |
              Bolna Tu Bantai | Ishq Ibaadat | Jo Tu Milta | Khwahishein | Mirza
              | Laayee Mohabbat | Baarish Ke Mausam Mein
            </span>
          </div>
          <div className="Trending Songs">
            <h6>Trending Songs</h6>
            <span>
              O Maahi (From "Dunki") | Satranga (From "ANIMAL") | Pehle Bhi Main
              | Arjan Vailly | Kurchi Madathapetti | Lutt Putt Gaya (From
              "Dunki") | Chaleya (From "Jawan") | Apna Bana Le | Hua Main |
              Saari Duniya Jalaa Denge | Heeriye (feat. Arijit Singh) | Ram Siya
              Ram (From "Adipurush") | Khwahishein | Dil Haareya | Tu hai kahan
            </span>
          </div>
          <div className="Songs With Lyrics">
            <h6>Songs With Lyrics</h6>
            <span>
              Coca Cola | Bom Diggy Diggy | Machayenge | Tera Yaar Hoon Main |
              Kar Gayi Chull (From "Kapoor & Sons (Since 1921)") | Morni Banke |
              Chalti Hai Kya 9 Se 12 | Hawayein
            </span>
          </div>
        </div>

        <div className="Wynk Top Hits">
          <h6>Wynk Top Hits</h6>
          <span>
            Top 20 Bollywood Songs | Wynk Top 100 Songs | Top 20 English Songs |
            Trending Reels Songs
          </span>
        </div>
        <div className="Devotional Songs">
          <h6>Devotional Songs</h6>
          <span>
            Ganesh Ji Ki Aarti | Laxmi Ji Ki Aarti | Shri Hanuman Chalisa | Shiv
            Bhajan | Gurbani | Gurbani Shabad | Islamic Songs | Jesus Songs |
            Christian Songs
          </span>
        </div>
      </div>
      <div className="Join Wynk For Artists">
        <h6>Join Wynk For Artists</h6>
        <span>Wynk Studio | Wynk Studio for Artists</span>
      </div>
    
      <div className="footer-content">
        <ul class="dark:text-white text-sm font-medium uppercase flex flex-wrap justify-center">
          <li>
            <a class="cursor-pointer" href="/corporate">
              About Us
            </a>
            <span class="px-2 font-normal text-gray-500">|</span>
          </li>
          <li>
            <a title="Privacy Policy" href="/music/privacy_policy">
              Privacy Policy
            </a>
            <span class="px-2 font-normal text-gray-500">|</span>
          </li>
          <li>
            <a title="Terms of Use" href="/music/tnc">
              Terms of Use
            </a>
            <span class="px-2 font-normal text-gray-500">|</span>
          </li>
          <li>
            <a class="cursor-pointer" href="/corporate/contact">
              Contact Us
            </a>
            <span class="px-2 font-normal text-gray-500">|</span>
          </li>
          <li>
            <a title="Hellotunes" href="/airtel-hellotunes">
              Hellotunes
            </a>
          </li>
        </ul>
      </div>

      <div className="social-icons dis flex justify content flex end">
        <svg
          focusable="true"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="FacebookIcon"
        >
          <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
        </svg>
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="TwitterIcon"
        >
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
        </svg>
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="InstagramIcon"
        >
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        </svg>
        <svg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="YouTubeIcon"
        >
          <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path>
        </svg>
        <a href="https://www.facebook.com/">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube"></i>
        </a>
      </div>
     

      <div className="footer-bottom">
        <p class="md:w-2/3 text-center md:text-left">
          Wynk Music is the one-stop music app for the latest to the greatest
          songs that you love. Play your favourite music online for free or
          download mp3. Enjoy from over 22 Million Hindi, English, Bollywood,
          Regional, Latest, Old songs and more.
        </p>
        <p class="mt-4 md:w-1/3 text-center md:text-right md:mt-0 whitespace-nowrap">
          2024 © All rights reserved | Airtel Digital Limited
        </p>
      </div>
    </div>
  );
}

export default Footer;
