console.log("before");

const promise = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("this is my promise data");
  }, 1);
})
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("this is failed!!", e);
  });

console.log("after my call is made");
