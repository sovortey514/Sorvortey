export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-slate-100 dark:border-slate-800/50 bg-white dark:bg-slate-950">
      <p className="text-sm text-slate-400 dark:text-slate-500 font-light">
        © {new Date().getFullYear()} Sorporn Sovortey. All rights reserved.
      </p>
    </footer>
  );
}
