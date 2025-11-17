"use client";

import { useState } from "react";

// Mock data - سيتم استبدالها ببيانات من الـ backend
const mockUsers = [
  {
    id: 1,
    name: "أحمد العتيبي",
    phone: "+965 5000 1234",
    email: "ahmed@example.com",
    status: "نشط",
    statusColor: "emerald",
    transactionsCount: 12,
    totalPurchases: "8,500 دينار",
    registrationDate: "2024-01-15",
    lastActivity: "2025-01-18",
    creditScore: 85,
    verificationStatus: "محقق",
    verificationColor: "emerald",
    latePaymentsCount: 0,
    latePaymentsDays: 0,
    address: "الكويت، السالمية، شارع سالم المبارك",
    idNumber: "123456789",
    creditLimit: "10,000 دينار",
    usedCredit: "8,500 دينار",
    availableCredit: "1,500 دينار",
  },
  {
    id: 2,
    name: "سارة المطيري",
    phone: "+965 5111 2233",
    email: "sara@example.com",
    status: "نشط",
    statusColor: "emerald",
    transactionsCount: 8,
    totalPurchases: "5,200 دينار",
    registrationDate: "2024-02-20",
    lastActivity: "2025-01-17",
    creditScore: 92,
    verificationStatus: "محقق",
    verificationColor: "emerald",
    latePaymentsCount: 0,
    latePaymentsDays: 0,
    address: "الكويت، الجابرية، شارع أحمد الجابر",
    idNumber: "234567890",
    creditLimit: "8,000 دينار",
    usedCredit: "5,200 دينار",
    availableCredit: "2,800 دينار",
  },
  {
    id: 3,
    name: "محمد النجار",
    phone: "+965 5222 3344",
    email: "mohammed@example.com",
    status: "محظور",
    statusColor: "red",
    transactionsCount: 3,
    totalPurchases: "1,800 دينار",
    registrationDate: "2024-03-10",
    lastActivity: "2024-12-05",
    creditScore: 45,
    verificationStatus: "قيد المراجعة",
    verificationColor: "amber",
    latePaymentsCount: 5,
    latePaymentsDays: 45,
    address: "الكويت، الشامية، شارع الخليج",
    idNumber: "345678901",
    creditLimit: "3,000 دينار",
    usedCredit: "1,800 دينار",
    availableCredit: "1,200 دينار",
  },
  {
    id: 4,
    name: "ليلى خليل",
    phone: "+965 5333 4455",
    email: "layla@example.com",
    status: "متأخر",
    statusColor: "amber",
    transactionsCount: 15,
    totalPurchases: "12,000 دينار",
    registrationDate: "2023-11-08",
    lastActivity: "2025-01-10",
    creditScore: 62,
    verificationStatus: "محقق",
    verificationColor: "emerald",
    latePaymentsCount: 3,
    latePaymentsDays: 12,
    address: "الكويت، السالمية، شارع حمد المبارك",
    idNumber: "456789012",
    creditLimit: "15,000 دينار",
    usedCredit: "12,000 دينار",
    availableCredit: "3,000 دينار",
  },
  {
    id: 5,
    name: "خالد المطيري",
    phone: "+965 5444 5566",
    email: "khalid@example.com",
    status: "نشط",
    statusColor: "emerald",
    transactionsCount: 20,
    totalPurchases: "15,300 دينار",
    registrationDate: "2023-09-12",
    lastActivity: "2025-01-19",
    creditScore: 95,
    verificationStatus: "محقق",
    verificationColor: "emerald",
    latePaymentsCount: 0,
    latePaymentsDays: 0,
    address: "الكويت، حولي، شارع سالم الصباح",
    idNumber: "567890123",
    creditLimit: "20,000 دينار",
    usedCredit: "15,300 دينار",
    availableCredit: "4,700 دينار",
  },
  {
    id: 6,
    name: "فاطمة العلي",
    phone: "+965 5555 6677",
    email: "fatima@example.com",
    status: "نشط",
    statusColor: "emerald",
    transactionsCount: 6,
    totalPurchases: "3,900 دينار",
    registrationDate: "2024-05-22",
    lastActivity: "2025-01-16",
    creditScore: 78,
    verificationStatus: "محقق",
    verificationColor: "emerald",
    latePaymentsCount: 1,
    latePaymentsDays: 3,
    address: "الكويت، السالمية، شارع سالم المبارك",
    idNumber: "678901234",
    creditLimit: "5,000 دينار",
    usedCredit: "3,900 دينار",
    availableCredit: "1,100 دينار",
  },
  {
    id: 7,
    name: "عمر الشمري",
    phone: "+965 5666 7788",
    email: "omar@example.com",
    status: "غير نشط",
    statusColor: "slate",
    transactionsCount: 1,
    totalPurchases: "600 دينار",
    registrationDate: "2024-06-30",
    lastActivity: "2024-08-15",
    creditScore: 55,
    verificationStatus: "غير محقق",
    verificationColor: "red",
    latePaymentsCount: 0,
    latePaymentsDays: 0,
    address: "الكويت، الجابرية، شارع أحمد الجابر",
    idNumber: "789012345",
    creditLimit: "2,000 دينار",
    usedCredit: "600 دينار",
    availableCredit: "1,400 دينار",
  },
  {
    id: 8,
    name: "نورا الأحمد",
    phone: "+965 5777 8899",
    email: "nora@example.com",
    status: "نشط",
    statusColor: "emerald",
    transactionsCount: 9,
    totalPurchases: "6,100 دينار",
    registrationDate: "2024-04-05",
    lastActivity: "2025-01-18",
    creditScore: 88,
    verificationStatus: "محقق",
    verificationColor: "emerald",
    latePaymentsCount: 0,
    latePaymentsDays: 0,
    address: "الكويت، الشامية، شارع الخليج",
    idNumber: "890123456",
    creditLimit: "8,000 دينار",
    usedCredit: "6,100 دينار",
    availableCredit: "1,900 دينار",
  },
];

// Mock data for transactions
const mockTransactions = [
  {
    id: 1,
    userId: 1,
    store: "زارا الأردن",
    amount: "120 دينار",
    date: "2025-01-15",
    status: "مكتملة",
    statusColor: "emerald",
  },
  {
    id: 2,
    userId: 1,
    store: "سامسونغ",
    amount: "300 دينار",
    date: "2025-01-10",
    status: "مكتملة",
    statusColor: "emerald",
  },
];

// Mock data for payments
const mockPayments = [
  {
    id: 1,
    userId: 1,
    amount: "120 دينار",
    dueDate: "2025-02-15",
    paidDate: "2025-02-14",
    status: "مدفوعة",
    statusColor: "emerald",
    installment: "1/3",
  },
  {
    id: 2,
    userId: 1,
    amount: "120 دينار",
    dueDate: "2025-03-15",
    paidDate: null,
    status: "مستحقة",
    statusColor: "amber",
    installment: "2/3",
  },
];

const statusColors = {
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  red: "bg-red-500/15 text-red-300 border-red-500/40",
  amber: "bg-amber-500/15 text-amber-200 border-amber-500/40",
  slate: "bg-slate-500/15 text-slate-400 border-slate-500/40",
};

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);
  const itemsPerPage = 10;

  // Filter users based on search and status
  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "الكل" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(paginatedUsers.map((u) => u.id));
    } else {
      setSelectedUsers([]);
    }
  };

  // Handle individual select
  const handleSelectUser = (userId: number, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, userId]);
    } else {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    }
  };

  // Handle bulk actions
  const handleBulkAction = (action: string) => {
    if (selectedUsers.length === 0) return;
    // TODO: Implement bulk actions
    alert(`سيتم تنفيذ "${action}" على ${selectedUsers.length} مستخدم`);
    setSelectedUsers([]);
  };

  // Handle export
  const handleExport = () => {
    // TODO: Implement export to CSV/Excel
    alert("سيتم تصدير البيانات إلى ملف Excel");
  };

  // Handle view user details
  const handleViewUser = (user: typeof mockUsers[0]) => {
    setSelectedUser(user);
    setShowUserModal(true);
  };

  // Calculate detailed statistics
  const detailedStats = {
    avgCreditScore: Math.round(
      mockUsers.reduce((sum, u) => sum + u.creditScore, 0) / mockUsers.length
    ),
    totalCreditLimit: mockUsers.reduce(
      (sum, u) => sum + parseFloat(u.creditLimit.replace(/,/g, "")),
      0
    ),
    totalUsedCredit: mockUsers.reduce(
      (sum, u) => sum + parseFloat(u.usedCredit.replace(/,/g, "")),
      0
    ),
    verifiedUsers: mockUsers.filter((u) => u.verificationStatus === "محقق")
      .length,
    totalLatePayments: mockUsers.reduce(
      (sum, u) => sum + u.latePaymentsCount,
      0
    ),
    avgTransactionValue: Math.round(
      mockUsers.reduce(
        (sum, u) =>
          sum +
          parseFloat(u.totalPurchases.replace(/,/g, "").replace(" دينار", "")) /
            u.transactionsCount,
        0
      ) / mockUsers.length
    ),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-lg font-semibold text-slate-50">إدارة المستخدمين</h1>
        <p className="mt-1 text-[12px] text-slate-400">
          عرض وإدارة جميع حسابات المستخدمين المسجّلة في النظام
        </p>
      </div>

      {/* Statistics Cards */}
      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>👥</span>
            <span>إجمالي المستخدمين</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {mockUsers.length}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">مستخدم مسجّل</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>✅</span>
            <span>المستخدمون النشطون</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {mockUsers.filter((u) => u.status === "نشط").length}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">مستخدم نشط</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>🆕</span>
            <span>جدد هذا الشهر</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">12</p>
          <p className="mt-1 text-[11px] text-slate-300">مستخدم جديد</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span>🚫</span>
            <span>المحظورون</span>
          </p>
          <p className="mt-2 text-2xl font-semibold text-slate-50">
            {mockUsers.filter((u) => u.status === "محظور").length}
          </p>
          <p className="mt-1 text-[11px] text-slate-300">مستخدم محظور</p>
        </div>
      </section>

      {/* Detailed Statistics */}
      <section className="grid gap-4 md:grid-cols-6">
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400">متوسط الجدارة الائتمانية</p>
          <p className="mt-2 text-xl font-semibold text-slate-50">
            {detailedStats.avgCreditScore}
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400">إجمالي حدود الائتمان</p>
          <p className="mt-2 text-xl font-semibold text-slate-50">
            {detailedStats.totalCreditLimit.toLocaleString()} دينار
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400">إجمالي الائتمان المستخدم</p>
          <p className="mt-2 text-xl font-semibold text-slate-50">
            {detailedStats.totalUsedCredit.toLocaleString()} دينار
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400">المستخدمون المحققون</p>
          <p className="mt-2 text-xl font-semibold text-slate-50">
            {detailedStats.verifiedUsers}
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400">إجمالي التأخيرات</p>
          <p className="mt-2 text-xl font-semibold text-slate-50">
            {detailedStats.totalLatePayments}
          </p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <p className="text-xs text-slate-400">متوسط قيمة المعاملة</p>
          <p className="mt-2 text-xl font-semibold text-slate-50">
            {detailedStats.avgTransactionValue} دينار
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <div className="rounded-xl border border-slate-800 bg-[#021f2a] p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="ابحث بالاسم، رقم الهاتف، أو البريد الإلكتروني..."
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
              <option value="الكل">الكل</option>
              <option value="نشط">نشط</option>
              <option value="محظور">محظور</option>
              <option value="متأخر">متأخر</option>
              <option value="غير نشط">غير نشط</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExport}
              className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 hover:text-slate-50 transition-colors"
            >
              📥 تصدير البيانات
            </button>
            <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/60 transition-colors">
              + إضافة مستخدم جديد
            </button>
          </div>
        </div>

        <div className="mt-3 text-xs text-slate-400">
          عرض {paginatedUsers.length} من {filteredUsers.length} مستخدم
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedUsers.length > 0 && (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between">
            <div className="text-sm text-emerald-300">
              تم تحديد {selectedUsers.length} مستخدم
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleBulkAction("إرسال إشعار")}
                className="rounded-lg border border-emerald-500/40 bg-emerald-500/20 px-4 py-2 text-xs font-medium text-emerald-300 hover:bg-emerald-500/30 transition-colors"
              >
                📧 إرسال إشعار
              </button>
              <button
                onClick={() => handleBulkAction("حظر")}
                className="rounded-lg border border-red-500/40 bg-red-500/20 px-4 py-2 text-xs font-medium text-red-300 hover:bg-red-500/30 transition-colors"
              >
                🚫 حظر
              </button>
              <button
                onClick={() => handleBulkAction("إلغاء الحظر")}
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-900 transition-colors"
              >
                ✅ إلغاء الحظر
              </button>
              <button
                onClick={() => setSelectedUsers([])}
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-900 transition-colors"
              >
                ✕ إلغاء التحديد
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Users Table */}
      <div className="rounded-xl border border-slate-800 bg-[#021f2a] shadow-[0_16px_40px_rgba(0,0,0,0.65)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-800">
            <thead className="bg-[#041f2e]">
              <tr>
                <th className="px-4 py-3 text-center text-xs font-medium text-slate-300">
                  <input
                    type="checkbox"
                    checked={
                      selectedUsers.length === paginatedUsers.length &&
                      paginatedUsers.length > 0
                    }
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                  />
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-slate-300">
                  الاسم
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-slate-300">
                  رقم الهاتف
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-slate-300">
                  الحالة
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-slate-300">
                  الجدارة الائتمانية
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-slate-300">
                  حالة التحقق
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-slate-300">
                  تاريخ التأخيرات
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-slate-300">
                  عدد المعاملات
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-slate-300">
                  إجمالي المشتريات
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-slate-300">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 bg-[#031824]">
              {paginatedUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan={10}
                    className="px-4 py-8 text-center text-sm text-slate-400"
                  >
                    لا توجد نتائج
                  </td>
                </tr>
              ) : (
                paginatedUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-900/40 transition-colors"
                  >
                    <td className="px-4 py-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={(e) =>
                          handleSelectUser(user.id, e.target.checked)
                        }
                        className="rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-50">
                      {user.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-300">
                      {user.phone}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium border ${statusColors[user.statusColor as keyof typeof statusColors]}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-50">
                          {user.creditScore}
                        </span>
                        <div className="h-2 w-16 rounded-full bg-slate-700">
                          <div
                            className={`h-full rounded-full ${
                              user.creditScore >= 80
                                ? "bg-emerald-500"
                                : user.creditScore >= 60
                                ? "bg-amber-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${user.creditScore}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium border ${statusColors[user.verificationColor as keyof typeof statusColors]}`}
                      >
                        {user.verificationStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-300">
                      {user.latePaymentsCount > 0 ? (
                        <div>
                          <div className="text-red-300">
                            {user.latePaymentsCount} مرة
                          </div>
                          <div className="text-xs text-slate-400">
                            {user.latePaymentsDays} يوم
                          </div>
                        </div>
                      ) : (
                        <span className="text-emerald-300">لا يوجد</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-300">
                      {user.transactionsCount}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-50">
                      {user.totalPurchases}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleViewUser(user)}
                          className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-900 hover:text-slate-50 transition-colors"
                          title="عرض التفاصيل"
                        >
                          👁️
                        </button>
                        <button
                          className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 hover:bg-emerald-500/20 transition-colors"
                          title="تعديل"
                        >
                          ✏️
                        </button>
                        <button
                          className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1.5 text-xs text-red-300 hover:bg-red-500/20 transition-colors"
                          title="حظر/إلغاء حظر"
                        >
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="border-t border-slate-800 bg-[#041f2e] px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-400">
                الصفحة {currentPage} من {totalPages}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  السابق
                </button>
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`rounded-lg px-3 py-1.5 text-xs transition-colors ${
                          currentPage === page
                            ? "bg-emerald-500 text-slate-950 font-medium"
                            : "border border-slate-700 bg-slate-900/60 text-slate-300 hover:bg-slate-900"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}
                </div>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  التالي
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* User Details Modal */}
      {showUserModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-slate-800 bg-[#021f2a] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            {/* Modal Header */}
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-800 bg-[#021f2a] px-6 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-50">
                  ملف المستخدم: {selectedUser.name}
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  {selectedUser.email} • {selectedUser.phone}
                </p>
              </div>
              <button
                onClick={() => {
                  setShowUserModal(false);
                  setSelectedUser(null);
                }}
                className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 transition-colors"
              >
                ✕ إغلاق
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* User Profile Section */}
              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-4">
                  📋 المعلومات الشخصية
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs text-slate-400">الاسم الكامل</p>
                    <p className="mt-1 text-sm text-slate-50">{selectedUser.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">رقم الهاتف</p>
                    <p className="mt-1 text-sm text-slate-50">{selectedUser.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">البريد الإلكتروني</p>
                    <p className="mt-1 text-sm text-slate-50">{selectedUser.email}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">رقم الهوية</p>
                    <p className="mt-1 text-sm text-slate-50">{selectedUser.idNumber}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-slate-400">العنوان</p>
                    <p className="mt-1 text-sm text-slate-50">{selectedUser.address}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">تاريخ التسجيل</p>
                    <p className="mt-1 text-sm text-slate-50">
                      {selectedUser.registrationDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">آخر نشاط</p>
                    <p className="mt-1 text-sm text-slate-50">
                      {selectedUser.lastActivity}
                    </p>
                  </div>
                </div>
              </section>

              {/* Credit Information */}
              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-4">
                  💳 معلومات الائتمان
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs text-slate-400">الجدارة الائتمانية</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-lg font-semibold text-slate-50">
                        {selectedUser.creditScore}
                      </span>
                      <div className="h-2 flex-1 rounded-full bg-slate-700">
                        <div
                          className={`h-full rounded-full ${
                            selectedUser.creditScore >= 80
                              ? "bg-emerald-500"
                              : selectedUser.creditScore >= 60
                              ? "bg-amber-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${selectedUser.creditScore}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">حد الائتمان</p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      {selectedUser.creditLimit}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">الائتمان المستخدم</p>
                    <p className="mt-1 text-sm text-slate-50">
                      {selectedUser.usedCredit}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">الائتمان المتاح</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-300">
                      {selectedUser.availableCredit}
                    </p>
                  </div>
                </div>
              </section>

              {/* Transactions History */}
              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-50">
                    📊 سجل المعاملات
                  </h3>
                  <button className="text-xs text-emerald-300 hover:text-emerald-200">
                    عرض الكل
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-800 text-xs">
                    <thead className="bg-[#041f2e]">
                      <tr>
                        <th className="px-3 py-2 text-right text-slate-300">المتجر</th>
                        <th className="px-3 py-2 text-right text-slate-300">المبلغ</th>
                        <th className="px-3 py-2 text-right text-slate-300">التاريخ</th>
                        <th className="px-3 py-2 text-right text-slate-300">الحالة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {mockTransactions
                        .filter((t) => t.userId === selectedUser.id)
                        .map((transaction) => (
                          <tr key={transaction.id}>
                            <td className="px-3 py-2 text-slate-50">
                              {transaction.store}
                            </td>
                            <td className="px-3 py-2 text-slate-50">
                              {transaction.amount}
                            </td>
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

              {/* Payments History */}
              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-50">
                    💰 سجل الدفعات والقسط
                  </h3>
                  <button className="text-xs text-emerald-300 hover:text-emerald-200">
                    عرض الكل
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-800 text-xs">
                    <thead className="bg-[#041f2e]">
                      <tr>
                        <th className="px-3 py-2 text-right text-slate-300">القسط</th>
                        <th className="px-3 py-2 text-right text-slate-300">المبلغ</th>
                        <th className="px-3 py-2 text-right text-slate-300">
                          تاريخ الاستحقاق
                        </th>
                        <th className="px-3 py-2 text-right text-slate-300">
                          تاريخ الدفع
                        </th>
                        <th className="px-3 py-2 text-right text-slate-300">الحالة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {mockPayments
                        .filter((p) => p.userId === selectedUser.id)
                        .map((payment) => (
                          <tr key={payment.id}>
                            <td className="px-3 py-2 text-slate-50">
                              {payment.installment}
                            </td>
                            <td className="px-3 py-2 text-slate-50">
                              {payment.amount}
                            </td>
                            <td className="px-3 py-2 text-slate-400">
                              {payment.dueDate}
                            </td>
                            <td className="px-3 py-2 text-slate-400">
                              {payment.paidDate || "—"}
                            </td>
                            <td className="px-3 py-2">
                              <span
                                className={`inline-flex rounded-full px-2 py-0.5 text-[10px] border ${statusColors[payment.statusColor as keyof typeof statusColors]}`}
                              >
                                {payment.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Send Message/Notification */}
              <section className="rounded-xl border border-slate-800 bg-[#031824] p-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-4">
                  📧 إرسال الرسائل والإشعارات
                </h3>
                <div className="flex flex-col gap-3">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      نوع الرسالة
                    </label>
                    <select className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                      <option>تذكير بالدفع</option>
                      <option>تنبيه تأخير</option>
                      <option>إشعار عام</option>
                      <option>رسالة مخصصة</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">
                      نص الرسالة
                    </label>
                    <textarea
                      rows={3}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-emerald-500/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors">
                      📱 إرسال SMS
                    </button>
                    <button className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 transition-colors">
                      📧 إرسال Email
                    </button>
                    <button className="rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-900 transition-colors">
                      🔔 إرسال إشعار
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
