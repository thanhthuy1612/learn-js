//Rest: REpresentational State Transfer, là quy ước một số quy tắc ràng buộc khi thiết kế hệ thống mạng. Rest cho phép máy khách tuơng tác với dữ liệu được lưu trên máy chủ mà không cần phải có bất kì kiến thức nào về máy chủ
//REST có một số ràng buộc
//Uniform Interface: Giao diện thống nhất
//Stateless: Không trạng thái
//Cacheable: Dữ liệu có thể lưu vào bộ nhớ cache
//Client-Server: Máy khách- máy chủ
//Layered System: Hệ thống phân lớp
//Code on Demand: Code theo yêu cầu

import axios from "axios";

//API: cơ chế có thể cho phép 2 thành phần phần mềm giao tiếp với nhau bằng một tập hợp các định nghĩa và giao thức

//RESTful API: là một API chuẩn REST. Sử dụng các phương thức HTTP: get, put, delete, post
//Trạng thái trả về:
//200 OK: Thành công
//201 CREATE: Tạo thành công (POTST, PUT)
//201 NO CONTENT: Thành công nhưng không có gì tả về body (DELETE, PUT)
//400 BAD REQUEST: Lỗi, có thể nguyên nhân từ validate lỗi, thiếu data,...
//403 FORBIDDEN: Lỗi liên quan đến không có truy cập
//404 NOT FOUND: Lỗi liên quan tài nguyên không tìm thấy
//405 METHOD NOT ALLOWED: Lỗi liên quan method không được chấp nhận
//500 INTERNAL SERVER ERROR: Lỗi liên quan đến việc servaer bị lỗi khi xử lý tác vụ nào đó
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  console.log(this.readyState);
};
xhttp.open("GET", "https://request.in/api/users?page=2", true);
xhttp.send();

fetch("https://request.in/api/users?page=2")
  .then((res) => {
    console.log(res);
    return res.json;
  })
  .then((res) => {
    console.log(res);
  });

axios
  .get("https://request.in/api/users?page=3")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => console.log(error));

const http = axios.create({
  baseURL: "https://request.in/api/",
});

http.interceptors.request.use(
  (config) => {
    config.headers.Timeout = 200;
    return config.data;
  },
  (err) => {
    Promise.reject(err);
  }
);

http
  .get("users/2")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
