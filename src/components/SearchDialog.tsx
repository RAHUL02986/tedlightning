"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Package, FolderOpen, FileText } from "lucide-react";

type SearchResult = {
  id: string;
  title: string;
  url: string;
  category?: string;
  location?: string;
  type: 'product' | 'project' | 'blog' | 'other';
};

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Search logic
  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    let mounted = true;
    const doSearch = async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (!res.ok) return;
        const json = await res.json();
        if (mounted) setResults(json.data || []);
        setActiveIndex(0);
      } catch (e) {
        // ignore
      }
    };
    doSearch();
    return () => { mounted = false; };
  }, [query]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % results.length);
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) =>
          prev === 0 ? results.length - 1 : prev - 1
        );
      }

      if (e.key === "Enter") {
        e.preventDefault();
        const selected = results[activeIndex];
        if (selected) {
          router.push(selected.url);
          onClose();
        }
      }

      if (e.key === "Escape") {
        onClose();
      }
    },
    [isOpen, results, activeIndex, router, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen) return null;

  // Icon by type
  const getIcon = (type: SearchResult["type"]) => {
    if (type === "product") return <Package size={16} />;
    if (type === "project") return <FolderOpen size={16} />;
    return <FileText size={16} />;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto mt-24 max-w-2xl rounded-xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-3 border-b px-4 py-3">
          <Search className="text-gray-500" />
          <input
            autoFocus
            type="text"
            placeholder="Search products, projects, blogs..."
            className="w-full border-none outline-none text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[420px] overflow-y-auto">
          {results.length === 0 && query.length > 1 && (
            <p className="px-4 py-6 text-sm text-gray-500">
              No results found
            </p>
          )}

          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => {
                router.push(result.url);
                onClose();
              }}
              className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm hover:bg-gray-100 ${
                index === activeIndex ? "bg-gray-100" : ""
              }`}
            >
              <span className="text-gray-500">{getIcon(result.type)}</span>
              <div>
                <p className="font-medium">{result.title}</p>
                <p className="text-xs text-gray-500">
                  {result.category}
                  {result.location ? ` • ${result.location}` : ""}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-2 text-xs text-gray-400">
          ↑ ↓ Navigate • Enter Select • Esc Close
        </div>
      </div>
    </div>
  );
}
