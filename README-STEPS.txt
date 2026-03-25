1) ارفع الملفات الجاهزة دي مكان الملفات الحالية في الريبو:
   - index.html
   - kb-data.js
   - version.json
   - .github/workflows/deploy-pages.yml

2) لو الصور عندك في الريبو بالفعل، سيبها زي ما هي:
   - logo.png
   - back.jpg

3) على GitHub:
   - ادخل repo -> Settings -> Pages
   - اختار Source = GitHub Actions

4) اعمل commit + push على branch main.

5) أول deploy هيشتغل تلقائيًا من Actions.

6) بعد أي تعديل بعد كده:
   - عدل kb-data.js فقط (أو index.html لو فيه تعديل في الواجهة)
   - commit + push
   - GitHub Pages هيتنشر تلقائيًا

ملاحظات:
- الصفحة بقت تقرأ الداتا من kb-data.js بدل ما تكون متخزنة جوه index.html.
- فيه check كل 60 ثانية على version.json، ولو فيه نسخة أحدث هيظهر زر Update now.
- ملف deploy-pages.yml بيولّد version.json ويحدّث build version تلقائيًا وقت النشر.
