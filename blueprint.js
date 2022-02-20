const marvelHeroes = [["Iron Man", 75], ["Captain America", 80], ["Scarlet Witch", 100], ["Thor", 100], ["Spider Man", 90], ["Quick Silver", 60], ["Wolverine", 92], 
["Hulk", 95], ["Deadpool", 92], ["Black Panther", 85], ["Doctor Strange", 98], ["Hawkeye", 50], ["Captain Marvel", 100], ["Vision", 90], ["Falcon", 55], ["War Machine", 73], 
["Black Widow", 50],["Ant Man", 72], ["Groot", 65], ["Drax", 55]];

const dcHeroes = [["Superman", 100, "https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/287150/403466/dec180597__90935.1549914625.jpg?c=2"],
                ["Batman", 78,"https://i.pinimg.com/originals/28/5e/19/285e1922d2936dd51d19e9f7f87ecd35.jpg"],
                ["Wonder Woman", 93, "https://managecomics.s3.amazonaws.com/uploads/product/image/dc-comics-wonder-woman-come-back-to-me-20190424.jpg"],
                ["Flash", 100, "https://i.pinimg.com/originals/48/04/9a/48049ae323958ddc5ebaee14d598801d.jpg"],
                ["Aquaman", 83, "https://cafans.b-cdn.net/images/Category_109769/subcat_180963/jLDOBbLp_2812181235391gpadd.jpg"], 
                ["Cyborg", 65,"https://i.pinimg.com/originals/4a/55/e2/4a55e2855f4134b07216b4b2ca87b5a3.png"], 
                ["Green Lantern", 67, "https://i.pinimg.com/originals/02/87/7c/02877c2cdae0b71c9131ace28207baec.jpg"],
                ["Shazam", 90, "https://i.pinimg.com/550x/4c/b5/5e/4cb55e6e95d7da9f2491b81c35df3081.jpg"], 
                ["Green Arrow", 59, "https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/03/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yMjMvNjQzL29yaWdpbmFsL0dyZWVuLUFycm93LWFubnVhbC0yLWNvdmVyLWJ5LURhdmlkLUxvcGV6LmpwZz8xNTIxOTIyMzA0.jpg"], 
                ["Martian Manhunter", 82,"https://static.wikia.nocookie.net/marvel_dc/images/8/8a/J%27onn_J%27onzz_028.jpg/revision/latest?cb=20130506011202" ], 
                ["Nightwing", 60, "https://media.comicbook.com/2021/03/nightwing-79-preview-3-1261997.jpeg?auto=webp&width=696&height=1071&crop=696:1071,smart"], 
                ["Robin", 57, "https://images-na.ssl-images-amazon.com/images/I/91oxWlKQNSL.jpg"], 
                ["Batwoman", 61,"https://static.wikia.nocookie.net/marvel_dc/images/4/4f/Batwoman_Vol_2_9_Textless.jpg/revision/latest?cb=20130711013448"], 
                ["Supergirl", 87, "https://static.wikia.nocookie.net/marvel_dc/images/7/7e/Kara_Zor-El_024.jpg/revision/latest/scale-to-width-down/1200?cb=20111001203124"], 
                ["Red Hood", 62, ], 
                ["Blue Beetle", 65, ], 
                ["Starfire", 85, ], 
                ["Raven", 89, ], 
                ["Beast Boy", 70, ], 
                ["Superboy", 87, ]];

function generateMarvelTeam(){
    alert("This function is being executed!!!!!")
    let random = Math.floor(Math.random() * 20 + 1)
    let random1 = Math.floor(Math.random() * 20 + 1)
    let random2 = Math.floor(Math.random() * 20 + 1)
    hero = marvelHeroes[random][0]
    hero1 = marvelHeroes[random1][0]
    hero2 = marvelHeroes[random2][0]
    console.log(hero)
    console.log(hero1)
    console.log(hero2)
}
document.getElementById("marvel").addEventListener("click", generateMarvelTeam);

function generateDCTeam(){
    alert("This function is being executed!!!!!")
    let random = Math.floor(Math.random() * 20 + 1);
    let random1 = Math.floor(Math.random() * 20 + 1);
    let random2 = Math.floor(Math.random() * 20 + 1);
    hero = dcHeroes[random][0]
    hero1 = dcHeroes[random1][0]
    hero2 = dcHeroes[random2][0]
    console.log(hero)
    console.log(hero1)
    console.log(hero2)
}
document.getElementById("dc").addEventListener("click", generateDCTeam);
