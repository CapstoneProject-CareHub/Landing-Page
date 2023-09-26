function findStore() {
    const zipcode = document.getElementById('zipcode').value;
    if(!zipcode) {
        alert('Please enter a zip code.');
        return;
    }

    // Fetch store data. For simplicity, we're using dummy data
    const stores = [{
        name: "Daycare A",
        zip: "12345",
        address: "123 A Street"
    }, {
        name: "Daycare B",
        zip: "67890",
        address: "678 B Street"
    }];

    const results = stores.filter(store => store.zip === zipcode);
    
    const resultsDiv = document.getElementById('storeResults');
    resultsDiv.innerHTML = '';

    if(results.length === 0) {
        resultsDiv.innerHTML = 'No stores found for the provided zip code.';
    } else {
        results.forEach(result => {
            resultsDiv.innerHTML += `<div>${result.name} - ${result.address}</div>`;
        });
    }
}

// New code for showing the About Us content
function showAboutUs() {
    const mainContent = document.getElementById('main-content');
    const aboutContent = document.getElementById('about-content');
    mainContent.style.display = 'none';
    aboutContent.style.display = 'flex';
}
function displayAboutUs() {
    const mainContent = document.getElementById('storeLocator');
    const aboutContent = document.getElementById('about-content');
    mainContent.style.display = 'none';
    aboutContent.style.display = 'block';
}

function showMainContent() {
    const mainContent = document.getElementById('main-content');
    const aboutContent = document.getElementById('about-content');
    aboutContent.style.display = 'none';
    mainContent.style.display = 'block';
}

const goBackButton = document.getElementById('go-back');
if (goBackButton) {  // Check if the button exists to avoid errors on pages where it doesn't
    goBackButton.addEventListener('click', showMainContent);
}
