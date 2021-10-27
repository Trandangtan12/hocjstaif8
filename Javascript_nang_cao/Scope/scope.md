## Scope - Phạm via

- Các loại phạm vi: 
           - Global - Toàn cầu
           - Code Block - Khối mã: let, const ({} bất cứ đâu có cặp ngoặc này là code block)
           - Local scope - Hàm: var, function
- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo 
- Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó 
- Cách thức 1 biến được truy cập
- Khi nào một biến bị xóa khỏi bộ nhớ?
          - Biến toàn cầu?
             - xóa khỏi bộ nhớ khi mình load lại trang web
          - Biến trong code block & trong hàm?
             - khi thoát khỏi phạm vi {} thì sẽ xóa khỏi bộ nhớ giúp tiết kiệm bộ nhớ hơn
          - Biến trong hàm được tham chiếu bới 1 hàm