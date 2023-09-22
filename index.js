import {
  genKeyPairHex,
  sharedKey,
} from "./utils/KeyPair.js";

import { encrypt, decrypt } from "./utils/enc_dec.js";

// console.log(genKeyPairHex());

const user1 = {
  name: "Luposki",
  keys: genKeyPairHex()
  // {
  //   privateKey:
  //     "99396e5a9109d836554a1b2a4094c08171e937767664415853de839d64a7c6a4",
  //   publicKey:
  //     "0497e0507ebd1c572093aa78ee05f5659d37ae26d78d0f24edd14c2f4336b68ac12036eeb6835b48d947c8226d50a5abe1febca38cc2829b7321784afb75a52be6",
  // },
};

const user2 = {
  name: "Mylena",
  keys: genKeyPairHex()
  // {
  //   privateKey:
  //     "a147c294178d7411f2ba45f1f89778fee0cba4b24f71ea4b4c549a07636dfd09",
  //   publicKey:
  //     "0460b0bf485bd4abc0b9ab45b8c8551d9ef791954a5136b0b490aa6f7006f2976d57b66dea5bd4cc60dca41e4255949723c027d104c1735d37f6884cc57742b510",
  // },
};

const shared1 = sharedKey(user1.keys.privateKey, user2.keys.publicKey);
const shared2 = sharedKey(user2.keys.privateKey, user1.keys.publicKey);

console.log(shared1);
console.log(shared2);
console.log(shared1 === shared2);

const text = "Luposki 😀"

const chipher = encrypt(text, shared1);

console.log(chipher)

const dechipher = decrypt(chipher, shared1);

console.log(dechipher)


