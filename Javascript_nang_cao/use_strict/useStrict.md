## Strict Mode - Nghiêm ngặt
- báo lỗi hoặc ngăn chặn khi sử dụng những đoạn mã không an toàn hay dễ gây hiểu nhầm

## Cách sử dụng
1. thêm "use strict"; vào đầu file.js
2. Thêm "use strict"; ngay sau thẻ mở <script>
3. Thêm "use strict"; vào đầu phạm vi hàm

## Đặc trưng
- Không thể khai báo biến mà không sử dụng từ khóa var, let, const
- Báo lỗi khi gán lại giá trị cho thuộc tính writable: false 
- Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
- Không đặt tên biến, tên hàm bằng một từ khóa "nhạy cảm" của ngôn ngữ (private, protected...)

## Công dụng
1. Tránh "quên" từ khóa khi khai báo biến
2. Tránh trùng tên biến lẫn tới lỗi logic
3. Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global
