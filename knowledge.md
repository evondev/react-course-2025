# Components

- Cách đặt tên:
- Bắt đầu với chữ cái đầu tiên in Hoa. Ví dụ đúng: `Profile` `Avatar` `HeroSection`
- Ví dụ sai: `avatar`, `profile`, `user`, `heroSection`
- Sử dụng: `<Profile/>` `<Avatar/>` `<Information></Information>`
- Parent component and children component

```tsx
function Profile() {
  return <img src="" alt="" />;
}
// parent component: App
// children component: Profile
<App>
  <Profile></Profile>
</App>;
```

- Lưu ý khi tạo component: Đặt tên đúng, sử dụng `return ()` đúng cách,
- Bad practice

```tsx
const App = () => {
  // 🛑 Không nên khai báo function bên trong function
  function Profile() {
    return (
      // JSX
      <img
        src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile"
      />
    );
  }
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Profile></Profile>
      <Profile />
    </div>
  );
};
```

- Đừng quên export component khi tạo để có thể sử dụng ở chỗ khác

# Import và export

- Default export: Khi import thì có thể đổi tên của component. Trong 1 file thì chỉ có thể export default 1 component duy nhất
- Named export: Có thể export nhiều trong 1 file. Cũng có thể đổi tên khi import với `as`

# JSX

- Khi code Component trong React và sử dụng `return` thì phải có ít nhất 1 thẻ cha bọc lại
- Nếu không muốn dùng thêm thẻ để bọc lại thì có thể dùng `<></>` hoặc `Fragment`
- Khi sử dụng JSX thì các thuộc tính sẽ sử dụng theo cấu trúc là camelCase. Đối với 1 từ thì viết bình thường ví dụ: `id` `type`. Đối với 2 từ trở lên thì sẽ là camelCase. Ví dụ: `className` `onChange` `onClick`
- Có 1 số thuộc tính đặc biệt thì vẫn viết như bình thường. Ví dụ `aria-label` chứ không cần phải viết là 🛑 arialLabel
- Ví dụ thuộc tính trong svg là stroke-width(HTML) -> `strokeWidth`
- Tất cả thẻ trong JSX phải đóng. Ví dụ <img> -> <img/> <div/> <div>react</div>
- Khi sử dụng JSX trong React nếu viết sai thì cũng sẽ được IDE hoặc Code Editor gợi ý để chỉnh sửa

# JSX {}

- Nếu giá trị là chuỗi thì truyền vào chuỗi nháy đôi như bình thường.
- Nếu giá trị không phải chuỗi thì dùng dấu `{value}`
- Value có thể là object({}), array([]), hoặc là biến bất kỳ, số, boolean, function
- Khi dùng style inline trong JSX thì các thuộc tính cũng phải viết theo _camelCase_.
- Nếu giá trị là `boolean` thì có 2 trường hợp:
- Trường hợp giá trị là `false` thì truyền vào `false`. Ví dụ `isActive={false}`
- Trường hợp giá trị là `true` thì các bạn có thể viết rút gọn như sau `isActive`
- Nếu function có tham số(parameters) thì sẽ viết dạng

```js
{
  () => handleClickImage();
}
```

- Nếu function không có tham số thì có thể viết rút gọn

```js
{
  handleClickImage;
}
```

# Props

- Props là 1 object
- Khi khai báo props thì nên định nghĩa type cho những props đó. Cách đặt tên: Component+Props ví dụ `AvatarProps` `UserProfileProps` `ModalDeleteProps`
- Đặt tên props hiệu quả: đặt dễ hiểu, tuân thủ camelCase, nếu props truyền vào là function thì nên bắt đầu với từ `on` + danh từ + sự kiện. Ví dụ `onImageClick` `onModalRemove` `onInputTyping`
- Những functions sử dụng bên trong nội bộ component đó thì nên bắt đầu với từ `handle` + danh từ + sự kiện. Ví dụ `handleInputChange` `handleContainerClick`
- Component này chưa có props nào truyền vào ví dụ `<Avatar />`
- Những cách sử dụng props
- Default values nghĩa là những giá trị mặc định nếu chúng ta không truyền giá trị vào thì nó sẽ lấy giá trị mặc định
- Sau này khi đi làm nếu thêm 1 props cho component nào đó mà component đó đang sử dụng ở rất nhiều chỗ thì phải lưu ý là props đó có bắt buộc cho tất cả không ? Nếu có thì phải đi sửa cho tất cả những chỗ đang dùng. Nếu không thì nên để props đó là optional.
- Đối với những props là `boolean` thì nên bắt đầu với các từ như: `is, can, could, should, will, have, has...`

```js
const imageURL = props.imageURL;
const size = props.size;
// destructring
const { imageURL, size } = props;
export function Avatar({ imageURL, size }: AvatarProps) {}
```

# Conditional rendering

- Sử dụng điều kiện để hiển thị UI: `if/else, ?:, &&, ??`
- _Cách 1_: Sử dụng if/else
- _Cách 2_: Sử dụng ternary operator ?:
- _Cách 3_: Sử dụng toán tử &&

# Rendering list

- Khi mà data liên quan tới nhau và có từ 2 phần tử trở lên thì nên dùng _rendering list_
- Khi sử dụng _rendering list_ thì key là bắt buộc. `Key` nên là 1 giá trị **unique** ví dụ như id từ data trả ra
- Khi mà muốn xử lý nhiều logic thì nên sử dụng với dấu ngoặc nhọn và dùng từ khóa return. Ngược lại thì chỉ cần trả về inline
- Để xử lý dữ liệu thì có thể dùng các phương thức cho mảng trong Javascript như: map, filter, reduce, some, every, find, findIndex...

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

# State

- Definition
- Regular variable
- `useState` hook
- Naming convention
- Rules of hooks
- State variable / state setter
- Multiple state
- Isolated state
- Deep dive: How React knows which state to update

# Render

## Trigger

## Rendering

## Commit

-
