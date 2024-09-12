import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Home = () => {
  const [data, setData] = useState(null);

  // usenavigate
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const singleUser = (item) => {
    navigate(`singlestudent/${item.id}`);
  };
  return (
    <>
      <h1 className="text-center">Hello students</h1>
      {data ? (
        data.map((item) => {
          return (
            <Card
              key={item.id}
              elevation={3}
              sx={{
                borderRadius: 10,
                boxShadow: 3,
                margin: 10,
                padding: 10,
                width: 350,
                height: 300,
                border: 2,
                backgroundColor: "maroon",
                display: "inline-block",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ color: "white" }}>
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ color: "white" }}
                >
                  {item.username}
                </Typography>
                <Button
                  onClick={() => singleUser(item)}
                  sx={{ color: "white", backgroundColor: "darkblue" }}
                >
                  show more
                </Button>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <h1>Loading..</h1>
      )}
    </>
  );
};

export default Home;
