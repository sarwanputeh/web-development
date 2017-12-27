function profilePage(
	{ favColor = "pink" } = {},
	[name = "Bunny", age = 24] = []
) {
	console.log(`Name = ${name}, age = ${age}, color = ${favColor}`);
}

profilePage();
profilePage({ favColor: "blue" }, ["Ed", 30]);
profilePage({}, []);
