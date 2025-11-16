"use client";

import { TransactionsOverview } from "./transactions-overview";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-5">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>👥</span>
            <span>المستخدمون النشطون</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            12,350 مستخدم
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            عدد المستخدمين الذين أجروا عملية واحدة على الأقل
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>🏪</span>
            <span>المتاجر المتعاونة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">85 متجرًا</p>
          <p className="mt-1 text-[11px] text-slate-300">
            عدد المتاجر المسجّلة في نظام BNPL
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>💳</span>
            <span>إجمالي المبيعات</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            178,000 دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            مجموع جميع عمليات الشراء عبر BNPL
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>💰</span>
            <span>الأرباح (عمولة شهد)</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            6,240 دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            عمولتك الشهرية أو الإجمالية من عمليات BNPL
          </p>
        </div>

        <div className="rounded-xl border border-emerald-400 bg-gradient-to-br from-emerald-500 to-emerald-400 p-4 text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.6)]">
          <p className="text-xs font-medium flex items-center gap-1">
            <span>⚠️</span>
            <span>الدفعات المتأخرة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold">27 عملية</p>
          <p className="mt-1 text-[11px] text-emerald-50">
            عدد الدفعات التي تجاوزت تاريخ الاستحقاق
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 md:col-span-2 shadow-[0_16px_40px_rgba(0,0,0,0.65)]">
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-sm font-semibold text-slate-50">
              الدفعات القادمة
            </h2>
            <span className="text-[11px] text-slate-400">السبعة أيام القادمة</span>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-800 bg-[#031824]">
            <table className="min-w-full divide-y divide-slate-800 text-xs">
              <thead className="bg-[#041f2e] text-slate-300">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">العميل</th>
                  <th className="px-3 py-2 text-left font-medium">الخطة</th>
                  <th className="px-3 py-2 text-left font-medium">تاريخ الاستحقاق</th>
                  <th className="px-3 py-2 text-right font-medium">المبلغ</th>
                  <th className="px-3 py-2 text-right font-medium">
                    الحالة
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-[#031824] text-slate-100">
                <tr>
                  <td className="px-3 py-2 text-xs">Omar Trading Co.</td>
                  <td className="px-3 py-2 text-xs">B2B 3‑month</td>
                  <td className="px-3 py-2 text-xs">Mar 18, 2025</td>
                  <td className="px-3 py-2 text-right text-xs">$4,200</td>
                  <td className="px-3 py-2 text-right">
                    <span className="inline-flex rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-200 border border-emerald-500/40">
                      ضمن المسار
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs">Sara Retail</td>
                  <td className="px-3 py-2 text-xs">BNPL 6‑month</td>
                  <td className="px-3 py-2 text-xs">Mar 19, 2025</td>
                  <td className="px-3 py-2 text-right text-xs">$1,180</td>
                  <td className="px-3 py-2 text-right">
                    <span className="inline-flex rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] text-amber-200 border border-amber-500/40">
                      معرّض للخطر
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs">Green Logistics</td>
                  <td className="px-3 py-2 text-xs">B2B 12‑month</td>
                  <td className="px-3 py-2 text-xs">Mar 20, 2025</td>
                  <td className="px-3 py-2 text-right text-xs">$9,750</td>
                  <td className="px-3 py-2 text-right">
                    <span className="inline-flex rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] text-rose-200 border border-rose-500/40">
                      متأخر
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
            <h2 className="text-sm font-semibold text-slate-50">
              لمحة عن المخاطر
            </h2>
            <p className="mt-1 text-[11px] text-slate-400">
              توزيع سريع لحالات العملاء حسب المخاطر.
            </p>

            <div className="mt-4 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">في الوقت</span>
                <span className="text-emerald-300">82%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[82%] rounded-full bg-emerald-500" />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-slate-300">فترة سماح</span>
                <span className="text-amber-300">11%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[11%] rounded-full bg-amber-400" />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-slate-300">متأخر</span>
                <span className="text-rose-300">7%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[7%] rounded-full bg-rose-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* نظرة عامة على المعاملات + بطاقة المستخدمين/المتاجر الجدد */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <TransactionsOverview />
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)] space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-50 flex items-center gap-1">
              <span>🧑‍💼</span>
              <span>المستخدمون الجدد</span>
            </h2>
            <p className="mt-1 text-[11px] text-slate-400">
              آخر 5 مستخدمين انضمّوا للنظام.
            </p>
            <ul className="mt-3 space-y-2 text-[11px] text-slate-200">
              <li className="flex items-center justify-between border-b border-slate-800/70 pb-1.5">
                <span className="truncate">أحمد العتيبي</span>
                <span className="text-slate-400">+965 5000 1234</span>
                <span className="ml-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300 border border-emerald-500/40">
                  نشط
                </span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/70 pb-1.5">
                <span className="truncate">سارة المطيري</span>
                <span className="text-slate-400">+965 5111 2233</span>
                <span className="ml-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] text-amber-200 border border-amber-500/40">
                  تحت المراجعة
                </span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/70 pb-1.5">
                <span className="truncate">مؤسسة الخليج</span>
                <span className="text-slate-400">+965 5222 3344</span>
                <span className="ml-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300 border border-emerald-500/40">
                  نشط
                </span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/70 pb-1.5">
                <span className="truncate">محمد الكندري</span>
                <span className="text-slate-400">+965 5333 4455</span>
                <span className="ml-1 rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] text-rose-200 border border-rose-500/40">
                  موقوف
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="truncate">ريم الأنصاري</span>
                <span className="text-slate-400">+965 5444 5566</span>
                <span className="ml-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300 border border-emerald-500/40">
                  نشط
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-800 pt-3">
            <h2 className="text-sm font-semibold text-slate-50 flex items-center gap-1">
              <span>🏬</span>
              <span>المتاجر الجديدة</span>
            </h2>
            <p className="mt-1 text-[11px] text-slate-400">
              آخر 5 متاجر مسجّلة في النظام.
            </p>
            <ul className="mt-3 space-y-2 text-[11px] text-slate-200">
              <li className="flex items-center justify-between border-b border-slate-800/70 pb-1.5">
                <span className="truncate">متجر التقنية الحديثة</span>
                <span className="text-slate-400">إلكترونيات</span>
                <span className="ml-1 text-slate-500">12 مارس</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/70 pb-1.5">
                <span className="truncate">عالم الأزياء</span>
                <span className="text-slate-400">أزياء</span>
                <span className="ml-1 text-slate-500">10 مارس</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/70 pb-1.5">
                <span className="truncate">روضة الطفل السعيد</span>
                <span className="text-slate-400">تعليم</span>
                <span className="ml-1 text-slate-500">9 مارس</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-800/70 pb-1.5">
                <span className="truncate">مخبز المذاق الطيب</span>
                <span className="text-slate-400">أغذية</span>
                <span className="ml-1 text-slate-500">8 مارس</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="truncate">عيادة السلام الطبية</span>
                <span className="text-slate-400">صحة</span>
                <span className="ml-1 text-slate-500">7 مارس</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* جدول صغير لآخر 10 عمليات شراء */}
      <section className="mt-2">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between pb-2">
            <h2 className="text-sm font-semibold text-slate-50">
              آخر 10 عمليات شراء
            </h2>
            <span className="text-[11px] text-slate-400">
              متابعة سريعة لأحدث معاملات الشراء
            </span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-800 bg-[#031824]">
            <table className="min-w-full divide-y divide-slate-800 text-[11px]">
              <thead className="bg-[#041f2e] text-slate-300">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">العميل</th>
                  <th className="px-3 py-2 text-left font-medium">المتجر</th>
                  <th className="px-3 py-2 text-right font-medium">المبلغ</th>
                  <th className="px-3 py-2 text-right font-medium">الحالة</th>
                  <th className="px-3 py-2 text-right font-medium">
                    تاريخ العملية
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-100">
                <tr>
                  <td className="px-3 py-2">أحمد العثربي</td>
                  <td className="px-3 py-2">زارا الأردن</td>
                  <td className="px-3 py-2 text-right">120 د.أ</td>
                  <td className="px-3 py-2 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300 border border-emerald-500/40">
                      <span className="text-xs">✅</span>
                      <span>مكتملة</span>
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right text-slate-300">
                    2025-11-15
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2">محمد النجار</td>
                  <td className="px-3 py-2">سامسونغ</td>
                  <td className="px-3 py-2 text-right">300 د.أ</td>
                  <td className="px-3 py-2 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] text-amber-200 border border-amber-500/40">
                      <span className="text-xs">⚠️</span>
                      <span>متأخرة</span>
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right text-slate-300">
                    2025-11-14
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2">سارة الدوسري</td>
                  <td className="px-3 py-2">أمازون</td>
                  <td className="px-3 py-2 text-right">75 د.أ</td>
                  <td className="px-3 py-2 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/15 px-2 py-0.5 text-[10px] text-sky-200 border border-sky-500/40">
                      <span className="text-xs">🕓</span>
                      <span>قيد الدفع</span>
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right text-slate-300">
                    2025-11-14
                  </td>
                </tr>
                {/* باقي العمليات يمكن جلبها لاحقًا من الـ backend */}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* قسم المعاملات المتأخرة */}
      <section className="mt-2 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <h2 className="text-sm font-semibold text-slate-50 flex items-center gap-1">
            <span>🟪</span>
            <span>المعاملات المتأخرة</span>
          </h2>
          <p className="mt-1 text-[11px] text-slate-400">
            أهم العملاء الذين لديهم دفعات متأخرة تحتاج متابعة.
          </p>

          <div className="mt-3 overflow-x-auto rounded-lg border border-slate-800 bg-[#031824]">
            <table className="min-w-full divide-y divide-slate-800 text-[11px]">
              <thead className="bg-[#041f2e] text-slate-300">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">العميل</th>
                  <th className="px-3 py-2 text-right font-medium">
                    المبلغ المستحق
                  </th>
                  <th className="px-3 py-2 text-right font-medium">
                    تاريخ الاستحقاق
                  </th>
                  <th className="px-3 py-2 text-right font-medium">
                    عدد الأيام المتأخرة
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-100">
                <tr>
                  <td className="px-3 py-2">ليلى خليل</td>
                  <td className="px-3 py-2 text-right">85 د.أ</td>
                  <td className="px-3 py-2 text-right">2025-11-10</td>
                  <td className="px-3 py-2 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] text-rose-200 border border-rose-500/40">
                      <span>6 أيام</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2">مؤسسة النور التجارية</td>
                  <td className="px-3 py-2 text-right">420 د.أ</td>
                  <td className="px-3 py-2 text-right">2025-11-08</td>
                  <td className="px-3 py-2 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] text-rose-200 border border-rose-500/40">
                      <span>8 أيام</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2">خالد المطيري</td>
                  <td className="px-3 py-2 text-right">230 د.أ</td>
                  <td className="px-3 py-2 text-right">2025-11-05</td>
                  <td className="px-3 py-2 text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/15 px-2 py-0.5 text-[10px] text-rose-200 border border-rose-500/40">
                      <span>11 يومًا</span>
                    </span>
                  </td>
                </tr>
                {/* يمكن لاحقًا جلب هذه البيانات من الـ backend */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

