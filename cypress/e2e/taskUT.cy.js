//Constantes
const ENDPOINT = "https://athenea-crud.staging.kiwibot.com/";
const STATUS_CREATED = 201;
const STATUS_OK = 200;
const TASK_ID ="049c82fd-5ac5-45df-92dd-03a08e98e257";

function setUrl(url) {
    return `${ENDPOINT}${url ? url : ""}`;
 }
//Athenea CRUDs Tasks endpoints test
describe("Tasks", () => { 
    it("Get all Tasks", () => {
      const GETROBOTS_URL = setUrl(`/task/all`);
      cy.request("GET", GETROBOTS_URL).then((response) => {
        expect(response.status).to.eq(STATUS_OK);
      });
    });
    it("Get task by ID", () => {
        const GETROBOTS_URL = setUrl(`/task/${TASK_ID}`);
        cy.request("GET", GETROBOTS_URL).then((response) => {
          expect(response.status).to.eq(STATUS_OK);
        });
      });
});