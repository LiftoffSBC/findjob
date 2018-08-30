import axios from "axios";
import $ from "jquery";

const passData = function(ID){
    $.ajax({
        type: "POST",
        url: "/save",
        data: {id: ID}
        
      });
    // const bodyFormData = new FormData() 
    // bodyFormData.set("id", ID) 
    // axios({method:"post", url: "/save", data: bodyFormData, config:{headers: {"Content-Type": "multipart/form-data"}}})
}


export default passData;
