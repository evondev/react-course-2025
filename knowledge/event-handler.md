# Event handler

- Defined: Có thể viết inline với arrow function. Ví dụ `() => console.log("Clicked")`. Nếu mà function không có params thì chúng ta có thể viết rút gọn như sau: `onClick={fn}`
- Naming convention: Nên bắt đầu với chữ `handle` ví dụ `handleButtonClick`, `handleInputChange`
- Lưu ý: Khi truyền function vào event handler thì không nên viết như thế này: _onClick={handleButtonClick()}_ vì viết như vậy thì function sẽ chạy ngay lập tức mà chưa click vào dẫn đến sai kết quả mong muốn.
- Read from props
- Passing event handler as props: Truyền event handler vào dưới dạng là props
- Naming convention event handler props: Nếu truyền vào dưới dạng props thì event handler nên bắt đầu với từ `on` ví dụ: `onChange` `onButtonClick` `onInputFocus`
- Nếu event handler có params thì chúng ta phải viết như sau: _onClick={() => fn(params)}_
- Nếu mà muốn viết nhiều dòng thì inline sẽ dùng dấu {}. Ví dụ:

```jsx
<button
  onClick={() => {
    onClick(message);
    console.log("hello");
  }}
>
  Button
</button>
```

- Event propagation
- Stopping propagation
- Preventing default behavior
