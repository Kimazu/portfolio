var localization = {
    "en":
    [
        {id:"RadioOne", text:"ENG"},
        
        {id:"homelink", text:"Home"},
        {id:"aboutmelink", text:"About me"},
        {id:"workslink", text:"Works"},
        {id:"greet", text:"Hello! My name is György Tóthfalusi and I am a Web Developer."},
        {id:"arrowhover", text:"Click here for more details"},
        {id:"aboutme", text:"About me"},
        {id:"aboutmetext", text:"I graduated at the University of Debrecen in English Studies, however I have decided to not pursue that path. Instead, I have decided to look towards the internet and found webdeveloping and coding to be very intriguing. Therefore I have decided to become a self-taught developer. In my work and design, I strive for simplicity and efficiency; values I find the most important. My skills include:"},
        {id:"works", text:"Some of my works"},
        {id:"footer", text:"created by: György Tóthfalusi "},
        {id:"flag", src:"https://www.countryflags.io/us/flat/32.png"},
    ],
    "hu": [
        {id:"RadioOne", text:"HUN"},
        
        {id:"homelink", text:"Főoldal"},
        {id:"aboutmelink", text:"Rólam"},
        {id:"workslink", text:"Munkáim"},
        {id:"greet", text:"Hello! Tóthfalusi Györgynek hívnak és webfejlesztő vagyok."},
        {id:"arrowhover", text:"Részletekért kattints ide"},
        {id:"aboutme", text:"Rólam"},
        {id:"aboutmetext", text:"A Debreceni Egyetemen végeztem Anglisztika szakon, azonban úgy döntöttem, hogy nem ezt a karriert folytatom. Ehelyett az internetben látom a jövőt és a programozásban. Ezért úgy döntöttem, hogy saját magamat kiképzem fejlesztővé. A munkámban az egyszerűségre és hatékonyságra törekszem. Általam használt eszközök:"},
        {id:"works", text:"Néhány munkám"},
        {id:"footer", text:"készítette: Tóthfalusi György"},
        {id:"flag", src:"https://www.countryflags.io/hu/flat/32.png"},
    ] 
  }

  function toggleLanguage(s)
{
    var lang = s.checked?"hu": "en"
    for(var i = 0; i<localization[lang].length;i++){
    var a = localization[lang][i];
      var dom = document.getElementById(a.id)
      if(dom.text){
        dom.text= a.text
      }
      else if(dom.textContent){
        dom.textContent= a.text
      }
      else if(dom.src){
          dom.src= a.src
      }
    }
  
}

/*var flag_variable = 0;
var flag = document.getElementById("flag");
function toggleFlag(flag) {
    
    if(flag_variable == 0){
        flag.src = "https://www.countryflags.io/us/flat/32.png";
        flag_variable = 1;
    }
    else{
        flag.src = "https://www.countryflags.io/hu/flat/32.png";
        flag_variable = 0;
    }
}*/