const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const songList = $('.song-list')
const audio = $('.audio')
const songName = $('.song-name')
const play = $('.play')
const pause = $('.pause')
const range = $('#range')





const App = {
    songs: [
        {
            name: 'Làm vợ anh nhé',
            owner: 'Chi Dân',
            path:  './asset/song/song1.mp3',
            image: './asset/img/img1.jpeg'
        },

        {
            name: 'Làm người yêu anh nhé baby',
            owner: 'Châu Khải Phong',
            path:  './asset/song/song2.mp3',
            image: './asset/img/img2.jpeg'
        },

        {
            name: 'Một bước yêu vạn dạm đau',
            owner: 'Mr.Siro',
            path:  './asset/song/song3.mp3',
            image: './asset/img/img3.jpeg'
        },
    ],

    render: function(){
        const htmls = this.songs.map((e)=>{
            return `
                <div class="song-item">
                    <div class="song-avatar">
                        <img src="${e.image}" alt="">
                    </div>
                    <div class="song-content">
                        <p class="song-name-text">${e.name}</p>
                        <p class="song-owner">${e.owner}</p>
                        <p class="song-time"><pan class="minute">4</span>:<span class="second">56</span></p>
                    </div>
                    <div class="song-menu">
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            `
        })
        songList.innerHTML = htmls.join('')
    },

    loadSong: function() {
       audio.src = App.songs[0].path
       songName.innerHTML= App.songs[0].name
    },
    
    songPlayPause: function(){
        this.songPlay()
        this.songPause()
    },

    songPlay: function(){
        
        play.onclick = ()=>{
            play.style.display = 'none'
            pause.style.display = 'inline-block'
            audio.play()
            
        }

        audio.ontimeupdate = function(){
            const rangePer = audio.currentTime / audio.duration * 100
            range.value = rangePer
        }

        range.oninput = function(){
            audio.currentTime = audio.duration * range.value / 100
        }
    },
    
    songPause: function() {
        pause.onclick = ()=>{
            play.style.display = 'inline-block'
            pause.style.display = 'none'
            
            audio.pause()
        }
    },
    
    start: function(){
        this.loadSong()
        
        this.render()
        
        this.songPlayPause()
    }
}


App.start()
console.log([range])

