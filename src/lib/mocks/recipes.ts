import type {Recipe} from "$types/recipe";

export const recipes: Recipe[] = [
    {
        id: "1",
        title:"Pad Thai",
        image_url:"https://i.pinimg.com/564x/c5/bd/f2/c5bdf2d9269d436331ea20d8c0269436.jpg",
        estimated_time: "40 min",
        categories:["mostMade"]
    },
    {
        id: "2",
        title:"Cheeseburger",
        image_url:"https://static01.nyt.com/images/2020/03/04/dining/03fakemeatrex-cheeseburgers/merlin_168791004_aad8d605-35c1-4037-800f-4ea3260fc410-superJumbo.jpg",
        estimated_time:"30 min",
        categories:["mostMade"]
    },
    {
        id: "3",
        title:"Burrito Bowl",
        image_url:"https://www.eatingbirdfood.com/wp-content/uploads/2022/03/chicken-burrito-bowl-hero.jpg",
        estimated_time:"20 min",
        categories:["mostMade"]
    },
    {
        id: "4",
        title:"Gnocchi",
        image_url:"https://i0.wp.com/www.alainga.com/wp-content/uploads/2021/04/6IMG_6724.jpg?zoom=2&resize=150%2C150&ssl=1",
        estimated_time:"15 min",
        categories:["mostMade"]
    },
    {
        id: "5",
        title:"Fresh Gnocchi",
        image_url:"https://assets.epicurious.com/photos/573cd76640389de9670b8fa2/1:1/w_2560%2Cc_limit/shutterstock_380467537.jpg",
        estimated_time:"55 min",
        categories:["mustTry"]
    },
    {
        id: "6",
        title:"Potato Latkes",
        image_url:"https://www.paleorunningmomma.com/wp-content/uploads/2019/12/latkes_-10.jpg",
        estimated_time:"40 min",
        categories:["mustTry"]
    },
    {
        id: "7",
        title:"Matcha Pancakes",
        image_url:"https://www.natalieshealth.com/wp-content/uploads/2021/03/Matcha-Pancakes-3447.jpg",
        estimated_time:"30 min",
        categories:["mustTry"]
    },
]