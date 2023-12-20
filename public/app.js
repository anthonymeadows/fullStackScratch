$(document).ready(() => {
    $('button').on('click', function () {
        $('button').removeClass('active');
        $(this).addClass('active');
        
        $('#dynamic-content-container').empty();

        // Fetch data based on button click
        if (this.id === 'items') {
            $.get('/api/items', (data) => {
                displayDynamicContent(data);
            }).fail((error) => {
                console.error('Error:', error);
            });
        } else if (this.id === 'customers') {
            $.get('/api/customers', (data) => {
                displayDynamicContent(data);
            }).fail((error) => {
                console.error('Error:', error);
            });
        } else if (this.id === 'carts') {
            $.get('/api/carts', (data) => {
                displayDynamicContent(data);
            }).fail((error) => {
                console.error('Error:', error);
            });
        }
    });

    function displayDynamicContent(data) {
        const dynamicContentDiv = $('<div>').addClass('dynamic-content');
        dynamicContentDiv.append(`<p>${JSON.stringify(data)}</p>`);
        $('#dynamic-content-container').append(dynamicContentDiv);
    }
});
