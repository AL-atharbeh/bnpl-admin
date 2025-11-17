"use client";

import { useMemo, useState } from "react";

const BANK_RATE = 0.03;
const PLATFORM_RATE = 0.02;

type PaymentStatus = "مدفوعة" | "قيد السداد" | "متأخرة";

const payments = [
  {
    id: "PY-0001",
    customer: "أحمد العتيبي",
    store: "متاجر الربيع",
    installment: "قسط 2/4",
    dueDate: "2025-01-21",
    amount: 120,
    status: "قيد السداد" as PaymentStatus,
    autoDebit: true,
  },
  {
    id: "PY-0002",
    customer: "سارة المطيري",
    store: "إلكترونيات ميزو",
    installment: "قسط 1/6",
    dueDate: "2025-01-20",
    amount: 240,
    status: "مدفوعة" as PaymentStatus,
    autoDebit: false,
  },
  {
    id: "PY-0003",
    customer: "ليلى خليل",
    store: "مجوهرات روزي",
    installment: "قسط 3/8",
    dueDate: "2025-01-18",
    amount: 310,
    status: "متأخرة" as PaymentStatus,
    autoDebit: false,
  },
  {
    id: "PY-0004",
    customer: "محمد النجار",
    store: "هوم ديزاين",
    installment: "قسط 2/3",
    dueDate: "2025-01-17",
    amount: 280,
    status: "مدفوعة" as PaymentStatus,
    autoDebit: true,
  },
  {
    id: "PY-0005",
    customer: "وليد الأنصاري",
    store: "أسواق الغذاء الطازج",
    installment: "قسط 4/6",
    dueDate: "2025-01-23",
    amount: 65,
    status: "قيد السداد" as PaymentStatus,
    autoDebit: true,
  },
];

const statusStyles: Record<PaymentStatus, string> = {
  مدفوعة: "bg-emerald-500/15 text-emerald-200 border border-emerald-500/40",
  "قيد السداد": "bg-sky-500/15 text-sky-200 border border-sky-500/40",
  متأخرة: "bg-amber-500/15 text-amber-200 border border-amber-500/40",
};

const timeline = [
  { day: "اليوم", dueCount: 3, paid: 2, overdue: 1 },
  { day: "غدًا", dueCount: 2, paid: 0, overdue: 0 },
  { day: "بعد غد", dueCount: 4, paid: 0, overdue: 0 },
];

export default function PaymentsPage() {
  const [statusFilter, setStatusFilter] = useState<PaymentStatus | "الكل">(
    "الكل"
  );
  const [autoDebitFilter, setAutoDebitFilter] = useState<"الكل" | "مفعل" | "غير مفعل">(
    "الكل"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const stats = useMemo(() => {
    const totalDue = payments.reduce((sum, payment) => sum + payment.amount, 0);
    const collected = payments
      .filter((payment) => payment.status === "مدفوعة")
      .reduce((sum, payment) => sum + payment.amount, 0);
    const overdue = payments
      .filter((payment) => payment.status === "متأخرة")
      .reduce((sum, payment) => sum + payment.amount, 0);
    const bankShare = collected * BANK_RATE;
    const platformShare = collected * PLATFORM_RATE;

    return { totalDue, collected, overdue, bankShare, platformShare };
  }, []);

  const filteredPayments = payments.filter((payment) => {
    const matchesStatus =
      statusFilter === "الكل" || payment.status === statusFilter;
    const matchesAutoDebit =
      autoDebitFilter === "الكل" ||
      (autoDebitFilter === "مفعل" && payment.autoDebit) ||
      (autoDebitFilter === "غير مفعل" && !payment.autoDebit);

    const matchesSearch =
      payment.customer.includes(searchQuery) ||
      payment.store.includes(searchQuery) ||
      payment.id.includes(searchQuery);

    return matchesStatus && matchesAutoDebit && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-50">إدارة الدفعات</h1>
        <p className="mt-1 text-[12px] text-slate-400">
          نحصّل أقساط العملاء، نقتطع عمولتنا، ثم نحول المتبقي للبنك ليتولى
          تسوية المتجر.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-5">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>📅</span>
            <span>إجمالي الدفعات المستحقة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.totalDue.toLocaleString()} دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">خلال الأيام القادمة</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>✅</span>
            <span>تم تحصيلها</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.collected.toLocaleString()} دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">آخر 48 ساعة</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>⚠️</span>
            <span>دفعات متأخرة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.overdue.toLocaleString()} دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">تحتاج متابعة</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>🏦</span>
            <span>حصة البنك المحولة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.bankShare.toFixed(2)} دينار
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            من الدفعات المحصّلة
          </p>
        </div>

        <div className="rounded-xl border border-emerald-500/70 bg-gradient-to-br from-emerald-500 to-emerald-400 p-4 text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.6)]">
          <p className="text-xs font-medium flex items-center gap-1">
            <span>🧾</span>
            <span>عمولة المنصة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold">
            {stats.platformShare.toFixed(2)} دينار
          </p>
          <p className="mt-1 text-[11px] text-emerald-900">من آخر الدفعات</p>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)]">
          <h2 className="text-sm font-semibold text-slate-50">
            خط زمني للدفعات القادمة
          </h2>
          <p className="mt-1 text-[11px] text-slate-400">
            يوضح عدد الأقساط المستحقة خلال الأيام القادمة ونسبة المدفوع منها.
          </p>
          <div className="mt-4 space-y-3">
            {timeline.map((item) => (
              <div
                key={item.day}
                className="rounded-lg border border-slate-800 bg-[#031824] p-3 text-xs text-slate-300"
              >
                <div className="flex items-center justify-between text-slate-100 text-sm">
                  <span>{item.day}</span>
                  <span>{item.dueCount} دفعات مستحقة</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{
                        width: `${(item.paid / item.dueCount) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-[11px] text-emerald-300">
                    مدفوعة: {item.paid}
                  </span>
                </div>
                {item.overdue > 0 && (
                  <p className="mt-2 text-[11px] text-amber-300">
                    ⚠️ دفعات متأخرة: {item.overdue}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)]">
          <h2 className="text-sm font-semibold text-slate-50">
            إعدادات التحصيل والتحويل
          </h2>
          <p className="mt-1 text-[11px] text-slate-400">
            نضبط هذه النسب بحيث نقتطع عمولتنا من الدفعات ونحوّل المتبقي للبنك
            تلقائيًا.
          </p>

          <div className="mt-4 space-y-3 text-xs text-slate-200">
            <div className="rounded-lg border border-slate-800 bg-[#031824] p-3">
              <div className="flex items-center justify-between">
                <span>خصم عمولة المنصة</span>
                <span className="text-sm font-semibold text-slate-50">
                  {PLATFORM_RATE * 100}%
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                تُقتطع قبل تحويل المبلغ للبنك
              </p>
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#031824] p-3">
              <div className="flex items-center justify-between">
                <span>تحويل حصة البنك</span>
                <span className="text-sm font-semibold text-slate-50">
                  {BANK_RATE * 100}%
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                تُحوّل بعد خصم عمولتنا وبشكل يومي
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="ابحث بالعميل، المتجر، أو رقم الدفعة..."
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
              onChange={(e) =>
                setStatusFilter(e.target.value as PaymentStatus | "الكل")
              }
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="الكل">كل الحالات</option>
              <option value="مدفوعة">مدفوعة</option>
              <option value="قيد السداد">قيد السداد</option>
              <option value="متأخرة">متأخرة</option>
            </select>

            <select
              value={autoDebitFilter}
              onChange={(e) => setAutoDebitFilter(e.target.value as typeof autoDebitFilter)}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="الكل">كل طرق التحصيل</option>
              <option value="مفعل">خصم تلقائي</option>
              <option value="غير مفعل">يدوي</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 transition-colors">
              📥 تصدير
            </button>
            <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors">
              + إضافة خطة سداد
            </button>
          </div>
        </div>
        <div className="mt-3 text-xs text-slate-400">
          عرض {filteredPayments.length} من {payments.length} دفعة
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] shadow-[0_16px_40px_rgba(0,0,0,0.65)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-800 text-xs">
            <thead className="bg-[#041f2e] text-slate-300">
              <tr>
                <th className="px-4 py-3 text-right">الدفعة</th>
                <th className="px-4 py-3 text-right">العميل</th>
                <th className="px-4 py-3 text-right">المتجر</th>
                <th className="px-4 py-3 text-right">القسط</th>
                <th className="px-4 py-3 text-right">تاريخ الاستحقاق</th>
                <th className="px-4 py-3 text-right">المبلغ</th>
                <th className="px-4 py-3 text-right">توزيع الربح</th>
                <th className="px-4 py-3 text-right">الحالة</th>
                <th className="px-4 py-3 text-right">التحصيل</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-[#031824] text-slate-200">
              {filteredPayments.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-8 text-center text-slate-400"
                  >
                    لا توجد دفعات مطابقة للاستعلام الحالي.
                  </td>
                </tr>
              ) : (
                filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-50">
                      {payment.id}
                    </td>
                    <td className="px-4 py-3">{payment.customer}</td>
                    <td className="px-4 py-3 text-slate-300">{payment.store}</td>
                    <td className="px-4 py-3 text-slate-300">
                      {payment.installment}
                    </td>
                    <td className="px-4 py-3 text-slate-300">{payment.dueDate}</td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-slate-50">
                        {payment.amount.toLocaleString()} دينار
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[11px] text-slate-300">
                      <p>
                        🏦 البنك:{" "}
                        <span className="text-slate-100 font-semibold">
                          {(payment.amount * BANK_RATE).toFixed(2)} دينار
                        </span>
                      </p>
                      <p>
                        🧾 المنصة:{" "}
                        <span className="text-slate-100 font-semibold">
                          {(payment.amount * PLATFORM_RATE).toFixed(2)} دينار
                        </span>
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-[10px] font-medium ${statusStyles[payment.status]}`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {payment.autoDebit ? (
                        <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[10px] text-emerald-200">
                          خصم تلقائي
                        </span>
                      ) : (
                        <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-[10px] text-slate-200">
                          سداد يدوي
                        </span>
                      )}
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

