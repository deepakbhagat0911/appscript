import React, { useState,useEffect } from 'react';
import './Main.css';

function Hero() {
  const [showFilter, setShowFilter] = useState(true); 
  const [products, setProducts] = useState([]);
  const [collapsed, setCollapsed] = useState({
    idealFor: false,
    work: false,
    fabric: false,
    occasion: false,
  });

  const toggleCollapse = category => {
    setCollapsed(prevState => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  const filterOptions = [
    {
      category: 'Ideal for',
      subcategories: ['Work', 'Casual', 'Formal']
    },
    {
      category: 'Work',
      subcategories: ['Cotton', 'Polyester', 'Silk']
    },
    {
      category: 'Fabric',
      subcategories: ['Cotton', 'Polyester', 'Silk']
    },
    {
      category: 'Occasion',
      subcategories: ['Party', 'Wedding', 'Office']
    }
  ];
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProducts();
  }, []); 

  return (
    <div className={`container ${showFilter ? 'filter-open' : ''}`}>
      <header className="header-hero">
        <button onClick={toggleFilter} className='filter-Button'>
          {showFilter ? 'Hide Filter' : 'Show Filter'}
        </button>
      </header>
      <div className="content">
        {showFilter && (
    <div className="filter-sidebar">
      {filterOptions.map(({ category, subcategories }) => (
        <div key={category} className={`category ${collapsed[category] ? 'collapsed' : 'expanded'}`}>
          <div className="header-c" onClick={() => toggleCollapse(category)}>
            <p>{category}</p>
            <div className={`arrow ${collapsed[category] ? 'collapsed' : 'expanded'}`}></div>
          </div>
          {!collapsed[category] && (
            <ul>
              {subcategories.map(subcategory => (
                <li key={subcategory}>
                  <label>
                    <input type="checkbox" name={`${category}-${subcategory}`} value={subcategory} />
                    {subcategory}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    )}
        <div className="product-grid">
            {products.map((product)=>{
                return(
                    <>
                     <div className="product-card">
                    <img src={product.image} alt="Product" />
                    <h3>{product.category}</h3>
                    <p>${product.price}</p>
                    </div>
                    </>
                )
            })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
