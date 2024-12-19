import { sidebarLinkType } from "@/types";
import userIcon from "@/assets/svg/user-friends.svg";
import guarantorsIcon from "@/assets/svg/guarantor.svg";
import loanIcon from "@/assets/svg/sack.svg";
import handshakeIcon from "@/assets/svg/handshake.svg";
import savingsIcon from "@/assets/svg/piggy-bank.svg";
import requestIcon from "@/assets/svg/loan-request.svg";
import whitelistIcon from "@/assets/svg/user-check.svg";
import karmaIcon from "@/assets/svg/user-times.svg";
import organizationIcon from "@/assets/svg/briefcase.svg";
import loanProductIcon from "@/assets/svg/loan-request.svg";
import bankIcon from "@/assets/svg/bank.svg";
import feesIcon from "@/assets/svg/fees.svg";
import transactionIcon from "@/assets/svg/transaction.svg";
import servicesIcon from "@/assets/svg/services.svg";
import serviceAccIcon from "@/assets/svg/service-acc.svg";
import settlementIcon from "@/assets/svg/settlement.svg";
import chartIcon from "@/assets/svg/chart-bar.svg";
import preferenceIcon from "@/assets/svg/preference.svg";
import pricingIcon from "@/assets/svg/pricing.svg";
import auditLogIcon from "@/assets/svg/audit-log.svg";
import tireIcon from "@/assets/svg/tire.svg";

export const customersRelatedNavlink: sidebarLinkType[] = [
  {
    href: "/users",
    title: "Users",
    icon: userIcon,
  },
  {
    href: "/guarantors",
    title: "Guarantors",
    icon: guarantorsIcon,
  },
  {
    href: "/loans",
    title: "Loans",
    icon: loanIcon,
  },
  {
    href: "/decision-models",
    title: "Decision Models",
    icon: handshakeIcon,
  },
  {
    href: "/savings",
    title: "Savings",
    icon: savingsIcon,
  },
  {
    href: "/requests",
    title: "Requests",
    icon: requestIcon,
  },
  {
    href: "/whitelist",
    title: "Whitelist",
    icon: whitelistIcon,
  },
  {
    href: "/karma",
    title: "Karma",
    icon: karmaIcon,
  },
];

export const businessesRelatedNavlink: sidebarLinkType[] = [
  {
    href: "/organization",
    title: "Organization",
    icon: organizationIcon,
  },
  {
    href: "/loan-products",
    title: "Loan Products",
    icon: loanProductIcon,
  },
  {
    href: "/savings-products",
    title: "Savings Products",
    icon: bankIcon,
  },
  {
    href: "/fees-and-charges",
    title: "Fees and Charges",
    icon: feesIcon,
  },
  {
    href: "/transactions",
    title: "Transactions",
    icon: transactionIcon,
  },
  {
    href: "/services",
    title: "Services",
    icon: servicesIcon,
  },
  {
    href: "/service-account",
    title: "Service Account",
    icon: serviceAccIcon,
  },
  {
    href: "/settlements",
    title: "Settlements",
    icon: settlementIcon,
  },
  {
    href: "/reports",
    title: "Reports",
    icon: chartIcon,
  },
];

export const settingsRelatedNavlink: sidebarLinkType[] = [
  {
    href: "/preferences",
    title: "Preferences",
    icon: preferenceIcon,
  },
  {
    href: "/fees-and-pricing",
    title: "Fees and Pricing",
    icon: pricingIcon,
  },
  {
    href: "/audit-logs",
    title: "Audit Logs",
    icon: auditLogIcon,
  },
  {
    href: "/systems-messages",
    title: "Systems Messages",
    icon: tireIcon,
  },
];
