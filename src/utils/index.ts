import { Product } from '../interfaces/products.interface'

/**
 * @description This function calculates the total price of the products in the cart
 * @param {Product[]} products - The products in the cart
 * @returns {number} - The total price of the products in the cart
 */
export const totalPrice = (products: Product[]) => {
  let sum = 0
  products.forEach(product => sum += product.price);

  return sum
}