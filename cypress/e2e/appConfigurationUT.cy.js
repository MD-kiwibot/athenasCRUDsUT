//Constantes
const ENDPOINT = "https://athenea-crud.staging.kiwibot.com/";
const STATUS_CREATED = 201;
const STATUS_OK = 200;
let categoryId;
let subcategoryId;
let sourceId;
let randomRename;
const randomName = generateRandomName();
const randomRenameName = generateRandomName();
const CREATE_CATEGORY_ADD_URL = setUrl("appconfiguration/category/add");
const CREATE_SUBCATEGORY_ADD_URL = setUrl("appconfiguration/subcategory/add");
const CREATE_SOURCE_ADD_URL = setUrl("appconfiguration/source/add");

// Funcion de creacion de URL
function setUrl(url) {
  return `${ENDPOINT}${url ? url : ""}`;
}

// Funcion de generacion de Nombres aleatorios
function getRandomCharacter(characters) {
  return characters.charAt(Math.floor(Math.random() * characters.length));
}
function generateRandomName(length = 10) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length })
    .map(() => getRandomCharacter(characters))
    .join("");
}

//Constantes de nombres aleatorios
const CREATE_CATEGORY_OBJECT = {
  category_name: randomName,
};
const CREATE_SUBCATEGORY_OBJECT = {
  subcategory_name: randomName,
};
const CREATE_SOURCE_OBJECT = {
  source_name: randomName,
};

//Athenea CRUDs App Configuration endpoints test
describe("Category app configuration", () => {
  it("Create ticket", () => {
    cy.request("POST", CREATE_CATEGORY_ADD_URL, CREATE_CATEGORY_OBJECT).then(
      (response) => {
        expect(response.status).to.eq(STATUS_CREATED);
        categoryId = response.body.category_id;
      }
    );
  });
  it("Get all Category", () => {
    const CREATE_CATEGORY_URL = setUrl(`appconfiguration/category/all`);
    cy.request("GET", CREATE_CATEGORY_URL).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });
  it("Update Category name", () => {
    const CREATE_CATEGORY_URL = setUrl(
      `appconfiguration/category/${categoryId}`
    );
    randomRename = randomRenameName;
    const updateCategoryName = { category_name: randomRename };
    cy.request("PUT", CREATE_CATEGORY_URL, updateCategoryName).then(
      (response) => {
        expect(response.status).to.eq(STATUS_OK);
      }
    );
  });
  it("should Delete the ticket", () => {
    const DELETE_CATEGORY_URL = setUrl(
      `appconfiguration/category/${categoryId}`
    );
    cy.request("DELETE", DELETE_CATEGORY_URL).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });
});

describe("sub category app configuration", () => {
  it("Create ticket", () => {
    cy.request(
      "POST",
      CREATE_SUBCATEGORY_ADD_URL,
      CREATE_SUBCATEGORY_OBJECT
    ).then((response) => {
      expect(response.status).to.eq(STATUS_CREATED);
      subcategoryId = response.body.subcategory_id;
    });
  });
  it("Get all Sub ategory", () => {
    const CREATE_SUBCATEGORY_URL = setUrl(`/appconfiguration/subcategory/all`);
    cy.request("GET", CREATE_SUBCATEGORY_URL).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });
  it("Update SubCategory name", () => {
    const CREATE_CATEGORY_URL = setUrl(
      `appconfiguration/subcategory/${subcategoryId}`
    );
    randomRename = randomRenameName;
    const updateSubCategoryName = { subcategory_name: randomRename };
    cy.request("PUT", CREATE_CATEGORY_URL, updateSubCategoryName).then(
      (response) => {
        expect(response.status).to.eq(STATUS_OK);
      }
    );
  });
  it("should Delete the ticket", () => {
    const DELETE_SUBCATEGORY_URL = setUrl(
      `appconfiguration/subcategory/${subcategoryId}`
    );
    cy.request("DELETE", DELETE_SUBCATEGORY_URL).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });
});

describe("Source app configuration", () => {
  it("Create Source", () => {
    cy.request("POST", CREATE_SOURCE_ADD_URL, CREATE_SOURCE_OBJECT).then(
      (response) => {
        expect(response.status).to.eq(STATUS_CREATED);
        sourceId = response.body.source_id;
      }
    );
  });
  it("Get all Source", () => {
    const CREATE_SOURCE_URL = setUrl(`/appconfiguration/source/all`);
    cy.request("GET", CREATE_SOURCE_URL).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });
  it("Update source name", () => {
    const CREATE_SOURCE_URL = setUrl(`appconfiguration/source/${sourceId}`);
    randomRename = randomRenameName;
    const updateSourceName = { source_name: randomRename };
    cy.request("PUT", CREATE_SOURCE_URL, updateSourceName).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });
  it("should Delete the ticket", () => {
    const CREATE_SOURCE_URL = setUrl(`appconfiguration/source/${sourceId}`);
    cy.request("DELETE", CREATE_SOURCE_URL).then((response) => {
      expect(response.status).to.eq(STATUS_OK);
    });
  });
});
