import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOjIsImV4cCI6MTU4MzcyNDA5MCwidG9rZW5faWQiOiJDNkdRU1pUMlY0cFdaVDJJMXFkcE1EMDVDOVF4ckRJdE1UNE5COGhlZmVhbExTUENxYiIsInVzZXJfaWQiOjF9.VVslVLvidgGJfh8E89PT6mZ8e3hnH4jjtTGg1CE9rnY");

    var raw = JSON.stringify({"page":1,"items_per_page":15,"order_by_field":"","order_by_direction":"","product_no":"","product_name":"","description_1":"","description_2":"","brand_id":0,"category_id":0,"all_outlets":"","is_active":"1","show_relationship":true});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    fetch("https://prxdev.shushu.co/products", requestOptions)
      .then(response => response.json())
      .then(result => setItems(result.data.items))
      .catch(error => console.log('error', error));

      //console.log(items)
  }


  return (
    <div>
      {items.map(item => (
          <h1 key={item.id}><Link to={`/shop/${item.uuid}`}>{item.product_name}</Link></h1>
      ))}
    </div>
  );
}

export default Shop;
