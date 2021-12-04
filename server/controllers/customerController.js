const getAll = async (req, res) => {
  res.send('customers data');
};
const getById = async (req, res) => {
  const { id } = req.params;
  res.send(`customer id => ${id}`);
};

module.exports = { getAllCustomers: getAll, getById };

/*
module.exports = {
  getCustomers: (req, res) => {
    res.send('get all customers route called');
  },
  getCustomerById: (req, res) => {
    const { id } = req.params;
    res.send(`customer id => ${id}`);
  },
};
*/
