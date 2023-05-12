import { sym } from "../src/jsExcercises/findTheSymetricDifference";

import { expect } from "chai";

describe("Tests for Find the symetric difference", () => {
    /**
    * sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]. -> ok
    * sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
    * sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5]. -> ok
    * sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
    * sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5]. -> ok
    * sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
    * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]. -> ok
    * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
    * sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]. -> ok
    * sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
    * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7]. -> ok
    * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
    * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
    * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
     */
    
    it("The functions shall return the correct value", () => {
        // sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].

        expect(
            sym([1, 2, 3], [5, 2, 1, 4]).sort()
        ).to.be.deep.equals([3, 4, 5])

        expect(
            sym([1, 2, 3, 3], [5, 2, 1, 4]).sort()
        ).to.be.deep.equals([3, 4, 5])

        expect(
            sym([1, 2, 3], [5, 2, 1, 4, 5]).sort()
        ).to.be.deep.equals([3, 4, 5])

        expect(
            sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).sort()
        ).to.be.deep.equals([1, 4, 5])

        expect(
            sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).sort()
        ).to.be.deep.equals([1, 4, 5])

        expect(
            sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).sort()
        ).to.be.deep.equals([2, 3, 4, 6, 7])

        expect(
            sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).sort()
        ).to.be.deep.equals([1, 2, 4, 5, 6, 7, 8, 9])

    })

    it("The return length should be correct", () => {
        expect(
            sym([1, 2, 3], [5, 2, 1, 4]).length
        ).to.be.deep.equals(3)

        expect(
            sym([1, 2, 3, 3], [5, 2, 1, 4]).length
        ).to.be.deep.equals(3)

        expect(
            sym([1, 2, 3], [5, 2, 1, 4, 5]).length
        ).to.be.deep.equals(3)

        expect(
            sym([1, 2, 5], [2, 3, 5], [3, 4, 5]).length
        ).to.be.deep.equals(3)

        expect(
            sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length
        ).to.be.deep.equals(3)

        expect(
            sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length
        ).to.be.deep.equals(5)

        expect(
            sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]).length
        ).to.be.deep.equals(8)
    })
})