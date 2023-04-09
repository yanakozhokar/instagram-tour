!function(){var s=document.querySelector(".tours__buttons-list"),n=document.querySelector(".tours__gallery");s.addEventListener("click",(function(s){if(!s.target.classList.contains("active")&&"BUTTON"===s.target.nodeName){switch(document.querySelector(".active").classList.remove("active"),s.target.classList.add("active"),s.target.textContent){case"Europe":n.innerHTML='<li class="tours__gallery-item">\n        <div class="tours__gallery-img-container">\n          <img\n            src="images/fabulous-rome.jpg"\n            alt="Couple in Rome"\n            width="353"\n            height="402"\n            class="tours__gallery-img"\n          />\n        </div>\n        <h3 class="tours__gallery-title">Fabulous Rome</h3>\n        <p class="tours__gallery-price">\n          from <span class="tours__gallery-amount">$320</span>\n        </p>\n        <p class="tours__gallery-description">\n          Colosseum, Pantheon, and Vatican are waiting for you! We will see the\n          most beautiful places in Rome, admire sunsets from the viewing\n          platforms, etc.\n        </p>\n        <ul class="tours__gallery-info-list">\n          <li class="tours__gallery-info-item">\n            <svg class="tours__gallery-info-icon" width="20" height="20">\n              <use href="./images/icons.svg#icon-instagram-tour"></use>\n            </svg>\n            <p class="tours__gallery-info-text">\n              <span class="tours__galleru-info-accent">Photographer:</span>\n              Alexandro Rossa\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <svg class="tours__gallery-info-icon" width="20" height="20">\n              <use href="./images/icons.svg#icon-clocks-tour"></use>\n            </svg>\n            <p class="tours__gallery-info-text">\n              <span class="tours__galleru-info-accent">Duration:</span>\n              5 days\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <svg class="tours__gallery-info-icon" width="20" height="20">\n              <use href="./images/icons.svg#icon-star-tour"></use>\n            </svg>\n            <p class="tours__gallery-info-text">\n              <span class="tours__galleru-info-accent">Type:</span> City tours,\n              History, Gastro\n            </p>\n          </li>\n        </ul>\n        <p class="tours__gallery-date">\n          <span class="tours__gallery-date-accent">Date:</span> 10.11.2021\n        </p>\n      </li>\n      <li class="tours__gallery-item">\n        <div class="tours__gallery-img-container">\n          <img\n            src="./images/discover-ukraine.jpg"\n            alt="Couple in Rome"\n            width="353"\n            height="402"\n            class="tours__gallery-img"\n          />\n        </div>\n        <h3 class="tours__gallery-title">Discover Ukraine</h3>\n        <p class="tours__gallery-price">\n          from <span class="tours__gallery-amount">$220</span>\n        </p>\n        <p class="tours__gallery-description">\n          We will see the most beautiful cities of Ukraine, national parks, and\n          spend wonderful 10 days among very friendly people.\n        </p>\n        <ul class="tours__gallery-info-list">\n          <li class="tours__gallery-info-item">\n            <svg class="tours__gallery-info-icon" width="20" height="20">\n              <use href="./images/icons.svg#icon-instagram-tour"></use>\n            </svg>\n            <p class="tours__gallery-info-text">\n              <span class="tours__galleru-info-accent">Photographer:</span>\n              Alicia Keish\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <svg class="tours__gallery-info-icon" width="20" height="20">\n              <use href="./images/icons.svg#icon-clocks-tour"></use>\n            </svg>\n            <p class="tours__gallery-info-text">\n              <span class="tours__galleru-info-accent">Duration:</span>\n              10 days\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <svg class="tours__gallery-info-icon" width="20" height="20">\n              <use href="./images/icons.svg#icon-star-tour"></use>\n            </svg>\n            <p class="tours__gallery-info-text">\n              <span class="tours__galleru-info-accent">Type:</span>\n              Nature & adventure, City tours, History\n            </p>\n          </li>\n        </ul>\n        <p class="tours__gallery-date">\n          <span class="tours__gallery-date-accent">Date:</span> 12.12.2021\n        </p>\n      </li>\n      <li class="tours__gallery-item">\n        <div class="tours__gallery-img-container">\n          <img\n            src="./images/venice-and-florence.jpg"\n            alt="Couple in Rome"\n            width="353"\n            height="402"\n            class="tours__gallery-img"\n          />\n        </div>\n        <h3 class="tours__gallery-title">Venice and Florence</h3>\n        <p class="tours__gallery-price">\n          from <span class="tours__gallery-amount">$175</span>\n        </p>\n        <p class="tours__gallery-description">\n          On this trip, we will see two incredibly beautiful cities in Italy -\n          Venice and Florence. We will have a gondola ride, a walk along the\n          Golden Bridge, etc.\n        </p>\n        <ul class="tours__gallery-info-list">\n          <li class="tours__gallery-info-item">\n            <svg class="tours__gallery-info-icon" width="20" height="20">\n              <use href="./images/icons.svg#icon-instagram-tour"></use>\n            </svg>\n            <p class="tours__gallery-info-text">\n              <span class="tours__galleru-info-accent">Photographer:</span>\n              Alexandro Rossa\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <svg class="tours__gallery-info-icon" width="20" height="20">\n              <use href="./images/icons.svg#icon-clocks-tour"></use>\n            </svg>\n            <p class="tours__gallery-info-text">\n              <span class="tours__galleru-info-accent">Duration:</span>\n              5 days\n            </p>\n          </li>\n          <li class="tours__gallery-info-item">\n            <svg class="tours__gallery-info-icon" width="20" height="20">\n              <use href="./images/icons.svg#icon-star-tour"></use>\n            </svg>\n            <p class="tours__gallery-info-text">\n              <span class="tours__galleru-info-accent">Type:</span> Boat tours,\n              City tours, History\n            </p>\n          </li>\n        </ul>\n        <p class="tours__gallery-date">\n          <span class="tours__gallery-date-accent">Date:</span> 02.01.2022\n        </p>\n      </li>';break;case"America":n.innerHTML='<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/skyscrapers.jpg"\n      alt="Skyscrapers"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">The Great American Trip</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$460</span>\n  </p>\n  <p class="tours__gallery-description">\n    Our tour is ideal for those who are in America for the first time or just\n    want to embrace the best places in our wonderful country in one trip.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        10 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span> City tours,\n        History\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 10.11.2022\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/statue-of-liberty.jpg"\n      alt="Couple in Rome"\n      width="353"\n      height="402"\n      class="Statue of liberty"\n    />\n  </div>\n  <h3 class="tours__gallery-title">New York</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$275</span>\n  </p>\n  <p class="tours__gallery-description">\n    Who wants to wake up in a city that never sleeps? We\'ll visit all the best\n    places in NY, and enjoy fine dishes in the most instagrammable restaurants.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Alicia Keish\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        5 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span>\n        City tours, Gastro\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 11.11.2022\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/lighthouse.jpg"\n      alt="Lighthouse"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Beauty of American Nature</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$320</span>\n  </p>\n  <p class="tours__gallery-description">\n    America is not only a land of skyscrapers and modern technology. We will\n    visit natural parks, see waterfalls, lakes, and so many other places!\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Melissa Sol\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        7 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span> Nature & adventure\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 12.12.2022\n  </p>\n</li>';break;case"Africa":n.innerHTML='<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/city-in-desert.jpg"\n      alt="City in the desert"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Red Cities and Deserts</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$575</span>\n  </p>\n  <p class="tours__gallery-description">\n    Africa has many deserts: Sahara, Kalahari, Namib, Nubian, Libyan, Western\n    Sahara, Algeria, and the Atlas Mountains. We will see them all!\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        10 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span> Nature & adventure\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 09.11.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/mosque.jpg"\n      alt="Mosque"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Different Africa</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$350</span>\n  </p>\n  <p class="tours__gallery-description">\n    Africa is not only about nature, it also has very beautiful cities. We will\n    see a completely different Africa and visit the most beautiful places.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Melissa Sol\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        7 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span>\n        Nature & adventure, City tours\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 11.11.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/elephants.jpg"\n      alt="Elephants"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Tanzanian Safari</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$475</span>\n  </p>\n  <p class="tours__gallery-description">\n    Have you always wanted to live with animals? Now is your chance! Join us for\n    a unique safari in Tanzania and go wild!\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        10 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span> Nature &\n        adventure, Safari\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 02.02.2022\n  </p>\n</li>';break;case"Asia":n.innerHTML='<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/taj-mahal.jpg"\n      alt="Taj Mahal"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Peerless Taj Mahal</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$250</span>\n  </p>\n  <p class="tours__gallery-description">\n    We will see the pearl of India, the Taj Mahal in all its glory. We will also\n    visit many other beautiful places in India and take stunning photos.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        5 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span> City tours,\n        History\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 08.11.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/chinese-gate.jpg"\n      alt="Chinese gate"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Chinese Essentials</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$350</span>\n  </p>\n  <p class="tours__gallery-description">\n    On this tour, we have collected all the iconic places in China that every\n    tourist should see, from Shanghai to the Chinese Wall.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Melissa Sol\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        7 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span>\n        City tours, History\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 11.12.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/buddha.jpg"\n      alt="Elephants"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Spiritual Thailand</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$625</span>\n  </p>\n  <p class="tours__gallery-description">\n    Thailand means not only a beach holiday, although we will have it too. But\n    apart from the beaches, we will also see stunning temples.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Alicia Keish\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        15 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span> Nature &\n        adventure, Resorts\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 05.01.2022\n  </p>\n</li>';break;case"Australia":n.innerHTML='<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/surfers.jpg"\n      alt="Surfers"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Australian Surfing</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$550</span>\n  </p>\n  <p class="tours__gallery-description">\n    Australian beaches are considered to be one of the best surfing\n    spots.Stunning sunsets and staying in exquisite lodges await you. Join our\n    adventure!\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Alicia Keish\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        5 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span> Nature &\n        adventure, Surfing\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 10.11.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/sydney.jpg"\n      alt="Chinese gate"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">Sydney + Canberra</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$450</span>\n  </p>\n  <p class="tours__gallery-description">\n    We will see two of Australia\'s most beautiful cities. And, of course, we\n    will visit the opera in Sydney, which you can see on any postcard.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Alexandro Rossa\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        7 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span>\n        City tours, History\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 11.12.2021\n  </p>\n</li>\n<li class="tours__gallery-item">\n  <div class="tours__gallery-img-container">\n    <img\n      src="./images/divers.jpg"\n      alt="Elephants"\n      width="353"\n      height="402"\n      class="tours__gallery-img"\n    />\n  </div>\n  <h3 class="tours__gallery-title">PRO Diving Tour</h3>\n  <p class="tours__gallery-price">\n    from <span class="tours__gallery-amount">$875</span>\n  </p>\n  <p class="tours__gallery-description">\n    We offer a diving tour to Australia. Underwater shooting and uncharted\n    depths await us. PADI/CMAS certificate is required.\n  </p>\n  <ul class="tours__gallery-info-list">\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-instagram-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Photographer:</span>\n        Alicia Keish\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-clocks-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Duration:</span>\n        10 days\n      </p>\n    </li>\n    <li class="tours__gallery-info-item">\n      <svg class="tours__gallery-info-icon" width="20" height="20">\n        <use href="./images/icons.svg#icon-star-tour"></use>\n      </svg>\n      <p class="tours__gallery-info-text">\n        <span class="tours__galleru-info-accent">Type:</span> Nature &\n        adventure, Diving\n      </p>\n    </li>\n  </ul>\n  <p class="tours__gallery-date">\n    <span class="tours__gallery-date-accent">Date:</span> 01.01.2022\n  </p>\n</li>'}}}))}();
//# sourceMappingURL=index.a7ff02d7.js.map
