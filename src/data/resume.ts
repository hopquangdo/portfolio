export const profile = {
  name: "Đỗ Quang Hợp",
  nameEn: "Do Quang Hop",
  title: "AI Engineer",
  location: "Cầu Giấy, Hà Nội",
  phone: "+84 969 994 310",
  email: "hop.dquang@gmail.com",
  github: "https://github.com/hopquangdo",
  leetcode: "https://leetcode.com/realdqh",
  summary:
    "AI Engineer có kinh nghiệm xây dựng các hệ thống trí tuệ nhân tạo ứng dụng trong thực tế doanh nghiệp, tập trung vào tự động hóa và xử lý thông tin. Có khả năng tham gia toàn bộ vòng đời phát triển hệ thống từ thiết kế đến triển khai và vận hành.",
  currentRole: "AI Engineer",
  currentCompany: "Workstation Joint Stock Company",
  currentPeriod: "05/2026 — Present",
}

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

export const skillGroups = [
  {
    label: "Programming",
    items: ["Python", "Java", "TypeScript", "SQL"],
  },
  {
    label: "AI & LLM",
    items: ["PyTorch", "Hugging Face", "Agentic RAG", "LangChain", "Vector Search"],
  },
  {
    label: "Backend & Infra",
    items: ["FastAPI", "Docker", "Linux", "Nginx", "Redis", "Qdrant"],
  },
]

export const workExperience = [
  {
    period: "05/2026 — Present",
    role: "AI Engineer",
    company: "Workstation Joint Stock Company",
    highlights: [
      "Phát triển hệ thống AI phục vụ workflow automation, giảm ~60% khối lượng xử lý thủ công trong quy trình tuyển dụng.",
      "Thiết kế pipeline matching CV & JD xử lý hơn 5.000 hồ sơ, giảm thời gian tìm kiếm từ hàng giờ xuống dưới 200ms.",
      "Triển khai AI services production với FastAPI, Docker và Linux.",
    ],
    tech: ["FastAPI", "Docker", "Python", "LLM"],
  },
  {
    period: "08/2025 — 05/2026",
    role: "AI Engineer",
    company: "Viện Tin Học Xây dựng Hà Nội (IIC)",
    highlights: [
      "Xây dựng hệ thống AI phân tích điểm tin tự động, phân loại sắc thái tin tức với độ chính xác 80%.",
      "Phát triển workflow xử lý tài liệu và truy xuất tri thức hợp tác cùng Viettel BTS.",
      "Thiết kế pipeline semantic search trên hàng chục nghìn tài liệu kỹ thuật.",
    ],
    tech: ["PhoBERT", "NLP", "FastAPI", "Python"],
  },
  {
    period: "03/2025 — Present",
    role: "AI Researcher",
    company: "AINI Team, Hanoi University of Science and Technology",
    highlights: [
      "Nghiên cứu tối ưu mô hình AI cho Edge AI và hệ thống tài nguyên hạn chế.",
      "Phát triển giải pháp computer vision xử lý thời gian thực trên edge devices.",
      "Triển khai model optimization, deployment testing và performance benchmarking.",
    ],
    tech: ["PyTorch", "YOLO", "ONNX", "TensorRT"],
  },
  {
    period: "12/2024 — 02/2025",
    role: "Software Engineer Intern",
    company: "Online Management Training Joint Stock Company",
    highlights: [
      "Phát triển backend Java cho hệ thống quản lý giáo dục và chuyển đổi số.",
      "Xây dựng và duy trì các chức năng quản lý dữ liệu và nghiệp vụ hệ thống.",
    ],
    tech: ["Java", "Backend", "SQL"],
  },
]

export const projects = [
  {
    title: "AI-powered News Intelligence Platform",
    period: "09/2025 — 12/2025",
    role: "AI Engineer",
    url: "https://diemtinai.com",
    description:
      "Nền tảng AI tự động thu thập, phân tích và tổng hợp điểm tin từ nhiều nguồn báo chí, hỗ trợ theo dõi truyền thông và đánh giá xu hướng dư luận.",
    highlights: [
      "Fine-tune PhoBERT phân loại sắc thái tin tức, đạt ~80% accuracy.",
      "Pipeline crawling, chuẩn hóa dữ liệu và phân nhóm tin theo chủ đề.",
      "Self-host production với Docker, Nginx và FastAPI.",
    ],
    tech: ["PhoBERT", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    title: "Multi-Agent Hair Care Advisor Platform",
    period: "06/2026 — Present",
    role: "AI Engineer",
    url: "https://anvalanh.com",
    description:
      "Nền tảng AI tư vấn chăm sóc tóc sử dụng kiến trúc Multi-Agent, cá nhân hóa khuyến nghị sản phẩm và tự động hóa quy trình tư vấn.",
    highlights: [
      "Multi-Agent: Planner, Hair Consultant và Customer Service Agent.",
      "Agentic RAG kết hợp Knowledge Base, Product Catalog và Customer Data.",
      "Workflow orchestration bằng LangGraph, MCP services và tool-calling.",
    ],
    tech: ["LangGraph", "MCP", "Qdrant", "Redis", "FastAPI"],
  },
]

export const education = {
  school: "Đại học Xây dựng Hà Nội",
  degree: "Cử nhân Khoa học Máy tính",
  period: "08/2023 — 12/2026",
  gpa: "3.0/4.0",
  highlights: [
    "Best Paper Award tại ICONS 2026 — Edge AI phân loại rác thải tái chế thời gian thực.",
    "Học bổng Sinh viên Xuất sắc HK2 năm học 2025–2026 (GPA 3.64).",
    "Giải cuộc thi Sáng tạo Khởi nghiệp HUCE 2025 — AI chatbot tra cứu tiêu chuẩn kỹ thuật.",
    "Dẫn dắt nhóm 5 sinh viên tại HUCE FIT Robot Competition.",
  ],
}

export const publications = [
  {
    title:
      "Edge AI for Real-Time Recyclable Waste Sorting in Viet Nam: A Practical Approach for Smart and Sustainable Cities",
    authors: "Luong Thanh Tam, Do Quang Hop, Nguyen Tien Anh et al.",
    date: "04/2026",
    highlights: [
      "Tối ưu YOLO cho phân loại rác thải thời gian thực trên edge devices.",
      "Cải thiện từ ~12 FPS lên gần 30 FPS trên Jetson Nano, giảm GPU memory ~35%.",
      "Duy trì accuracy >90% trong môi trường real-time inference.",
    ],
  },
]

export const socialLinks = [
  { name: "GitHub", handle: "@hopquangdo", url: "https://github.com/hopquangdo" },
  { name: "LeetCode", handle: "@realdqh", url: "https://leetcode.com/realdqh" },
  { name: "Email", handle: "hop.dquang@gmail.com", url: "mailto:hop.dquang@gmail.com" },
]
