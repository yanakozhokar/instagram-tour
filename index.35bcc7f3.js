function n(n,s,a,l){Object.defineProperty(n,s,{get:a,set:l,enumerable:!0,configurable:!0})}function s(n){return n&&n.__esModule?n.default:n}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},e={},t=a.parcelRequireab21;null==t&&((t=function(n){if(n in l)return l[n].exports;if(n in e){var s=e[n];delete e[n];var a={id:n,exports:{}};return l[n]=a,s.call(a.exports,a,a.exports),a.exports}var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(n,s){e[n]=s},a.parcelRequireab21=t),t.register("kyEFX",(function(s,a){var l,e;n(s.exports,"register",(function(){return l}),(function(n){return l=n})),n(s.exports,"resolve",(function(){return e}),(function(n){return e=n}));var t={};l=function(n){for(var s=Object.keys(n),a=0;a<s.length;a++)t[s[a]]=n[s[a]]},e=function(n){var s=t[n];if(null==s)throw new Error("Could not resolve bundle with id "+n);return s}})),t("kyEFX").register(JSON.parse('{"4dfjF":"index.35bcc7f3.js","1kyOp":"fabulous-rome.00bcd103.jpg","am3Lk":"discover-ukraine.fa9100c7.jpg","7aXVd":"venice-and-florence.f8839cb4.jpg","e2YjO":"skyscrapers.a692659b.jpg","8UxiM":"statue-of-liberty.b51678ab.jpg","ex9qd":"lighthouse.dfa1eba3.jpg","f18ql":"city-in-desert.b5b00cf6.jpg","eJUlU":"mosque.42894a03.jpg","6ZGWC":"elephants.18718bbf.jpg","38RxY":"taj-mahal.abe1bcdd.jpg","dtQWC":"chinese-gate.ad95238f.jpg","gJdKh":"buddha.63df5d89.jpg","6WcHY":"surfers.82c1dc42.jpg","7X7Fm":"sydney.afbaccf2.jpg","1g6AE":"divers.5c554187.jpg"}'));var r;r=new URL(t("kyEFX").resolve("1kyOp"),import.meta.url).toString();var i;i=new URL(t("kyEFX").resolve("am3Lk"),import.meta.url).toString();var o;o=new URL(t("kyEFX").resolve("7aXVd"),import.meta.url).toString();var _;_=new URL(t("kyEFX").resolve("e2YjO"),import.meta.url).toString();var c;c=new URL(t("kyEFX").resolve("8UxiM"),import.meta.url).toString();var u;u=new URL(t("kyEFX").resolve("ex9qd"),import.meta.url).toString();var p;p=new URL(t("kyEFX").resolve("f18ql"),import.meta.url).toString();var g;g=new URL(t("kyEFX").resolve("eJUlU"),import.meta.url).toString();var y;y=new URL(t("kyEFX").resolve("6ZGWC"),import.meta.url).toString();var f;f=new URL(t("kyEFX").resolve("38RxY"),import.meta.url).toString();var d;d=new URL(t("kyEFX").resolve("dtQWC"),import.meta.url).toString();var m;m=new URL(t("kyEFX").resolve("gJdKh"),import.meta.url).toString();var h;h=new URL(t("kyEFX").resolve("6WcHY"),import.meta.url).toString();var v;v=new URL(t("kyEFX").resolve("7X7Fm"),import.meta.url).toString();var w;w=new URL(t("kyEFX").resolve("1g6AE"),import.meta.url).toString();const x=document.querySelector(".tours__buttons-list"),b=document.querySelector(".tours__gallery");x.addEventListener("click",(function(n){if(!n.target.classList.contains("active")&&"BUTTON"===n.target.nodeName){switch(document.querySelector(".active").classList.remove("active"),n.target.classList.add("active"),n.target.textContent){case"Europe":b.innerHTML=`<li class="tours__gallery-item">\n        <div class="tours__gallery-img-container">\n          <img\n            src="${s(r)}"\n            alt="Couple in Rome"\n            width="353"\n            height="402"\n            class="tours__gallery-img"\n          />\n        </div>\n        <h3 class="tours__gallery-title">Fabulous Rome</h3>\n        <p class="tours__gallery-price">\n          from <span class="tours__gallery-amount">$320</span>\n        </p>\n        <p class="tours__gallery-description">\n          Colosseum, Pantheon, and Vatican are waiting for you! We will see the\n          most beautiful places in Rome, admire sunsets from the viewing\n          platforms, etc.\n        </p>\n        <ul class="tours__gallery-info-list">\n          <li class="tours__gallery-info-item">\n            <p class="tours__gallery-info-text">\n              <span class="tours__gallery-info-accent">Photographer:</span>\n              Alexandro Rossa\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <p class="tours__gallery-info-text">\n              <span class="tours__gallery-info-accent">Duration:</span>\n              5 days\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <p class="tours__gallery-info-text">\n              <span class="tours__gallery-info-accent">Type:</span> City tours,\n              History, Gastro\n            </p>\n          </li>\n        </ul>\n        <p class="tours__gallery-date">\n          <span class="tours__gallery-date-accent">Date:</span> 10.11.2021\n        </p>\n      </li>\n      <li class="tours__gallery-item">\n        <div class="tours__gallery-img-container">\n          <img\n            src="${s(i)}"\n            alt="Couple in Ukraine"\n            width="353"\n            height="402"\n            class="tours__gallery-img"\n          />\n        </div>\n        <h3 class="tours__gallery-title">Discover Ukraine</h3>\n        <p class="tours__gallery-price">\n          from <span class="tours__gallery-amount">$220</span>\n        </p>\n        <p class="tours__gallery-description">\n          We will see the most beautiful cities of Ukraine, national parks, and\n          spend wonderful 10 days among very friendly people.\n        </p>\n        <ul class="tours__gallery-info-list">\n          <li class="tours__gallery-info-item">\n            <p class="tours__gallery-info-text">\n              <span class="tours__gallery-info-accent">Photographer:</span>\n              Alicia Keish\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <p class="tours__gallery-info-text">\n              <span class="tours__gallery-info-accent">Duration:</span>\n              10 days\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <p class="tours__gallery-info-text">\n              <span class="tours__gallery-info-accent">Type:</span>\n              Nature & adventure, City tours, History\n            </p>\n          </li>\n        </ul>\n        <p class="tours__gallery-date">\n          <span class="tours__gallery-date-accent">Date:</span> 12.12.2021\n        </p>\n      </li>\n      <li class="tours__gallery-item">\n        <div class="tours__gallery-img-container">\n          <img\n            src="${s(o)}"\n            alt="Woman in Venice"\n            width="353"\n            height="402"\n            class="tours__gallery-img"\n          />\n        </div>\n        <h3 class="tours__gallery-title">Venice and Florence</h3>\n        <p class="tours__gallery-price">\n          from <span class="tours__gallery-amount">$175</span>\n        </p>\n        <p class="tours__gallery-description">\n          On this trip, we will see two incredibly beautiful cities in Italy -\n          Venice and Florence. We will have a gondola ride, a walk along the\n          Golden Bridge, etc.\n        </p>\n        <ul class="tours__gallery-info-list">\n          <li class="tours__gallery-info-item">\n            <p class="tours__gallery-info-text">\n              <span class="tours__gallery-info-accent">Photographer:</span>\n              Alexandro Rossa\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <p class="tours__gallery-info-text">\n              <span class="tours__gallery-info-accent">Duration:</span>\n              5 days\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <p class="tours__gallery-info-text">\n              <span class="tours__gallery-info-accent">Type:</span> Boat tours,\n              City tours, History\n            </p>\n          </li>\n        </ul>\n        <p class="tours__gallery-date">\n          <span class="tours__gallery-date-accent">Date:</span> 02.01.2022\n        </p>\n      </li>`;break;case"America":b.innerHTML=`<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(_)}"\n      alt="Skyscrapers"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">The Great American Trip</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$460</span>\n  </p>\n  <p class="tours__gallery-description">\n    Our tour is ideal for those who are in America for the first time or just\n    want to embrace the best places in our wonderful country in one trip.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        10 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span> City tours,\n        History\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 10.11.2022\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(c)}"\n      alt="Statue of liberty"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">New York</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$275</span>\n  </p>\n  <p class="tours__gallery-description">\n    Who wants to wake up in a city that never sleeps? We'll visit all the best\n    places in NY, and enjoy fine dishes in the most instagrammable restaurants.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Alicia Keish\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        5 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span>\n        City tours, Gastro\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 11.11.2022\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(u)}"\n      alt="Lighthouse"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Beauty of American Nature</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$320</span>\n  </p>\n  <p class="tours__gallery-description">\n    America is not only a land of skyscrapers and modern technology. We will\n    visit natural parks, see waterfalls, lakes, and so many other places!\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Melissa Sol\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        7 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span> Nature & adventure\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 12.12.2022\n  </p>\n</li>`;break;case"Africa":b.innerHTML=`<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(p)}"\n      alt="City in the desert"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Red Cities and Deserts</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$575</span>\n  </p>\n  <p class="tours__gallery-description">\n    Africa has many deserts: Sahara, Kalahari, Namib, Nubian, Libyan, Western\n    Sahara, Algeria, and the Atlas Mountains. We will see them all!\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        10 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span> Nature & adventure\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 09.11.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(g)}"\n      alt="Mosque"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Different Africa</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$350</span>\n  </p>\n  <p class="tours__gallery-description">\n    Africa is not only about nature, it also has very beautiful cities. We will\n    see a completely different Africa and visit the most beautiful places.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Melissa Sol\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        7 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span>\n        Nature & adventure, City tours\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 11.11.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(y)}"\n      alt="Elephants"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Tanzanian Safari</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$475</span>\n  </p>\n  <p class="tours__gallery-description">\n    Have you always wanted to live with animals? Now is your chance! Join us for\n    a unique safari in Tanzania and go wild!\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        10 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span> Nature &\n        adventure, Safari\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 02.02.2022\n  </p>\n</li>`;break;case"Asia":b.innerHTML=`<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(f)}"\n      alt="Taj Mahal"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Peerless Taj Mahal</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$250</span>\n  </p>\n  <p class="tours__gallery-description">\n    We will see the pearl of India, the Taj Mahal in all its glory. We will also\n    visit many other beautiful places in India and take stunning photos.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        5 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span> City tours,\n        History\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 08.11.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(d)}"\n      alt="Chinese gate"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Chinese Essentials</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$350</span>\n  </p>\n  <p class="tours__gallery-description">\n    On this tour, we have collected all the iconic places in China that every\n    tourist should see, from Shanghai to the Chinese Wall.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Melissa Sol\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        7 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span>\n        City tours, History\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 11.12.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(m)}"\n      alt="Elephants"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Spiritual Thailand</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$625</span>\n  </p>\n  <p class="tours__gallery-description">\n    Thailand means not only a beach holiday, although we will have it too. But\n    apart from the beaches, we will also see stunning temples.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Alicia Keish\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        15 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span> Nature &\n        adventure, Resorts\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 05.01.2022\n  </p>\n</li>`;break;case"Australia":b.innerHTML=`<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(h)}"\n      alt="Surfers"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Australian Surfing</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$550</span>\n  </p>\n  <p class="tours__gallery-description">\n    Australian beaches are considered to be one of the best surfing\n    spots.Stunning sunsets and staying in exquisite lodges await you. Join our\n    adventure!\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Alicia Keish\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        5 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span> Nature &\n        adventure, Surfing\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 10.11.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(v)}"\n      alt="Sydney"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Sydney + Canberra</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$450</span>\n  </p>\n  <p class="tours__gallery-description">\n    We will see two of Australia's most beautiful cities. And, of course, we\n    will visit the opera in Sydney, which you can see on any postcard.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        7 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span>\n        City tours, History\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 11.12.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="${s(w)}"\n      alt="Divers"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">PRO Diving Tour</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$875</span>\n  </p>\n  <p class="tours__gallery-description">\n    We offer a diving tour to Australia. Underwater shooting and uncharted\n    depths await us. PADI/CMAS certificate is required.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Photographer:</span>\n        Alicia Keish\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Duration:</span>\n        10 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <p class="tours__gallery-info-text">\n        <span class="tours__gallery-info-accent">Type:</span> Nature &\n        adventure, Diving\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 01.01.2022\n  </p>\n</li>`}}}));
//# sourceMappingURL=index.35bcc7f3.js.map
