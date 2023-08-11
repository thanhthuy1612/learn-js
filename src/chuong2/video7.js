export default function Video7() {
  //es6
  //dom
  //web storage and cookie
  //web storage: lưu trữ được nhiều dữ liệu và dễ dùng hơn Cookie
  //Cả 3 đều dùng để lưu thông tin trên trình duyệt để tiện xử lý sau này

  //Local Storage: là web storage, lưu lại vĩnh viễn trên trình duyệt, dung lượng khoản 5Mb-10Mb, các trang khác không thể truy cập đến Loacal Storage nếu như khác domain
  //thêm
  localStorage.setItem("name", "ten");
  //đọc
  localStorage.getItem("name");
  //xóa
  localStorage.removeItem("name");
  //xóa hết
  localStorage.clear();

  //Session Storage: là web storage giống local storage, lưu lại trong 1 phiên dùng web đóng tag là mất data, dung lượng khoản 5Mb-10Mb, các trang khác không thể truy cập đến session storage nếu như khác domain
  //thêm
  sessionStorage.setItem("name", "ten");
  //đọc
  sessionStorage.getItem("name");
  //xóa
  sessionStorage.removeItem("name");
  //xóa hết
  sessionStorage.clear();

  //Cookie: không phải là web storage, thời gian lưu trữ data có giới hạn. khi hết hạn thì cookie tự động xóa, dung lượng lưu trữ chỉ khoảng 4Kb, cookie sẽ tự dộng truyền từ server xuống client và truyền từ client lên server thông qua header request
  //cookie tạo trên server để truyên xuống client thông qua header của mỗi request
  document.cookie = "name=name";
  console.log(document.cookie);

  //Server Session: phiên bản server, không phải ở client, server sẽ tự động quyết định khi nào kết thúc phiên để đưa ra quyết địng với client

  return <>7</>;
}
