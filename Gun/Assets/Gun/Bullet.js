#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collisionInfo : Collision){
	if(collisionInfo.gameObject.tag == "Box"){
		collisionInfo.gameObject.SendMessage("ApplyDamage");
	}
	Destroy(gameObject);
}