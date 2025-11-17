"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

const BANK_RATE = 0.03;
const PLATFORM_RATE = 0.02;

const transactions = [
  {
    id: "TX-2025-0001",
    date: "2025-01-19 14:20",
    customer: "أحمد العتيبي",
    store: "إلكترونيات ميزو",
    type: "شراء",
    method: "بطاقة BNPL",
    amount: 320.0,
    currency: "دينار",
    installments: "4 أقساط",
    status: "مكتملة",
    statusColor: "emerald",
    risk: "طبيعي",
    notes: "طلب جديد تمت الموافقه عليه",
  },
  {
    id: "TX-2025-0002",
    date: "2025-01-19 12:40",
    customer: "ليلى خليل",
    store: "متاجر الربيع",
    type: "قسط",
    method: "تحويل تلقائي",
    amount: 120.0,
    currency: "دينار",
    installments: "قسط 2/4",
    status: "متأخر",
    statusColor: "amber",
    risk: "تحذير",
    notes: "تأخير 4 أيام",
  },
  {
    id: "TX-2025-0003",
    date: "2025-01-18 19:05",
    customer: "خالد المطيري",
    store: "مجوهرات روزي",
    type: "شراء",
    method: "بطاقة BNPL",
    amount: 1650.0,
    currency: "دينار",
    installments: "6 أقساط",
    status: "قيد المراجعة",
    statusColor: "amber",
    risk: "مراجعة",
    notes: "قيمة عالية تحتاج تحقق إضافي",
  },
  {
    id: "TX-2025-0004",
    date: "2025-01-18 10:15",
    customer: "سارة المطيري",
    store: "أسواق الغذاء الطازج",
    type: "استرداد",
    method: "رصيد BNPL",
    amount: 42.5,
    currency: "دينار",
    installments: "عملية استرداد",
    status: "مكتملة",
    statusColor: "slate",
    risk: "منخفض",
    notes: "إرجاع جزئي للطلب",
  },
  {
    id: "TX-2025-0005",
    date: "2025-01-17 17:30",
    customer: "محمد النجار",
    store: "هوم ديزاين",
    type: "قسط",
    method: "تحويل يدوي",
    amount: 280.0,
    currency: "دينار",
    installments: "قسط 1/3",
    status: "مكتملة",
    statusColor: "emerald",
    risk: "طبيعي",
    notes: "تم التسديد يدوياً",
  },
  {
    id: "TX-2025-0006",
    date: "2025-01-17 09:45",
    customer: "نورا الأحمد",
    store: "متاجر الربيع",
    type: "شراء",
    method: "بطاقة BNPL",
    amount: 210.0,
    currency: "دينار",
    installments: "3 أقساط",
    status: "ملغاة",
    statusColor: "red",
    risk: "مرفوض",
    notes: "تم إلغاء الطلب من قبل المتجر",
  },
  {
    id: "TX-2025-0007",
    date: "2025-01-16 13:22",
    customer: "رائد العتيبي",
    store: "إلكترونيات ميزو",
    type: "شراء",
    method: "بطاقة BNPL",
    amount: 980.0,
    currency: "دينار",
    installments: "5 أقساط",
    status: "مكتملة",
    statusColor: "emerald",
    risk: "طبيعي",
    notes: "تم شحن الطلب",
  },
  {
    id: "TX-2025-0008",
    date: "2025-01-15 08:10",
    customer: "وليد الأنصاري",
    store: "أسواق الغذاء الطازج",
    type: "قسط",
    method: "تحويل تلقائي",
    amount: 65.0,
    currency: "دينار",
    installments: "قسط 3/6",
    status: "مكتملة",
    statusColor: "emerald",
    risk: "منخفض",
    notes: "تم التحويل بنجاح",
  },
  {
    id: "TX-2025-0009",
    date: "2025-01-15 16:45",
    customer: "منى العوضي",
    store: "مجوهرات روزي",
    type: "شراء",
    method: "بطاقة BNPL",
    amount: 2450.0,
    currency: "دينار",
    installments: "8 أقساط",
    status: "قيد المراجعة",
    statusColor: "amber",
    risk: "مرتفع",
    notes: "جاري استكمال الوثائق",
  },
  {
    id: "TX-2025-0010",
    date: "2025-01-14 11:25",
    customer: "جمانة الشمري",
    store: "متاجر الربيع",
    type: "قسط",
    method: "تحويل تلقائي",
    amount: 95.0,
    currency: "دينار",
    installments: "قسط 2/3",
    status: "متأخر",
    statusColor: "amber",
    risk: "تحذير",
    notes: "تأخير 2 يوم",
  },
];

const statusStyles = {
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  amber: "bg-amber-500/15 text-amber-200 border-amber-500/40",
  red: "bg-red-500/15 text-red-300 border-red-500/40",
  slate: "bg-slate-500/15 text-slate-200 border-slate-500/40",
};

const chartData = [
  { day: "سبت", purchases: 18, installments: 25, refunds: 2 },
  { day: "أحد", purchases: 22, installments: 20, refunds: 1 },
  { day: "إثن", purchases: 15, installments: 24, refunds: 3 },
  { day: "ثلاث", purchases: 27, installments: 23, refunds: 1 },
  { day: "أربع", purchases: 30, installments: 19, refunds: 2 },
  { day: "خميس", purchases: 26, installments: 22, refunds: 2 },
  { day: "جمعة", purchases: 32, installments: 28, refunds: 0 },
];

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("الكل");
  const [statusFilter, setStatusFilter] = useState("الكل");
  const [methodFilter, setMethodFilter] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransactions, setSelectedTransactions] = useState<string[]>(
    []
  );
  const [selectedTransaction, setSelectedTransaction] =
    useState<(typeof transactions)[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 8;

  const stats = useMemo(() => {
    const total = transactions.length;
    const purchases = transactions.filter((tx) => tx.type === "شراء").length;
    const installments = transactions.filter((tx) => tx.type === "قسط").length;
    const late = transactions.filter((tx) => tx.status === "متأخر").length;
    const review = transactions.filter(
      (tx) => tx.status === "قيد المراجعة"
    ).length;

    const totalVolume = transactions
      .filter((tx) => tx.type !== "استرداد")
      .reduce((sum, tx) => sum + tx.amount, 0);

    return { total, purchases, installments, late, review, totalVolume };
  }, []);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((tx) => {
      const matchesSearch =
        tx.customer.includes(searchQuery) ||
        tx.store.includes(searchQuery) ||
        tx.id.includes(searchQuery);

      const matchesType = typeFilter === "الكل" || tx.type === typeFilter;
      const matchesStatus =
        statusFilter === "الكل" || tx.status === statusFilter;
      const matchesMethod =
        methodFilter === "الكل" || tx.method === methodFilter;

      return matchesSearch && matchesType && matchesStatus && matchesMethod;
    });
  }, [searchQuery, typeFilter, statusFilter, methodFilter]);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedTransactions(paginatedTransactions.map((tx) => tx.id));
    } else {
      setSelectedTransactions([]);
    }
  };

  const handleSelectTransaction = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedTransactions([...selectedTransactions, id]);
    } else {
      setSelectedTransactions(selectedTransactions.filter((tx) => tx !== id));
    }
  };

  const handleExport = () => {
    alert("سيتم تصدير قائمة المعاملات إلى ملف CSV");
  };

  const handleBulkAction = (action: string) => {
    if (selectedTransactions.length === 0) return;
    alert(`تم إرسال ${action} إلى ${selectedTransactions.length} معاملة`);
    setSelectedTransactions([]);
  };

  const openDetails = (tx: (typeof transactions)[0]) => {
    setSelectedTransaction(tx);
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-50">المعاملات</h1>
        <p className="mt-1 text-[12px] text-slate-400">
          متابعة عمليات الشراء، الأقساط، والاستردادات مع مراقبة حالات المخاطر.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-5">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>🧾</span>
            <span>إجمالي المعاملات</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.total}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">منذ 7 أيام</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>🛒</span>
            <span>عمليات الشراء</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.purchases}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">طلبات جديدة</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>💳</span>
            <span>الأقساط المدفوعة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.installments}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">آخر 3 أيام</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>⚠️</span>
            <span>العمليات المتأخرة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {stats.late}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">بحاجة متابعة</p>
        </div>
        <div className="rounded-xl border border-emerald-500/60 bg-gradient-to-br from-emerald-500 to-emerald-400 p-4 shadow-[0_18px_40px_rgba(16,185,129,0.6)]">
          <p className="text-xs text-slate-950 font-medium flex items-center gap-1">
            <span>💰</span>
            <span>إجمالي قيمة المعاملات</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-950">
            {stats.totalVolume.toLocaleString()} دينار
          </p>
          <p className="mt-1 text-[11px] text-emerald-900">
            يشمل الشراء + الأقساط المعالجة
          </p>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)]">
          <div className="flex items-center justify-between pb-3">
            <div>
              <h2 className="text-sm font-semibold text-slate-50">
                حجم المعاملات حسب اليوم
              </h2>
              <p className="mt-1 text-[11px] text-slate-400">
                مقارنة بين الشراء، الأقساط، والاستردادات خلال الأسبوع.
              </p>
            </div>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300">
              أحدث 7 أيام
            </span>
          </div>
          <div className="mt-4 h-64 rounded-lg border border-slate-800 bg-[#031824] px-3 py-3">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid stroke="#1f2937" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="#9ca3af" tick={{ fontSize: 11 }} />
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
                <Bar dataKey="purchases" name="شراء" fill="#22c55e" />
                <Bar dataKey="installments" name="أقساط" fill="#38bdf8" />
                <Bar dataKey="refunds" name="استرداد" fill="#f97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.65)] space-y-3">
          <h2 className="text-sm font-semibold text-slate-50">
            ملخص حالات المعاملات
          </h2>
          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span>مكتملة</span>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-32 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-emerald-500 w-3/4" />
                </div>
                <span className="text-slate-100">
                  {
                    transactions.filter((transaction) => transaction.status === "مكتملة")
                      .length
                  }
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>قيد المراجعة</span>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-32 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-amber-500 w-1/4" />
                </div>
                <span className="text-slate-100">{stats.review}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>متأخرة</span>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-32 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-orange-500 w-1/5" />
                </div>
                <span className="text-slate-100">{stats.late}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>ملغاة/استرداد</span>
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-32 rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-red-500 w-1/6" />
                </div>
                <span className="text-slate-100">
                  {
                    transactions.filter(
                      (transaction) =>
                        transaction.status === "ملغاة" ||
                        transaction.type === "استرداد"
                    ).length
                  }
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-[#031824] p-3 text-xs text-slate-300">
            <p className="text-slate-200 font-medium">تنبيهات سريعة</p>
            <ul className="mt-2 space-y-1.5">
              <li>• 2 معاملات قيد المراجعة بقيمة أعلى من 1500 دينار</li>
              <li>• 3 أقساط متأخرة تحتاج تذكير</li>
              <li>• عملية استرداد واحدة بانتظار موافقة المتجر</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="ابحث برقم المعاملة، العميل، أو المتجر..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </span>
            </div>
            <select
              value={typeFilter}
              onChange={(e) => {
                setTypeFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="الكل">كل الأنواع</option>
              <option value="شراء">شراء</option>
              <option value="قسط">قسط</option>
              <option value="استرداد">استرداد</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="الكل">كل الحالات</option>
              <option value="مكتملة">مكتملة</option>
              <option value="قيد المراجعة">قيد المراجعة</option>
              <option value="متأخر">متأخر</option>
              <option value="ملغاة">ملغاة</option>
            </select>
            <select
              value={methodFilter}
              onChange={(e) => {
                setMethodFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="الكل">كل وسائل الدفع</option>
              <option value="بطاقة BNPL">بطاقة BNPL</option>
              <option value="تحويل تلقائي">تحويل تلقائي</option>
              <option value="تحويل يدوي">تحويل يدوي</option>
              <option value="رصيد BNPL">رصيد BNPL</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 transition-colors"
            >
              📥 تصدير CSV
            </button>
            <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors">
              + إضافة معاملة
            </button>
          </div>
        </div>
        <div className="mt-3 text-xs text-slate-400">
          عرض {paginatedTransactions.length} من {filteredTransactions.length} معاملة
        </div>
      </div>

      {selectedTransactions.length > 0 && (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-100">
            <span>تم تحديد {selectedTransactions.length} معاملة</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleBulkAction("تذكير سداد")}
                className="rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-3 py-2 hover:bg-emerald-500/30"
              >
                💬 تذكير سداد
              </button>
              <button
                onClick={() => handleBulkAction("إرسال للمراجعة")}
                className="rounded-lg border border-amber-500/40 bg-amber-500/15 px-3 py-2 text-amber-50 hover:bg-amber-500/30"
              >
                🕵️ تحويل للمراجعة
              </button>
              <button
                onClick={() => setSelectedTransactions([])}
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-slate-100 hover:bg-slate-900"
              >
                ✕ إلغاء
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] shadow-[0_16px_40px_rgba(0,0,0,0.65)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-800 text-xs">
            <thead className="bg-[#041f2e] text-slate-300">
              <tr>
                <th className="px-3 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={
                      paginatedTransactions.length > 0 &&
                      selectedTransactions.length === paginatedTransactions.length
                    }
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  />
                </th>
                <th className="px-3 py-3 text-right">المعاملة</th>
                <th className="px-3 py-3 text-right">العميل</th>
                <th className="px-3 py-3 text-right">المتجر</th>
                <th className="px-3 py-3 text-right">النوع</th>
                <th className="px-3 py-3 text-right">المبلغ</th>
                <th className="px-3 py-3 text-right">توزيع الربح</th>
                <th className="px-3 py-3 text-right">الحالة</th>
                <th className="px-3 py-3 text-right">المخاطر</th>
                <th className="px-3 py-3 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-[#031824] text-slate-200">
              {paginatedTransactions.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-8 text-center text-slate-400"
                  >
                    لا توجد معاملات مطابقة للبحث الحالي.
                  </td>
                </tr>
              ) : (
                paginatedTransactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="hover:bg-slate-900/40 transition-colors"
                  >
                    <td className="px-3 py-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedTransactions.includes(tx.id)}
                        onChange={(e) => handleSelectTransaction(tx.id, e.target.checked)}
                        className="rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                      />
                    </td>
                    <td className="px-3 py-3">
                      <div className="font-semibold text-slate-50">{tx.id}</div>
                      <div className="text-[11px] text-slate-400">{tx.date}</div>
                    </td>
                    <td className="px-3 py-3">{tx.customer}</td>
                    <td className="px-3 py-3 text-slate-300">{tx.store}</td>
                    <td className="px-3 py-3 text-slate-300">
                      <span className="rounded-full border border-slate-700 bg-slate-900/60 px-2 py-0.5 text-[10px]">
                        {tx.type}
                      </span>
                      <div className="mt-1 text-[11px] text-slate-500">
                        {tx.method}
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <span className="font-semibold text-slate-50">
                        {tx.amount.toLocaleString()} {tx.currency}
                      </span>
                      <div className="text-[11px] text-slate-400">
                        {tx.installments}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-[11px] text-slate-300">
                      <p>
                        🏦 البنك:{" "}
                        <span className="text-slate-100 font-semibold">
                          {(tx.amount * BANK_RATE).toFixed(2)} {tx.currency}
                        </span>
                      </p>
                      <p>
                        🧾 المنصة:{" "}
                        <span className="text-slate-100 font-semibold">
                          {(tx.amount * PLATFORM_RATE).toFixed(2)} {tx.currency}
                        </span>
                      </p>
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-[10px] font-medium border ${
                          statusStyles[tx.statusColor as keyof typeof statusStyles]
                        }`}
                      >
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-[11px] text-slate-300">
                      {tx.risk}
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => openDetails(tx)}
                          className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-[11px] text-slate-200 hover:bg-slate-900"
                        >
                          👁️
                        </button>
                        <button className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-[11px] text-emerald-200 hover:bg-emerald-500/20">
                          📄 إيصال
                        </button>
                        <button className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1.5 text-[11px] text-red-200 hover:bg-red-500/20">
                          ⚠️ متابعة
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="border-t border-slate-800 bg-[#041f2e] px-4 py-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>
                الصفحة {currentPage} من {totalPages}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-slate-300 hover:bg-slate-900 disabled:opacity-40"
                >
                  السابق
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`rounded-lg px-3 py-1.5 ${
                      currentPage === page
                        ? "bg-emerald-500 text-slate-950 font-semibold"
                        : "border border-slate-700 bg-slate-900/60 text-slate-300 hover:bg-slate-900"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-slate-300 hover:bg-slate-900 disabled:opacity-40"
                >
                  التالي
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {showModal && selectedTransaction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-[#021f2a] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-800 bg-[#021f2a] px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-50">
                  تفاصيل المعاملة {selectedTransaction.id}
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  {selectedTransaction.date} • {selectedTransaction.store}
                </p>
              </div>
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedTransaction(null);
                }}
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-900"
              >
                ✕ إغلاق
              </button>
            </div>

            <div className="space-y-4 p-6 text-sm text-slate-200">
              <section className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                  <p className="text-xs text-slate-400">العميل</p>
                  <p className="mt-1 text-slate-50">{selectedTransaction.customer}</p>
                  <p className="text-xs text-slate-400 mt-4">المتجر</p>
                  <p className="mt-1 text-slate-50">{selectedTransaction.store}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                  <p className="text-xs text-slate-400">المبلغ</p>
                  <p className="mt-1 text-slate-50 text-xl font-semibold">
                    {selectedTransaction.amount.toLocaleString()}{" "}
                    {selectedTransaction.currency}
                  </p>
                  <p className="text-xs text-slate-400 mt-4">طريقة الدفع</p>
                  <p className="mt-1 text-slate-50">{selectedTransaction.method}</p>
                </div>
              </section>

              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 font-medium border ${
                      statusStyles[
                        selectedTransaction.statusColor as keyof typeof statusStyles
                      ]
                    }`}
                  >
                    الحالة: {selectedTransaction.status}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-200">
                    نوع المعاملة: {selectedTransaction.type}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-200">
                    خطة الأقساط: {selectedTransaction.installments}
                  </span>
                  <span className="rounded-full border border-slate-700 px-3 py-1 text-slate-200">
                    المخاطر: {selectedTransaction.risk}
                  </span>
                </div>

                <div className="mt-4 text-xs text-slate-300">
                  <p className="text-slate-400">ملاحظات</p>
                  <p className="mt-1 text-slate-50">{selectedTransaction.notes}</p>
                </div>
              </section>

              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4 text-xs text-slate-200">
                <h3 className="text-xs font-semibold text-slate-50 mb-3">
                  توزيع الأرباح لهذه المعاملة
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-slate-800 bg-[#021b28] p-3">
                    <p className="text-slate-400 text-[11px]">حصة البنك</p>
                    <p className="mt-1 text-lg font-semibold text-slate-50">
                      {(selectedTransaction.amount * BANK_RATE).toFixed(2)}{" "}
                      {selectedTransaction.currency}
                    </p>
                    <p className="text-[11px] text-slate-400">({BANK_RATE * 100}%)</p>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-[#021b28] p-3">
                    <p className="text-slate-400 text-[11px]">حصة المنصة</p>
                    <p className="mt-1 text-lg font-semibold text-slate-50">
                      {(selectedTransaction.amount * PLATFORM_RATE).toFixed(2)}{" "}
                      {selectedTransaction.currency}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      ({PLATFORM_RATE * 100}%)
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <h3 className="text-xs font-semibold text-slate-200 mb-3">
                  إجراءات سريعة
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <button className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-emerald-200 hover:bg-emerald-500/20">
                    📄 تحميل الإيصال
                  </button>
                  <button className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-amber-200 hover:bg-amber-500/20">
                    🕵️ إحالة للمراجعة
                  </button>
                  <button className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-slate-200 hover:bg-slate-900">
                    💬 مراسلة العميل
                  </button>
                  <button className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-red-200 hover:bg-red-500/20">
                    ⚠️ تعليق العملية
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

