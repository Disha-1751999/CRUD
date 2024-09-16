function loadData(){

    let URL='http://164.68.107.70:6060/api/v1/ReadProduct';
    
    
    document.getElementById('cover-spin').classList.remove('d-none');
    axios.get(URL).then(res=>{
        document.getElementById('cover-spin').classList.add('d-none');
        let data=res.data['data'];
       
        data.forEach(element => {
                        
           document.getElementById('tbody').innerHTML+=`
         
            <tr>
              <td scope="col-2" class="align-middle col-1">${element.ProductName}</td>
              <td scope="col-2" class="align-middle col-2">${element.ProductCode}</td>
              <td scope="col-1" class="align-middle col-1">${element.UnitPrice}</td>
              <td scope="col-1" class="align-middle col-2">${element.Qty}</td>
              <td scope="col-2" class="align-middle col-1">${element.TotalPrice}</td>
              <td scope="col-2" class="align-middle col-2"><button id="delete" onclick="showData('${element['_id']}')">Show Details</button></td>
              <td scope="col-2" class="align-middle col-1"><button id="update" onclick="updateData('${element['_id']}')">Update</button></td>
              <td scope="col-2" class="align-middle col-1"><button id="delete" onclick="deleteData('${element['_id']}')">Delete</button></td>
              
            </tr>

`
        });
        
    }).catch(err=>{
        console.log(err);
       alert(`Error! Can't load the data`);
    });
    
}


async function deleteData(id){
    let URL= `http://164.68.107.70:6060/api/v1/DeleteProduct/${id}`;  
    document.getElementById('cover-spin').classList.remove('d-none');

   await  axios.get(URL).then(res=>{
    document.getElementById('cover-spin').classList.add('d-none');
    alert('Deleted Successfully!')
              document.getElementById('tbody').innerHTML='';

             loadData(); 
        }).catch(err=>{
         alert(`Error! This item can't be deleted`);
    });
}


function updateData(id){
    window.location=`update.html?id=${id}`;

}

function showData(id){
   
    window.location=`showDetails.html?id=${id}`;
}


window.onload=loadData();