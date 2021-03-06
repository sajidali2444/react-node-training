const express = require("express");
const db = require("./db");
var cors = require("cors");
const config = require("./config");
const { query } = require("./db");
const app = express();
app.use(cors());

// parse requests of content-type: application/json
app.use(express.json());

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
join country cu on cu.country_id = cc.country_id where active = true `);

  const customers = response.json(queryResult[0]);
  return customers;
});
app.get("/customers/delete/:id", async (request, response) => {
  console.log("delete=>", request.params);
  //const queryResult = await db.execute(``);
  //const customers = response.json(queryResult[0]);
  //return customers;
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
  let query = `insert into customer(store_id,first_name,last_name,email,address_id,active,create_date) VALUES(1, ${first_name}, ${last_name},${email},1,1,now())`;
  const result = await db.execute(query);
  /*
  const result = await db.execute(
    'insert into customer(store_id,first_name,last_name,email,address_id,active,create_date) VALUES(1, ?, ?,?,1,1,now())',
    [first_name, last_name, email],
  );
  */
  return res.json({ result: true });
});

app.get("/customers/:id", async (req, res) => {
  const { id } = req.params;
  const result = await db.execute(
    `SELECT * FROM customer WHERE customer_id = ${id}`
  );
  return res.json(result[0]);
});
/*
//required parameter customerId
//example
//localhost:3001/customer/10
app.get("/customer/:customerId", (req, res) => {
  const { customerId } = req.params;
  const { cnic } = req.query;
  console.log("inside server getting paramets", req.query);
});

//optional parameter
//example
//localhost:3001/customer/10/12345
app.get("/customer/:customerId/:userId?", (req, res) => {
  const { customerId } = req.params;
  const { cnic } = req.query;
  console.log("inside server getting paramets", req.query);
});
*/

app.get("/customer", (req, res) => {
  const { customerId } = req.params;
  const { cnic } = req.query;
  console.log("inside server getting paramets step 1", req.query);
});

app.post("/customer/:customerId", (req, res) => {
  const { customerId } = req.params;
  const { cnic } = req.query;
  console.log("post body data", req.body);
  console.log("customer id inside post request", customerId);
});

app.post("/customer", (req, res) => {
  console.log("post body data", req.body);
});

app.listen(config.port || 3001, () => {
  console.log(`Express is running on port ${config.port}`);
});
//asfasdfasdfasdfasd
