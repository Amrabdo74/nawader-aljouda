import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Container from "../../UI/Container";
import { products } from "../../../FakeData/Products";

const categories = [
  { key: "all", label: "All" },
  { key: "safe", label: "Safe products" },
  { key: "danger", label: "Danger products" },
  { key: "lowcost", label: "Lower cost" },
  { key: "highsale", label: "Highest sale" },
];

const ProductListSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("all");
  const navigate = useNavigate();

  // 🔍 فلترة المنتجات حسب التابة
  const filteredProducts =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <section className="py-10 md:py-16 bg-[var(--color-white)] text-center !h-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-dark)] mb-3">
        {t("selectExplore") || "Select & Explore"}
      </h2>
      <div className="h-[3px] w-10 bg-[var(--color-primary)] rounded-full mx-auto mb-8"></div>

      <Container>
        {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-5 py-2 rounded-full border transition-all duration-200 ${
              active === cat.key
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "text-gray-700 border-gray-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            }`}
          >
            {t(cat.label) || cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg mt-10">
          {t("noProducts") || "No products available in this category."}
        </p>
      )}
      </Container>

      {/* View All */}
      <div className="mt-10">
        <button
          onClick={() => navigate("/browse")}
          className="flex items-center justify-center mx-auto text-[var(--color-primary)] font-semibold hover:underline"
        >
          {t("viewAll") || "View All"} <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
};

export default ProductListSection;
