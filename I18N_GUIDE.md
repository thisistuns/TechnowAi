# Hướng dẫn i18n (Internationalization)

## 📋 Tổng quan

Project đã được implement **client-side i18n** - **KHÔNG CẦN BACKEND**.

## ✅ Giải pháp hiện tại

### Cách hoạt động:
1. **Translation files**: JSON files trong `src/app/locales/`
   - `vi.json` - Tiếng Việt
   - `en.json` - English

2. **Custom Hook**: `useTranslation()` 
   - Load translations từ JSON files
   - Lưu preference vào `localStorage`
   - Detect browser language tự động

3. **Client-side only**: 
   - Không cần API calls
   - Không cần backend
   - Tất cả translations được bundle vào client

## 🎯 Ưu điểm

✅ **Không cần backend** - Tất cả chạy trên client
✅ **Fast** - Không có network requests
✅ **Simple** - Dễ implement và maintain
✅ **SEO friendly** - Có thể extend với next-intl cho SSR

## ⚠️ Hạn chế

- Tất cả translations phải được bundle vào client (tăng bundle size một chút)
- Không có dynamic translations từ CMS/API
- Cần reload page khi đổi ngôn ngữ (có thể optimize sau)

## 🔧 Cách thêm ngôn ngữ mới

1. Tạo file mới trong `src/app/locales/`, ví dụ: `ja.json` (Japanese)
2. Copy structure từ `vi.json` và translate
3. Update `useTranslation.ts`:
   ```typescript
   type Locale = "vi" | "en" | "ja";
   import jaTranslations from "../locales/ja.json";
   const translations = {
     vi: viTranslations,
     en: enTranslations,
     ja: jaTranslations,
   };
   ```
4. Update `LanguageSwitcher.tsx` để thêm option mới

## 🚀 Nâng cấp lên next-intl (Optional)

Nếu muốn advanced features như:
- Server-side rendering với translations
- Route-based locale (`/en/`, `/vi/`)
- Better SEO với locale-specific URLs

Có thể upgrade lên `next-intl`:

```bash
npm install next-intl
```

**Vẫn không cần backend** - next-intl chỉ cần config trong Next.js.

## 📝 Cấu trúc Translation Files

```json
{
  "nav": {
    "features": "Tính năng",
    "testimonials": "Đánh giá"
  },
  "hero": {
    "title": "Trải nghiệm sức mạnh đầy đủ của",
    "description": "..."
  }
}
```

Sử dụng: `t("nav.features")` → "Tính năng"

## 💡 Best Practices

1. **Nested keys**: Dùng dot notation cho organization
2. **Fallback**: Luôn có fallback về tiếng Việt nếu translation missing
3. **Consistency**: Giữ structure giống nhau giữa các locale files
4. **Keys naming**: Dùng descriptive keys, không dùng generic như "text1", "text2"

## 🔄 Dark Mode vs i18n

- **Dark Mode**: Lưu trong `localStorage` với key `"theme"`
- **Language**: Lưu trong `localStorage` với key `"locale"`
- Cả hai đều **client-side only**, không cần backend

## 📊 Performance

- Bundle size tăng: ~5-10KB per language
- Runtime: Zero overhead (chỉ là object lookup)
- Initial load: Tất cả languages được bundle, nhưng chỉ dùng một

## 🎯 Kết luận

**i18n hiện tại KHÔNG CẦN BACKEND** - hoàn toàn client-side với JSON files.

Nếu cần dynamic translations từ CMS hoặc database, lúc đó mới cần backend API.

