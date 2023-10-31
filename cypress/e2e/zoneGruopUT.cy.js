//Constantes
const ENDPOINT = "https://athenea-crud.staging.kiwibot.com/";
const STATUS_CREATED = 201;
const STATUS_OK = 200;
const GROUP_ID = "6504d346cc0aad7ca0c1f1ae";

function setUrl(url) {
    return `${ENDPOINT}${url ? url : ""}`;
 }
//Athenea CRUDs Zone Group endpoints test
describe("Zone Group", () => { 
    it("Get Zone group by ID", () => {
      const GETROBOTS_URL = setUrl(`/zones/group/${GROUP_ID}`);
      cy.request("GET", GETROBOTS_URL).then((response) => {
        expect(response.status).to.eq(STATUS_OK);
      });
    });
    it("List of Zone Group", () => {
        const GETROBOTS_URL = setUrl(`zones/group?limit=3&page=1`);
        cy.request("GET", GETROBOTS_URL).then((response) => {
          expect(response.status).to.eq(STATUS_OK);
        });
      });
      it("search zone group", () => {
        const GETROBOTS_URL = setUrl(`/zones/group/search?group_name=Dr. Norwood Pfeffer`);
        cy.request("GET", GETROBOTS_URL).then((response) => {
          expect(response.status).to.eq(STATUS_OK);
        });
      });
});