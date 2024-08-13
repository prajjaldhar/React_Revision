import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ProductCard = () => {
  const [datas, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8000/fashiontrends/random"
      );
      const data = await response.json();
      setdata(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <Card style={{ width: "18rem" }}>
      {datas &&
        datas.map((data) => (
          <>
            <Card.Img variant="top" src={data.productImg} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </>
        ))}
    </Card>
  );
};

export default ProductCard;
