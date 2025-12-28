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
      "https://res.cloudinary.com/dbom5i2yn/image/upload/v1766915842/main-sample.png",
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
      "https://res.cloudinary.com/dbom5i2yn/image/upload/v1766915827/samples/food/spices.jpg",
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
    media: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
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
const short = document.querySelector(".short");

let reel = "";

data.forEach((item) => {
  reel += `
         <section class="short">
       ${
         item.media.endsWith(".mp4")
           ? `<video loop autoplay muted playsinline src="${item.media}"></video>`
           : `<img src="${item.media}" />`
       }
       <i class="ri-heart-fill liked-dbl"></i>

        <div class="overlay"></div>

        <div class="right">
          <div class="like-btn">
          ${
            item.isLiked
              ? `<i class="ri-heart-fill liked"></i>`
              : `<i class="ri-heart-line"></i>`
          } 
            <h6>${item.likes}</h6>
          </div>
          <div>
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
            <img
              src="${item.profilePic}"
              alt="profile"
            />
            <h2>${item.username}</h2>
            <div class="subscribe-btn">${
              item.isSubscribed ? "Subscribed" : "Subscribe"
            }</div>
          </div>
          <p>${item.caption}</p>
        </footer>
      </section>
`;
});

main.innerHTML = reel;

document.querySelectorAll(".short").forEach((card) => {
  const heart = card.querySelector(".liked-dbl");

  card.addEventListener("dblclick", () => {
    heart.classList.remove("gone");
    heart.classList.add("active");

    clearTimeout(heart.timer);

    heart.timer = setTimeout(() => {
      heart.classList.remove("active");
      heart.classList.add("gone");
    }, 800);

    setTimeout(() => {
      heart.classList.remove("gone");
    }, 1300);
  });
});
