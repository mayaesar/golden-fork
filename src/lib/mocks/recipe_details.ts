import type {RecipeDetails} from "$types/recipe";

export const recipe_details: RecipeDetails[] = [
    {
        id: "1",
        title:"Pad Thai",
        image_url:"https://i.pinimg.com/564x/c5/bd/f2/c5bdf2d9269d436331ea20d8c0269436.jpg",
        estimated_time: "40 min",
        categories:["mostMade"],
        ingredients: [
            { name: "flat rice noodles", quantity: 100, unit: "g" },
            { name: "shrimp, peeled and deveined", quantity: 100, unit: "g", note: "can substitute with tofu for a vegetarian version" },
            { name: "eggs", quantity: 1, unit: "pcs" },
            { name: "bean sprouts", quantity: .5, unit: "cup" },
            { name: "roasted peanuts, crushed", quantity: .25, unit: "cup" },
            { name: "green onions, chopped", quantity: 1.5, unit: "pcs" },
            { name: "garlic, minced", quantity: 1, unit: "cloves" },
            { name: "lime, cut into wedges", quantity: .5, unit: "pcs" },
            { name: "vegetable oil", quantity: 1, unit: "tablespoons" },
            { name: "fish sauce", quantity: 1.5, unit: "tablespoons", note: "use soy sauce for a vegetarian version" },
            { name: "tamarind paste", quantity: .5, unit: "tablespoon" },
            { name: "sugar", quantity: .5, unit: "tablespoon" },
            { name: "chili powder", quantity: .25, unit: "teaspoon", note: "adjust to taste" }
        ],
        instructions: [
            "Soak the rice noodles in warm water for about 20 minutes, until soft but not mushy. Drain and set aside.",
            "In a small bowl, combine the fish sauce, tamarind paste, sugar, and chili powder. Stir until the sugar dissolves. Set aside.",
            "Heat one tablespoon of vegetable oil in a large skillet or wok over medium-high heat. Add the shrimp (or tofu) and cook until the shrimp are pink and cooked through, about 2-3 minutes per side. Remove from the skillet and set aside.",
            "In the same skillet, add a little more oil if needed, and pour in the eggs. Scramble lightly until just set. Remove and set aside with the shrimp.",
            "Add a bit more oil to the skillet, then toss in the minced garlic. Sauté for about 30 seconds, until fragrant.",
            "Add the drained noodles to the skillet and pour the sauce over them. Toss everything together to coat the noodles well. Cook for about 2 minutes, then add the cooked shrimp (or tofu) and scrambled eggs back to the pan. Mix well.",
            "Add the bean sprouts and chopped green onions. Toss everything together and cook for another minute.",
            "Serve hot, garnished with crushed peanuts and lime wedges on the side."
        ]
    },
    {
        id: "2",
        title: "Classic Cheeseburger",
        image_url: "https://static01.nyt.com/images/2020/03/04/dining/03fakemeatrex-cheeseburgers/merlin_168791004_aad8d605-35c1-4037-800f-4ea3260fc410-superJumbo.jpg",
        estimated_time: "25 min",
        categories: ["mostMade", "QuickMeals"],
        ingredients: [
            { name: "ground beef", quantity: 150, unit: "g" },
            { name: "hamburger bun", quantity: 1, unit: "pcs" },
            { name: "cheddar cheese", quantity: 1, unit: "slice" },
            { name: "lettuce", quantity: 1, unit: "leaf" },
            { name: "tomato", quantity: 1, unit: "slice" },
            { name: "onion", quantity: 1, unit: "slice" },
            { name: "pickle slices", quantity: 2, unit: "pcs" },
            { name: "ketchup", quantity: 1, unit: "tablespoon" },
            { name: "mustard", quantity: 1, unit: "tablespoon" },
            { name: "mayonnaise", quantity: 1, unit: "tablespoon" },
            { name: "salt", quantity: .5, unit: "teaspoon" },
            { name: "black pepper", quantity: .25, unit: "teaspoon" },
            { name: "vegetable oil", quantity: 1, unit: "tablespoon", note: "for grilling" }
        ],
        instructions: [
            "Season the ground beef with salt and pepper, and form it into a patty slightly larger than your bun (it will shrink as it cooks).",
            "Heat a skillet or grill pan over medium-high heat and brush with vegetable oil. Cook the patty for about 3-4 minutes per side or until your desired doneness.",
            "Place the slice of cheddar cheese on the patty during the last minute of cooking to allow it to melt.",
            "While the patty cooks, toast the hamburger bun lightly on the skillet or grill pan.",
            "Spread mayonnaise, ketchup, and mustard on the inside of the bun.",
            "Build the burger by placing the lettuce, tomato, and onion slice on the bottom bun. Add the cooked patty with melted cheese, and top with pickle slices.",
            "Cover with the top bun, press down slightly, and serve immediately."
        ]
    },
    {
        id: "3",
        title: "Burrito Bowl",
        image_url: "https://www.eatingbirdfood.com/wp-content/uploads/2022/03/chicken-burrito-bowl-hero.jpg",
        estimated_time: "30 min",
        categories: ["Healthy", "QuickMeals","mostMade"],
        ingredients: [
            { name: "cooked rice", quantity: 0.5, unit: "cup" },
            { name: "black beans", quantity: 0.5, unit: "cup", note: "drained and rinsed" },
            { name: "corn", quantity: 0.5, unit: "cup" },
            { name: "cherry tomatoes", quantity: 0.25, unit: "cup", note: "halved" },
            { name: "cooked chicken breast", quantity: 100, unit: "g", note: "shredded" },
            { name: "avocado", quantity: 0.5, unit: "pcs", note: "sliced" },
            { name: "lime", quantity: 0.5, unit: "pcs", note: "juiced" },
            { name: "fresh cilantro", quantity: 1, unit: "tablespoon", note: "chopped" },
            { name: "cheddar cheese", quantity: 1, unit: "ounce", note: "shredded" },
            { name: "sour cream", quantity: 1, unit: "tablespoon" },
            { name: "jalapeño", quantity: 0.5, unit: "pcs", note: "sliced, optional" },
            { name: "olive oil", quantity: 1, unit: "teaspoon" },
            { name: "salt", quantity: 0.25, unit: "teaspoon" },
            { name: "pepper", quantity: 0.25, unit: "teaspoon" }
        ],
        instructions: [
            "In a bowl, toss the rice with lime juice, olive oil, salt, and pepper.",
            "Add the black beans and corn to the rice and mix gently.",
            "Layer the shredded chicken over the rice mixture.",
            "Top with cherry tomatoes, sliced avocado, and shredded cheddar cheese.",
            "Garnish with sour cream, chopped cilantro, and jalapeño slices if desired.",
            "Serve immediately, or cover and refrigerate for a chilled burrito bowl."
        ]
    },
    {
        id: "4",
        title: "Garlic Butter Parmesan Fried Gnocchi",
        image_url: "https://i0.wp.com/www.alainga.com/wp-content/uploads/2021/04/6IMG_6724.jpg?zoom=2&resize=150%2C150&ssl=1",
        estimated_time: "15 min",
        categories: ["mostMade", "QuickMeals", "Vegetarian"],
        ingredients: [
            { name: "unsalted butter", quantity: 4, unit: "tablespoons" },
            { name: "gnocchi", quantity: 500, unit: "g" },
            { name: "fine sea salt", quantity: 0.5, unit: "teaspoon" },
            { name: "garlic", quantity: 3, unit: "cloves", note: "minced" },
            { name: "grated Parmesan", quantity: 45, unit: "g" },
            { name: "fresh parsley", quantity: 2, unit: "tablespoons", note: "chopped" }
        ],
        instructions: [
            "Melt 3 tablespoons of butter in a medium skillet over medium-high heat.",
            "Add gnocchi and season with salt. Fry for 8-10 minutes until crispy and starting to brown, stirring frequently.",
            "In the last 30 seconds, add the remaining tablespoon of butter, minced garlic, and half of the Parmesan. Stir constantly until the cheese melts.",
            "Remove from heat. Stir in fresh parsley and remaining Parmesan. Serve immediately."
        ]
    }
];
