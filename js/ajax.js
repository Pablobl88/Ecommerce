const elemento =  { "items": [
    {
      "title": "Dummy Title",
      "description": "Dummy description",
      "picture_url": "http://www.myapp.com/myimage.jpg",
      "category_id": "cat123",
      "quantity": 1,
      "currency_id": "ARS",
      "unit_price": 10
    }
  ]
}

$.ajaxSetup({
    headers:{
        'Authorization': 'Bearer TEST-1007332304244264-092123-dc67c2638c55ef81c5a0cba78d7ee4e6-52204490',
        'Content-Type': 'application/json'
    }
})

  
$.post("https://api.mercadopago.com/checkout/preferences", JSON.stringify(elemento), (respuesta, status) => {
    console.log(respuesta)
}); 

        
    
