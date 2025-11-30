#!/bin/bash

# Script لتنظيف المشروع

echo "🧹 تنظيف المشروع..."

# حذف مجلدات البناء
rm -rf .next
rm -rf out
rm -rf dist
rm -rf build
rm -rf node_modules/.cache

# حذف ملفات مؤقتة
find . -type f -name "*.log" -delete
find . -type f -name ".DS_Store" -delete

echo "✅ تم التنظيف بنجاح!"

