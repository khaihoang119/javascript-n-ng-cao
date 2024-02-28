var API_URL = 'http://localhost:3000/';
const topics = 'topics';
function save(){
    axios({
        method: "POST",
        url: API_URL + topics,
        data: Topic
    }).then(res =>{
        if(res.status === 200){
            //Chuyển về trang index và hiển thị dữ liệu
        }else{
            //Thông báo lỗi
        }
    })
}
function getTopicByID(id){
    axios({
        method: "GET",
        url: API_URL + topics + '?id=' + id
    }).then(res =>{
        //Nhận được đối tượng dựa trên id tương ứng
    })
}

function update(id){
    let Topic = {

    }
    axios({
        method : "GET",
        url: API_URL + topics + '?id' + id,
        data: topics                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                c
    })
}