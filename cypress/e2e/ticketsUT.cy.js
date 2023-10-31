//Constantes
const ENDPOINT = "https://athenea-crud.staging.kiwibot.com/";
const STATUS_CREATED = 201;
const STATUS_OK = 200;
let TicketId;

function setUrl(url) {
  return `${ENDPOINT}${url ? url : ""}`;
}
//Ticket object
const TICKET_OBJECT = {
  zone_id: "5e9774f860d1822959ace4cc",
  requester_id: "02fc6859-bb57-44ff-8a59-faac0d93925e",
  category_id: "0a7b4128-92ee-4954-bdd4-77c3c3d2ceb9",
  subcategory_id: "00bb98c3-c63b-4354-bf56-af42fbda8e15",
  source_id: "6610cde0-ebcd-4de0-a34d-08f0fb0f680d",
  status: "PENDING",
  description: "Ticket MD test 1",
  priority: 1,
  reporter_email: "miguel.delgado@kiwibot.com",
  image: "test image",
  status_reason: "reason 1",
};
const CREATE_TICKET_URL = setUrl("/ticket/create");

//Athenea CRUDs Tikets endpoints test
describe("Tickets app configuration", () => {
  it("Create ticket", () => {
    cy.request("POST", CREATE_TICKET_URL, TICKET_OBJECT).then((response) => {
      expect(response.status).to.eq(STATUS_CREATED);
      TicketId = response.body.ticket_id;
    });
  });

  it("Update ticket status to REPORTED", () => {
    const UPDATE_TICKET_URL = setUrl(`ticket/${TicketId}`);
    const updateStatus = { status: "REPORTED" };
    cy.request("PUT", UPDATE_TICKET_URL, updateStatus).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });

  it("Get all tickets", () => {
    const GETROBOTS_URL = setUrl(`/ticket/all`);
    cy.request("GET", GETROBOTS_URL).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });

  it("should get the robot information", () => {
    const GETROBOTS_URL = setUrl(`/ticket/${TicketId}`);
    cy.request("GET", GETROBOTS_URL).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });
  it("should Delete the ticket", () => {
    const DELETETICKET_URL = setUrl(`/ticket/${TicketId}`);
    cy.request("DELETE", DELETETICKET_URL).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });
});
