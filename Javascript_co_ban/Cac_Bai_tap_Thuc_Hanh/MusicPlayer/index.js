/* Các bước xây dựng
  1. Render Song
  2. Scroll top
  3. Play / pause / seek
  4. CD rotate
  5. Next / prev
  6. Random number
  7. Next / Repeat when ended
  8. Active song
  9. Scoll active song into view
  10. Play song when click
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8_PLAYER'

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const nextBtn = $(".btn-next");
const prevBtn = $(".btn-prev");
const randomBtn = $(".btn-random");
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

  songs: [
    {
      name: "Song 1",
      singer: "singer 1",
      path: "./music/song (1).mp3",
      image: "./img/song (1).jpg",
    },
    {
      name: "Song 2",
      singer: "singer 2",
      path: "./music/song (2).mp3",
      image: "./img/song (2).jpg",
    },
    {
      name: "Song 3",
      singer: "singer 3",
      path: "./music/song (3).mp3",
      image: "./img/song (3).jpg",
    },
    {
      name: "Song 4",
      singer: "singer 4",
      path: "./music/song (4).mp3",
      image: "./img/song (4).jpg",
    },
    {
      name: "Song 5",
      singer: "singer 5",
      path: "./music/song (5).mp3",
      image: "./img/song (5).jpg",
    },
    {
      name: "Song 6",
      singer: "singer 6",
      path: "./music/song (6).mp3",
      image: "./img/song (6).jpg",
    },
    {
      name: "Song 7",
      singer: "singer 7",
      path: "./music/song (7).mp3",
      image: "./img/song (7).jpg",
    },
    {
      name: "Song 8",
      singer: "singer 8",
      path: "./music/song (8).mp3",
      image: "./img/song (8).jpg",
    },
    {
      name: "Song 9",
      singer: "singer 9",
      path: "./music/song (9).mp3",
      image: "./img/song (9).jpg",
    },
    {
      name: "Song 10",
      singer: "singer 10",
      path: "./music/song (10).mp3",
      image: "./img/song (10).jpg",
    },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs
      .map((song, index) => {
        return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>`;
      })
      .join("");
    playlist.innerHTML = htmls;
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const cdWidth = cd.offsetWidth;
    const _this = this;

    //Xử lý CD quay / dừng
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 15000, // 10 giây
      iterations: Infinity,
    });
    cdThumbAnimate.pause();

    //Xử lý khi phóng to / thu nhỏ CD
    document.onscroll = function () {
      const scrollY = window.scrollY;
      const newCdWidth = cdWidth - scrollY;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click player
    playBtn.onclick = function () {
      // Code tư duy thôi chức như này là xấu
      // if(_this.isPlaying) {
      //     _this.isPlaying = false;
      //     audio.pause()
      //     player.classList.remove('playing')
      // }else {
      //     _this.isPlaying = true
      //     audio.play()
      //     player.classList.add('playing')
      // }
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }

      // Khi song được play
      audio.onplay = function () {
        _this.isPlaying = true;
        player.classList.add("playing");
        cdThumbAnimate.play();
      };

      //khi song bị pause
      audio.onpause = function () {
        _this.isPlaying = false;
        player.classList.remove("playing");
        cdThumbAnimate.pause();
      };

      //khi tiến độ bài hát thay đổi
      audio.ontimeupdate = function () {
        if (audio.duration) {
          const progressPercent = Math.floor(
            (audio.currentTime / audio.duration) * 100
          );
          progress.value = progressPercent;
        }
      };
    };

    //Xử lý khi tua song
    progress.oninput = function (e) {
      audio.pause();
      setTimeout(() => {
        audio.play();
      }, 500);
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
    //Khi next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      player.classList.add("playing");
      cdThumbAnimate.play();
      _this.render()
      _this.scrollToActiveSong();
    };

    //khi prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      player.classList.add("playing");
      cdThumbAnimate.play();
      _this.render()
      _this.scrollToActiveSong();
    };

    //Khi xử lý bật tắt random song
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      randomBtn.classList.toggle("active", _this.isRandom);
      _this.setConfig('isRandom', _this.isRandom)
    };
    // xử lý khi next song khi audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play()
      } else {
        if (this.isRandom = true) {
          nextBtn.click() // hàm click xử lý những việc tự bấm nút click
        }
      }


    }

    //Xử lý lặp lại 1 song
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      repeatBtn.classList.toggle('active', _this.isRepeat)
      _this.setConfig('isRepeat', _this.isRepeat)

    }

    // Lắng nghe hành vi click vào playlist
    playlist.onclick = function (e) {
      const songNode = e.target.closest('.song:not(.active)') 
      if ( songNode|| e.target.closest('.option')) {
        //Xử lý khi click vào song
        if (songNode) {
            _this.currentIndex = Number(songNode.dataset.index)
            _this.render()
            _this.loadCurrentSong()
            audio.play()
            // player.classList.add("playing");
            // cdThumbAnimate.play();
        }

        //Xử lý khi click vào song option
      }
    }
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom
    this.isRepeat = this.config.isRepeat
   

  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      }, 300)
    })
  },
  start: function () {
    //Gán cấu hình từ config vào ứng dụng
    this.loadConfig()
    //Định nghĩa các thuộc tính cho object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM event)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    //Render playlist
    this.render();

    //Hiện thị trạng thái ban đầu của btn reapeat && btn random
    repeatBtn.classList.toggle('active', this.isRepeat)
    randomBtn.classList.toggle('active', this.isRandom)
  },
};
app.start();
