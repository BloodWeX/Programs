//Intro//
var itext= document.getElementById("itxt");
var intro= document.getElementById("intro");
var tag=document.createElement("p");
var title= document.createTextNode("The Sered Candle Collection");
var BT=document.createElement("button");
var BTT=document.createTextNode('❌');
function startintro(){
    intro.style.display="";
    intro.innerText="Hi there \n Welcome to -KS-";
    introtext("4000");   
}    
function introtext(timer){
    if (timer==undefined){timer="1000";}
    lotext("1");
    setTimeout(() => {
      lotext("2");
        setTimeout(()=>{  
      lotext("3");
        setTimeout(()=>{
        closeintro();
        },timer);
    },timer );
    }, timer);
}
function closeintro(){
    intro.style.display="none";
}
function lotext(stage,str){
    str=intro.innerText.replace(/❌/g,'');
   
    if(stage=="1"){
        intro.innerText="Welcome to Bloodworks Software Development";
       
    }
    else if(stage=="2"){
        intro.innerText=str+"\n This is a public test build for the upcomming launch of: ";
    }
    else if(stage==3){
        intro.innerText=str;
        tag.appendChild(title); intro.appendChild(tag);
    } 
    else if(stage==4){  
    }
    BT.appendChild(BTT); intro.appendChild(BT); 
}


//Title intro.innerText=intro.innerText+"\n\nPlease report any bugs to @BWebMaster";//
var Title = document.getElementById("title");
var head= document.getElementById("Ttile");
document.getElementById("Ttitle").addEventListener('mouseenter', Light);
document.getElementById("Ttitle").addEventListener('mouseleave', Light);
var fow=0;
function Light(){
    if(fow=="0"){
        Title.innerText="🕯 Kaitlyns Candles 🕯";
  
        fow=1;
    }
    else if(fow=="1"){
        Title.innerText=" Kaitlyns Candles ";
        fow=0;
    }
    else{alert("fail");}
    console.log("Fow "+fow);
}

//Items//
const vari ={
    item1:document.getElementById('i1'),
    item1img:document.getElementById("i1i"),
    item1title:document.getElementById("i1T"),
    item1txt:document.getElementById("i1t"),
};

//Pop//
var C1;
var p7 =document.getElementById("popup");
function Pop(title){
    openPop();
    if(title==undefined){return pop("error");}
    else {
        C1=title;
        pop(C1);
    }
}
function pop(type){
    if(type=="error"||type==undefined){
        alert("Pop Error");
    }
    else {
       document.getElementById("Pt").innerText = document.getElementById(type+"t").innerText;
       document.getElementById("Pi").src = document.getElementById(type+"i").src;
       document.getElementById("Pd").innerText = document.getElementById(type+"p").innerText;
    }
}
function openPop(){
    p7.style.display="";
}
function closePop(){
    p7.style.display="none";  
}






