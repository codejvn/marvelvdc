const marvelHeroes = [["Iron Man", 75, "https://static.wikia.nocookie.net/ironman/images/c/c6/STL097606.jpg/revision/latest?cb=20191117212158"], 
["Captain America", 80, "https://i.annihil.us/u/prod/marvel/i/mg/f/80/5d1cc916ea7ee/clean.jpg"], 
["Scarlet Witch", 100, "https://i.annihil.us/u/prod/marvel/i/mg/c/50/600f0ecde6e93/clean.jpg"], 
["Thor", 100, "https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/275357/384798/aug180948__31281.1539811934.jpg?c=2"], 
["Spider Man", 90, "90- https://i.annihil.us/u/prod/marvel/i/mg/1/03/603d22047d295/clean.jpg"], 
["Quick Silver", 60, "https://static.wikia.nocookie.net/marveldatabase/images/5/52/Pietro_Maximoff_%28Earth-616%29_from_Quicksilver_No_Surrender_Vol_1_4_001.jpg/revision/latest?cb=20180811220338"], 
["Wolverine", 92, "https://i.annihil.us/u/prod/marvel/i/mg/a/70/5c87e9cca9458/clean.jpg"], 
["Hulk", 95, "https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/7892286-immortal_hulk_vol_1_38_.jpg"], 
["Deadpool", 92, "https://i.annihil.us/u/prod/marvel/i/mg/8/90/5b0f168c10c3b/clean.jpg"], 
["Black Panther", 85, "https://images-na.ssl-images-amazon.com/images/I/910Z-f1jDRL.jpg"], 
["Doctor Strange", 98, "https://static.wikia.nocookie.net/marveldatabase/images/1/10/Marvel_Tales_Doctor_Strange_Vol_1_1_Virgin_Variant.jpg/revision/latest?cb=20191110040407"], 
["Hawkeye", 50, "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/223888/DIG057234_1._SX1600_QL80_TTD_.jpg"], 
["Captain Marvel", 100, "https://www.previewsworld.com/SiteImage/MainImage/STL165911.jpg"], 
["Vision", 90, "https://www.previewsworld.com/SiteImage/MainImage/STL008498"], 
["Falcon", 55, "https://static.wikia.nocookie.net/marveldatabase/images/8/86/Falcon_Vol_2_7_Textless.jpg/revision/latest?cb=20180124013445"], 
["War Machine", 73, "https://static.wikia.nocookie.net/marveldatabase/images/2/2b/James_Rhodes_%28Earth-616%29_from_Tony_Stark_Iron_Man_Vol_1_18_001.jpg/revision/latest?cb=20200107234716"], 
["Black Widow", 50, "https://i.annihil.us/u/prod/marvel/i/mg/5/03/601898d81a213/clean.jpg"],
["Ant Man", 72, "https://media.hollywood.com/images/l/antmanmarvelcomicscomiccon.jpg"], 
["Groot", 65, "https://i.pinimg.com/736x/24/da/07/24da074165f7521c748f96f01318a1f4.jpg"], 
["Drax", 55, "https://comicvine.gamespot.com/a/uploads/scale_medium/3/31666/4529800-drax-19b77.jpg"]];

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
                ["Red Hood", 62, "https://media.comicbook.com/2020/08/titans-red-hood-1234313.jpeg?auto=webp&width=696&height=1077&crop=696:1077,smart" ], 
                ["Blue Beetle", 65, "https://i.pinimg.com/736x/7d/7c/48/7d7c485a9b935c26410d73d3a62672c6.jpg"], 
                ["Starfire", 85, "https://static.wikia.nocookie.net/marvel_dc/images/2/28/Teen_Titans_Vol_6_16_Textless.jpg/revision/latest?cb=20180124210548"], 
                ["Raven", 89, "https://img.search.brave.com/twaM7-fZcemClarS6-eiKVmVIdNWRRe7a9Tlweo87rg/rs:fit:700:905:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/aGVyb2VzLWZyL2lt/YWdlcy81LzVhL1Jh/dmVuX0RjX0NvbWlj/cy5qcGcvcmV2aXNp/b24vbGF0ZXN0P2Ni/PTIwMjAxMDE1MTAw/MjU5JnBhdGgtcHJl/Zml4PWZy"]
                ["Beast Boy", 70, "https://img.search.brave.com/3P6AJ_mEFobiwFng0gCU8fTdSgBSkzb-wAxNqx3ysc4/rs:fit:306:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/cHMwY2NGbEdtbHRG/ODU1b01lRmtRSGFM/YyZwaWQ9QXBp"], 
                ["Superboy", 87, "https://img.search.brave.com/7AgmIKZ3SV5EBu7Vu7nm0VrWjxRtoUJxJKCHDDW428M/rs:fit:1024:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2I4LzE5/LzI0L2I4MTkyNGJm/YjQ0MmRjNDQ1YTVi/NDczZWMwNmU3ZGZk/LmpwZw"]];
let totalMarvelPower, totalDCPower;
function generateMarvelTeam(){
    let random = Math.floor(Math.random() * 20 + 1)
    let random1 = Math.floor(Math.random() * 20 + 1)
    let random2 = Math.floor(Math.random() * 20 + 1)
    if (random == random1 || random == random2 || random1 == random2){
        if (random == random1){
            while (random1 == random1){
                random1 = Math.floor(Math.random() * 20 + 1)
            }
        }
        if (random == random2){
            while (random == random2){
                random2 = Math.floor(Math.random() * 20 + 1)
            }
        }
        if (random1 == random2){
            while(random1 == random2){
                random2 = Math.floor(Math.random() * 20 + 1)
            }
        }
    }
    hero = marvelHeroes[random][0]
    hero1 = marvelHeroes[random1][0]
    hero2 = marvelHeroes[random2][0]
    totalMarvelPower = marvelHeroes[random][1] + marvelHeroes[random1][1] + marvelHeroes[random2][1];
    var total = document.getElementById("MP")
    total.textContent += totalMarvelPower
    // console.log(hero)
    // console.log(hero1)
    // console.log(hero2)
    var name = document.getElementById("M1")
    name.textContent += hero
    var name1 = document.getElementById("M2")
    name1.textContent += hero1
    var name2 = document.getElementById("M3")
    name2.textContent += hero2
    //document.getElementById("M2").appendChild(hero1)
    // let img1 = document.createElement('img1')
    // img1.src = marvelHeroes[random1][2]
    // console.log(img1.src)
    // img1.width = 100
    // img1.height = 100
    // document.getElementById("M2").appendChild(img1)
    // var img2 = document.createElement('img2')
    // img2.src = dcHeroes[random2][2]
    // document.getElementById("M3").appendChild(img2)m
}
document.getElementById("marvel").addEventListener("click", generateMarvelTeam);

function generateDCTeam(){
    let random = Math.floor(Math.random() * 20 + 1);
    let random1 = Math.floor(Math.random() * 20 + 1);
    let random2 = Math.floor(Math.random() * 20 + 1);
    if (random == random1 || random == random2 || random1 == random2){
        if (random == random1){
            while (random1 == random1){
                random1 = Math.floor(Math.random() * 20 + 1)
            }
        }
        if (random == random2){
            while (random == random2){
                random2 = Math.floor(Math.random() * 20 + 1)
            }
        }
        if (random1 == random2){
            while(random1 == random2){
                random2 = Math.floor(Math.random() * 20 + 1)
            }
        }
    }
    hero = dcHeroes[random][0]
    hero1 = dcHeroes[random1][0]
    hero2 = dcHeroes[random2][0]
    totalDCPower = dcHeroes[random][1] + dcHeroes[random1][1] + dcHeroes[random2][1];
    var total = document.getElementById("DCP")
    total.textContent += totalDCPower
    // document.querySelector(".M1".stylebackgroundImage = `url("${dcHeroes[random1][2]}")`)
    var name = document.getElementById("DC1")
    name.textContent += hero
    var name1 = document.getElementById("DC2")
    name1.textContent += hero1
    var name2 = document.getElementById("DC3")
    name2.textContent += hero2
    // console.log(hero)
    // console.log(hero1)
    // console.log(hero2)
}
document.getElementById("dc").addEventListener("click", generateDCTeam);

function fight() {
    if(totalDCPower != 0 && totalMarvelPower != 0){
        if(totalDCPower > totalMarvelPower){
            alert("DC wins")
        } else if(totalMarvelPower > totalDCPower){
            alert("Marvel Wins")
        } else{
            alert("Tie")
        }
    }
}
document.getElementById("fight").addEventListener("click", fight);

