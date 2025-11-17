"use client";

import { useState } from "react";

const mockStores = [
  {
    id: 1,
    name: "متاجر الربيع",
    category: "أزياء",
    location: "الكويت - السالمية",
    status: "نشط",
    statusColor: "emerald",
    riskLevel: "منخفض",
    riskColor: "emerald",
    totalSales: "48,500 دينار",
    customers: 320,
    avgOrder: "150 دينار",
    activationDate: "2023-08-12",
    lastSettlement: "2025-01-18",
    pendingPayouts: "6,200 دينار",
    commissionRate: "3.5%",
    payoutCycle: "أسبوعي",
    contactPerson: "سارة القحطاني",
    contactPhone: "+965 5550 1234",
    contactEmail: "sara@springstores.com",
    address: "الكويت، السالمية، مجمع مارينا",
    contractNumber: "CNT-2023-091",
    complianceScore: 95,
    delayedOrders: 0,
    topProducts: ["عباية كلاسيك", "حقيبة جلدية", "حذاء كعب"],
  },
  {
    id: 2,
    name: "إلكترونيات ميزو",
    category: "إلكترونيات",
    location: "الكويت - حولي",
    status: "نشط",
    statusColor: "emerald",
    riskLevel: "متوسط",
    riskColor: "amber",
    totalSales: "85,300 دينار",
    customers: 510,
    avgOrder: "280 دينار",
    activationDate: "2022-11-03",
    lastSettlement: "2025-01-17",
    pendingPayouts: "9,400 دينار",
    commissionRate: "4%",
    payoutCycle: "أسبوعي",
    contactPerson: "مازن الشمري",
    contactPhone: "+965 5551 6677",
    contactEmail: "mazin@mezotech.com",
    address: "الكويت، حولي، شارع ابن خلدون",
    contractNumber: "CNT-2022-204",
    complianceScore: 82,
    delayedOrders: 4,
    topProducts: ["Galaxy S24", "شاشة 55", "سماعات Buds"],
  },
  {
    id: 3,
    name: "هوم ديزاين",
    category: "أثاث",
    location: "الكويت - الشويخ",
    status: "قيد المراجعة",
    statusColor: "amber",
    riskLevel: "مرتفع",
    riskColor: "red",
    totalSales: "22,600 دينار",
    customers: 140,
    avgOrder: "320 دينار",
    activationDate: "2024-05-21",
    lastSettlement: "2025-01-12",
    pendingPayouts: "3,200 دينار",
    commissionRate: "5%",
    payoutCycle: "شهري",
    contactPerson: "ليلى خليل",
    contactPhone: "+965 5552 8899",
    contactEmail: "laila@homedesign.com",
    address: "الكويت، الشويخ الصناعية، شارع 10",
    contractNumber: "CNT-2024-045",
    complianceScore: 58,
    delayedOrders: 7,
    topProducts: ["كنبة زاوية", "طقم سفرة", "سرير رئيسي"],
  },
  {
    id: 4,
    name: "أسواق الغذاء الطازج",
    category: "بقالة",
    location: "الكويت - السالمية",
    status: "متوقف مؤقتًا",
    statusColor: "slate",
    riskLevel: "مرتفع",
    riskColor: "red",
    totalSales: "12,900 دينار",
    customers: 220,
    avgOrder: "60 دينار",
    activationDate: "2023-02-15",
    lastSettlement: "2024-12-30",
    pendingPayouts: "1,100 دينار",
    commissionRate: "2%",
    payoutCycle: "شهري",
    contactPerson: "خالد المطيري",
    contactPhone: "+965 5553 4455",
    contactEmail: "khalid@freshmart.com",
    address: "الكويت، السالمية، شارع سالم المبارك",
    contractNumber: "CNT-2023-013",
    complianceScore: 41,
    delayedOrders: 12,
    topProducts: ["صندوق خضار", "منتجات عضوية", "حليب طازج"],
  },
  {
    id: 5,
    name: "مجوهرات روزي",
    category: "مجوهرات",
    location: "الكويت - الري",
    status: "نشط",
    statusColor: "emerald",
    riskLevel: "منخفض",
    riskColor: "emerald",
    totalSales: "102,400 دينار",
    customers: 95,
    avgOrder: "1,050 دينار",
    activationDate: "2021-12-02",
    lastSettlement: "2025-01-19",
    pendingPayouts: "14,700 دينار",
    commissionRate: "6%",
    payoutCycle: "أسبوعي",
    contactPerson: "رنا العوضي",
    contactPhone: "+965 5554 7788",
    contactEmail: "rana@rosyjewel.com",
    address: "الكويت، الري، الأفنيوز المرحلة 3",
    contractNumber: "CNT-2021-301",
    complianceScore: 98,
    delayedOrders: 0,
    topProducts: ["سلسال ألماس", "خاتم سوليتير", "أقراط ذهبية"],
  },
];

const mockStoreTransactions = [
  {
    id: 1,
    storeId: 1,
    customer: "أحمد العتيبي",
    amount: "230 دينار",
    date: "2025-01-18",
    status: "مكتملة",
    statusColor: "emerald",
  },
  {
    id: 2,
    storeId: 1,
    customer: "ليلى خليل",
    amount: "120 دينار",
    date: "2025-01-15",
    status: "متأخرة",
    statusColor: "amber",
  },
  {
    id: 3,
    storeId: 2,
    customer: "محمد النجار",
    amount: "390 دينار",
    date: "2025-01-16",
    status: "مكتملة",
    statusColor: "emerald",
  },
];

const mockStorePayouts = [
  {
    id: 1,
    storeId: 1,
    amount: "4,200 دينار",
    dueDate: "2025-01-22",
    status: "قيد المعالجة",
    statusColor: "amber",
  },
  {
    id: 2,
    storeId: 1,
    amount: "3,100 دينار",
    dueDate: "2025-01-15",
    status: "محولة",
    statusColor: "emerald",
  },
  {
    id: 3,
    storeId: 2,
    amount: "5,500 دينار",
    dueDate: "2025-01-25",
    status: "قيد المراجعة",
    statusColor: "amber",
  },
];

const statusColors = {
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  red: "bg-red-500/15 text-red-300 border-red-500/40",
  amber: "bg-amber-500/15 text-amber-200 border-amber-500/40",
  slate: "bg-slate-500/15 text-slate-400 border-slate-500/40",
};

export default function StoresPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("الكل");
  const [riskFilter, setRiskFilter] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStores, setSelectedStores] = useState<number[]>([]);
  const [selectedStore, setSelectedStore] =
    useState<(typeof mockStores)[0] | null>(null);
  const [showStoreModal, setShowStoreModal] = useState(false);
  const [selectedFeaturedStore, setSelectedFeaturedStore] = useState("");
  const [featuredStores, setFeaturedStores] = useState<number[]>([]);
  const itemsPerPage = 10;

  const filteredStores = mockStores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "الكل" || store.status === statusFilter;
    const matchesRisk = riskFilter === "الكل" || store.riskLevel === riskFilter;
    return matchesSearch && matchesStatus && matchesRisk;
  });

  const totalPages = Math.ceil(filteredStores.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStores = filteredStores.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedStores(paginatedStores.map((s) => s.id));
    } else {
      setSelectedStores([]);
    }
  };

  const handleSelectStore = (storeId: number, checked: boolean) => {
    if (checked) {
      setSelectedStores([...selectedStores, storeId]);
    } else {
      setSelectedStores(selectedStores.filter((id) => id !== storeId));
    }
  };

  const handleBulkAction = (action: string) => {
    if (selectedStores.length === 0) return;
    alert(`سيتم تنفيذ "${action}" على ${selectedStores.length} متجر`);
    setSelectedStores([]);
  };

  const handleExport = () => {
    alert("سيتم تصدير بيانات المتاجر إلى ملف Excel");
  };

  const handleViewStore = (store: (typeof mockStores)[0]) => {
    setSelectedStore(store);
    setShowStoreModal(true);
  };

  const storeStats = {
    totalStores: mockStores.length,
    activeStores: mockStores.filter((s) => s.status === "نشط").length,
    highRiskStores: mockStores.filter((s) => s.riskLevel === "مرتفع").length,
    reviewStores: mockStores.filter((s) => s.status === "قيد المراجعة").length,
    totalSalesValue: mockStores.reduce(
      (sum, store) =>
        sum +
        parseFloat(store.totalSales.replace(/,/g, "").replace(" دينار", "")),
      0
    ),
    totalPendingPayouts: mockStores.reduce(
      (sum, store) =>
        sum +
        parseFloat(store.pendingPayouts.replace(/,/g, "").replace(" دينار", "")),
      0
    ),
  };

  const topStores = [...mockStores]
    .sort(
      (a, b) =>
        parseFloat(b.totalSales.replace(/,/g, "")) -
        parseFloat(a.totalSales.replace(/,/g, ""))
    )
    .slice(0, 3);

  const manualTopStores = mockStores.filter((store) =>
    featuredStores.includes(store.id)
  );

  const handleAddFeaturedStore = () => {
    if (!selectedFeaturedStore) return;
    const storeId = Number(selectedFeaturedStore);
    if (!featuredStores.includes(storeId)) {
      setFeaturedStores([...featuredStores, storeId]);
    }
    setSelectedFeaturedStore("");
  };

  const handleRemoveFeaturedStore = (storeId: number) => {
    setFeaturedStores(featuredStores.filter((id) => id !== storeId));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-50">إدارة المتاجر</h1>
        <p className="mt-1 text-[12px] text-slate-400">
          متابعة المتاجر المتعاونة، الأداء، المخاطر، والمدفوعات المستحقة
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>🏪</span>
            <span>إجمالي المتاجر</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {storeStats.totalStores}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">متجر متعاقد</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>✅</span>
            <span>المتاجر النشطة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {storeStats.activeStores}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">متجر متاح للعملاء</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>⚠️</span>
            <span>المتاجر عالية المخاطر</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {storeStats.highRiskStores}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">بحاجة لمتابعة</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>⏳</span>
            <span>تحت المراجعة</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {storeStats.reviewStores}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">
            متاجر بانتظار التفعيل
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400">إجمالي المبيعات عبر BNPL</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {storeStats.totalSalesValue.toLocaleString()} دينار
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400">إجمالي المستحقات للمتاجر</p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {storeStats.totalPendingPayouts.toLocaleString()} دينار
          </p>
        </div>
        <div className="rounded-xl border border-emerald-500/70 bg-gradient-to-br from-emerald-500 to-emerald-400 p-4 text-slate-950 shadow-[0_18px_40px_rgba(16,185,129,0.6)]">
          <p className="text-xs font-medium">أفضل 3 متاجر أداءً</p>
          <div className="mt-3 space-y-2 text-sm">
            {topStores.map((store, index) => (
              <div
                key={store.id}
                className="flex items-center justify-between"
              >
                <span>
                  #{index + 1} {store.name}
                </span>
                <span className="font-semibold">{store.totalSales}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-50">
              المتاجر المختارة لظهور خاص (Top Stores)
            </h3>
            <p className="mt-1 text-[11px] text-slate-400">
              اختر متجرًا لإبرازه في قسم المتاجر المميزة داخل الحملات أو الصفحة
              الرئيسية.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <select
              value={selectedFeaturedStore}
              onChange={(e) => setSelectedFeaturedStore(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="">اختر متجرًا</option>
              {mockStores.map((store) => (
                <option key={store.id} value={store.id}>
                  {store.name} • {store.category}
                </option>
              ))}
            </select>
            <button
              onClick={handleAddFeaturedStore}
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              ✔️ إضافة للـ Top Store
            </button>
          </div>
        </div>

        {manualTopStores.length > 0 ? (
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {manualTopStores.map((store) => (
              <div
                key={store.id}
                className="rounded-xl border border-slate-800 bg-[#03202d] p-4"
              >
                <div className="flex items-center justify-between text-sm text-slate-50">
                  <span className="font-semibold">{store.name}</span>
                  <button
                    onClick={() => handleRemoveFeaturedStore(store.id)}
                    className="text-xs text-slate-400 hover:text-red-300"
                  >
                    إزالة
                  </button>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                  الفئة: {store.category}
                </p>
                <p className="mt-1 text-xs text-emerald-200">
                  آخر مبيعات: {store.totalSales}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-xs text-slate-400">
            لم يتم اختيار أي متجر بعد. اختر متجرًا وأضفه للقائمة.
          </p>
        )}
      </div>

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="ابحث بالمتجر، الفئة، أو المدينة..."
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
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="الكل">كل الحالات</option>
              <option value="نشط">نشط</option>
              <option value="قيد المراجعة">قيد المراجعة</option>
              <option value="متوقف مؤقتًا">متوقف مؤقتًا</option>
            </select>
            <select
              value={riskFilter}
              onChange={(e) => {
                setRiskFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="الكل">كل مستويات المخاطر</option>
              <option value="منخفض">منخفض</option>
              <option value="متوسط">متوسط</option>
              <option value="مرتفع">مرتفع</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-slate-50 transition-colors"
            >
              📥 تصدير البيانات
            </button>
            <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors">
              + إضافة متجر جديد
            </button>
          </div>
        </div>
        <div className="mt-3 text-xs text-slate-400">
          عرض {paginatedStores.length} من {filteredStores.length} متجر
        </div>
      </div>

      {selectedStores.length > 0 && (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm text-emerald-200">
              تم تحديد {selectedStores.length} متجر
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleBulkAction("إرسال تحذير")}
                className="rounded-lg border border-amber-500/40 bg-amber-500/15 px-4 py-2 text-xs font-medium text-amber-100 hover:bg-amber-500/30 transition-colors"
              >
                ⚠️ إرسال تحذير
              </button>
              <button
                onClick={() => handleBulkAction("إيقاف مؤقت")}
                className="rounded-lg border border-red-500/40 bg-red-500/15 px-4 py-2 text-xs font-medium text-red-200 hover:bg-red-500/30 transition-colors"
              >
                🚫 إيقاف مؤقت
              </button>
              <button
                onClick={() => handleBulkAction("تغيير العمولة")}
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-900 transition-colors"
              >
                💼 تعديل العمولة
              </button>
              <button
                onClick={() => setSelectedStores([])}
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-900 transition-colors"
              >
                ✕ إلغاء التحديد
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-xl border border-slate-800 bg-[#021f2a] shadow-[0_16px_40px_rgba(0,0,0,0.65)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-800 text-sm">
            <thead className="bg-[#041f2e] text-xs text-slate-300">
              <tr>
                <th className="px-3 py-3 text-center">
                  <input
                    type="checkbox"
                    checked={
                      paginatedStores.length > 0 &&
                      selectedStores.length === paginatedStores.length
                    }
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  />
                </th>
                <th className="px-3 py-3 text-right">المتجر</th>
                <th className="px-3 py-3 text-right">الفئة</th>
                <th className="px-3 py-3 text-right">إجمالي المبيعات</th>
                <th className="px-3 py-3 text-right">عدد العملاء</th>
                <th className="px-3 py-3 text-right">متوسط الطلب</th>
                <th className="px-3 py-3 text-right">الحالة</th>
                <th className="px-3 py-3 text-right">المخاطر</th>
                <th className="px-3 py-3 text-right">الالتزام</th>
                <th className="px-3 py-3 text-right">التمويل</th>
                <th className="px-3 py-3 text-right">المستحقات</th>
                <th className="px-3 py-3 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-[#031824] text-xs">
              {paginatedStores.length === 0 ? (
                <tr>
                  <td
                    colSpan={11}
                    className="px-4 py-8 text-center text-slate-400"
                  >
                    لا توجد متاجر مطابقة
                  </td>
                </tr>
              ) : (
                paginatedStores.map((store) => (
                  <tr
                    key={store.id}
                    className="hover:bg-slate-900/40 transition-colors"
                  >
                    <td className="px-3 py-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedStores.includes(store.id)}
                        onChange={(e) =>
                          handleSelectStore(store.id, e.target.checked)
                        }
                        className="rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                      />
                    </td>
                    <td className="px-3 py-3">
                      <div>
                        <p className="font-medium text-slate-50">
                          {store.name}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          {store.location}
                        </p>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-slate-300">
                      {store.category}
                    </td>
                    <td className="px-3 py-3 font-medium text-slate-50">
                      {store.totalSales}
                    </td>
                    <td className="px-3 py-3 text-slate-300">{store.customers}</td>
                    <td className="px-3 py-3 text-slate-300">{store.avgOrder}</td>
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium border ${statusColors[store.statusColor as keyof typeof statusColors]}`}
                      >
                        {store.status}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium border ${statusColors[store.riskColor as keyof typeof statusColors]}`}
                      >
                        {store.riskLevel}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <div className="text-slate-100">
                        {store.complianceScore}%
                      </div>
                      <div className="text-[11px] text-slate-400">
                        تأخيرات: {store.delayedOrders}
                      </div>
                    </td>
                    <td className="px-3 py-3 text-[11px] text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full border border-slate-700 bg-slate-900/60 px-2 py-0.5 text-[10px]">
                          ممول عبر البنك
                        </span>
                      </div>
                      <p className="mt-1 text-[10px] text-slate-500">
                        دفعات العميل تُحوَّل للبنك بعد خصم عمولتنا
                      </p>
                    </td>
                    <td className="px-3 py-3 text-slate-100">
                      {store.pendingPayouts}
                      <div className="text-[11px] text-slate-400">
                        آخر تسوية: {store.lastSettlement}
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleViewStore(store)}
                          className="rounded-lg border border-slate-700 bg-slate-900/60 px-2.5 py-1 text-[11px] text-slate-200 hover:bg-slate-900"
                        >
                          👁️
                        </button>
                        <button className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-200 hover:bg-emerald-500/20">
                          ✏️
                        </button>
                        <button className="rounded-lg border border-red-500/40 bg-red-500/10 px-2.5 py-1 text-[11px] text-red-200 hover:bg-red-500/20">
                          🚫
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
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
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
                  )
                )}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
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

      {showStoreModal && selectedStore && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-800 bg-[#021f2a] shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-800 bg-[#021f2a] px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-50">
                  ملف المتجر: {selectedStore.name}
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  {selectedStore.category} • {selectedStore.location}
                </p>
              </div>
              <button
                onClick={() => {
                  setShowStoreModal(false);
                  setSelectedStore(null);
                }}
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-900"
              >
                ✕ إغلاق
              </button>
            </div>

            <div className="space-y-6 px-6 py-6">
              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-4">
                  📋 معلومات المتجر
                </h3>
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div>
                    <p className="text-xs text-slate-400">الاسم التجاري</p>
                    <p className="mt-1 text-slate-50">{selectedStore.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">الشخص المسؤول</p>
                    <p className="mt-1 text-slate-50">
                      {selectedStore.contactPerson}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">رقم الهاتف</p>
                    <p className="mt-1 text-slate-50">
                      {selectedStore.contactPhone}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">البريد الإلكتروني</p>
                    <p className="mt-1 text-slate-50">
                      {selectedStore.contactEmail}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">رقم العقد</p>
                    <p className="mt-1 text-slate-50">
                      {selectedStore.contractNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">تاريخ التفعيل</p>
                    <p className="mt-1 text-slate-50">
                      {selectedStore.activationDate}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-slate-400">العنوان</p>
                    <p className="mt-1 text-slate-50">
                      {selectedStore.address}
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-4">
                  📊 الأداء والالتزام
                </h3>
                <div className="grid gap-4 md:grid-cols-4 text-sm">
                  <div>
                    <p className="text-xs text-slate-400">إجمالي المبيعات</p>
                    <p className="mt-1 text-xl font-semibold text-slate-50">
                      {selectedStore.totalSales}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">العملاء</p>
                    <p className="mt-1 text-xl font-semibold text-slate-50">
                      {selectedStore.customers}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">متوسط الطلب</p>
                    <p className="mt-1 text-xl font-semibold text-slate-50">
                      {selectedStore.avgOrder}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">مستوى المخاطر</p>
                    <span
                      className={`mt-1 inline-flex rounded-full px-3 py-1 text-[11px] font-medium border ${statusColors[selectedStore.riskColor as keyof typeof statusColors]}`}
                    >
                      {selectedStore.riskLevel}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">نسبة الالتزام</p>
                    <p className="mt-1 text-xl font-semibold text-slate-50">
                      {selectedStore.complianceScore}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">التأخيرات</p>
                    <p className="mt-1 text-xl font-semibold text-amber-300">
                      {selectedStore.delayedOrders} طلب
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">العمولة</p>
                    <p className="mt-1 text-xl font-semibold text-slate-50">
                      {selectedStore.commissionRate}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">دورية التحويل</p>
                    <p className="mt-1 text-xl font-semibold text-slate-50">
                      {selectedStore.payoutCycle}
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-slate-50">
                    💰 التحويلات المالية
                  </h3>
                  <span className="text-xs text-slate-400">
                    آخر تسوية: {selectedStore.lastSettlement}
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-800 text-xs">
                    <thead className="bg-[#041f2e] text-slate-300">
                      <tr>
                        <th className="px-3 py-2 text-right">المبلغ</th>
                        <th className="px-3 py-2 text-right">تاريخ الاستحقاق</th>
                        <th className="px-3 py-2 text-right">الحالة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-100">
                      {mockStorePayouts
                        .filter((p) => p.storeId === selectedStore.id)
                        .map((payout) => (
                          <tr key={payout.id}>
                            <td className="px-3 py-2">{payout.amount}</td>
                            <td className="px-3 py-2 text-slate-400">
                              {payout.dueDate}
                            </td>
                            <td className="px-3 py-2">
                              <span
                                className={`inline-flex rounded-full px-2 py-0.5 text-[10px] border ${statusColors[payout.statusColor as keyof typeof statusColors]}`}
                              >
                                {payout.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-slate-50">
                    🧾 معاملات المتجر
                  </h3>
                  <button className="text-xs text-emerald-300 hover:text-emerald-200">
                    عرض جميع معاملات المتجر
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-800 text-xs">
                    <thead className="bg-[#041f2e] text-slate-300">
                      <tr>
                        <th className="px-3 py-2 text-right">العميل</th>
                        <th className="px-3 py-2 text-right">المبلغ</th>
                        <th className="px-3 py-2 text-right">التاريخ</th>
                        <th className="px-3 py-2 text-right">الحالة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-100">
                      {mockStoreTransactions
                        .filter((t) => t.storeId === selectedStore.id)
                        .map((transaction) => (
                          <tr key={transaction.id}>
                            <td className="px-3 py-2">{transaction.customer}</td>
                            <td className="px-3 py-2">{transaction.amount}</td>
                            <td className="px-3 py-2 text-slate-400">
                              {transaction.date}
                            </td>
                            <td className="px-3 py-2">
                              <span
                                className={`inline-flex rounded-full px-2 py-0.5 text-[10px] border ${statusColors[transaction.statusColor as keyof typeof statusColors]}`}
                              >
                                {transaction.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-3">
                  ✉️ إرسال إشعار للمتجر
                </h3>
                <div className="flex flex-col gap-3">
                  <select className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                    <option>تذكير بالتسوية</option>
                    <option>تنبيه تأخير</option>
                    <option>إشعار تحديث سياسات</option>
                    <option>رسالة مخصصة</option>
                  </select>
                  <textarea
                    rows={3}
                    placeholder="اكتب رسالتك للمتجر..."
                    className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400">
                      📧 إرسال بريد
                    </button>
                    <button className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-500/20">
                      🔔 إرسال إشعار
                    </button>
                    <button className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900">
                      📱 إرسال SMS
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


