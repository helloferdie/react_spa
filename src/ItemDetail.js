import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOjIsImV4cCI6MTU4MzcyNDA5MCwidG9rZW5faWQiOiJDNkdRU1pUMlY0cFdaVDJJMXFkcE1EMDVDOVF4ckRJdE1UNE5COGhlZmVhbExTUENxYiIsInVzZXJfaWQiOjF9.VVslVLvidgGJfh8E89PT6mZ8e3hnH4jjtTGg1CE9rnY");

    var raw = JSON.stringify({"uuid": match.params.id});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://apidev.shushu.co/products/view_by_uuid", requestOptions)
      .then(response => response.json())
      .then(function(result){
        setItem(result.data);
      })
      .catch(error => console.log('error', error));
  }


  return (
    <div>
  <h1>{item.product_no} - {item.product_name}</h1>
  <p>{item.description_1}</p>
  <p>{item.description_2}</p>
  <img src={item.photo_1_url} />
    </div>
  );
}

export default ItemDetail;
