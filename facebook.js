// CREATE A FACEBOOK 

# username info
{
	username: "Jared",
	password: "cooldad"

},{username: "Liam",
	password: "Autobot"

},{
	username: "Megatron",
	password: "Optimus"

},


// username in system
var database = [
	{
		username: "Jared",
		password: "cooldad"
	}
];

#
// Newsfeed from other users
var newsfeed = [
	{
		username: "Avery",
		timeline: "I love Jared so much!"
	},
	{
		username: "Adam",
		timeline: "Surfing on cows"
	},
	{
		username: "Bartholemule"
		timeline: "Me and Betsy went for a light jog, lovin' popsicles, yum yum yum!!"
	}
]

// Check username


function isUserValid(username,password) {
	for (var i=0; i < database.length; i++){
		if(database[i].username === username &&
			database[i].password === password)
			return true;
	}
	return false;
}

function singIN(username,password) {
	console.log(isUserValid(username, password));
	if (isUserValid(username, password)) {
		console.log(newsfeed)
	}	else {
			alert("Look's like that's not the right password")
	}
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");


singIN(userNamePrompt, passwordPrompt);
