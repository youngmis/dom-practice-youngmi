const user = {
  id: 1001,
  email: "user@example.com",
  password: "securePassword123",
  name: "홍길동",
  age: 30,
  phone: "010-1234-5678",
  address: "서울특별시 중구 세종대로 110",
  role: "user",
  gender: "male",
  isActive: true,
  joinDate: "2024-06-06",
  lastLogin: "2024-06-09T12:34:56",
  profileImage: "https://example.com/profile.jpg",
  preferences: {
    language: "ko",
    theme: "dark",
  },
  friends: [1002, 1003, 1004],
  socialLinks: {
    facebook: "https://facebook.com/example",
    twitter: "https://twitter.com/example",
    instagram: "https://instagram.com/example",
  },
};

const userWithFakePassword = { ...user, password: "" };
const userWithMask = { ...user, phone: masking(user.phone) };
