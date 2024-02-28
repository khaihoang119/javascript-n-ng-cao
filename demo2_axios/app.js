API_URL = "http://localhost:3000/";
const dataList = 'products';
let listFruit;
function getValue(){
    //dùng thư viện axios gọi api
    let html =`
    
    `;
    let listData;

    axios({
        method:'GET',
        url: API_URL + dataList

    }).then(res => {
        if( res.status === 200){
            // listFuirt = res.data;
            console.log(res);
        } else{
            console.log();("that bai");
        }
    }).catch(function (error) {
        console.log(error);

    });
}
getValue();