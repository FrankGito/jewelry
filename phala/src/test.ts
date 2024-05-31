import main from "./index";

async function execute(inputObj: any) {
  const inputJson = JSON.stringify(inputObj);
  console.log("INPUT:", inputJson);
  return await main(inputJson);
}

async function test() {
  const getResult = await execute({
    method: "GET",
    path: "/ipfs/QmVHbLYhhYA5z6yKpQr4JWr3D54EhbSsh7e7BFAAyrkkMf",
    headers: {},
  });
  console.log("GET RESULT:", JSON.parse(getResult));
}

test()
  .then(() => { })
  .catch((err) => console.error(err))
  .finally(() => process.exit());
