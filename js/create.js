 async function createProduct(){
        let URL='http://164.68.107.70:6060/api/v1/CreateProduct/'

        let productName=document.getElementById('productName').value;
        let productCode=document.getElementById('productCode').value;
        let productImg=document.getElementById('productImg').value;
        let unitPrice=document.getElementById('unitPrice').value;
        let Qt=document.getElementById('Qty').value;
        let totalPrice=document.getElementById('totalPrice').value;

        let sendData={
            
            Img:productImg,
            ProductCode: productCode,
            ProductName: productName,
            Qty: Qt,
            TotalPrice: totalPrice,
            UnitPrice: unitPrice
            
            
        }
        document.getElementById('cover-spin').classList.remove('d-none');
        await axios.post(URL,sendData).then(res=>{
          document.getElementById('cover-spin').classList.add('d-none');
          alert('Created Successfully!')
          window.location='index.html';
        }).catch(err=>{
          alert('Error');
        })
       
        
}

