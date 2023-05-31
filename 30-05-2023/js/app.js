import {tweetGen} from "../utils/fn.js";
import {GET} from "../utils/http.js";
const contentEl = document.querySelector(".iconList");


let usersList = [];

GET("/users").then(({users}) => usersList = users).then(() => {
    GET("/post").then(({posts}) => posts.map((p) => {
        p.user = usersList.find((u) => u.id === p.userId);
        return p;
    })).then(posts => posts.forEach(p => {
        contentEl.append(tweetGen(p));   
    }));
});



