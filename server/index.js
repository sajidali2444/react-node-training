const express = require('express');
const db = require('./db');
var cors = require('cors');
const config = require('./config');
const teacherRoutes = require('./routes/teacherRoutes');
const customerRoutes = require('./routes/customerRoutes');
const app = express();
app.use(cors());

// parse requests of content-type: application/json
app.use(express.json());
app.use(teacherRoutes);
app.use(customerRoutes);
/*
//root path
app.get("/", (request, response) => {
  response.send("api root/entry path");
  console.log("hello node api");
});

app.get("/actors", async (request, response) => {
  let result = await db.execute("SELECT * FROM actor");
  console.log(result);
  return response.json(result[0]);
});
app.get("/actors/:id", async (request, response) => {
  const { id } = request.params; //{id:1,name:'sajid',cell:4454,phone:234234}
  let result = await db.execute(`SELECT * FROM actor WHERE actor_id = ${id}`);
  return response.json(result[0]);
});
app.get("/customers/:id", async (request, response) => {
  const { id } = request.params;
  let result = await db.execute(
    `SELECT * FROM customer WHERE customer_id = ${id}`
  );
  return response.json(result[0]);
});
//named path
app.use("/teacher", require("./routes/teacherRoutes"));
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);
  res.status(500).json({
    message: "Something went wrong",
  });
});

app.get("/customers", async (request, response) => {
  const queryResult = await db.execute(`select
	c.customer_id,
  c.first_name,
  c.last_name,
	c.email,
	a.address,
	cu.country_id,
	cu.country,
	cc.city_id,
	cc.city,
  c.active
	from customer c
join address a on a.address_id = c.address_id
join city cc on cc.city_id = a.city_id
join country cu on cu.country_id = cc.country_id`);

  const customers = response.json(queryResult[0]);
  return customers;
});

app.delete("/customers/delete", async (request, response) => {
  const { id } = request.body;
  const queryResult = await db.execute(
    `DELETE FROM customer WHERE customer_id = ${id};`
  );
  const customers = response.json(queryResult[0]);
  return customers;
});
//data will in body for POST/PATCH/PUT
// for GET data will be in params object
app.patch("/customers", async (req, res) => {
  //const { id, status } = req.params;
  const { id, status } = req.body; //[],{},value
  const query = await db.execute(
    `update customer set active = ${status} where customer_id = ${id}`
  );
  return res.json({ result: true });
});

app.post("/customers", async (req, res) => {
  console.log(req.body);

  const { first_name, last_name, email } = req.body;
  let query = `insert into customer(store_id,first_name,last_name,email,address_id,active,create_date) VALUES(1, '${first_name}', '${last_name}','${email}',1,1,now())`;
  const result = await db.execute(query);

  // const result = await db.execute(
  //   'insert into customer(store_id,first_name,last_name,email,address_id,active,create_date) VALUES(1, ?, ?,?,1,1,now())',
  //   [first_name, last_name, email],
  // );

  return res.json({ result: true });
});

app.get("/customers/:id", async (req, res) => {
  const { id } = req.params;
  const result = await db.execute(
    `SELECT * FROM customer WHERE customer_id = ${id}`
  );
  return res.json(result[0]);
});
*/
app.listen(config.port || 3001, () => {
  console.log(`Express is running on port ${config.port}`);
});
//asfasdfasdfasdfasd
