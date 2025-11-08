import Image from "next/image";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <header className="sticky top-0 z-50 bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              fill="none"
              height="32"
              viewBox="0 0 262 50"
              width="150"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-svg"
            >
              <text
                fill="#4A90E2"
                fontFamily="Poppins, sans-serif"
                fontSize="40"
                fontWeight="bold"
                letterSpacing="0em"
                style={{ whiteSpace: "pre" }}
              >
                <tspan x="0" y="40.8">
                  tech
                </tspan>
              </text>
              <text
                className="logo-now-text"
                fontFamily="Poppins, sans-serif"
                fontSize="40"
                fontWeight="bold"
                letterSpacing="0em"
                style={{ whiteSpace: "pre" }}
              >
                <tspan x="110" y="40.8">
                  now
                </tspan>
              </text>
            </svg>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
              href="#features"
            >
              Tính năng
            </a>
            <a
              className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
              href="#testimonials"
            >
              Đánh giá
            </a>
            <a
              className="text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary transition-colors"
              href="#faq"
            >
              Câu hỏi thường gặp
            </a>
          </div>
          <a
            className="bg-primary text-white font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            href="https://www.facebook.com/technowIT.vn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Đăng ký ngay
          </a>
        </nav>
      </header>

      <main>
        <section
          className="py-20 sm:py-28 bg-surface-light dark:bg-surface-dark"
          id="hero"
        >
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal delay={0}>
              <span className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 animate-fade-in">
                Khơi dậy tiềm năng của bạn
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold text-text-light dark:text-text-dark leading-tight mb-4 animate-fade-in-up">
                Trải nghiệm sức mạnh đầy đủ của
                <br className="hidden md:block" /> AI với{" "}
                <span className="text-primary">ChatGPT Plus</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-muted-light dark:text-text-muted-dark mb-8 animate-fade-in-up">
                Nhận tốc độ phản hồi nhanh hơn, ưu tiên truy cập các tính năng mới và
                truy cập ổn định, ngay cả trong giờ cao điểm.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  className="w-full sm:w-auto bg-primary text-white font-bold text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover-lift hover-glow animate-pulse-slow"
                  href="#pricing"
                >
                  <i className="fas fa-bolt"></i>
                  Nâng cấp với 69,000 VND/tháng
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 sm:py-28" id="features">
          <div className="container mx-auto px-6">
            <ScrollReveal delay={0}>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Tại sao nên chọn Plus?
                </h2>
                <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
                  Mở khóa bộ tính năng mạnh mẽ được thiết kế để tăng cường
                  năng suất và sáng tạo của bạn.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              <ScrollReveal delay={100}>
                <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover-lift h-full flex flex-col">
                <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-5">
                  <i className="fas fa-bolt text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Tốc độ phản hồi nhanh hơn
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark flex-grow">
                  Trải nghiệm phản hồi nhanh hơn đáng kể, cho phép bạn
                  lặp lại nhanh hơn và hoàn thành nhiều việc hơn trong thời gian ngắn hơn.
                </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover-lift h-full flex flex-col">
                  <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-5 animate-float">
                    <i className="fas fa-clock text-3xl"></i>
                  </div>
                <h3 className="text-xl font-bold mb-2">
                  Truy cập trong giờ cao điểm
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark flex-grow">
                  Đừng để lưu lượng truy cập cao làm chậm bạn. Người đăng ký Plus nhận được
                  truy cập ổn định, ngay cả khi nhu cầu cao.
                </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1 hover-lift h-full flex flex-col">
                  <div className="bg-primary/10 text-primary rounded-lg w-12 h-12 flex items-center justify-center mb-5 animate-float stagger-1">
                    <i className="fas fa-star text-3xl"></i>
                  </div>
                <h3 className="text-xl font-bold mb-2">
                  Ưu tiên truy cập tính năng mới
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark flex-grow">
                  Là người đầu tiên trải nghiệm các cải tiến mới nhất và
                  các tính năng tiên tiến ngay khi chúng được phát hành.
                </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-surface-light dark:bg-surface-dark" id="business-features">
          <div className="container mx-auto px-6">
            <ScrollReveal delay={0}>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Các tính năng nổi bật
                </h2>
                <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
                  Khám phá những tính năng mạnh mẽ dành cho doanh nghiệp
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <ScrollReveal delay={100}>
                <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover-lift h-full flex flex-col">
                <div className="flex items-start mb-3">
                  <i className="fas fa-shield text-primary mr-3 mt-1 text-xl"></i>
                  <h3 className="text-lg font-bold">Bảo mật dữ liệu</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-2">
                    Không dùng dữ liệu để huấn luyện mô hình của OpenAI
                  </p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Dữ liệu được mã hóa cả &quot;at rest&quot; và &quot;in transit&quot;
                  </p>
                </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover-lift h-full flex flex-col">
                <div className="flex items-start mb-3">
                  <i className="fas fa-briefcase text-primary mr-3 mt-1 text-xl"></i>
                  <h3 className="text-lg font-bold">Workspace doanh nghiệp</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-2">
                    Gói Business dành cho tối thiểu 2 người dùng trở lên
                  </p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Quản lý thành viên, phân quyền, kiểm soát admin. Chia sẻ dự án và GPT tùy chỉnh trong workspace
                  </p>
                </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover-lift h-full flex flex-col">
                <div className="flex items-start mb-3">
                  <i className="fas fa-robot text-primary mr-3 mt-1 text-xl"></i>
                  <h3 className="text-lg font-bold">Mô hình AI nâng cao</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-2">
                    Truy cập các mô hình &quot;frontier&quot; như GPT-4 với mức sử dụng không giới hạn (có guardrails)
                  </p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Data analysis, Code edits, File uploads, Vision được hỗ trợ tốt hơn
                  </p>
                </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover-lift h-full flex flex-col">
                <div className="flex items-start mb-3">
                  <i className="fas fa-link text-primary mr-3 mt-1 text-xl"></i>
                  <h3 className="text-lg font-bold">Connectors</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Kết nối tới Gmail, Outlook, SharePoint, Google Drive để ChatGPT có thể truy vấn dữ liệu doanh nghiệp
                  </p>
                </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover-lift h-full flex flex-col">
                <div className="flex items-start mb-3">
                  <i className="fas fa-users text-primary mr-3 mt-1 text-xl"></i>
                  <h3 className="text-lg font-bold">Cộng tác nhóm</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-2">
                    Hỗ trợ Projects, Tasks trong workspace
                  </p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Tạo & chia sẻ GPTs tùy chỉnh cho nhóm/phòng ban. Record mode để ghi lại cuộc họp và tóm tắt
                  </p>
                </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover-lift h-full flex flex-col">
                <div className="flex items-start mb-3">
                  <i className="fas fa-check-circle text-primary mr-3 mt-1 text-xl"></i>
                  <h3 className="text-lg font-bold">Tuân thủ tiêu chuẩn</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-2">
                    SAML SSO, MFA, vai trò admin, xác minh domain
                  </p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    SOC 2 Type 2, ISO 27001/27017/27018/27701. Hỗ trợ lựa chọn vùng dữ liệu (US, EU, UK, JP, CA, KR, SG, IN, AU, UAE)
                  </p>
                </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-background-light dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 md:col-span-2 lg:col-span-1 hover-lift h-full flex flex-col">
                <div className="flex items-start mb-3">
                  <i className="fas fa-dollar-sign text-primary mr-3 mt-1 text-xl"></i>
                  <h3 className="text-lg font-bold">Giá & thanh toán</h3>
                </div>
                <div className="flex-grow">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-2">
                    Khoảng US$30/người/tháng (thanh toán theo tháng) hoặc US$25/người/tháng (thanh toán theo năm)
                  </p>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                    Thanh toán linh hoạt, có thể thêm/chuyển số lượng chỗ (seats) trong tháng
                  </p>
                </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section
          className="py-20 sm:py-28 bg-surface-light dark:bg-surface-dark"
          id="testimonials"
        >
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Được yêu thích bởi các nhà sáng tạo & lập trình viên
              </h2>
              <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
                Xem những gì người đăng ký Plus của chúng tôi nói về trải nghiệm
                được nâng cấp của họ.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
                  &quot;Chỉ riêng việc tăng tốc độ đã đáng giá với gói đăng ký. Quy trình làm việc
                  của tôi đã trở nên hiệu quả hơn rất nhiều. Rất đáng
                  khuyên dùng!&quot;
                </p>
                <div className="flex items-center">
                  <Image
                    alt="Ảnh đại diện của An Nguyen"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_DKUDdtg0-tKx-EWBcWAG1q1W1G4im0Bd1gwpdxpv9uhiLU1cxnUMkVjNuQWT1gbJyl1gTgxOL_Be0SLWuu3yPQEZvOExtYiclV5VQJ5-jYo06vKmb_ao4gGwQDGR4dQTZP7EAvBFOrvYDgOtDKXfyB9rlhe1Vj9c8xz2HlMt-NF5sy9mTNrEAg_bSHG6fhmlsKHzxc-_GkJ3nA5xhUaI5LRIFGPgjKSUV83waC75Fos3PlXpZUWEpSBbx35NV0DIIp2olbn1TfY"
                    width={48}
                    height={48}
                    unoptimized
                  />
                  <div>
                    <p className="font-bold">An Nguyen</p>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                      Lập trình viên
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
                  &quot;Là một người viết, việc được ưu tiên truy cập trong giờ cao điểm là
                  một cứu cánh. Không còn phải chờ đợi để có cảm hứng
                  nữa!&quot;
                </p>
                <div className="flex items-center">
                  <Image
                    alt="Ảnh đại diện của Lê Bình"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf4M4FCDjGStrXzK9px8ZsC8NkgSLZJR5zcm7jHG0rA8BWHOx6tVhC5wkTJFcY82NSaaMWQWD1kI3X3CGjjYBlNMkxv2XjfkkhVekUwk8o2PtvHlD8RIVm7ZvLp7jIMhNtDuuY5_nD7CKEFdVNrBOh9u0--kwDcyt5czA7F2WONg_7ZT7BEjzEap4BbHEbWIGmtafxppUzFcuzBXXsKdNBiOwRLLbXrKGAN7rwR7MutLyrNw2Z4f1JPLFa6ZxBnizL2MdvF2PVG3c"
                    width={48}
                    height={48}
                    unoptimized
                  />
                  <div>
                    <p className="font-bold">Lê Bình</p>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                      Chiến lược gia nội dung
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background-light dark:bg-background-dark p-8 rounded-xl border border-slate-200 dark:border-slate-800 md:col-span-2 lg:col-span-1">
                <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
                  &quot;Được thử các tính năng mới trước tiên thật tuyệt vời. Cảm giác như
                  tôi đang ở tuyến đầu của AI, và Technow làm cho việc đăng ký
                  trở nên rất dễ dàng.&quot;
                </p>
                <div className="flex items-center">
                  <Image
                    alt="Ảnh đại diện của Phạm Chi"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU4-UnGx6tALowndml21BoNeNC6Di_VBCh3otAvRMXZeUfKWuWlaKNVL8Empj4qDnV_sbvDvnx7y-sw9ZIrXcx4jXCuDJbul859g7_Gj3qEt28cb5ho5EOoqmhs258QwHMzChy2kpiUhc0kOxsTJrkbe9iLqh8bZjDGF0ahQdhR73jUF1eEbD_uX6b6szXX09STAXlnKSBvBoUNvcWXeO8MGT8CuYNG2qU1c2hRxDDIVXoWiQp72gRTg3cZZlthJofVfufO2FvgVY"
                    width={48}
                    height={48}
                    unoptimized
                  />
                  <div>
                    <p className="font-bold">Phạm Chi</p>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                      Nhà thiết kế UX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28" id="pricing">
          <div className="container mx-auto px-6">
            <ScrollReveal delay={0}>
              <div className="bg-brand-dark-blue rounded-xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-16 -right-10 w-48 h-48 bg-primary/20 rounded-full animate-float stagger-2"></div>
                <ScrollReveal delay={100}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 z-10 relative animate-fade-in-up">
                    Sẵn sàng nâng cấp trải nghiệm của bạn?
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 z-10 relative animate-fade-in-up">
                    Tham gia cùng hàng nghìn người dùng đang tăng cường năng suất với
                    ChatGPT Plus.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 inline-flex items-center p-2 rounded-lg mb-8 z-10 relative hover-lift">
                    <span className="font-bold text-2xl px-4">69,000 VND</span>
                    <span className="text-slate-300 px-4 border-l border-white/20">
                      mỗi tháng
                    </span>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={400}>
                  <div>
                    <a
                      className="w-full sm:w-auto bg-primary text-white font-bold text-lg px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-xl shadow-primary/40 z-10 relative inline-block hover-lift hover-glow"
                      href="https://www.facebook.com/technowIT.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Đăng ký ngay hôm nay
                    </a>
                    <p className="text-sm text-slate-400 mt-4 z-10 relative">
                      Hủy bất cứ lúc nào. Thanh toán an toàn.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 sm:py-28" id="faq">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Câu hỏi thường gặp
              </h2>
              <p className="text-lg text-text-muted-light dark:text-text-muted-dark">
                Có câu hỏi? Chúng tôi có câu trả lời.
              </p>
            </div>
            <div className="space-y-4">
              <details className="group bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800" open>
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                  Tôi nhận được gì với gói đăng ký ChatGPT Plus?
                  <i className="fas fa-chevron-down transition-transform duration-300 group-open:rotate-180"></i>
                </summary>
                <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                  Với ChatGPT Plus, bạn nhận được tốc độ phản hồi nhanh hơn, truy cập
                  ổn định ngay cả trong giờ cao điểm, và ưu tiên truy cập các tính năng
                  và cải tiến mới.
                </p>
              </details>
              <details className="group bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                  Technow xử lý đăng ký như thế nào?
                  <i className="fas fa-chevron-down transition-transform duration-300 group-open:rotate-180"></i>
                </summary>
                <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                  Technow hoạt động như một cổng thanh toán địa phương, giúp bạn
                  dễ dàng đăng ký bằng các phương thức thanh toán địa phương. Chúng tôi quản lý thanh toán
                  để bạn có thể tận hưởng truy cập không gián đoạn.
                </p>
              </details>
              <details className="group bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-lg">
                  Tôi có thể hủy đăng ký bất cứ lúc nào không?
                  <i className="fas fa-chevron-down transition-transform duration-300 group-open:rotate-180"></i>
                </summary>
                <p className="mt-4 text-text-muted-light dark:text-text-muted-dark">
                  Có, hoàn toàn có thể. Bạn có thể quản lý và hủy đăng ký của mình
                  bất cứ lúc nào thông qua bảng điều khiển tài khoản Technow của bạn. Đăng ký
                  của bạn sẽ vẫn hoạt động cho đến cuối chu kỳ
                  thanh toán hiện tại.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 py-8 text-center text-text-muted-light dark:text-text-muted-dark">
          <p>© 2024 Technow. Bảo lưu mọi quyền.</p>
          <p className="text-sm mt-2">
            Làm cho công nghệ tiên tiến trở nên dễ tiếp cận với mọi người.
          </p>
        </div>
      </footer>
    </div>
  );
}
