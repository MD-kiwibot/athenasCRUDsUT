//Constantes
const ENDPOINT = "https://athenea-crud.staging.kiwibot.com/";
const STATUS_CREATED = 201;
const STATUS_OK = 200;
const TICKET_ID = "0045cdc0-b3c5-4556-8571-25c551e522c9";
const ZONE_ID = "b726492181244fc6b45614fef75d52b5";
const MAPBOX_ID = "ac5782c86da8dd6bc299493c2efa0458";

// Funcion de creacion de URL
function setUrl(url) {
       return `${ENDPOINT}${url ? url : ""}`;
    }

// Objeto de creacion de Dropoff
const CREATE_DROPOFF_OBJECT = {
  lat: 42.66767,
  lon: -71.12554,
  name: "Drop UT"
};

//Athenea Cruds endpoints test
describe("Dropoff", () => { 
  it("Create ticket", () => {
    const GETDROPOFF_URL = setUrl(`/dropoffs`);
    cy.request("POST", GETDROPOFF_URL, CREATE_DROPOFF_OBJECT).then(
      (response) => {
        expect(response.status).to.eq(STATUS_CREATED);
      }
    );
  });
  it("Get Dropoff points", () => {
      const GETDROPOFF_URL = setUrl(`/dropoffs`);
      cy.request("GET", GETDROPOFF_URL).then((response) => {
        expect(response.status).to.eq(STATUS_OK);
      });
    });
  });

describe("Zone", () => { 
    it("Get Zones", () => {
      const GETDROPOFF_URL = setUrl(`/zones?geojson=falsepoffs`);
      cy.request("GET", GETDROPOFF_URL).then((response) => {
        expect(response.status).to.eq(STATUS_OK);
      });
    });
    it("Get Dropoff points By mapbox ID", () => {
      const GETDROPOFF_URL = setUrl(`/zones/${ZONE_ID}/dropoffs`);
      cy.request("GET", GETDROPOFF_URL).then((response) => {
        expect(response.status).to.eq(STATUS_OK);
      });
    });
    it("Get Dropoff points By mapbox ID", () => {
      const GETDROPOFF_URL = setUrl(`/zones/${MAPBOX_ID}`);
      cy.request("GET", GETDROPOFF_URL).then((response) => {
        expect(response.status).to.eq(STATUS_OK);
      });
    });
  });

describe("Mapbox", () => { 
    it("Get mapbox data", () => {
      const GETDROPOFF_URL = setUrl(`/mapboxes/${MAPBOX_ID}?cluster=zone`);
      cy.request("GET", GETDROPOFF_URL).then((response) => {
        expect(response.status).to.eq(STATUS_OK);
      });
    });
    it("Get zone by mapbox id", () => {
        const GETDROPOFF_URL = setUrl(`/mapboxes/zones`);
        cy.request("GET", GETDROPOFF_URL).then((response) => {
          expect(response.status).to.eq(STATUS_OK);
        });
      });
    it("Get requester  by mapbox id", () => {
        const GETDROPOFF_URL = setUrl(`/mapboxes/requester`);
        cy.request("GET", GETDROPOFF_URL).then((response) => {
          expect(response.status).to.eq(STATUS_OK);
        });
      });

  });