const user = {
  id: "usr_a1b2c3d4e5f6",
  email: "hong.gildong@example.com",
  password: "$2b$10$hashedSecurePasswordString",
  name: {
    firstName: "길동",
    lastName: "홍",
    fullName: "홍길동",
  },
  age: 21,
  phone: {
    countryCode: "+82",
    number: "010-1234-5678",
    isVerified: true,
  },
  address: {
    street: "서울시 강남구 테헤란로 123",
    city: "서울",
    state: "강남구",
    zipCode: "06134",
    country: "대한민국",
    isDefault: true,
  },
  createdAt: "2024-01-15T09:30:00.000Z",
  lastLoginAt: "2025-03-02T14:22:00.000Z",
  isVerified: true,
  isActive: true,
  role: "member",
  preferences: {
    language: "ko",
    theme: "dark",
    notifications: {
      email: true,
      push: true,
      sms: false,
    },
    privacy: {
      profileVisible: true,
      showEmail: false,
    },
  },
  socialLinks: {
    github: "https://github.com/honggildong",
    linkedin: "https://linkedin.com/in/honggildong",
    twitter: null,
  },
  tags: ["developer", "frontend", "javascript"],
  metadata: {
    signupSource: "web",
    lastIp: "192.168.0.1",
    userAgent: "Mozilla/5.0...",
  },
};

console.log(user);
