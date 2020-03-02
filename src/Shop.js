import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);


  const fetchItems = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOjIsImV4cCI6MTU4MzcyNDA5MCwidG9rZW5faWQiOiJDNkdRU1pUMlY0cFdaVDJJMXFkcE1EMDVDOVF4ckRJdE1UNE5COGhlZmVhbExTUENxYiIsInVzZXJfaWQiOjF9.VVslVLvidgGJfh8E89PT6mZ8e3hnH4jjtTGg1CE9rnY");

    var raw = JSON.stringify({"page":1,"items_per_page":5,"order_by_field":"","order_by_direction":"","product_no":"","product_name":"","description_1":"","description_2":"","brand_id":0,"category_id":0,"all_outlets":"","is_active":"","show_relationship":true});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://apidev.shushu.co/products", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }


  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
