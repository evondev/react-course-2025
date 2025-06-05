# State cơ bản

- Biến cục bộ(local variables) không tồn tại giữa các lần re-renders. Khi mà thay đổi biến cục bộ sẽ không làm cho React re-renders.
- Định nghĩa
- `useState` hook
- Naming convention: [something, setSomething], [a, b]

# Rules of hooks

- Sử dụng hook ở trên cùng của component
- Không được sử dụng hook ở ngoài component, trong function, hoặc trong câu điều kiện, hay là JSX
- State variable / state setter

## Trigger

- Khởi tạo - initial render
- State được cập nhật(re-renders)

## Rendering

- React sẽ gọi components
- Initial render, React sẽ gọi root component
- Những lần renders tiếp theo, React sẽ gọi những component mà có state được cập nhật
- Nếu component mà được cập nhật lại trả ra 1 component khác thì React cũng sẽ render component đó kế tiếp luôn.

## Commit

- Initial render, React sẽ sử dụng phương thức `appendChild()` DOM API để đặt tất cả DOM nodes lên màn hình
- Khi mà có re-renders, React sẽ áp dụng các hoạt động cần thiết tối thiểu để render lên màn hình. React chỉ thay đổi DOM nodes nếu có sự khác nhau giữa các lần renders(React reconciliation)

## Painting

- Sau khi rendering hoàn thành và React cập nhật DOM thì trình duyệt sẽ cập nhật UI

# State as a Snapshot

- Trong React, "state as a snapshot" có nghĩa là trạng thái (state) tại một thời điểm cụ thể được React "chụp lại" như một bức ảnh tĩnh. Khi gọi hàm setState React không thay đổi giá trị state ngay lập tức trong lần chạy code hiện tại. Thay vào đó:
- React "chụp" giá trị state hiện tại (snapshot) tại thời điểm component render.
- Giá trị state này được giữ nguyên trong suốt quá trình xử lý sự kiện (event handler) và render hiện tại.
- Các thay đổi từ setState chỉ được áp dụng ở lần render tiếp theo.
- Điều này giúp React đảm bảo tính nhất quán và dự đoán được hành vi của ứng dụng, tránh những lỗi không mong muốn khi state thay đổi giữa chừng trong một chu kỳ render.

# State queue updates

- React sẽ đưa các yêu cầu cập nhật state vào queue(hàng đợi)
- Sau khi mà sự kiện hoàn tất, React sẽ xử lý hàng đợi này, gộp các cập nhật lại và chỉ render component 1 lần duy nhất để tối ưu hiệu suất

```jsx
[]
onClick={() => {
  setCounter(counter + 1); [1]
  setCounter(counter + 1); [1, 2]
  setCounter(counter + 1); [1, 2, 3]
}}
```

- Updater function trong state

```jsx
setCounter((previousCounter) => previousCounter + 1);
```

# State object

# State array
