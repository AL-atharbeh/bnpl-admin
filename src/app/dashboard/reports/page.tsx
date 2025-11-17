"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const performanceData = [
  { month: "ينا", purchases: 28000, installments: 19500, overdue: 1800 },
  { month: "فبر", purchases: 32000, installments: 21500, overdue: 1500 },
  { month: "مار", purchases: 36000, installments: 24000, overdue: 2100 },
  { month: "أبر", purchases: 42000, installments: 28000, overdue: 1600 },
  { month: "ماي", purchases: 45000, installments: 31000, overdue: 2400 },
  { month: "يون", purchases: 47000, installments: 33000, overdue: 2000 },
];

const riskDistribution = [
  { label: "منخفض", value: 62, color: "text-emerald-300" },
  { label: "متوسط", value: 27, color: "text-amber-300" },
  { label: "مرتفع", value: 8, color: "text-red-300" },
  { label: "قيد المراجعة", value: 3, color: "text-sky-300" },
];

const storesPerformance = [
  { store: "مجوهرات روزي", sales: 105000, growth: "+18%" },
  { store: "إلكترونيات ميزو", sales: 88000, growth: "+9%" },
  { store: "هوم ديزاين", sales: 62000, growth: "+5%" },
  { store: "متاجر الربيع", sales: 54000, growth: "+12%" },
];

const reports = [
  { title: "تقرير الأداء الشهري", description: "حجم العمليات وتحليل الأقساط والايرادات." },
  { title: "تقرير المخاطر", description: "توزيع العملاء حسب مستوى المخاطر والتنبيهات الحرجة." },
  { title: "تقرير المتاجر", description: "أفضل المتاجر أداءً والمتاجر المتأخرة في التسوية." },
  { title: "تقرير البنك", description: "ملخص التحويلات للبنك مقابل عمولة المنصة." },
];

export default function ReportsPage() {
  const [period, setPeriod] = useState<"ربع سنوي" | "شهري" | "سنوي">("ربع سنوي");
  const [reportFilter, setReportFilter] = useState("الكل");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-50">لوحة التقارير</h1>
        <p className="mt-1 text-[12px] text-slate-400">
          تحليلات الأداء، المخاطر، المتاجر والبنك في مكان واحد.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>📈</span> حجم العمليات الربع الحالي
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            141,000 دينار
          </p>
          <p className="mt-1 text-[11px] text-emerald-300">+12% عن الربع السابق</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>💳</span> الأقساط المحصّلة
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            94,500 دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">70% من إجمالي العمليات</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>⚠️</span> مؤشر المخاطر
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">8%</p>
          <p className="mt-1 text-[11px] text-slate-300">المعاملات عالية المخاطر</p>
        </div>
        <div className="rounded-xl border border-emerald-500/70 bg-gradient-to-br from-emerald-500 to-emerald-400 p-4 text-slate-950">
          <p className="text-xs font-medium flex items-center gap-1">
            <span>🏦</span> صافي عمولة المنصة
          </p>
          <p className="mt-2 text-2xl font-semibold">4,220 دينار</p>
          <p className="mt-1 text-[11px]">منذ بداية الشهر</p>
        </div>
      </section>

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-50">
              أداء العمليات
            </h2>
            <p className="text-[11px] text-slate-400">
              حجم الشراء، الأقساط، والتأخيرات خلال الفترة المحددة.
            </p>
          </div>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as typeof period)}
            className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs text-slate-200 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <option>ربع سنوي</option>
            <option>شهري</option>
            <option>سنوي</option>
          </select>
        </div>

        <div className="mt-4 h-64 rounded-lg border border-slate-800 bg-[#031824] px-3 py-3">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
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
              <Area type="monotone" dataKey="purchases" name="الشراء" stroke="#22c55e" fill="#22c55e55" />
              <Area type="monotone" dataKey="installments" name="الأقساط" stroke="#38bdf8" fill="#38bdf855" />
              <Area type="monotone" dataKey="overdue" name="التأخير" stroke="#f97316" fill="#f9731655" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-50">توزيع المخاطر</h2>
            <span className="text-[11px] text-slate-400">حسب تقييم العملاء</span>
          </div>
          <div className="space-y-2 text-xs text-slate-300">
            {riskDistribution.map((risk) => (
              <div key={risk.label} className="flex items-center justify-between">
                <span className={risk.color}>{risk.label}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-40 rounded-full bg-slate-800">
                    <div
                      className={`h-full rounded-full ${risk.color.replace("text", "bg")}`}
                      style={{ width: `${risk.value}%` }}
                    />
                  </div>
                  <span className="text-slate-100">{risk.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)] space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-50">أفضل المتاجر</h2>
            <span className="text-[11px] text-slate-400">آخر 30 يوم</span>
          </div>
          <div className="space-y-3 text-xs text-slate-300">
            {storesPerformance.map((store) => (
              <div
                key={store.store}
                className="rounded-lg border border-slate-800 bg-[#031824] p-3"
              >
                <div className="flex items-center justify-between text-sm text-slate-100">
                  <span>{store.store}</span>
                  <span className="text-emerald-300">{store.growth}</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                  مبيعات: {store.sales.toLocaleString()} دينار
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-50">التقارير المتاحة</h2>
            <p className="text-[11px] text-slate-400">
              اختر نوع التقرير لتصديره ومشاركته مع البنك أو الشركاء.
            </p>
          </div>
          <select
            value={reportFilter}
            onChange={(e) => setReportFilter(e.target.value)}
            className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs text-slate-200 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          >
            <option>الكل</option>
            <option>الأداء</option>
            <option>المخاطر</option>
            <option>المتاجر</option>
            <option>البنك</option>
          </select>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 text-xs text-slate-200">
          {reports.map((report) => (
            <div
              key={report.title}
              className="rounded-lg border border-slate-800 bg-[#031824] p-4"
            >
              <h3 className="text-sm font-semibold text-slate-50">{report.title}</h3>
              <p className="mt-1 text-[11px] text-slate-400">{report.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <button className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-[11px] text-slate-200 hover:bg-slate-900">
                  معاينة
                </button>
                <button className="rounded-lg bg-emerald-500 px-3 py-1.5 text-[11px] font-medium text-slate-950 hover:bg-emerald-400">
                  تنزيل PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

