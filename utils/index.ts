export function formatPriceWithCommas(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Example usage:
// const price = 1234567.89;
// const formattedPrice = formatPriceWithCommas(price);
// console.log(formattedPrice); // Output: 1'234'567.89
