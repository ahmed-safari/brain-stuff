const fs = require("fs");
const { Neurosity } = require("@neurosity/sdk");
require("dotenv").config();

const deviceId = process.env.DEVICE_ID || "";
const email = process.env.EMAIL || "";
const password = process.env.PASSWORD || "";

const neurosity = new Neurosity({
  deviceId,
});

console.log(`${email} attempting to authenticate to ${deviceId}`);

const main = async () => {
  await neurosity
    .login({
      email,
      password,
    })
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });

  console.log("Logged in");

  neurosity.brainwaves("raw").subscribe((brainwaves) => {
    console.log(brainwaves);
  });
};
main();
