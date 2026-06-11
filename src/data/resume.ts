export const profile = {
  name: "Đỗ Quang Hợp",
  nameVi: "Đỗ Quang Hợp",
  title: "AI Engineer",
  location: "Cầu Giấy, Hà Nội, Việt Nam",
  phone: "+84 969 994 310",
  email: "hop.dquang@gmail.com",
  github: "https://github.com/hopquangdo",
  leetcode: "https://leetcode.com/realdqh",
  summary:
    "AI Engineer xây dựng hệ thống thông minh cấp production cho tự động hóa doanh nghiệp và xử lý thông tin. Kinh nghiệm trọn vòng đời — từ kiến trúc, phát triển mô hình đến triển khai và vận hành.",
  currentRole: "AI Engineer",
  currentCompany: "Công ty Cổ phần Workstation",
  currentPeriod: "05/2026 — Hiện tại",
}

export const navSections = [
  { id: "intro", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
] as const

export const skills = [
  "Python",
  "PyTorch",
  "FastAPI",
  "LangChain",
  "LangGraph",
  "Agentic RAG",
  "Multi-Agent Systems",
  "vLLM",
  "Docker",
  "Qdrant",
  "TypeScript",
  "Next.js",
]

export const workExperience = [
  {
    period: "05/2026 — Hiện tại",
    role: "AI Engineer",
    company: "Công ty Cổ phần Workstation",
    highlights: [
      "Xây dựng hệ thống AI tự động hóa quy trình, giảm ~60% xử lý thủ công trong pipeline tuyển dụng.",
      "Thiết kế ghép CV–JD trên 5.000+ hồ sơ với độ trễ tìm kiếm dưới 200ms.",
      "Triển khai dịch vụ AI production với FastAPI, Docker và Linux.",
    ],
    tech: ["FastAPI", "Docker", "Python", "LLM"],
  },
  {
    period: "08/2025 — 05/2026",
    role: "AI Engineer",
    company: "Viện Công nghệ Thông tin Xây dựng Hà Nội (IIC)",
    highlights: [
      "Xây dựng hệ thống tin tức tự động với độ chính xác phân loại cảm xúc ~80%.",
      "Triển khai quy trình xử lý tài liệu và truy xuất tri thức cùng Viettel BTS.",
      "Thiết kế pipeline tìm kiếm ngữ nghĩa trên hàng chục nghìn tài liệu kỹ thuật.",
    ],
    tech: ["PhoBERT", "NLP", "FastAPI", "Python"],
  },
  {
    period: "12/2024 — 02/2025",
    role: "Thực tập sinh Kỹ sư Phần mềm",
    company: "Công ty Cổ phần Đào tạo Quản trị Trực tuyến",
    highlights: [
      "Phát triển dịch vụ backend Java cho quản lý giáo dục và chuyển đổi số.",
      "Bảo trì module quản lý dữ liệu và logic nghiệp vụ cốt lõi.",
    ],
    tech: ["Java", "Backend", "SQL"],
  },
]

export const projects = [
  {
    title: "Nền tảng Phân tích Tin tức bằng AI",
    period: "09/2025 — 12/2025",
    role: "AI Engineer",
    url: "https://diemtinai.com",
    problem:
      "Doanh nghiệp gặp khó khăn khi theo dõi độ phủ truyền thông thủ công — nguồn tin rải rác, tổng hợp chậm và thiếu cách mở rộng để theo dõi cảm xúc hay xu hướng dư luận.",
    solution: [
      "Xây dựng pipeline end-to-end thu thập, chuẩn hóa và gom cụm tin tức từ nhiều nguồn trực tuyến.",
      "Fine-tune PhoBERT cho phân loại cảm xúc (Tích cực, Trung lập, Tiêu cực).",
      "Thiết kế REST API và dịch vụ inference cho luồng phân tích thời gian thực.",
      "Self-host toàn bộ stack trên Linux với Docker, Nginx và FastAPI.",
    ],
    result: [
      "Độ chính xác phân loại cảm xúc ~80% trên dữ liệu tin tức production.",
      "Giảm đáng kể thời gian theo dõi và tổng hợp truyền thông thủ công.",
      "Triển khai production ổn định phục vụ workload phân tích trực tiếp.",
    ],
    tech: ["PhoBERT", "Transformers", "FastAPI", "PostgreSQL", "Docker", "Nginx"],
  },
  {
    title: "Nền tảng Tư vấn Chăm sóc Tóc Multi-Agent",
    period: "06/2026 — Hiện tại",
    role: "AI Engineer",
    url: "https://anvalanh.com",
    problem:
      "Thương hiệu chăm sóc tóc cần tư vấn cá nhân hóa, chính xác ở quy mô lớn — chatbot thông thường thiếu kiến thức sản phẩm, ngữ cảnh khách hàng và khả năng điều phối tin cậy giữa luồng bán hàng và hỗ trợ.",
    solution: [
      "Thiết kế kiến trúc Multi-Agent: Planner, Hair Consultant và Customer Service.",
      "Xây dựng pipeline Agentic RAG kết hợp knowledge base, catalog sản phẩm và dữ liệu khách hàng.",
      "Tích hợp dịch vụ MCP cho tồn kho, lịch sử mua hàng và chuyên môn domain với tool-calling.",
      "Điều phối workflow bằng LangGraph cho hội thoại đa bước có ngữ cảnh.",
    ],
    result: [
      "Gợi ý cá nhân hóa dựa trên dữ liệu sản phẩm và khách hàng thực tế.",
      "Truy vấn độ trễ thấp với Qdrant và Redis trên production.",
      "Tự động hóa luồng tư vấn end-to-end từ chẩn đoán đến gợi ý sản phẩm.",
    ],
    tech: ["Python", "FastAPI", "LangGraph", "MCP", "Qdrant", "Redis", "LLM"],
  },
]

export const education = {
  school: "Trường Đại học Xây dựng Hà Nội",
  degree: "Cử nhân Khoa học Máy tính",
  period: "08/2023 — 12/2026",
  gpa: "3.0/4.0",
}

export const activities = [
  {
    id: "aini-research",
    period: "04/2025 — Hiện tại",
    title: "AINI Team — Nghiên cứu AI",
    organization: "Đại học Bách khoa Hà Nội",
    description:
      "Nghiên cứu tối ưu mô hình Edge AI, thị giác máy tính thời gian thực và benchmark triển khai trên phần cứng hạn chế tài nguyên.",
  },
  {
    id: "fit-robot",
    period: "04/2025",
    title: "Cuộc thi Robot FIT HUCE",
    organization: "Trường Đại học Xây dựng Hà Nội",
    description: "Dẫn dắt đội 5 sinh viên thiết kế và lập trình robot dò line.",
  },
]

export const awards = [
  {
    id: "icons-best-paper",
    period: "05/2026",
    title: "Giải thưởng Bài báo Hay nhất",
    organization: "ICONS 2026",
    description: "Edge AI phân loại rác tái chế thời gian thực trên thiết bị edge hạn chế tài nguyên.",
  },
  {
    id: "scholarship",
    period: "01/2026",
    title: "Học bổng Sinh viên Xuất sắc",
    organization: "Trường Đại học Xây dựng Hà Nội",
    description: "Học kỳ Xuân 2026 với GPA kỳ 3.64.",
  },
  {
    id: "huce-startup",
    period: "04/2026",
    title: "Cuộc thi Khởi nghiệp Đổi mới HUCE",
    organization: "Trường Đại học Xây dựng Hà Nội",
    description: "Chatbot AI tra cứu, phân tích và đối chiếu tiêu chuẩn kỹ thuật tự động.",
  },
  {
    id: "research-third-prize",
    period: "12/2025",
    title: "Giải ba — Nghiên cứu Khoa học cấp Trường",
    organization: "Trường Đại học Xây dựng Hà Nội",
    description:
      "Được trao giải cho chatbot tuyển sinh AI tự động hóa tư vấn, tra cứu chương trình và hướng dẫn nhập học.",
  },
]

export const publications = [
  {
    title:
      "Edge AI for Real-Time Recyclable Waste Sorting in Viet Nam: A Practical Approach for Smart and Sustainable Cities",
    authors: "Luong Thanh Tam, Do Quang Hop, Nguyen Tien Anh et al.",
    date: "04/2026",
    highlights: [
      "Tối ưu YOLO cho phân loại rác thời gian thực trên thiết bị edge hạn chế tài nguyên.",
      "Cải thiện inference từ ~12 FPS lên ~30 FPS trên Jetson Nano, giảm ~35% bộ nhớ GPU.",
      "Duy trì độ chính xác >90% trong môi trường inference thời gian thực ổn định.",
    ],
  },
]

export const socialLinks = [
  { name: "GitHub", handle: "@hopquangdo", url: "https://github.com/hopquangdo" },
  { name: "LeetCode", handle: "@realdqh", url: "https://leetcode.com/realdqh" },
  { name: "Email", handle: "hop.dquang@gmail.com", url: "mailto:hop.dquang@gmail.com" },
]
