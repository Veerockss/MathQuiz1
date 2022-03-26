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
        number1 = document.getElementById("word").value;
        number2 = document.getElementById("word2").value;
        actual_answer = parseInt(number1) * parseInt(number2);
        question_word = "<h5>" + number1 + " X " + number2 + "</h5>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
        row = question_word + input_box + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("word").value = "";
        document.getElementById("word2").value = "";
    }
    questionturn="player1";
    answerturn="player2";
    function check(){
        getAnswer=document.getElementById("input_check_box").value;
        answer=getAnswer.toLowerCase();
        if(answer==word){
            if(answerturn=="player1"){
                player_1_score=player_1_score+1;
                document.getElementById("player1score").innerHTML=player_1_score;
            }
            else{
                player_2_score=player_2_score+1;
                document.getElementById("player2score").innerHTML=player_2_score;
            }
        }
        if(questionturn=="player1"){
            questionturn="player2";
            document.getElementById("qestionturn").innerHTML="Question turn: "+player2_name;
        }
        else{
            questionturn="player1";
            document.getElementById("qestionturn").innerHTML="Question turn: "+player1_name;
        }
        if(answerturn=="player1"){
            answerturn="player2";
            document.getElementById("answerturn").innerHTML="Answer turn: "+player2_name;
        }
        else{
            answerturn="player1";
            document.getElementById("answerturn").innerHTML="Answer turn: "+player1_name;
        }
        document.getElementById("output").innerHTML="";
    }
    