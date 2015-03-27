#pragma strict

var explosionPrefab : GameObject;
var colorName : String;

private var damaged : boolean;
private var killTimer : float;

function Start () {

}


function ApplyDamage(){
	if(!damaged){
		damaged = true;
		killTimer = 0.4;
		rigidbody.AddForce(Vector3.up * 2.0, ForceMode.Impulse);
	}
}

function Update () {
	if(!damaged) return;
	killTimer -= Time.deltaTime;
	if(killTimer <= 0.0){
		var gameController : GameObject = GameObject.FindWithTag("GameController");
		gameController.SendMessage("OnDestroyBox", colorName);
		Instantiate(explosionPrefab, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}