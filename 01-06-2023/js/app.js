import { tweetGen, followGen } from '../utils/fn.js'
import { GET } from '../utils/http.js'
const contentEl = document.querySelector('.iconList')

const followItemsEl = document.querySelector('.follow__items')

let usersList = []

GET('/users')
    .then(({ users }) => (usersList = users))
    .then(() => {
        usersList.slice(0, 20).forEach((user) => {
            followItemsEl.append(followGen(user))
        })
        GET('/post')
            .then(({ posts }) =>
                posts.map((p) => {
                    p.user = usersList.find((u) => u.id === p.userId)
                    return p
                })
            )
            .then((posts) =>
                posts.forEach((p) => {
                    contentEl.append(tweetGen(p))
                })
            )
    })
