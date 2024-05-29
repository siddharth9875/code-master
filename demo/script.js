document.addEventListener('DOMContentLoaded', function () {
    fetchProperties();

    document.getElementById('propertyForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            price: document.getElementById('price').value,
            location: document.getElementById('location').value,
            imageURL: document.getElementById('imageURL').value
        };

        fetch('/api/properties', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(property => {
                addPropertyToUI(property);
                document.getElementById('propertyForm').reset();
            })
            .catch(error => console.error('Error:', error));
    });
});

function fetchProperties() {
    fetch('/api/properties')
        .then(response => response.json())
        .then(properties => {
            properties.forEach(property => {
                addPropertyToUI(property);
            });
        })
        .catch(error => console.error('Error:', error));
}

function addPropertyToUI(property) {
    const propertyList = document.getElementById('propertyList');
    const propertyDiv = document.createElement('div');
    propertyDiv.classList.add('property');
    propertyDiv.innerHTML = `
        <h2>${property.title}</h2>
        <p>${property.description}</p>
        <p>Price: ${property.price}</p>
        <p>Location: ${property.location}</p>
        <img src="${property.imageURL}" alt="${property.title}">
    `;
    propertyList.appendChild(propertyDiv);
}
