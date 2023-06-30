const data = [
    {
        id: "1",
        title: "Tiramisu",
        description: "The best tiramisu in town",
        image: "",
        price: "$5.00"
    },
    {
        id: "2",
        title: "Lemon Ice Cream",
        description: "Mind blowing taste",
        image: "",
        price: "$4.50"
    },
    {
        id: "3",
        title: "Chocholate mousse",
        description: "Unexplored flavour",
        image: "",
        price: "$6.00"
    },
];

export default function ArrayIs() {
    const listItems = data.map(dessert => {
        const itemText = `${dessert.title} - ${dessert.price}`
        return <li>{itemText}</li>
    })

    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

// const topDesserts = data.map(dessert => {
//     return {
//         content: `${dessert.title} - ${dessert.description}`,
//         price: dessert.price,
//     }
// })

// export default function ArrayIs() {
//     console.log(topDesserts);
//     return <h1>Examine the console</h1>
// }