import { contacts } from "@/lib/mock-data";
import { PagePanel, PageShell } from "@/components/ui/page-shell";

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

export default function ContactsPage() {
  return (
    <PageShell title="Contacts" subtitle="Relationship tracker for buyers, sellers, and decision makers." badge="● Trusted network">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {contacts.map((contact) => (
          <PagePanel key={contact.id}>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[rgba(79,70,229,0.22)] text-sm font-bold text-[#c7d2fe]">
                {initials(contact.name)}
              </div>
              <div>
                <p className="text-lg font-semibold">{contact.name}</p>
                <p className="text-sm text-[var(--muted)]">{contact.title}</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <p>{contact.company}</p>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>Market: {contact.market} · Score: {contact.score}</p>
              <p>Last touch: {contact.lastTouch}</p>
            </div>
          </PagePanel>
        ))}
      </div>
    </PageShell>
  );
}
