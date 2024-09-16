async function show() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    let URL=`http://164.68.107.70:6060/api/v1/ReadProductByID/${id}`;
    

    document.getElementById('cover-spin').classList.remove('d-none');

    let res = await axios.get(URL);
   
   
    let item= res.data['data'][0];

    let productName= item['ProductName'];
    let productCode= item['ProductCode'];
    let img= item['Img'];
    let unitPrice= item['UnitPrice'];
    let qty= item['Qty'];
    let totalPrice= item['TotalPrice'];
    let CreatedDate=item['CreatedDate'];

    document.getElementById('productName').innerText=productName;
    document.getElementById('productCode').innerText=productCode;
    document.getElementById('unitPrice').innerText=unitPrice;
    document.getElementById('Qty').innerText=qty;
    document.getElementById('totalPrice').innerText=totalPrice;
    document.getElementById('productImg').src=img;
    document.getElementById('CreatedDate').innerText=CreatedDate;
    document.getElementById('cover-spin').classList.add('d-none');
}

show();