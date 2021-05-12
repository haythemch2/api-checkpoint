import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function User({user}) {
    console.log(user)
  return (
    <div>
      <Card style={{ width: "18rem", marginTop:'2rem'}}>
        <ListGroup variant="flush">
          <ListGroup.Item>name: {user.name}</ListGroup.Item>
          <ListGroup.Item>username : {user.username}</ListGroup.Item>
          <ListGroup.Item>phone : {user.phone}</ListGroup.Item>
          <ListGroup.Item>website : {user.website}</ListGroup.Item>
          <ListGroup.Item>Company : {user.company.bs} <br/>
          catchPhrase :{user.company.catchPhrase} <br/>
          name : {user.company.name}
          </ListGroup.Item>
          <ListGroup.Item>Adress: {user.address.city} <br/>
          street: {user.address.street}<br/>
          suite: {user.address.suite}<br/>
          zipcode: {user.address.zipcode}
          
          </ListGroup.Item>

        </ListGroup>
      </Card>
    </div>
  );
}

export default User;
