const Pills = ({category}) =>{
    return(
        <span className="block" style={{
            display: "inline-block",
            padding: "0.5rem",
            margin: "1rem"
        }}>{category}</span>
    )
}

export default function Recckeys(){
    const keywords = ["Technology", "Travel", "Foodie", "Fitness", "Fashion", "Art", "Photography", "Music", "Gaming", "Books",
    "Movies", "Nature", "Pets", "DIY", "Cooking", "Health", "Wellness", "Adventure", "Crafts", "Science",
    "Business", "Entrepreneurship", "Motivation", "Inspiration", "Education", "Parenting", "Sustainability",
    "Beauty", "Lifestyle", "Sports", "Cars", "Home Decor", "Fitness", "Yoga", "Mindfulness", "Technology",
    "Programming", "Coding", "Gardening", "Hiking", "Cycling", "Fishing", "Travel Photography", "Writing",
    "Podcasts", "Fashion Trends", "Vegan Lifestyle", "Finance", "History"]

    const categoryArray = keywords.map(keyword => {
        return <Pills category={keyword} />
    })

    return(
        <div className="recommendation-dialog">
            <h1>Choose your preferences</h1>
            {categoryArray}
        </div>
    )
}

