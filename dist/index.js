"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timstamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timstamp = timstamp;
    }
}
const genesisBlock = new Block(0, "10101010102", "", "hello", 12);
const blocks = [genesisBlock];
console.log(blocks);
//# sourceMappingURL=index.js.map