"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
function random(len) {
    let options = "cnkdnjkvnjnc48r090q239njcnmvnnknfjnioemknf2344";
    let length = options.length;
    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += options[(Math.floor(Math.random() * length))];
    }
    return ans;
}
;
