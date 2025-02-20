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
