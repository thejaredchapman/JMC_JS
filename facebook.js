# CREATE A FACEBOOK 

# username info
{
	username: "Jared",
	password: "cooldad"

}

# username in system
var database = [
	{
		username: "Jared",
		password: "cooldad"
	}
];

#

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
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function singIN(user,pass) {
	if (username  === database[0].username && 
		password === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Looks like that's not the right password!")
	}
}

singIN(userNamePrompt, passwordPrompt);
