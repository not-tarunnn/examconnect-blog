export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold">ExamConnect</h2>
          <p className="text-zinc-500">
            Helping aspirants crack India's toughest exams.
          </p>
        </div>

        <div className="text-zinc-500">
          © 2026 ExamConnect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}