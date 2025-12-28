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
  },
  {
    id: 7,
    media: "https://images.unsplash.com/photo-1517816428104-797678c7cf0c",
    username: "fitness_freak",
    profilePic: "https://randomuser.me/api/portraits/men/55.jpg",
    caption: "Consistency beats motivation 💪",
    likes: 1430,
    comments: 96,
    isSubscribed: false,
    isLiked: false,
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
  },
  {
    id: 10,
    media: "https://res.cloudinary.com/dbom5i2yn/image/upload/v1766915842/main-sample.png",
    username: "creative_mind",
    profilePic: "https://randomuser.me/api/portraits/women/29.jpg",
    caption: "Creating > Consuming ✨",
    likes: 2250,
    comments: 415,
    isSubscribed: true,
    isLiked: true,
  },
];

const main = document.querySelector("main");

const getDummyComments = () => `
  <div class="single-comment">
      <img src="https://randomuser.me/api/portraits/men/11.jpg" />
      <div class="comm-text">
          <h4>random_user1</h4>
          <p>This is amazing! 🔥</p>
      </div>
  </div>
  <div class="single-comment">
      <img src="https://randomuser.me/api/portraits/women/12.jpg" />
      <div class="comm-text">
          <h4>sarah_lee</h4>
          <p>Love the vibe of this video 😍</p>
      </div>
  </div>
  <div class="single-comment">
      <img src="https://randomuser.me/api/portraits/men/44.jpg" />
      <div class="comm-text">
          <h4>mike_tyson</h4>
          <p>First! 😂</p>
      </div>
  </div>
`;

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
          ${getDummyComments()}
      </div>
  </div>
      <div class="comment-body">
          ${getDummyComments()}
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

    video.addEventListener("mousedown", (e) => {
      if (e.target !== video) return;
      isHolding = false;
      holdTimer = setTimeout(() => {
        isHolding = true;
        video.pause();
        card.classList.add("hide-ui");
      }, 200);
    });

    video.addEventListener("mouseup", (e) => {
      if (holdTimer) clearTimeout(holdTimer);
      if (isHolding) {
        video.play().catch(() => { });
        card.classList.remove("hide-ui");
        setTimeout(() => {
          isHolding = false;
        }, 50);
      }
    });

    video.addEventListener("mouseleave", () => {
      if (holdTimer) clearTimeout(holdTimer);
      if (isHolding) {
        video.play().catch(() => { });
        card.classList.remove("hide-ui");
        isHolding = false;
      }
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
