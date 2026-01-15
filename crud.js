const fs = require('fs/promises');

async function createEmployee() {
  const employee = { name: "Employee 1 Name", salary: 2000 };
  await fs.writeFile('employees.json', JSON.stringify(employee, null, 2));
}

async function readEmployee() {
  const data = await fs.readFile('employees.json', 'utf8');
  console.log(JSON.parse(data));
}

async function updateEmployee() {
  const data = await fs.readFile('employees.json', 'utf8');
  const employee = JSON.parse(data);
  employee.salary = 3000;
  await fs.writeFile('employees.json', JSON.stringify(employee, null, 2));
}

async function deleteEmployee() {
  await fs.unlink('employees.json');
}

async function runCRUD() {
  await createEmployee();
  await readEmployee();
  await updateEmployee();
  await deleteEmployee();
}

runCRUD();
