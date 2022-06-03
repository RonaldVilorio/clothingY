const App = ()=>{
  const categories = [
    {
      id:1,
      title: "Hats"
    },
    {
      id:2,
      title: "Jackets"
    },{
      id:3,
      title: "Sneakers"
    },{
      id:4,
      title: "Womens"
    },{
      id:5,
      title: "Mens"
    },
  ]
  return (
    <div className="categories_container">
      {categories.map(({title})=>(
        <div className="category_container">
          <div className="background_image"/>
          <div className="category_body_container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
      </div>
      ))}
      
    </div>
  );
}

export default App;
