async function fillExistingData(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    let URL=`http://164.68.107.70:6060/api/v1/ReadProductByID/${id}`;
    
    document.getElementById('cover-spin').classList.remove('d-none');

    let res = await axios.get(URL);

    document.getElementById('cover-spin').classList.add('d-none');
    let item= res.data['data'][0];

    let productName= item['ProductName'];
    let productCode= item['ProductCode'];
    let img= item['Img'];
    let unitPrice= item['UnitPrice'];
    let qty= item['Qty'];
    let totalPrice= item['TotalPrice'];

    document.getElementById('productName').value=productName;
    document.getElementById('productCode').value=productCode;
    
    document.getElementById('unitPrice').value=unitPrice;
    document.getElementById('Qty').value=qty;
    document.getElementById('totalPrice').value=totalPrice;
    document.getElementById('productImg').value=img;

}


fillExistingData();
async function updateData(){

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

     let URL=`http://164.68.107.70:6060/api/v1/UpdateProduct/${id}`;

    let productName=document.getElementById('productName').value;
    let productCode=document.getElementById('productCode').value;
    let productImg=document.getElementById('productImg').value;
    let unitPrice=document.getElementById('unitPrice').value;
    let Qty=document.getElementById('Qty').value;
    let totalPrice=document.getElementById('totalPrice').value;

    let sendData={
        
        Img:productImg,
        ProductCode: productCode,
        ProductName: productName,
        Qty: Qty,
        TotalPrice: totalPrice,
        UnitPrice: unitPrice
        
        
    }

    await axios.post(URL,sendData).then(res=>{
      alert('Updated Successfully!')
      window.location='index.html';
    }).catch(err=>{
      alert(`Error! Can't update this item`);
    })
      
}