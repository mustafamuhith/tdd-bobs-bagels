const { add, getBasket, setCapacitiy, remove, getBasketTotal } = require("../../src/basket.js")

describe("Basket", () => {
    let basket
    beforeEach(() => {
setCapacitiy(10)
    })
    it("should calculate total of basket", () => {
        add("BGLO")
        add("BGLO")
        add("BGLP")

        const total = getBasketTotal()

        expect(total).toBe(1.37)
    })


    it("should remove a bagel if it exists in basket", () => {
        add("BGLO")
        const removed = remove("BGLO")
        const basket = getBasket()

        expect(removed).toEqual(
            {
                sku: "BGLO",
                price: "0.49",
                name: "Bagel",
                variant: "Onion",
                quantity: 1
              })

              expect(basket).toEqual([])
    })

    it("should return false if bagel doesnt exist", () => {
        const removed = remove("BGLO")
        
        expect(removed).toBeFalse()
    } )

    it("should add a bagel", () => {
        const bagel = add("BGLO")

        expect(bagel).toEqual({
            sku: "BGLO",
            price: "0.49",
            name: "Bagel",
            variant: "Onion",
            quantity: 1
          })
    })
    it("should return false if basket is at capacity", () => {
       setCapacitiy(2)

        add("BGLO")
        add("BGLP")
        const result = add("BGLE")

        expect(result).toBeFalse()
    })

    it("should update quantity on the found bagels", () => {
        add("BGLO")
        const bagel = add("BGLO")

        expect(bagel).toEqual({
            sku: "BGLO",
            price: "0.49",
            name: "Bagel",
            variant: "Onion",
            quantity: 2
          })

          expect(getBasket()).toEqual([
            {
                sku: "BGLO",
                price: "0.49",
                name: "Bagel",
                variant: "Onion",
                quantity: 2
              }
          ])
    })
})