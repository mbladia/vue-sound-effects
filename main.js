var app = new Vue({
    el: '#app',
    data(){
        return{
            clickedItem:"",
            clickedIcon:"",
            clickedId:"",
            audio:"",
            keyboardPressed: "",
            items:[
                { 
                    "id":0,
                    icon:"🔊",
                    title: "Bruh",
                    name:"name0",
                    sound: './audio/bruh.mp3'
                },
                {
                    "id":1,
                    icon:"🔊",
                    name:"name1",
                    title:"Frolic Meme",
                    sound: './audio/curb.mp3'
                },
                {
                    "id":2,
                    icon:"🔊",
                    name:"name2",
                    title:"FBI Open up",
                    sound: './audio/fbi-open.mp3'
                },
                {
                    "id":3,
                    icon:"🔊",
                    name:"name3",
                    title:"John Cena",
                    sound: './audio/john-cena.mp3'
                },
                {
                    "id":4,
                    icon:"🔊",
                    name:"name4",
                    title:"Wow Anime",
                    sound: './audio/anime-wow.mp3'
                },
                {
                    "id":5,
                    icon:"🔊",
                    name:"name5",
                    title:"Comedy",
                    sound: './audio/spanish-flea.mp3'
                },
                {
                    "id":6,
                    icon:"🔊",
                    name:"name6",
                    title:"Illuminati",
                    sound: './audio/illuminati-confirmed.mp3'
                },
                {
                    "id":7,
                    icon:"🔊",
                    name:"name7",
                    title:"Mission Impossible",
                    sound: './audio/Mission-Imposible.mp3'
                },
                {
                    "id":8,
                    icon:"🔊",
                    name:"name8",
                    title:"My heart will go on",
                    sound: './audio/My-Heart-Will-Go-On.mp3'
                },
                {
                    "id":9,
                    icon:"🔊",
                    name:"name9",
                    title:"Masama maki-away",
                    sound: './audio/Masama-makipag-away.mp3'
                },
                // {
                //     "id":10,
                //     icon:"🔊",
                //     name:"name10",
                //     title:"Kids Cheering",
                //     sound: './audio/kids-cheering.mp3'
                // },
                // {
                //     "id":11,
                //     icon:"🔊",
                //     name:"name11",
                //     title:"Dalawang Beses",
                //     sound: './audio/dalawang-beses.mp3'
                // }
            ]
        }
    },
    methods:{
        playAudio(clickedName, clickedId){
            // console.log(clickedId);
            let changeIcon = this.items[clickedId]
            let audio = document.getElementById(clickedName)
            let icon = document.getElementById("icon"+clickedId)
            this.clickedIcon = icon
            icon.classList.add("spinner-border")
            this.audio = audio;
            this.clickedId = clickedId
            // console.log(audio);
            changeIcon.icon = ""
            this.isPlaying(this.audio.paused)
            // console.log(this.keyboardPressed);
            this.audio.onended = function(){
                icon.classList.remove("spinner-border")
                changeIcon.icon = "🔊"
            }
        },
        isPlaying(audelem){
            // console.log(audelem);
            if(!audelem){
                this.audio.pause()
                this.audio.currentTime = 0
                this.items[this.clickedId].icon = "🔊"
                this.clickedIcon.classList.remove("spinner-border")
            }else{
                this.audio.play()
            }
        }
    },
    created(){
        //listen keyboard
        document.addEventListener('keydown', (event) => {
            var name = event.key;
            this.keyboardPressed = name
            
            let keyboardAudio = document.getElementById(`name${name}`)
            let keyboardId = document.getElementById(`icon${name}`);
            let itemsKeyboard = this.items[name]
            this.audio = keyboardAudio
            this.clickedIcon = keyboardId
            this.clickedId = name
            let isPlaying

            
            if(name == '0' || name == '1' || name == '2' || name == '3' || name == '4' || name == '5' || name == '6'
                || name == '7' || name == '8' || name == '9' || name == '+' || name == '-'){
                    
                isPlaying =  this.audio.paused
                setTimeout(() => {
                    if(!isPlaying){
                        this.isPlaying(this.audio.paused)
                    }else{
                        this.audio.play()
                    }
                  }, 100);
                itemsKeyboard.icon = ""
                keyboardId.classList.add("spinner-border")
                this.audio.onended = function(){
                    keyboardId.classList.remove("spinner-border")
                    itemsKeyboard.icon = "🔊"
                }
                // console.log(name);
            }else{
                
            }
            
            

            
        }, false);
        //end of keyboard listening
    }
})
