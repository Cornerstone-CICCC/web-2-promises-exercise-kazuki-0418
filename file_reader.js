const fs = require("fs").promises;

const read_file = async (file_path) => {
  try {
    const data = await fs.readFile(file_path, "utf-8");
    return data;
  } catch (error) {
    console.error(error);
  }
};

// THEN-CATCH SOLUTION BELOW THIS LINE

Promise.all([
  read_file("firstname.txt"),
  read_file("lastname.txt"),
  read_file("age.txt"),
  read_file("hobbies.txt"),
])
  .then((data) => {
    const first_name = data[0];
    const last_name = data[1];
    const age = data[2];
    const hobbies = JSON.parse(data[3]);
    console.log(
      `My name is ${first_name} ${last_name}. I am ${age} years old. My hobbies are ${hobbies.join(
        " and "
      )}.`
    );
  })
  .catch((error) => {
    console.error(error);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE

(async () => {
  try {
    const data = await Promise.all([
      read_file("firstname.txt"),
      read_file("lastname.txt"),
      read_file("age.txt"),
      read_file("hobbies.txt"),
    ]);

    const first_name = data[0];
    const last_name = data[1];
    const age = data[2];
    const hobbies = JSON.parse(data[3]);
    console.log(
      `My name is ${first_name} ${last_name}. I am ${age} years old. My hobbies are ${hobbies.join(
        " and "
      )}.`
    );
  } catch (error) {
    console.error(error);
  }
})();
