export default {
  console(arg) {
    if (process.env.NODE_ENV === `development` && process.browser) {
      console.log(arg);
      console.log(process.isClient);
    }
  }
}
