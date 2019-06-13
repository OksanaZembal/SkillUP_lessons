var user = '{"name":"Vasya", "age":35, "isAdmin": false, "friends":[0,1,2,3]}';
user = JSON.parse(user);
alert(user.friends[1]);

for (key in user) {
    if (key != "friends") {
        console.log(key + ":" + user[key])
    } else {
        var sum = 0;
        var g = user[key];
        for (i = 0; i < g.length; i++) {
            sum = sum + g[i];
            console.log("friends" + ":" + g[i]);
        }
        console.log("array sum elements = " + sum);
    }

};