"use client";

import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const settlementData = [
  { month: "سبت", total: 14500, bankShare: 12000, platformShare: 2500 },
  { month: "أحد", total: 17200, bankShare: 14200, platformShare: 3000 },
  { month: "اثن", total: 13000, bankShare: 10800, platformShare: 2200 },
  { month: "ثلاث", total: 19000, bankShare: 15600, platformShare: 3400 },
  { month: "أربع", total: 20800, bankShare: 17100, platformShare: 3700 },
  { month: "خميس", total: 18500, bankShare: 15300, platformShare: 3200 },
  { month: "جمعة", total: 22300, bankShare: 18300, platformShare: 4000 },
];

const profitEntries = [
  {
    id: "BN-2025-INV-0001",
    customer: "أحمد العتيبي",
    store: "متاجر الربيع",
    productValue: 100,
    bankShare: 3,
    platformShare: 2,
    netToMerchant: 95,
    settlementStatus: "تم التحويل",
    settlementDate: "2025-01-18",
  },
  {
    id: "BN-2025-INV-0002",
    customer: "سارة المطيري",
    store: "مجوهرات روزي",
    productValue: 450,
    bankShare: 13.5,
    platformShare: 9,
    netToMerchant: 427.5,
    settlementStatus: "بانتظار التحويل",
    settlementDate: "2025-01-20",
  },
  {
    id: "BN-2025-INV-0003",
    customer: "ليلى خليل",
    store: "إلكترونيات ميزو",
    productValue: 980,
    bankShare: 29.4,
    platformShare: 19.6,
    netToMerchant: 931,
    settlementStatus: "تم التحويل",
    settlementDate: "2025-01-17",
  },
  {
    id: "BN-2025-INV-0004",
    customer: "محمد النجار",
    store: "هوم ديزاين",
    productValue: 320,
    bankShare: 9.6,
    platformShare: 6.4,
    netToMerchant: 304,
    settlementStatus: "بانتظار التحويل",
    settlementDate: "2025-01-21",
  },
];

const settlementStatusStyles = {
  "تم التحويل":
    "bg-emerald-500/15 text-emerald-200 border border-emerald-500/40",
  "بانتظار التحويل":
    "bg-amber-500/15 text-amber-200 border border-amber-500/40",
};

export default function ProfitsPage() {
  const [periodFilter, setPeriodFilter] = useState("آخر 7 أيام");
  const [statusFilter, setStatusFilter] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const stats = useMemo(() => {
    const totalVolume = profitEntries.reduce(
      (sum, entry) => sum + entry.productValue,
      0
    );
    const totalBankShare = profitEntries.reduce(
      (sum, entry) => sum + entry.bankShare,
      0
    );
    const totalPlatformShare = profitEntries.reduce(
      (sum, entry) => sum + entry.platformShare,
      0
    );
    const totalPending = profitEntries
      .filter((entry) => entry.settlementStatus === "بانتظار التحويل")
      .reduce((sum, entry) => sum + entry.platformShare, 0);

    return {
      totalVolume,
      totalBankShare,
      totalPlatformShare,
      totalPending,
    };
  }, []);

  const filteredEntries = profitEntries.filter((entry) => {
    const matchesSearch =
      entry.customer.includes(searchQuery) ||
      entry.store.includes(searchQuery) ||
      entry.id.includes(searchQuery);

    const matchesStatus =
      statusFilter === "الكل" || entry.settlementStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-50">توزيع الأرباح</h1>
        <p className="mt-1 text-[12px] text-slate-400">
          العميل يسدد عبرنا، فنقتطع عمولتنا من الدفعات ثم نحوّل المتبقي للبنك
          كي يغطي تمويله للمتجر.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>💼</span>
            <span>حجم العمليات</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.totalVolume.toLocaleString()} دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">تم تمويلها عبر البنك</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>🏦</span>
            <span>حصة البنك</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.totalBankShare.toLocaleString()} دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            نقتطعها من كل دفعة عميل ونحوّلها للبنك
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>🧾</span>
            <span>عمولة المنصة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.totalPlatformShare.toLocaleString()} دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            إجمالي أرباحك من العمليات
          </p>
        </div>

        <div className="rounded-xl border border-amber-500/60 bg-gradient-to-br from-amber-500 to-amber-400 p-4 text-amber-950 shadow-[0_18px_40px_rgba(245,158,11,0.5)]">
          <p className="text-xs font-medium flex items-center gap-1">
            <span>⏳</span>
            <span>أرباح بانتظار التحويل</span>
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {stats.totalPending.toLocaleString()} دينار
          </p>
          <p className="mt-1 text-[11px]">تُحوّل في التسوية الأسبوعية القادمة</p>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-slate-50">
                تدفق التسويات
              </h2>
              <p className="mt-1 text-[11px] text-slate-400">
                مقارنة بين ما يتم تحصيله من العملاء وما يوزّع بين البنك والمنصة.
              </p>
            </div>
            <select
              value={periodFilter}
              onChange={(e) => setPeriodFilter(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option>آخر 7 أيام</option>
              <option>آخر 30 يوم</option>
              <option>الرُبع الحالي</option>
            </select>
          </div>
          <div className="mt-4 h-64 rounded-lg border border-slate-800 bg-[#031824] px-3 py-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={settlementData}>
                <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="#9ca3af" tick={{ fontSize: 11 }} />
                <YAxis stroke="#9ca3af" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#020617",
                    borderColor: "#1f2937",
                    borderRadius: 8,
                    fontSize: 11,
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Bar dataKey="bankShare" name="حصة البنك" stackId="shares" fill="#38bdf8" />
                <Bar
                  dataKey="platformShare"
                  name="حصة المنصة"
                  stackId="shares"
                  fill="#22c55e"
                />
                <Bar dataKey="total" name="التحصيل الكلي" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)] space-y-3">
          <h2 className="text-sm font-semibold text-slate-50">
            نسب المشاركة في الأرباح
          </h2>
          <div className="rounded-lg border border-slate-800 bg-[#031824] p-4 text-xs text-slate-200">
            <div className="flex items-center justify-between">
              <span>نسبة البنك</span>
              <span className="text-slate-50 text-sm font-semibold">3%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-800">
              <div className="h-full w-3/12 rounded-full bg-sky-400" />
            </div>
          </div>
          <div className="rounded-lg border border-slate-800 bg-[#031824] p-4 text-xs text-slate-200">
            <div className="flex items-center justify-between">
              <span>نسبة المنصة</span>
              <span className="text-slate-50 text-sm font-semibold">2%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-slate-800">
              <div className="h-full w-2/12 rounded-full bg-emerald-400" />
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-[#031824] p-4 text-xs text-slate-300">
            <p className="text-slate-200 font-medium">طريقة تدفق الأموال</p>
            <ul className="mt-2 space-y-1">
              <li>• العميل يسدد أقساطه إلى المنصة.</li>
              <li>• تُقتطع عمولتنا من الدفعة نفسها وتُسجَّل كأرباح.</li>
              <li>• المبلغ المتبقي يُحوَّل للبنك بعد خصم حصته، ثم يرسل البنك صافي المتجر.</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-800 bg-[#031824] p-4 text-xs text-slate-200 space-y-3">
            <p className="text-slate-200 font-medium">تعديل النسب</p>
            <div className="flex items-center gap-3">
              <label className="flex flex-col text-[11px] text-slate-400">
                نسبة البنك
                <input
                  type="number"
                  defaultValue={3}
                  className="mt-1 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </label>
              <label className="flex flex-col text-[11px] text-slate-400">
                نسبة المنصة
                <input
                  type="number"
                  defaultValue={2}
                  className="mt-1 rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </label>
            </div>
            <button className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-emerald-400 transition-colors">
              حفظ التغييرات
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="ابحث برقم العملية، العميل، أو المتجر..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </span>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="الكل">كل حالات التسوية</option>
              <option value="تم التحويل">تم التحويل</option>
              <option value="بانتظار التحويل">بانتظار التحويل</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 transition-colors">
              📥 تصدير تقرير
            </button>
            <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors">
              + إضافة تسوية
            </button>
          </div>
        </div>
        <div className="mt-3 text-xs text-slate-400">
          عرض {filteredEntries.length} من {profitEntries.length} عملية تمويل
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] shadow-[0_16px_40px_rgba(0,0,0,0.65)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-800 text-xs">
            <thead className="bg-[#041f2e] text-slate-300">
              <tr>
                <th className="px-4 py-3 text-right">رقم العملية</th>
                <th className="px-4 py-3 text-right">العميل</th>
                <th className="px-4 py-3 text-right">المتجر</th>
                <th className="px-4 py-3 text-right">قيمة المنتج</th>
                <th className="px-4 py-3 text-right">حصة البنك</th>
                <th className="px-4 py-3 text-right">حصة المنصة</th>
                <th className="px-4 py-3 text-right">صافي المتجر</th>
                <th className="px-4 py-3 text-right">حالة التسوية</th>
                <th className="px-4 py-3 text-right">تاريخ التسوية</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-[#031824] text-slate-200">
              {filteredEntries.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-4 py-8 text-center text-slate-400">
                    لا توجد عمليات مطابقة للاستعلام الحالي.
                  </td>
                </tr>
              ) : (
                filteredEntries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-50">
                      {entry.id}
                    </td>
                    <td className="px-4 py-3">{entry.customer}</td>
                    <td className="px-4 py-3 text-slate-300">{entry.store}</td>
                    <td className="px-4 py-3 text-slate-200">
                      {entry.productValue.toLocaleString()} دينار
                    </td>
                    <td className="px-4 py-3 text-sky-200">
                      {entry.bankShare.toLocaleString()} دينار
                    </td>
                    <td className="px-4 py-3 text-emerald-200">
                      {entry.platformShare.toLocaleString()} دينار
                    </td>
                    <td className="px-4 py-3 text-slate-100">
                      {entry.netToMerchant.toLocaleString()} دينار
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-[10px] font-medium ${settlementStatusStyles[
                          entry.settlementStatus as keyof typeof settlementStatusStyles
                        ]}`}
                      >
                        {entry.settlementStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {entry.settlementDate}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


