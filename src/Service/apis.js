// get product list
export async function get_product_list() {
  return await fetch('https://dummyjson.com/products', {
    method: 'GET',
  })
    .then(Response => Response.json())
    .then(async data => {
      if (data) {
        return JSON.stringify(data);
      } else {
        console.log('error');
        return JSON.stringify(data.message);
      }
    })
    .catch(function (error) {
      console.log(
        'There has been a problem with your fetch operation: ' + error.message,
      );
      // ADD THIS THROW error
      return JSON.stringify({
        Data: {error_code: 555, message: 'server side error'},
      });
    });
}

//product details
export async function get_product_details(id) {
  return await fetch(`https://dummyjson.com/products/${id}`, {
    method: 'GET',
  })
    .then(Response => Response.json())
    .then(async data => {
      if (data) {
        return JSON.stringify(data);
      } else {
        console.log('error');
        return JSON.stringify(data.message);
      }
    })
    .catch(function (error) {
      console.log(
        'There has been a problem with your fetch operation: ' + error.message,
      );
      // ADD THIS THROW error
      return JSON.stringify({
        Data: {error_code: 555, message: 'server side error'},
      });
    });
}
