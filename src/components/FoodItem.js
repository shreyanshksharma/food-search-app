const FoodItem = ({ item }) => {
    return (
        <div className="foodItem" data-testid={item.foodId}>
            <h2>{item.label}</h2>
            <img src={item.image} alt={item.label} />
            <a href={item.uri} target="_blank" rel="noopener noreferrer">
                <button type='button' >Buy</button>
            </a>
        </div>
    );
};

export default FoodItem;