player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");

player_1_score=0;
player_2_score=0;

document.getElementById("player1name").innerHTML=player1_name +":";
document.getElementById("player2name").innerHTML=player2_name +":";

document.getElementById("player1score").innerHTML=player_1_score;
document.getElementById("player2score").innerHTML=player_2_score;

document.getElementById("qestionturn").innerHTML="Question Turn: "+player1_name;
document.getElementById("answerturn").innerHTML="Answer Turn: "+player2_name;

function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    
    charAt1=word.charAt(1);
    console.log(charAt1);
    lengthdivide2=Math.floor(word.length/2);
    charAt2=word.charAt(lengthdivide2);
    console.log(charAt2);
    lastchar=word.length-1;
    charAt3=word.charAt(lastchar);
    console.log(charAt3);

    removechar1=word.replace(charAt1,"_");
    removechar2=removechar1.replace(charAt2,"_");
    removechar3=removechar2.replace(charAt3,"_");
    console.log(removechar3);

    questionword="<h4 id='word_display'>Q. "+removechar3+"</h4>";
    textbox="<br>Answer: <input type='text' id='input_check_box'>";
    button="<br><br><button class='btn btn-info' onclick='check();'> Check </button>";
    row=questionword+textbox+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").innerHTML="";
}