const isMuted = { value: true };

const data = [
  {
    id: 1,
    media:
      "https://res.cloudinary.com/dbom5i2yn/video/upload/v1766920515/anime_scene_n0fw56.mp4",
    username: "john_doe",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    caption: "Nature vibes 🌿✨ #travel #reels",
    likes: 1240,
    comments: 132,
    isSubscribed: false,
    isLiked: false,
    commentsList: [
      {
        username: "traveler_joe",
        profilePic: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Wow this is beautiful!",
      },
      {
        username: "nature_lover",
        profilePic: "https://randomuser.me/api/portraits/women/28.jpg",
        text: "I need to go here 😍",
      },
    ],
  },
  {
    id: 2,
    media:
      "https://res.cloudinary.com/dbom5i2yn/video/upload/v1766943960/arcane_xtyfou.mp4",
    username: "emma_w",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    caption: "Golden hour hits different ☀️ #aesthetic",
    likes: 980,
    comments: 87,
    isSubscribed: true,
    isLiked: true,
    commentsList: [
      {
        username: "photoguy",
        profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
        text: "Great lighting!",
      },
    ],
  },
  {
    id: 3,
    media:
      "https://res.cloudinary.com/dbom5i2yn/video/upload/v1766944245/knife_s60sgq.mp4",
    username: "alex_k",
    profilePic: "https://randomuser.me/api/portraits/men/76.jpg",
    caption: "Street photography mood 📸 #citylife",
    likes: 1560,
    comments: 201,
    isSubscribed: false,
    isLiked: false,
    commentsList: [
      {
        username: "city_walker",
        profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "Love the vibe using this!",
      },
      {
        username: "shutterbug",
        profilePic: "https://randomuser.me/api/portraits/men/33.jpg",
        text: "Which camera?",
      },
      {
        username: "street_art",
        profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
        text: "Dope shot 🔥",
      },
    ],
  },
  {
    id: 4,
    media:
      "https://res.cloudinary.com/dbom5i2yn/image/upload/v1766915824/samples/people/boy-snow-hoodie.jpg",
    username: "sophia",
    profilePic: "https://randomuser.me/api/portraits/women/65.jpg",
    caption: "Calm mountains, loud thoughts 🏔️",
    likes: 2100,
    comments: 340,
    isSubscribed: true,
    isLiked: true,
    commentsList: [
      {
        username: "hiker_guru",
        profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
        text: "Peaceful ✌️",
      },
    ],
  },
  {
    id: 5,
    media:
      "https://res.cloudinary.com/dbom5i2yn/video/upload/v1766916865/avengers_sbf33p.mp4",
    username: "rohan_dev",
    profilePic: "https://randomuser.me/api/portraits/men/21.jpg",
    caption: "Late night coding sessions 💻☕",
    likes: 875,
    comments: 59,
    isSubscribed: false,
    isLiked: false,
    commentsList: [
      {
        username: "dev_girl",
        profilePic: "https://randomuser.me/api/portraits/women/21.jpg",
        text: "Keep grinding!",
      },
      {
        username: "code_ninja",
        profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
        text: "Coffee is life ☕",
      },
    ],
  },
  {
    id: 6,
    media: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    username: "travel_with_me",
    profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
    caption: "Lost in the woods 🌲 #wanderlust",
    likes: 1920,
    comments: 178,
    isSubscribed: true,
    isLiked: true,
    commentsList: [
      {
        username: "forest_fan",
        profilePic: "https://randomuser.me/api/portraits/men/66.jpg",
        text: "Magical place ✨",
      },
    ],
  },
  {
    id: 7,
    media: "https://res.cloudinary.com/dbom5i2yn/video/upload/v1767018670/foodreci_dv5dsf.mp4",
    username: "fitness_freak",
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
    caption: "Consistency beats motivation 💪",
    likes: 1430,
    comments: 96,
    isSubscribed: false,
    isLiked: false,
    commentsList: [
      {
        username: "gym_rat",
        profilePic: "https://randomuser.me/api/portraits/men/88.jpg",
        text: "True that!",
      },
      {
        username: "fit_life",
        profilePic: "https://randomuser.me/api/portraits/women/55.jpg",
        text: "Inspiration 💯",
      },
    ],
  },
  {
    id: 8,
    media:
      "https://res.cloudinary.com/dbom5i2yn/video/upload/v1766922519/onepiece_alwede.mp4",
    username: "foodie_diaries",
    profilePic: "https://randomuser.me/api/portraits/women/72.jpg",
    caption: "Midnight cravings 🍔🔥",
    likes: 1680,
    comments: 210,
    isSubscribed: true,
    isLiked: true,
    commentsList: [
      {
        username: "burger_king",
        profilePic: "https://randomuser.me/api/portraits/men/44.jpg",
        text: "Looks delicious 😋",
      },
    ],
  },
  {
    id: 9,
    media: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    username: "music_addict",
    profilePic: "https://randomuser.me/api/portraits/men/90.jpg",
    caption: "Headphones on, world off 🎧",
    likes: 990,
    comments: 73,
    isSubscribed: false,
    isLiked: false,
    commentsList: [
      {
        username: "sound_guy",
        profilePic: "https://randomuser.me/api/portraits/men/22.jpg",
        text: "Best feeling ever",
      },
    ],
  },
  {
    id: 10,
    media:
      "https://res.cloudinary.com/dbom5i2yn/video/upload/v1766980069/food_ekdvmg.mp4",
    username: "creative_mind",
    profilePic: "https://randomuser.me/api/portraits/women/29.jpg",
    caption: "Creating > Consuming ✨",
    likes: 2250,
    comments: 415,
    isSubscribed: true,
    isLiked: true,
    commentsList: [
      {
        username: "artist_soul",
        profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
        text: "So true!",
      },
      {
        username: "maker_mark",
        profilePic: "https://randomuser.me/api/portraits/men/77.jpg",
        text: "Keep creating!",
      },
    ],
  },
];

const main = document.querySelector("main");

let reel = "";

data.forEach((item) => {
  reel += `
<section class="short" data-id="${item.id}">
  ${item.media.endsWith(".mp4")
      ? `<video preload="metadata" loop muted playsinline src="${item.media}"></video>`
      : `<img loading="lazy" src="${item.media}" />`
    }

  <i class="ri-heart-fill liked-dbl"></i>

  <div class="state-icon">
    <i class="ri-volume-up-fill"></i>
  </div>

  <div class="loader"></div>

  <div class="overlay"></div>

  <div class="right">
    <div class="like-btn">
      ${item.isLiked
      ? `<i class="ri-heart-fill liked"></i>`
      : `<i class="ri-heart-line"></i>`
    }
      <h6>${item.likes}</h6>
    </div>

    <div class="comment-btn">
      <i class="ri-chat-3-fill"></i>
      <h6>${item.comments}</h6>
    </div>

    <div>
      <i class="ri-send-plane-fill"></i>
      <h6>Share</h6>
    </div>

    <div>
      <i class="ri-more-2-line"></i>
    </div>
  </div>

  <footer>
    <div class="profile">
      <img src="${item.profilePic}" />
      <h2>${item.username}</h2>
      <div class="subscribe-btn">${item.isSubscribed ? "Subscribed" : "Subscribe"
    }</div>
    </div>
    <p>${item.caption}</p>
  </footer>

  <div class="comment-section">
      <div class="comment-header">
          <span>${item.comments} Comments</span>
          <i class="ri-close-line close-comment"></i>
      </div>
      <div class="comment-body">
          ${item.commentsList
      .map(
        (comment) => `
          <div class="single-comment">
              <img src="${comment.profilePic}" />
              <div class="comm-text">
                  <h4>${comment.username}</h4>
                  <p>${comment.text}</p>
              </div>
          </div>
          `
      )
      .join("")}
      </div>
  </div>

  <div class="progress-container">
      <div class="progress-bar"></div>
  </div>
</section>
`;
});

main.innerHTML = reel;

const shorts = document.querySelectorAll(".short");

shorts.forEach((card) => {
  const heart = card.querySelector(".liked-dbl");
  const likeBtn = card.querySelector(".like-btn");
  const likeIcon = likeBtn.querySelector("i");
  const likeCount = likeBtn.querySelector("h6");
  const video = card.querySelector("video");

  const commentBtn = card.querySelector(".comment-btn");
  const commentSection = card.querySelector(".comment-section");
  const closeCommentBtn = card.querySelector(".close-comment");

  const stateIconBox = card.querySelector(".state-icon");
  const stateIcon = stateIconBox.querySelector("i");

  const loader = card.querySelector(".loader");
  const progressBar = card.querySelector(".progress-bar");

  if (video) {
    if (video.readyState >= 3) {
      loader.style.opacity = 0;
    } else {
      video.addEventListener("loadeddata", () => {
        loader.style.opacity = 0;
      });
    }

    video.addEventListener("timeupdate", () => {
      const percentage = (video.currentTime / video.duration) * 100;
      progressBar.style.width = `${percentage}%`;
    });
  } else {
    const img = card.querySelector("img");
    if (img) {
      if (img.complete) {
        loader.style.opacity = 0;
      } else {
        img.addEventListener("load", () => {
          loader.style.opacity = 0;
        });
      }
    }
  }

  let clickTimeout;

  likeBtn.addEventListener("click", () => {
    let count = Number(likeCount.innerText);

    if (likeIcon.classList.contains("ri-heart-line")) {
      likeIcon.className = "ri-heart-fill liked";
      likeCount.innerText = count + 1;
    } else {
      likeIcon.className = "ri-heart-line";
      likeCount.innerText = count - 1;
    }
  });

  commentBtn.addEventListener("click", () => {
    commentSection.classList.add("comment-active");
  });

  closeCommentBtn.addEventListener("click", () => {
    commentSection.classList.remove("comment-active");
  });

  if (video) {
    let holdTimer;
    let isHolding = false;

    video.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    video.addEventListener("pointerdown", () => {
      isHolding = false;
      holdTimer = setTimeout(() => {
        isHolding = true;
        video.pause();
        card.classList.add("hide-ui");
      }, 300);
    });

    video.addEventListener("pointerup", () => {
      clearTimeout(holdTimer);
      if (isHolding) {
        video.play().catch(() => { });
        card.classList.remove("hide-ui");
        isHolding = false;
      }
    });

    video.addEventListener("pointerleave", () => {
      clearTimeout(holdTimer);
      if (isHolding) {
        video.play().catch(() => { });
        card.classList.remove("hide-ui");
        isHolding = false;
      }
    });

    video.addEventListener("pointercancel", () => {
      clearTimeout(holdTimer);
      isHolding = false;
    });

    video.addEventListener("click", (e) => {
      if (e.target !== video) return;
      if (isHolding) return;

      if (clickTimeout) clearTimeout(clickTimeout);

      clickTimeout = setTimeout(() => {
        isMuted.value = !isMuted.value;
        video.muted = isMuted.value;

        stateIcon.className = isMuted.value
          ? "ri-volume-mute-fill"
          : "ri-volume-up-fill";

        stateIconBox.classList.add("animate");
        setTimeout(() => stateIconBox.classList.remove("animate"), 700);

        clickTimeout = null;
      }, 250);
    });
  }

  card.addEventListener("dblclick", (e) => {
    if (!["VIDEO", "IMG"].includes(e.target.tagName)) return;

    if (clickTimeout) clearTimeout(clickTimeout);

    heart.classList.add("active");
    heart.classList.remove("gone");

    if (!likeIcon.classList.contains("liked")) {
      likeIcon.className = "ri-heart-fill liked";
      likeCount.innerText = +likeCount.innerText + 1;
    }

    setTimeout(() => {
      heart.classList.remove("active");
      heart.classList.add("gone");
    }, 800);

    setTimeout(() => heart.classList.remove("gone"), 1150);
  });

  const subBtn = card.querySelector(".subscribe-btn");
  subBtn.addEventListener("click", () => {
    subBtn.innerText =
      subBtn.innerText === "Subscribe" ? "Subscribed" : "Subscribe";
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const video = entry.target.querySelector("video");
      const commentSection = entry.target.querySelector(".comment-section");

      if (entry.isIntersecting) {
        if (video) {
          video.muted = isMuted.value;
          video.play().catch(() => { });
        }
      } else {
        if (commentSection) commentSection.classList.remove("comment-active");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  },
  { threshold: 0.6 }
);

shorts.forEach((s) => observer.observe(s));
