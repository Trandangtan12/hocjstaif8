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

const player = $('.player');
const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play')

const app = {
    currentIndex: 0,
    isPlaying: false,
    songs: [
        {
            name: 'Song 1',
            singer: 'singer 1',
            path: './music/song (1).mp3',
            image: './img/song (1).jpg'
        },
        {
            name: 'Song 2',
            singer: 'singer 2',
            path: './music/song (2).mp3',
            image: './img/song (2).jpg'
        },
        {
            name: 'Song 3',
            singer: 'singer 3',
            path: './music/song (3).mp3',
            image: './img/song (3).jpg'
        },
        {
            name: 'Song 4',
            singer: 'singer 4',
            path: './music/song (4).mp3',
            image: './img/song (4).jpg'
        },
        {
            name: 'Song 5',
            singer: 'singer 5',
            path: './music/song (5).mp3',
            image: './img/song (5).jpg'
        },
        {
            name: 'Song 6',
            singer: 'singer 6',
            path: './music/song (6).mp3',
            image: './img/song (6).jpg'
        },
        {
            name: 'Song 7',
            singer: 'singer 7',
            path: './music/song (7).mp3',
            image: './img/song (7).jpg'
        },
        {
            name: 'Song 8',
            singer: 'singer 8',
            path: './music/song (8).mp3',
            image: './img/song (8).jpg'
        },
        {
            name: 'Song 9',
            singer: 'singer 9',
            path: './music/song (9).mp3',
            image: './img/song (9).jpg'
        },
        {
            name: 'Song 10',
            singer: 'singer 10',
            path: './music/song (10).mp3',
            image: './img/song (10).jpg'
        }
    ],
    render: function () {
        const htmls = this.songs.map((song) => {
            return `
            <div class="song">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>`
        }).join("")
        $('.playlist').innerHTML = htmls
    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function () {
        const cdWidth = cd.offsetWidth;
        const _this = this

        //Xử lý khi phóng to / thu nhỏ CD
        document.onscroll = function () {
            const scrollY = window.scrollY
            const newCdWidth = cdWidth - scrollY

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

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

            audio.onplay =function () {
                _this.isPlaying = true
                player.classList.add('playing')
            }
            audio.onpause =function () {
                _this.isPlaying = false
                player.classList.remove('playing')
            }

            if(_this.isPlaying) {
                audio.pause()
            }else{
                audio.play()
            }

        }

    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

    start: function () {
        //Định nghĩa các thuộc tính cho object
        this.defineProperties()

        // Lắng nghe / xử lý các sự kiện (DOM event)
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        //Render playlist
        this.render()
    }
}
app.start()