import * as Crypto from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timstamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timstamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timstamp = timstamp;
  }
}

const genesisBlock: Block = new Block(0, "10101010102", "", "hello", 12);

const blocks: [Block] = [genesisBlock];
console.log(blocks);
export {};
