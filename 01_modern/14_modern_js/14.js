const user = {
  id: 1,
  email: "test@test.com",
  password: "123456",
  name: "홍길동",
  age: 25,
  phone: "010-1234-5678",
  address: "서울특별시 중구 세종대로 110",
  role: "user",
  gender: "male",
  isActive: true,
  joinDate: "2024-06-06",
  lastLogin: "2024-06-09T12:34:56",
  profileImage: "https://example.com/profile.jpg",
};

// 민감한 password를 "" 처리
const { password, ...userWithoutPassword } = user;
console.log("userWithoutPassword => ", userWithoutPassword);
