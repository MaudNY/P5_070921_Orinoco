// Créer objet JSON (paire clé-valeur) contenant les données de contact du formulaire

function getFormValues() {
    const $orderForm = document.querySelector("#tableau-coordonnées");

    let formData = {
        firstName : $orderForm.querySelector("#firstName"),
        lastName : $orderForm.querySelector("#lastName"),
        address : $orderForm.querySelector("#address"),
        city : $orderForm.querySelector("#city"),
        email : $orderForm.querySelector("#email"),
    };

    let formValues = {
        firstName : formData.firstName.value,
        lastName : formData.lastName.value,
        address : formData.address.value,
        city : formData.city.value,
        email : formData.email.value,
    };

    return formValues;
}

// Créer un tableau d'IDs de produits (uniquement, avec initialisation tableau vide) avec un "reducer"

function getIdsFromCartProducts () {
    const lsData = getDataFromCartOnLS();
    const idList = lsData.reduce((acc, product) => [...acc, product.productId], []);
    
    return idList;
}

// Montrer les valeurs du formulaire

function showFormValues() {
    const formValues = getFormValues();

    return console.log(formValues);
}

// Envoyer l'objet JSON de données de contact et le tableau d'IDs de produits

function sendOrder() {

    const formValues = getFormValues();
    const idsFromCartProducts = getIdsFromCartProducts();

    console.log(formValues);

    fetch ("http://localhost:3000/api/cameras/order", {
        method: "POST",
        headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
        },
        body: JSON.stringify(formValues, idsFromCartProducts)
    });
}


window.addEventListener('load', function () {
    console.log(getIdsFromCartProducts());
    console.log(getFormValues());
})