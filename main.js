var app = new Vue({
    el: '#app',
    data(){
        return{
            clickedItem:"",
            clickedIcon:"",
            clickedId:"",
            audio:"",
            items:[
                { 
                    "id":0,
                    icon:"🔊",
                    title: "Bruh",
                    name:"name1",
                    sound: './audio/bruh.mp3'
                },
                {
                    "id":1,
                    icon:"🔊",
                    name:"name2",
                    title:"Frolic Meme",
                    sound: './audio/curb.mp3'
                },
                {
                    "id":2,
                    icon:"🔊",
                    name:"name3",
                    title:"FBI Open up",
                    sound: './audio/fbi-open.mp3'
                },
                {
                    "id":3,
                    icon:"🔊",
                    name:"name4",
                    title:"John Cena",
                    sound: './audio/john-cena.mp3'
                },
                {
                    "id":4,
                    icon:"🔊",
                    name:"name5",
                    title:"Wow Anime",
                    sound: './audio/anime-wow.mp3'
                },
                {
                    "id":5,
                    icon:"🔊",
                    name:"name6",
                    title:"Comedy",
                    sound: './audio/spanish-flea.mp3'
                },
                {
                    "id":6,
                    icon:"🔊",
                    name:"name7",
                    title:"Illuminati",
                    sound: './audio/illuminati-confirmed.mp3'
                },
                {
                    "id":7,
                    icon:"🔊",
                    name:"name8",
                    title:"Mission Impossible",
                    sound: './audio/Mission-Imposible.mp3'
                },
                {
                    "id":8,
                    icon:"🔊",
                    name:"name9",
                    title:"My heart will go on",
                    sound: './audio/My-Heart-Will-Go-On.mp3'
                },
                {
                    "id":9,
                    icon:"🔊",
                    name:"name10",
                    title:"Masama maki-away",
                    sound: './audio/Masama-makipag-away.mp3'
                },
                {
                    "id":10,
                    icon:"🔊",
                    name:"name10",
                    title:"Kids Cheering",
                    sound: './audio/kids-cheering.mp3'
                },
                {
                    "id":11,
                    icon:"🔊",
                    name:"name11",
                    title:"Dalawang Beses",
                    sound: './audio/dalawang-beses.mp3'
                }
            ]
        }
    },
    methods:{
        playAudio(clickedName, clickedId){
            let changeIcon = this.items[clickedId]
            let audio = document.getElementById(clickedName)
            let icon = document.getElementById("icon"+clickedId)
            this.clickedIcon = icon
            icon.classList.add("spinner-border")
            this.audio = audio;
            this.clickedId = clickedId
            // console.log(changeIcon);
            changeIcon.icon = ""
            this.isPlaying(this.audio.paused)
            this.audio.onended = function(){
                icon.classList.remove("spinner-border")
                changeIcon.icon = "🔊"
            }
        },
        isPlaying(audelem){
            if(!audelem){
                this.audio.pause()
                this.audio.currentTime = 0
                this.items[this.clickedId].icon = "🔊"
                this.clickedIcon.classList.remove("spinner-border")
            }else{
                this.audio.play()
            }
        }
    }
})
