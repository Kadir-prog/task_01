import {get_product_details, get_product_list} from '../Service/apis';

export async function Get_products(setloading, set_data, seterror_code) {
  const request = await get_product_list();

  if (request) {
    const parse = JSON.parse(request);
    if (parse) {
      setloading(false);
      set_data(parse.products);
    } else {
      if (parse.Data != undefined) {
        if (parse.Data.error_code == 555) {
          seterror_code('Somthing went wrong...!');
          setloading(false);
        } else {
          seterror_code('Somthing went wrong');
          setloading(false);
        }
      } else {
        setloading(false);
        seterror_code('products not found');
      }
    }
  }
}

export async function Get_products_details(
  setloading,
  set_data,
  seterror_code,
  id
) {
  const request = await get_product_details(id);
  console.log(request)
  if (request) {
    const parse = JSON.parse(request);
    if (parse) {
      setloading(false);
      set_data(parse);
    } else {
      if (parse.Data != undefined) {
        if (parse.Data.error_code == 555) {
          seterror_code('Somthing went wrong...!');
          setloading(false);
        } else {
          seterror_code('Somthing went wrong');
          setloading(false);
        }
      } else {
        setloading(false);
        seterror_code('products not found');
      }
    }
  }
}
