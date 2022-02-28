import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';


import axios from 'axios'


const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'created', headerName: 'date', width: 200 },
  { field: 'orderValue', headerName: 'total', width: 200,
    valueGetter: (params) =>{return params.row.order_value.formatted_with_code},
  },
  {
    field: "操作",
    width: 100,
    align: "center",
    renderCell: () => <Button component={Link} variant="outlined" type="button" to="/order-detail/ord_NXELwjdbpr53A4" onClick={()=>{console.log("order table button clieckd")}}>詳細を見る</Button>
  },
];

const rowsa = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


let rowss={
    "data": [
      {
        "version": "v1.5",
        "sandbox": true,
        "id": "ord_NXELwjdbpr53A4",
        "checkout_token_id": "chkt_gnZO5kYQexw7MN",
        "cart_id": "cart_9BAmwJOaKEoeXd",
        "customer_reference": "NLNBKSTR-222267",
        "created": 1645958759,
        "status": "open",
        "status_payment": "paid",
        "status_fulfillment": "fulfilled",
        "currency": {
          "code": "JPY",
          "symbol": "¥"
        },
        "order_value": {
          "raw": 1200,
          "formatted": "1,200",
          "formatted_with_symbol": "¥1,200",
          "formatted_with_code": "1,200 JPY"
        },
        "conditionals": {
          "collected_fullname": false,
          "collected_shipping_address": true,
          "collected_billing_address": false,
          "collected_extra_fields": false,
          "collected_tax": false,
          "collected_eu_vat_moss_evidence": false,
          "has_physical_fulfillment": false,
          "has_digital_fulfillment": false,
          "has_extend_fulfillment": false,
          "has_webhook_fulfillment": false,
          "has_extend_apps": false,
          "has_pay_what_you_want": false,
          "has_discounts": false,
          "has_subscription_items": false,
          "is_free": false,
          "is_fulfilled": true
        },
        "meta": null,
        "redirect": false,
        "collected": {
          "fullname": false,
          "shipping_address": true,
          "billing_address": false,
          "extra_fields": false,
          "tax": false,
          "eu_vat_moss_evidence": false
        },
        "has": {
          "physical_fulfillment": false,
          "digital_fulfillment": false,
          "extend_fulfillment": false,
          "webhook_fulfillment": false,
          "extend_apps": false,
          "pay_what_you_want": false,
          "discounts": false,
          "subscription_items": false
        },
        "is": {
          "free": false,
          "fulfilled": true
        },
        "order": {
          "subtotal": {
            "raw": 1200,
            "formatted": "1,200",
            "formatted_with_symbol": "¥1,200",
            "formatted_with_code": "1,200 JPY"
          },
          "total": {
            "raw": 1200,
            "formatted": "1,200",
            "formatted_with_symbol": "¥1,200",
            "formatted_with_code": "1,200 JPY"
          },
          "total_with_tax": {
            "raw": 1200,
            "formatted": "1,200",
            "formatted_with_symbol": "¥1,200",
            "formatted_with_code": "1,200 JPY"
          },
          "total_paid": {
            "raw": 1200,
            "formatted": "1,200",
            "formatted_with_symbol": "¥1,200",
            "formatted_with_code": "1,200 JPY"
          },
          "adjustments": {
            "taxable": {
              "raw": 0,
              "formatted": "0",
              "formatted_with_symbol": "¥0",
              "formatted_with_code": "0 JPY"
            },
            "untaxable": {
              "raw": 0,
              "formatted": "0",
              "formatted_with_symbol": "¥0",
              "formatted_with_code": "0 JPY"
            },
            "total": {
              "raw": 0,
              "formatted": "0",
              "formatted_with_symbol": "¥0",
              "formatted_with_code": "0 JPY"
            }
          },
          "pay_what_you_want": {
            "enabled": false,
            "minimum": null,
            "customer_set_price": null
          },
          "shipping": {
            "id": null,
            "description": null,
            "provider": "chec",
            "price": {
              "raw": 0,
              "formatted": "0",
              "formatted_with_symbol": "¥0",
              "formatted_with_code": "0 JPY"
            }
          },
          "line_items": [
            {
              "id": "item_A12JwrMRX8lPjn",
              "product_id": "prod_mOVKl4GxXK5prR",
              "product_name": "The Story of My Life",
              "product_sku": null,
              "quantity": 1,
              "price": {
                "raw": 1200,
                "formatted": "1,200",
                "formatted_with_symbol": "¥1,200",
                "formatted_with_code": "1,200 JPY"
              },
              "line_total": {
                "raw": 1200,
                "formatted": "1,200",
                "formatted_with_symbol": "¥1,200",
                "formatted_with_code": "1,200 JPY"
              },
              "line_total_with_tax": {
                "raw": 1200,
                "formatted": "1,200",
                "formatted_with_symbol": "¥1,200",
                "formatted_with_code": "1,200 JPY"
              },
              "variant": [],
              "selected_options": [],
              "tax": {
                "is_taxable": false,
                "amount": {
                  "raw": 0,
                  "formatted": "0",
                  "formatted_with_symbol": "¥0",
                  "formatted_with_code": "0 JPY"
                },
                "taxable_amount": {
                  "raw": 1200,
                  "formatted": "1,200",
                  "formatted_with_symbol": "¥1,200",
                  "formatted_with_code": "1,200 JPY"
                },
                "rate": 0,
                "rate_percentage": "0%",
                "breakdown": []
              },
              "image": {
                "id": "ast_4WJvlKqg6JobYV",
                "url": "https://cdn.chec.io/merchants/39980/assets/yiOxwZA0wMdncaKT|3tHrxL1JReWwXWUv_3.jpg",
                "description": null,
                "is_image": true,
                "filename": "3tHrxL1JReWwXWUv_3.jpg",
                "file_size": 210326,
                "file_extension": "jpg",
                "image_dimensions": {
                  "width": 2365,
                  "height": 2560
                },
                "meta": [],
                "created_at": 1645883223,
                "updated_at": 1645883225
              }
            }
          ],
          "discount": [],
          "giftcard": []
        },
        "shipping": {
          "id": "adrs_zkK6oLOyzwXn0Q",
          "name": "International",
          "street": null,
          "street_2": null,
          "town_city": null,
          "postal_zip_code": null,
          "county_state": null,
          "country": null,
          "delivery_instructions": null,
          "meta": null
        },
        "billing": [],
        "transactions": [
          {
            "id": "trns_L1vOoZKDN05Ra8",
            "type": "charge",
            "status": "complete",
            "status_reason": "complete",
            "charge_date": 1645958759,
            "gateway": "test_gateway",
            "gateway_name": "Test Gateway",
            "gateway_transaction_id": "1645958759",
            "gateway_customer_id": null,
            "gateway_reference": "4242",
            "notes": "",
            "amount": {
              "raw": 1200,
              "formatted": "1,200",
              "formatted_with_symbol": "¥1,200",
              "formatted_with_code": "1,200 JPY"
            },
            "payment_source_type": "card",
            "payment_source": {
              "brand": "visa",
              "country": "US",
              "billing_zip_postal_code": "94103"
            },
            "meta": null,
            "created": 1645958759,
            "updated": 1645958759,
            "dunning": {
              "is_dunning": false,
              "failed_attempts": 0,
              "last_failed_attempt": null,
              "next_attempt": null
            }
          }
        ],
        "fulfillment": {
          "physical": {
            "items": [],
            "shipments": []
          },
          "digital": {
            "downloads": []
          }
        },
        "customer": {
          "id": "cstmr_0YnEoqP8Zmwe7P",
          "external_id": null,
          "firstname": null,
          "lastname": null,
          "email": "john.doe@example.com",
          "phone": null,
          "meta": [],
          "created": 1645958759,
          "updated": 1645958759
        },
        "extra_fields": [],
        "client_details": {
          "ip_address": "114.191.17.184",
          "country_code": "JP",
          "country_name": "Japan",
          "region_code": "13",
          "region_name": "Tokyo",
          "city": "Setagaya-ku",
          "postal_zip_code": "154-0017",
          "_copyright": "This location was calculated using GeoLite2 data created by MaxMind - http://www.maxmind.com"
        },
        "tax": {
          "amount": {
            "raw": 0,
            "formatted": "0",
            "formatted_with_symbol": "¥0",
            "formatted_with_code": "0 JPY"
          },
          "included_in_price": false,
          "provider": "chec",
          "provider_type": "native",
          "breakdown": [],
          "zone": {
            "country": "",
            "region": null,
            "postal_zip_code": null,
            "ip_address": null
          }
        },
        "adjustments": []
      },
      {
        "version": "v1.5",
        "sandbox": true,
        "id": "ord_L1vOoZdxZWlRa8",
        "checkout_token_id": "chkt_NXELwjYQvNl3A4",
        "cart_id": "cart_ypbroE1E37o8n4",
        "customer_reference": "NLNBKSTR-222268",
        "created": 1645959112,
        "status": "open",
        "status_payment": "paid",
        "status_fulfillment": "fulfilled",
        "currency": {
          "code": "JPY",
          "symbol": "¥"
        },
        "order_value": {
          "raw": 6000,
          "formatted": "6,000",
          "formatted_with_symbol": "¥6,000",
          "formatted_with_code": "6,000 JPY"
        },
        "conditionals": {
          "collected_fullname": false,
          "collected_shipping_address": true,
          "collected_billing_address": false,
          "collected_extra_fields": false,
          "collected_tax": false,
          "collected_eu_vat_moss_evidence": false,
          "has_physical_fulfillment": false,
          "has_digital_fulfillment": false,
          "has_extend_fulfillment": false,
          "has_webhook_fulfillment": false,
          "has_extend_apps": false,
          "has_pay_what_you_want": false,
          "has_discounts": false,
          "has_subscription_items": false,
          "is_free": false,
          "is_fulfilled": true
        },
        "meta": null,
        "redirect": false,
        "collected": {
          "fullname": false,
          "shipping_address": true,
          "billing_address": false,
          "extra_fields": false,
          "tax": false,
          "eu_vat_moss_evidence": false
        },
        "has": {
          "physical_fulfillment": false,
          "digital_fulfillment": false,
          "extend_fulfillment": false,
          "webhook_fulfillment": false,
          "extend_apps": false,
          "pay_what_you_want": false,
          "discounts": false,
          "subscription_items": false
        },
        "is": {
          "free": false,
          "fulfilled": true
        },
        "order": {
          "subtotal": {
            "raw": 6000,
            "formatted": "6,000",
            "formatted_with_symbol": "¥6,000",
            "formatted_with_code": "6,000 JPY"
          },
          "total": {
            "raw": 6000,
            "formatted": "6,000",
            "formatted_with_symbol": "¥6,000",
            "formatted_with_code": "6,000 JPY"
          },
          "total_with_tax": {
            "raw": 6000,
            "formatted": "6,000",
            "formatted_with_symbol": "¥6,000",
            "formatted_with_code": "6,000 JPY"
          },
          "total_paid": {
            "raw": 6000,
            "formatted": "6,000",
            "formatted_with_symbol": "¥6,000",
            "formatted_with_code": "6,000 JPY"
          },
          "adjustments": {
            "taxable": {
              "raw": 0,
              "formatted": "0",
              "formatted_with_symbol": "¥0",
              "formatted_with_code": "0 JPY"
            },
            "untaxable": {
              "raw": 0,
              "formatted": "0",
              "formatted_with_symbol": "¥0",
              "formatted_with_code": "0 JPY"
            },
            "total": {
              "raw": 0,
              "formatted": "0",
              "formatted_with_symbol": "¥0",
              "formatted_with_code": "0 JPY"
            }
          },
          "pay_what_you_want": {
            "enabled": false,
            "minimum": null,
            "customer_set_price": null
          },
          "shipping": {
            "id": null,
            "description": null,
            "provider": "chec",
            "price": {
              "raw": 0,
              "formatted": "0",
              "formatted_with_symbol": "¥0",
              "formatted_with_code": "0 JPY"
            }
          },
          "line_items": [
            {
              "id": "item_Op1YoVxbk6lXLv",
              "product_id": "prod_mOVKl4GxXK5prR",
              "product_name": "The Story of My Life",
              "product_sku": null,
              "quantity": 1,
              "price": {
                "raw": 1200,
                "formatted": "1,200",
                "formatted_with_symbol": "¥1,200",
                "formatted_with_code": "1,200 JPY"
              },
              "line_total": {
                "raw": 1200,
                "formatted": "1,200",
                "formatted_with_symbol": "¥1,200",
                "formatted_with_code": "1,200 JPY"
              },
              "line_total_with_tax": {
                "raw": 1200,
                "formatted": "1,200",
                "formatted_with_symbol": "¥1,200",
                "formatted_with_code": "1,200 JPY"
              },
              "variant": [],
              "selected_options": [],
              "tax": {
                "is_taxable": false,
                "amount": {
                  "raw": 0,
                  "formatted": "0",
                  "formatted_with_symbol": "¥0",
                  "formatted_with_code": "0 JPY"
                },
                "taxable_amount": {
                  "raw": 1200,
                  "formatted": "1,200",
                  "formatted_with_symbol": "¥1,200",
                  "formatted_with_code": "1,200 JPY"
                },
                "rate": 0,
                "rate_percentage": "0%",
                "breakdown": []
              },
              "image": {
                "id": "ast_4WJvlKqg6JobYV",
                "url": "https://cdn.chec.io/merchants/39980/assets/yiOxwZA0wMdncaKT|3tHrxL1JReWwXWUv_3.jpg",
                "description": null,
                "is_image": true,
                "filename": "3tHrxL1JReWwXWUv_3.jpg",
                "file_size": 210326,
                "file_extension": "jpg",
                "image_dimensions": {
                  "width": 2365,
                  "height": 2560
                },
                "meta": [],
                "created_at": 1645883223,
                "updated_at": 1645883225
              }
            },
            {
              "id": "item_4WJvlKq3KJobYV",
              "product_id": "prod_ZM8X5nL6Orwpv4",
              "product_name": "Three Men in a Boat",
              "product_sku": null,
              "quantity": 2,
              "price": {
                "raw": 2400,
                "formatted": "2,400",
                "formatted_with_symbol": "¥2,400",
                "formatted_with_code": "2,400 JPY"
              },
              "line_total": {
                "raw": 4800,
                "formatted": "4,800",
                "formatted_with_symbol": "¥4,800",
                "formatted_with_code": "4,800 JPY"
              },
              "line_total_with_tax": {
                "raw": 4800,
                "formatted": "4,800",
                "formatted_with_symbol": "¥4,800",
                "formatted_with_code": "4,800 JPY"
              },
              "variant": [],
              "selected_options": [],
              "tax": {
                "is_taxable": false,
                "amount": {
                  "raw": 0,
                  "formatted": "0",
                  "formatted_with_symbol": "¥0",
                  "formatted_with_code": "0 JPY"
                },
                "taxable_amount": {
                  "raw": 4800,
                  "formatted": "4,800",
                  "formatted_with_symbol": "¥4,800",
                  "formatted_with_code": "4,800 JPY"
                },
                "rate": 0,
                "rate_percentage": "0%",
                "breakdown": []
              },
              "image": {
                "id": "ast_NqKE50NVBBwdgB",
                "url": "https://cdn.chec.io/merchants/39980/assets/Di9GMGuqOyrRTS32|9Nro9JJzjAoTTO5R_5.jpg",
                "description": null,
                "is_image": true,
                "filename": "9Nro9JJzjAoTTO5R_5.jpg",
                "file_size": 256246,
                "file_extension": "jpg",
                "image_dimensions": {
                  "width": 2365,
                  "height": 2560
                },
                "meta": [],
                "created_at": 1645883017,
                "updated_at": 1645883019
              }
            }
          ],
          "discount": [],
          "giftcard": []
        },
        "shipping": {
          "id": "adrs_zkK6oLOyzwXn0Q",
          "name": "International",
          "street": null,
          "street_2": null,
          "town_city": null,
          "postal_zip_code": null,
          "county_state": null,
          "country": null,
          "delivery_instructions": null,
          "meta": null
        },
        "billing": [],
        "transactions": [
          {
            "id": "trns_0YnEoqvPBW5e7P",
            "type": "charge",
            "status": "complete",
            "status_reason": "complete",
            "charge_date": 1645959112,
            "gateway": "test_gateway",
            "gateway_name": "Test Gateway",
            "gateway_transaction_id": "1645959112",
            "gateway_customer_id": null,
            "gateway_reference": "4242",
            "notes": "",
            "amount": {
              "raw": 6000,
              "formatted": "6,000",
              "formatted_with_symbol": "¥6,000",
              "formatted_with_code": "6,000 JPY"
            },
            "payment_source_type": "card",
            "payment_source": {
              "brand": "visa",
              "country": "US",
              "billing_zip_postal_code": "94103"
            },
            "meta": null,
            "created": 1645959112,
            "updated": 1645959112,
            "dunning": {
              "is_dunning": false,
              "failed_attempts": 0,
              "last_failed_attempt": null,
              "next_attempt": null
            }
          }
        ],
        "fulfillment": {
          "physical": {
            "items": [],
            "shipments": []
          },
          "digital": {
            "downloads": []
          }
        },
        "customer": {
          "id": "cstmr_0YnEoqP8Zmwe7P",
          "external_id": null,
          "firstname": null,
          "lastname": null,
          "email": "john.doe@example.com",
          "phone": null,
          "meta": [],
          "created": 1645958759,
          "updated": 1645958759
        },
        "extra_fields": [],
        "client_details": {
          "ip_address": "114.191.17.184",
          "country_code": "JP",
          "country_name": "Japan",
          "region_code": "13",
          "region_name": "Tokyo",
          "city": "Setagaya-ku",
          "postal_zip_code": "154-0017",
          "_copyright": "This location was calculated using GeoLite2 data created by MaxMind - http://www.maxmind.com"
        },
        "tax": {
          "amount": {
            "raw": 0,
            "formatted": "0",
            "formatted_with_symbol": "¥0",
            "formatted_with_code": "0 JPY"
          },
          "included_in_price": false,
          "provider": "chec",
          "provider_type": "native",
          "breakdown": [],
          "zone": {
            "country": "",
            "region": null,
            "postal_zip_code": null,
            "ip_address": null
          }
        },
        "adjustments": []
      }
    ],
    "meta": {
      "pagination": {
        "total": 2,
        "count": 2,
        "per_page": 20,
        "current_page": 1,
        "total_pages": 1,
        "links": {}
      }
    }
  };



const gai = axios.create({
    headers : {
      "X-Authorization": "sk_test_39980259115a0d9753812433d6740aa60b83dc9a64fba",
    }
})

export default function DataTable() {

  const [rows, setRows] = useState([])

  useEffect(() => {
    //fetchOrdersData()
    fetchOrders(123)
  }, [])


  const fetchOrdersData = async () => {
    const { data } = rowss;
    console.log(data)
    setRows(data)
  }

  const fetchOrders = async (customerId) => {
    const  { data } = await gai.get("https://api.chec.io/v1/customers/"+process.env.REACT_APP_CHEC_TEST_CUSTOMER_ID+"/orders")
    console.log(data.data)
    setRows(data.data)
  };

  if(!rows) return 'Loading';
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
