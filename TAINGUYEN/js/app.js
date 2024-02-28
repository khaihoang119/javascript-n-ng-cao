const API_URL = "http://localhost:3000/";
const topic = 'topics';
function getTopics() {
    let html = '';
    let listTopic;

    axios({
        method: 'GET',
        url: API_URL + topic
    }).then(res => {
        if (res.status === 200) {
            console.log(res);
            listTopic = res.data;
            listTopic.forEach(element => {
                html += `<div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <div class="custom-block custom-block-overlay">
                            <a href="detail-page.html" class="custom-block-image-wrap">
                                <img src="images/topics/repairman-doing-air-conditioner-service.jpg"
                                    class="custom-block-image img-fluid" alt="">
                            </a>

                            <div class="custom-block-info custom-block-overlay-info">
                                <h5 class="mb-1">
                                    <a href="listing-page.html">
                                        Technician
                                    </a>
                                </h5>

                                <p class="badge mb-0">12 Episodes</p>
                                <p class="badge mb-0">2/10/2024</p>
                                <div class="d-flex justify-content-between mt-4">
                                    <button class="btn btn-warning">Edit</button>
                                    <button class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>`
            });
            document.getElementById('list-topics').innerHTML = html;
        } else {
            console.log(); ("Failed");
        }
    }).catch(function (error) {
        console.log(error);
    });
};
getTopics();
