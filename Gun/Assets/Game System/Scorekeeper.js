#pragma strict

@HideInInspector

var skin : GUISkin;
var score : int;

function Start () {

}

function Update () {

}

function OnGUI(){
	GUI.skin = skin;
	var sw : int = Screen.width;
	var sh : int = Screen.height;
	var scoreText : String = "SCORE : " + score.ToString();
	GUI.Label(Rect(0, 0, sw / 2, sh / 4), scoreText, "score");
}

function TimeUp() {
	enabled = false;
}
