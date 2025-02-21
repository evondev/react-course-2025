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
