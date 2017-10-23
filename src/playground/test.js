function getIntoAnArgument() {
  const args = arguments.slice();
  args.forEach((arg) => {
    console.log(arg);
  });
}
