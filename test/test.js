const assert = require('assert');
const firebase = require('@firebase/testing');

const MY_PROJECT_ID = "test-security-rule-765ce";

describe("Our social app", () => {
    it("undestand basic addition", () => {
        assert.equal(2+2, 4);
    });

    it("can read items in read-only collection", async() => {
        const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID}).firestore();
        const testDoc = db.collection("readonly").doc("testDoc");
        await firebase.assertSucceeds(testDoc.get());
    })
})