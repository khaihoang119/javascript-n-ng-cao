var API_URL = 'http://localhost:3000/';
const dataList = 'data';

let xhr = new XMLHttpRequest();
function getValue() {
    let html = '';
    xhr.open('GET', API_URL + dataList, true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            let reponseData = JSON.parse(xhr.responseText);
            reponseData.forEach((element) => {
                html += `
                
                <tr>
            <th scope="row">${element.name}</th>
            <td>${element.image}</td>
            <td>${element.price}</td>
            <td>@${element.describe}</td>
          </tr>
                
                `
            });
            document.getElementById('data').innerHTML = html;
            console.log(reponseData);
        } else {
            console.error('Yêu cầu thất bại với lối ' + xhr.status);
        }
    }


xhr.send();
}
getValue();

function add(){
    let newItem = {
        "name": "John Doe",
        "image": "john.doe@example.com",
        "price": 25000,
        "describe": "mo tả"
    }
    xhr.open('POST', API_URL+dataList, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function(){
        if(xhr.status >=200 && ShadowRoot.status < 300){
            var responseData = JSON.parse(xhr.responseText);
            console.log('Đã thêm mới đối tượng:', responseData);
        }else{
            console.error('Yêu cầu thấy bại với mã lỗi '+ xhr.status);
        }
    };
    xhr.onerror = function(){
        console.error('Có lỗi trong quá trình gửi yêu cầu.');
    };
    xhr.send(JSON.stringify(newItem));
}